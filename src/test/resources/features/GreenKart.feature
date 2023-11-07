Feature: GreenKart test

  @greenkart
  Scenario Outline: Greenkart sayfasini test etme
    Given Kullanici "<greenkart_url>" sitesine gider
    Then Kullanici urun arama kutusuna gider
    When KUllanici "<aranacakUrunler>" icin Arama yapar
    Then sonuclarin "<aranacakUrunler>" icerdigini dogrular
    Examples:
      | aranacakUrunler |
      | Brocolli        |
      | Cauliflower     |
      | Cucumber        |
      | Beetroot        |
      | Carrot          |
      | Tomato          |
      | Beans           |
      | Brinjal         |
      | Capsicum        |
      | Mushroom        |
      | Potato          |
      | Pumpkin         |
      | Corn            |
      | Onion           |
      | Apple           |
      | Banana          |
      | Grapes          |
      | Mango           |
      | Musk Melon      |
      | Orange          |
      | Pears           |
      | Pomegranate     |
      | Raspberry       |
      | Strawberry      |
      | Water Melon     |
      | Almonds         |
      | Pista           |
      | Nuts Mixture    |
      | Cashews         |
      | Walnuts         |

