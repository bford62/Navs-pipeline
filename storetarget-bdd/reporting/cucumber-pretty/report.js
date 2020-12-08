$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6200754426,
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
  "duration": 4550899903,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_incorrect_email()"
});
formatter.result({
  "duration": 200620355,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_does_not_enter_input_in_password_field()"
});
formatter.result({
  "duration": 26196588,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 75224929,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.there_should_be_an_error_stating_user_should_enter_password()"
});
formatter.result({
  "duration": 38821033,
  "status": "passed"
});
formatter.after({
  "duration": 177405273,
  "status": "passed"
});
formatter.before({
  "duration": 5622170183,
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
  "duration": 4463369913,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_incorrect_email()"
});
formatter.result({
  "duration": 225803154,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_signs_enter_incorrect_password()"
});
formatter.result({
  "duration": 126478890,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 283740769,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.there_should_be_an_error_and_user_should_not_be_granted_access()"
});
formatter.result({
  "duration": 39549,
  "status": "passed"
});
formatter.after({
  "duration": 173633826,
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
  "duration": 5369675191,
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
  "duration": 4344967476,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.user_enters_incorrect_email()"
});
formatter.result({
  "duration": 209361487,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.user_does_not_enter_input_in_password_field()"
});
formatter.result({
  "duration": 26576,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 85035882,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.there_should_be_an_error_stating_user_should_enter_password()"
});
formatter.result({
  "duration": 35365,
  "status": "passed"
});
formatter.after({
  "duration": 174940461,
  "status": "passed"
});
formatter.before({
  "duration": 5496520070,
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
  "duration": 4560894932,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.user_enters_incorrect_email()"
});
formatter.result({
  "duration": 190490840,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.user_signs_enter_incorrect_password()"
});
formatter.result({
  "duration": 119059853,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 270360053,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.there_should_be_an_error_and_user_should_not_be_granted_access()"
});
formatter.result({
  "duration": 68995,
  "status": "passed"
});
formatter.after({
  "duration": 168840935,
  "status": "passed"
});
});