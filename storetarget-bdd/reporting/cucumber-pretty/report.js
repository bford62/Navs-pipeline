$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 16694502700,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "attempt to login with no password",
  "description": "",
  "id": "login-feature;attempt-to-login-with-no-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@FunctionalTest"
    },
    {
      "line": 2,
      "name": "@XT-139"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters incorrect email",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user does not enter input in password field",
  "keyword": "But "
});
formatter.step({
  "line": 7,
  "name": "user clicks on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "there should be an error stating user should enter password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 4106437700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_incorrect_email()"
});
formatter.result({
  "duration": 770444300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_does_not_enter_input_in_password_field()"
});
formatter.result({
  "duration": 115688300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 291721600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.there_should_be_an_error_stating_user_should_enter_password()"
});
formatter.result({
  "duration": 75578500,
  "status": "passed"
});
formatter.after({
  "duration": 2028917700,
  "status": "passed"
});
formatter.before({
  "duration": 13939266100,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "login with invalid credentials",
  "description": "",
  "id": "login-feature;login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@SmokeTest"
    },
    {
      "line": 10,
      "name": "@XT-139"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enters incorrect email",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user signs enter incorrect password",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "There should be an error, and user should not be granted access",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 3566093900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_incorrect_email()"
});
formatter.result({
  "duration": 549884400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_signs_enter_incorrect_password()"
});
formatter.result({
  "duration": 342232600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 714401200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.there_should_be_an_error_and_user_should_not_be_granted_access()"
});
formatter.result({
  "duration": 60053759100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[text()\u003d\"That password is incorrect\"]\"}\n  (Session info: chrome\u003d87.0.4280.66)\n  (Driver info: chromedriver\u003d86.0.4240.22 (398b0743353ff36fb1b82468f63a3a93b4e2e89e-refs/branch-heads/4240@{#378}),platform\u003dWindows NT 10.0.18363 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 60.05 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027ILWA-9JR52R2-LP\u0027, ip: \u002710.44.42.112\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:62145}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d86.0.4240.22 (398b0743353ff36fb1b82468f63a3a93b4e2e89e-refs/branch-heads/4240@{#378}), userDataDir\u003dC:\\Users\\bford\\AppData\\Local\\Temp\\scoped_dir23712_1394665734}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d87.0.4280.66, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 78c50d4b4b5e3041f98f4976e8a6842c\n*** Element info: {Using\u003dxpath, value\u003d//div[text()\u003d\"That password is incorrect\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\r\n\tat objects.TargetSignin.incorrectPassErr(TargetSignin.java:48)\r\n\tat stepDefinitions.LoginSteps.there_should_be_an_error_and_user_should_not_be_granted_access(LoginSteps.java:59)\r\n\tat ✽.And There should be an error, and user should not be granted access(login.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2040384400,
  "status": "passed"
});
});