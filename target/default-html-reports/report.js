$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/GreenKart.feature");
formatter.feature({
  "name": "GreenKart test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Greenkart sayfasini test etme",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@greenkart"
    }
  ]
});
formatter.step({
  "name": "Kullanici \"\u003cgreenkart_url\u003e\" sitesine gider",
  "keyword": "Given "
});
formatter.step({
  "name": "Kullanici urun arama kutusuna gider",
  "keyword": "Then "
});
formatter.step({
  "name": "KUllanici \"\u003caranacakUrunler\u003e\" icin Arama yapar",
  "keyword": "When "
});
formatter.step({
  "name": "sonuclarin \"\u003caranacakUrunler\u003e\" icerdigini dogrular",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "aranacakUrunler"
      ]
    },
    {
      "cells": [
        "Brocolli"
      ]
    },
    {
      "cells": [
        "Cauliflower"
      ]
    },
    {
      "cells": [
        "Cucumber"
      ]
    },
    {
      "cells": [
        "Beetroot"
      ]
    },
    {
      "cells": [
        "Carrot"
      ]
    },
    {
      "cells": [
        "Tomato"
      ]
    },
    {
      "cells": [
        "Beans"
      ]
    },
    {
      "cells": [
        "Brinjal"
      ]
    },
    {
      "cells": [
        "Capsicum"
      ]
    },
    {
      "cells": [
        "Mushroom"
      ]
    },
    {
      "cells": [
        "Potato"
      ]
    },
    {
      "cells": [
        "Pumpkin"
      ]
    },
    {
      "cells": [
        "Corn"
      ]
    },
    {
      "cells": [
        "Onion"
      ]
    },
    {
      "cells": [
        "Apple"
      ]
    },
    {
      "cells": [
        "Banana"
      ]
    },
    {
      "cells": [
        "Grapes"
      ]
    },
    {
      "cells": [
        "Mango"
      ]
    },
    {
      "cells": [
        "Musk Melon"
      ]
    },
    {
      "cells": [
        "Orange"
      ]
    },
    {
      "cells": [
        "Pears"
      ]
    },
    {
      "cells": [
        "Pomegranate"
      ]
    },
    {
      "cells": [
        "Raspberry"
      ]
    },
    {
      "cells": [
        "Strawberry"
      ]
    },
    {
      "cells": [
        "Water Melon"
      ]
    },
    {
      "cells": [
        "Almonds"
      ]
    },
    {
      "cells": [
        "Pista"
      ]
    },
    {
      "cells": [
        "Nuts Mixture"
      ]
    },
    {
      "cells": [
        "Cashews"
      ]
    },
    {
      "cells": [
        "Walnuts"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Greenkart sayfasini test etme",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "Kullanici \"\u003cgreenkart_url\u003e\" sitesine gider",
  "keyword": "Given "
});
formatter.match({
  "location": "GreenKartAnaSayfa.kullanici_sitesine_gider(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici urun arama kutusuna gider",
  "keyword": "Then "
});
formatter.match({
  "location": "GreenKartAnaSayfa.kullanici_urun_arama_kutusuna_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "KUllanici \"Brocolli\" icin Arama yapar",
  "keyword": "When "
});
formatter.match({
  "location": "GreenKartAnaSayfa.kullanici_icin_Arama_yapar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sonuclarin \"Brocolli\" icerdigini dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "GreenKartAnaSayfa.sonuclarin_icerdigini_dogrula(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Greenkart sayfasini test etme",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "Kullanici \"\u003cgreenkart_url\u003e\" sitesine gider",
  "keyword": "Given "
});
formatter.match({
  "location": "GreenKartAnaSayfa.kullanici_sitesine_gider(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici urun arama kutusuna gider",
  "keyword": "Then "
});
formatter.match({
  "location": "GreenKartAnaSayfa.kullanici_urun_arama_kutusuna_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "KUllanici \"Cauliflower\" icin Arama yapar",
  "keyword": "When "
});
formatter.match({
  "location": "GreenKartAnaSayfa.kullanici_icin_Arama_yapar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sonuclarin \"Cauliflower\" icerdigini dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "GreenKartAnaSayfa.sonuclarin_icerdigini_dogrula(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Greenkart sayfasini test etme",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@greenkart"
    }
  ]
});
