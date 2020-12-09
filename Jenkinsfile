node() {

    def repoURL = 'https://github.com/bford62/Navs-pipeline.git'

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
    }
	stage('Import results to Xray') {
		echo "*** Import Results to XRAY ***"

		def description = "[TEST_BUILD_URL|${env.BUILD_URL}]"
		def labels = '["regression","automated_regression"]'
		def environment = "DEV"
		def testExecutionFieldId = 10552
		def testEnvironmentFieldName = "customfield_10372"
		def projectKey = "Xray-Test"
		def projectId = 10606
		def xrayConnectorId = "${xrayConnectorId}"
        def info = '''{
                "fields": {
                    "projectKey":''' + projectKey + ''',
                    "labels":''' + labels + ''',
                    "description":"''' + description + '''",
                    "summary": "Sample Jenkins STC - Automated Regression Execution @ ''' + env.BUILD_TIME + ' ' + environment + ''' " ,
                    "issuetype": {
                        "id": "''' + testExecutionFieldId + '''"
                    }
                }
                }'''
            echo "*** THIS IS THE XRAY INFO ***"
            echo "${info}"
            echo "*** XrayImportBuilder ***"
            step([$class: 'XrayImportBuilder', 
            projectKey: projectKey,  
			importInfo: info, 
            endpointName: '/junit', importFilePath: 'reports/*.xml',
            summary: "Sample Jenkins STC - Automated Regression Execution @ ''' + env.BUILD_TIME + ' ' + environment + ''' ", 
            inputInfoSwitcher: 'fileContent', 
            serverInstance: xrayConnectorId])
        }
}