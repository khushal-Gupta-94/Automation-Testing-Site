$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/Features/Test.feature");
formatter.feature({
  "name": "Automation testing webpage validations",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify that Automation Testing web application menu item is working fine.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.step({
  "name": "Open \"Chrome\" Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.AutomationTesting.open_Browser(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Launch \"http://demo.automationtesting.in/Register.html\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.AutomationTesting.enter_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the page title as \"Register\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.AutomationTesting.verifypageTitle(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on \"Alerts\" under \"SwitchTo\" menu.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.AutomationTesting.fetchdata(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify all sub menu pages are opening or not.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.AutomationTesting.verifysubmenupages()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.AutomationTesting.closeBrowsr()"
});
formatter.result({
  "status": "passed"
});
});