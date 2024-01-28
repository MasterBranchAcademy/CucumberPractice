Feature: Order Completion

  Background: Order Completion

    Given Kullanici greenkart_url sitesine gider

  @orderCompletion

    Scenario: Kullanici urunleri sectiginde Add To Cart butonunun Added olarak 5 saniye gorundugunu dogrular
    Then Kullanici urunlerin eklendigini bes saniye ana sayfada dogrular



  @orderCompletion

  Scenario: Bir kullanici gibi siparis verebilme
    When products add to chart butonuna tiklar
    And sepete tiklar
    And checkout butonuna tiklar
    And Secilen tum urunlerin sepette oldugunu dogrular
    And Place Order butonuna tiklar
    When Kullanici Select butonuna tiklar
    And Kullanici bir ulke secer
    And Kullanici checkbox butonuna tiklar
    And Kullanici Proceed butonuna tiklar
    Then Kullanici siparisi basariyla tamamladigini dogrular


  @orderCompletion

  Scenario: Kullanici checkBox butonuna tiklamadan siparisi tamamlayamamali
    When products add to chart butonuna tiklar
    And sepete tiklar
    And checkout butonuna tiklar
    And Secilen tum urunlerin sepette oldugunu dogrular
    And Place Order butonuna tiklar
    When Kullanici Select butonuna tiklar
    And Kullanici bir ulke secer
    And Kullanici Proceed butonuna tiklar
    Then Kullanici siparisi basariyla tamamlayamadigini dogrular

  @orderCompletion

  Scenario: Kullanici bir ulke secmeden ve checkBox butonuna tiklamadan siparisini tamamlayamamali
    When products add to chart butonuna tiklar
    And sepete tiklar
    And checkout butonuna tiklar
    And Secilen tum urunlerin sepette oldugunu dogrular
    And Place Order butonuna tiklar
    When Kullanici Select butonuna tiklar
    And Kullanici Proceed butonuna tiklar
    Then Kullanici siparisi basariyla tamamlayamadigini dogrular
