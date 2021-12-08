$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "duration": 3845538158,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Log in with invalid credentials",
  "description": "",
  "id": "login-feature;log-in-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User need to enter MAC Address to CableMedic",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicked upgrade, it shows in progress",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User has upgraded modem",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_need_to_enter_MAC_Address_to_CableMedic()"
});
formatter.result({
  "duration": 17687231856,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.User_clicked_upgade_it_shows_in_progress()"
});
formatter.result({
  "duration": 56506,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.User_has_upgraded_modem()"
});
formatter.result({
  "duration": 1843629,
  "status": "passed"
});
formatter.after({
  "duration": 100288997,
  "status": "passed"
});
});