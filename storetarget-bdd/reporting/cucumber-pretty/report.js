$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8459186182,
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
  "duration": 1939132514,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_incorrect_email()"
});
formatter.result({
  "duration": 322129905,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_does_not_enter_input_in_password_field()"
});
formatter.result({
  "duration": 32209313,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 89304739,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.there_should_be_an_error_stating_user_should_enter_password()"
});
formatter.result({
  "duration": 33161354,
  "status": "passed"
});
formatter.after({
  "duration": 182599401,
  "status": "passed"
});
formatter.before({
  "duration": 5696733555,
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
      "name": "@XT-132"
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
  "duration": 1770769119,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_incorrect_email()"
});
formatter.result({
  "duration": 320475301,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_signs_enter_incorrect_password()"
});
formatter.result({
  "duration": 128000588,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 351925553,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.there_should_be_an_error_and_user_should_not_be_granted_access()"
});
formatter.result({
  "duration": 57282,
  "status": "passed"
});
formatter.after({
  "duration": 174816090,
  "status": "passed"
});
formatter.uri("notlogin.feature");
formatter.feature({
  "line": 1,
  "name": "login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5662892610,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "attempt to login with no password",
  "description": "",
  "id": "login-feature;attempt-to-login-with-no-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@FunctionalTest"
    },
    {
      "line": 3,
      "name": "@XT-170"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "users is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "users enters incorrect email",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "users does not enter input in password field",
  "keyword": "But "
});
formatter.step({
  "line": 8,
  "name": "users clicks on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "theres should be an error stating user should enter password",
  "keyword": "And "
});
formatter.match({
  "location": "NotLoginSteps.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 1737406232,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.user_enters_incorrect_email()"
});
formatter.result({
  "duration": 314926340,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.user_does_not_enter_input_in_password_field()"
});
formatter.result({
  "duration": 38336,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 85543407,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.there_should_be_an_error_stating_user_should_enter_password()"
});
formatter.result({
  "duration": 80824,
  "status": "passed"
});
formatter.after({
  "duration": 168737433,
  "status": "passed"
});
formatter.before({
  "duration": 5209846314,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "login with invalid credentials",
  "description": "",
  "id": "login-feature;login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@SmokeTest"
    },
    {
      "line": 11,
      "name": "@XT-171"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "users is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "users enters incorrect email",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "users signs enter incorrect password",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "users clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Theres should be an error, and user should not be granted access",
  "keyword": "And "
});
formatter.match({
  "location": "NotLoginSteps.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 1662360058,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.user_enters_incorrect_email()"
});
formatter.result({
  "duration": 301692176,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.user_signs_enter_incorrect_password()"
});
formatter.result({
  "duration": 130503090,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 381047510,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.there_should_be_an_error_and_user_should_not_be_granted_access()"
});
formatter.result({
  "duration": 28237,
  "status": "passed"
});
formatter.after({
  "duration": 173749765,
  "status": "passed"
});
});