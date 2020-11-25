node() {

    def repoURL = 'https://pl-acegit01.as12083.net/wopr/nivid-xray-flow.git'

    stage("Prepare Workspace") {
        echo "*** Prepare Workspace ***"
		cleanWs()
        env.WORKSPACE_LOCAL = bat(returnStdout: true, script: 'echo %cd%').trim()
        env.BUILD_TIME = "${BUILD_TIMESTAMP}"
        echo "Workspace set to:" + env.WORKSPACE_LOCAL
        echo "Build time:" + env.BUILD_TIME
    }
    stage('Checkout Self') {
		echo "*** Checking Code out ***"
        git branch: 'master', credentialsId: '', url: repoURL
    }
    stage('Cucumber Tests') {
		echo "*** Execute Test Cases ***"
        withMaven(maven: 'Maven3.6.3') {
            bat """
			cd ${env.WORKSPACE_LOCAL}
			mvn clean test
		"""
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