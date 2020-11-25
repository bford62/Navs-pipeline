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
			    mvn clean test
            """
            }
            if (os.contains("windows")) {
                bat """
			    cd ${env.WORKSPACE_LOCAL}
			    mvn clean test
		    """
            }
        }
    }
    stage('Expose report') {
		echo "*** Expose Reports ***"
        archiveArtifacts "**/cucumber.json"
        cucumber '**/cucumber.json'
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
		def xrayConnectorId = 'be74d016-d576-454a-95cf-92247a06a19e'
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

			step([$class: 'XrayImportBuilder', endpointName: '/cucumber/multipart', importFilePath: 'storetarget-bdd/reporting/cucumber.json', importInfo: info, inputInfoSwitcher: 'fileContent', serverInstance: xrayConnectorId])
		}
}