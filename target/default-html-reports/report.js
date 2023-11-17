$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/GreenKart.feature");
formatter.feature({
  "name": "Belirli bir ürünü sepete ekleyip sepeti kontrol etme.",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Greenkart sayfasini test etme",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@greenkart"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici \"greenkart_url\" sitesine gider",
  "keyword": "Given "
});
formatter.match({
  "location": "GreenKartAnaSayfa.kullanici_sitesine_gider(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanıcı \"cucumber\" adlı bir ürünü arar",
  "keyword": "When "
});
formatter.match({
  "location": "GreenKartAnaSayfa.kullanıcı_adlı_bir_ürünü_arar(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: result.webdriverValue.value list is missing or empty in Runtime.callFunctionOn response\n  (Session info: chrome\u003d119.0.6045.105)\nBuild info: version: \u00274.9.1\u0027, revision: \u0027eb2032df7f\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002720.0.2.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b863ddac0a7c5b334fb92cb0d85bd161, findElement {using\u003dxpath, value\u003d//input[@type\u003d\u0027search\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 119.0.6045.105, chrome: {chromedriverVersion: 118.0.5993.70 (e52f33f30b91..., userDataDir: C:\\Users\\AATM03\\AppData\\Loc...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:54589}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:54589/devtoo..., se:cdpVersion: 119.0.6045.105, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b863ddac0a7c5b334fb92cb0d85bd161\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy22.sendKeys(Unknown Source)\r\n\tat mba_cucumber.pages.GreenKartPage.setSearchBox(GreenKartPage.java:49)\r\n\tat mba_cucumber.step_definitions.GreenKartAnaSayfa.kullanıcı_adlı_bir_ürünü_arar(GreenKartAnaSayfa.java:23)\r\n\tat ✽.Kullanıcı \"cucumber\" adlı bir ürünü arar(file:src/test/resources/features/GreenKart.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Kullanıcı \"cucumber\" ürününü sepete ekler",
  "keyword": "And "
});
formatter.match({
  "location": "GreenKartAnaSayfa.kullanıcı_ürününü_sepete_ekler(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kullanıcı sepete gitmek için sepet simgesine tıklar",
  "keyword": "And "
});
formatter.match({
  "location": "GreenKartAnaSayfa.kullanıcı_sepete_gitmek_için_sepet_simgesine_tıklar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "kullanıcı \"procced to checkout\" dugmesine tiklar.",
  "keyword": "And "
});
formatter.match({
  "location": "GreenKartAnaSayfa.kullanıcı_dugmesine_tiklar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kullanıcı sepetteki ürünün doğru olduğunu doğrular",
  "keyword": "Then "
});
formatter.match({
  "location": "GreenKartAnaSayfa.kullanıcı_sepetteki_ürünün_doğru_olduğunu_doğrular()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "kullanıcı \" place order\" simgesine tiklar",
  "keyword": "When "
});
formatter.match({
  "location": "GreenKartAnaSayfa.kullanıcı_simgesine_tiklar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "kullanıcı \"select country\" üzerine tıklar",
  "keyword": "When "
});
formatter.match({
  "location": "GreenKartAnaSayfa.kullanıcı_üzerine_tıklar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "kullanıcı bir ülkeyi seçer",
  "keyword": "When "
});
formatter.match({
  "location": "GreenKartAnaSayfa.kullanıcı_bir_ülkeyi_seçer()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "kullanıcı  \"Agree to the Terms \u0026 Conditions\" işaretler.",
  "keyword": "When "
});
formatter.match({
  "location": "GreenKartAnaSayfa.kullanıcı_işaretler(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "kullanıcı \" procced button\" duğmesine tiklar",
  "keyword": "When "
});
formatter.match({
  "location": "GreenKartAnaSayfa.kullanıcı_duğmesine_tiklar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "kullanıcı alışverişi başarıyla tamamladığını doğrular.",
  "keyword": "Then "
});
formatter.match({
  "location": "GreenKartAnaSayfa.kullanıcı_alışverişi_başarıyla_tamamladığını_doğrular()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});