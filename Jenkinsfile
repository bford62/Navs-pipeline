node() {

    def repoURL = 'https://github.com/bford62/Navs-pipeline.git'
    try {
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

            def escription = "[Report Output|${env.BUILD_URL}/cucumber-html-reports/overview-features.html]"
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
        stage('Slack Notification'){
            slackSend baseUrl: 'https://hooks.slack.com/services/', 
    		channel: '#wopr-private', 
    		color: 'good', 
    		message: "Build: ${env.JOB_NAME} Completed Successfully ${env.BUILD_URL} Report: ${env.BUILD_URL}/cucumber-html-reports/overview-features.html",
    		teamDomain: 'https://wow-technology.slack.com', 
    		tokenCredentialId: 'Slack-Token', 
    		username: 'JenkinsAutomation'
        }                                
    }                                    
    catch(e) {                           
        slackSend baseUrl: 'https://hooks.slack.com/services/', 
    	channel: '#wopr-private', 
    	color: 'danger', 
    	message: "Build: ${env.JOB_NAME} had a Failure. Check console ${env.BUILD_URL}/console",
    	teamDomain: 'https://wow-technology.slack.com', 
    	tokenCredentialId: 'Slack-Token', 
    	username: 'JenkinsAutomation'
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