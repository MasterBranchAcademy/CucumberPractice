$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Pagination.feature");
formatter.feature({
  "name": "GreenKart Pagination test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Greenkart Pagination sayfasini test etme",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Pagination"
    }
  ]
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.225 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe \nHost info: host: \u0027DESKTOP-SJA4TDB\u0027, ip: \u0027192.168.1.138\u0027\nBuild info: version: \u00274.9.1\u0027, revision: \u0027eb2032df7f\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002720.0.2.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {browserName: chrome, goog:chromeOptions: {args: [--remote-allow-origins\u003d*], extensions: []}}]}]\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:136)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:94)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:68)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:165)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:229)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:157)\r\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:101)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:88)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:84)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:52)\r\n\tat mba_cucumber.utilities.Driver.getDriver(Driver.java:32)\r\n\tat mba_cucumber.step_definitions.Hooks.setUp(Hooks.java:19)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:578)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:42)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:232)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:55)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Kullanici pagination_url sitesine gider",
  "keyword": "Given "
});
formatter.match({
  "location": "PaginationStepDefinition.kullaniciPagination_urlSitesineGider()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kullanici 2 sayfasina tiklar",
  "keyword": "When "
});
formatter.match({
  "location": "PaginationStepDefinition.kullanici_sayfasina_tiklar(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kullanici Oncesi butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationStepDefinition.kullanici_oncesi_butonuna_tiklar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kullanici Sonraki butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationStepDefinition.kullanici_sonraki_butonuna_tiklar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kullanici Birinci butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationStepDefinition.kullanici_birinci_butonuna_tiklar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kullanici Son butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationStepDefinition.kullanici_son_butonuna_tiklar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kullanici Sayfalarin saglikli bir sekilde degistigini Sayfa4 ile dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "PaginationStepDefinition.kullanici_sayfalarin_saglikli_bir_sekilde_degistigini_sayfa_ile_dogrular(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});