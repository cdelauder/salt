var HttpsCreditCardService = (function() {

  var service = {
    set : function(merchantId, apiToken, url) {
      this.attribute = {}
      this.attribute.merchantId = merchantId
      this.attribute.apiToken = apiToken
      this.attribute.url = url
    },
    get: function() {
      return this.attribute
    }

  }


  return {
    new : function(merchantId, apiToken, url) {
      service.set(merchantId, apiToken, url)
      return service.get()
    }
  }
} ())

var CreditCard = (function() {

  var card = {
    set: function(cardNumber, expiryDate, cvv2, street, zip) {
      this.attribute = {}
      this.attribute.cardNumber = cardNumber
      this.attribute.expiryDate = expiryDate
      this.attribute.cvv2 = cvv2
      this.attribute.street = street
      this.attribute.zip = zip
      this.attribute.secureCode = null
    },
    get: function() {
      return this.attribute
    }
  }

  return {
    new : function(cardNumber, expiryDate, cvv2, street, zip) {
      card.set(cardNumber, expiryDate, cvv2, street, zip)
      return card.get()
    }
  }

}())

var merchantId = 1111111
var apiToken = '1e1e1e1e1e1e1e1e1e1ee'
var url = "https://test.salt.com/gateway/creditcard/processor.do"
var service = HttpsCreditCardService.new(merchantId, apiToken, url)
var card = CreditCard.new("4242424242424242", "1010", "111", "123 Street", "A1B2C3")
console.log(service)
console.log(card)
