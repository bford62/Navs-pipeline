node() {
    
    def repoURL = 'https://github.com/bford62/Navs-pipeline.git'
    try {
        notifyBuild('STARTED')
        stage("Prepare Workspace") {
            echo "*** Prepare Workspace ***"
            cleanWs()
            def os = System.properties['os.name'].toLowerCase()
            if (os.contains("mac")) { 
                env.WORKSPACE_LOCAL = sh(returnStdout: true, script: 'pwd').trim()
            }
            if (os.contains("windows")) {
                env.WORKSPACE_LOCAL = bat(returnStdout: true, script: 'echo %cd%').trim()
            }
            if (os.contains("linux")) {
                env.WORKSPACE_LOCAL = sh(returnStdout: true, script: 'pwd').trim()
            }
            env.BUILD_TIME = "${BUILD_TIMESTAMP}"
            echo "Workspace set to:" + env.WORKSPACE_LOCAL
            echo "Build time:" + env.BUILD_TIME
        }
        stage('Checkout Self') {
            echo "*** Checking Code Out ***"
            git branch: 'master', credentialsId: '', url: repoURL
        }
        stage('Cucumber Tests') {
            echo "*** Execute Test Cases ***"
            withMaven(maven: 'Maven3.6.3') {
                def os = System.properties['os.name'].toLowerCase()
                if (os.contains("mac")) {                  
                sh """
                    cd ${env.WORKSPACE_LOCAL}
                    chmod -R 777 storetarget-bdd/driver
                    mvn clean test
                """
                }
                if (os.contains("windows")) {
                    bat """
                    cd ${env.WORKSPACE_LOCAL}
                    mvn clean test
                """
                }
                if (os.contains("linux")) {                  
                sh """
                    cd ${env.WORKSPACE_LOCAL}
                    chmod -R 777 storetarget-bdd/driver
                    mvn clean test
                """
                }
            }
        }
        stage('Expose report') {
            echo "*** Expose Reports ***"
            echo "*** Archive Artifacts ***"
            archiveArtifacts "**/cucumber.json"
            echo "*** cucumber cucumber.json ***"
            cucumber '**/cucumber.json'
            junit skipPublishingChecks: true, allowEmptyResults: true, keepLongStdio: true, testResults: 'storetarget-bdd/reporting/junit_xml/*.xml'
            cucumber buildStatus: "UNSTABLE",
            fileIncludePattern: "**/cucumber.json",
            jsonReportDirectory: 'storetarget-bdd/reporting'
        }
    
        stage('Import results to Xray') {
            echo "*** Import Results to XRAY ***"

            def description = "[Report Output|${env.BUILD_URL}/cucumber-html-reports/overview-features.html]"
            def labels = '["regression","automated_regression"]'
            def environment = "DEV"
            def testExecutionFieldId = 10552
            def testEnvironmentFieldName = "customfield_10372"
            def projectKey = "Xray-Test"
            def projectId = 10606
            def xrayConnectorId = "${xrayConnectorId}"
            def info = '''{
                "fields": {
                    "project": {
                        "id": "''' + projectId + '''"
                    },
                    "labels":''' + labels + ''',
                    "description":"''' + description + '''",
                    "summary": "Testing Jenkins - Automated Regression Execution @ ''' + env.BUILD_TIME + ' ' + environment + ''' " ,
                    "issuetype": {
                    "id": "''' + testExecutionFieldId + '''"
                    }
                }
            }'''

            echo info

            step([$class: 'XrayImportBuilder', 
            endpointName: '/cucumber/multipart', 
            importFilePath: 'storetarget-bdd/reporting/cucumber.json', 
            importInfo: info, 
            inputInfoSwitcher: 'fileContent', 
            serverInstance: xrayConnectorId])
        }
    }                                    
    catch(e) {                           
        // If there was an exception thrown, the build failed
        currentBuild.result = "FAILED"
        throw e
    } finally {
        // Success or failure, always send notifications
        echo "I AM HERE"
        notifyBuild(currentBuild.result)
    }

//         stage('Email AfterTest') {    
//               to: 'knavid973@gmail.com',
//               from: 'knavid973@gmail.com',
//               replyTo: 'knavid973@gmail.com',
//               subject: "${status}: Job ${env.JOB_NAME} ([${env.BUILD_NUMBER})",
//               body: """               
//               Check console output at <a href="${env.BUILD_URL}">${env.JOB_NAME} (${env.BUILD_NUMBER})</a>""",
//               attachLog: true,        
//               mimeType: 'text/html',  
//         }                             
//        stage ('Email End Results') {  
//        emailext (                     
//            subject: "Job '${env.JOB_NAME} ${env.BUILD_NUMBER}'",
//            body: """<p>Check console output at <a href="${env.BUILD_URL}">${env.JOB_NAME}</a></p>""",
//            to: "knavid973@gmail.com", 
//            from: "knavid973@gmail.com" )
//        }                              
}
def notifyBuild(String buildStatus = 'STARTED') {
    // build status of null means successful
    buildStatus =  buildStatus ?: 'SUCCESSFUL'

    // Default values
    def colorName = 'RED'
    def colorCode = '#FF0000'
    def subject = "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"
    def summary = "${subject} (${env.BUILD_URL})"
    def details = """<p>STARTED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
      <p>Check console output at &QUOT;<a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]</a>&QUOT;</p>"""

      // Override default values based on build status
      if (buildStatus == 'STARTED') {
        color = 'BLUE'
        colorCode = '#0000FF'
        msg = "Build: ${env.JOB_NAME} has started: ${BUILD_TIMESTAMP}"
      } else if (buildStatus == 'UNSTABLE') {
        color = 'YELLOW'
        colorCode = '#FFFF00'
        msg = "Build: ${env.JOB_NAME} was listed as unstable. Look at ${env.BUILD_URL} and Report: ${env.BUILD_URL}/cucumber-html-reports/overview-features.html"
      } else if (buildStatus == 'SUCCESSFUL') {
        color = 'GREEN'
        colorCode = '#00FF00'
        msg = "Build: ${env.JOB_NAME} Completed Successfully ${env.BUILD_URL} Report: ${env.BUILD_URL}/cucumber-html-reports/overview-features.html"
      } else {
        color = 'RED'
        colorCode = '#FF0000'
        msg = "Build: ${env.JOB_NAME} had an issue ${env.BUILD_URL}/console"
      }

    // Send notifications
    slackSend (color: colorCode, message: summary)
    slackSend baseUrl: 'https://hooks.slack.com/services/', 
    channel: '#wopr-private', 
    color: colorCode, 
    message: msg,
    teamDomain: 'https://wow-technology.slack.com', 
    tokenCredentialId: 'Slack-Token', 
    username: 'JenkinsAutomation'
}