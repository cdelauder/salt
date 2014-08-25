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

var VerificationRequest = (function() {
  var vr = {
    set: function(avsRequest, cvv2Request) {
      this.attribute = {}
      this.attribute.avsRequest = avsRequest
      this.attribute.cvv2Request = cvv2Request
    },
    get: function() {
      return vr.attribute
    }
  }

  return {
    new : function(avsRequest, cvv2Request) {
      vr.set(avsRequest, cvv2Request)
      return vr.get()
    }

  }
}())

$AVS_VERIFY_STREET_AND_ZIP = 0
$AVS_VERIFY_ZIP_ONLY = 1

$CVV2_NOT_SUBMITTED = 0
$CVV2_PRESENT = 1
$CVV2_PRESENT_BUT_ILLEGIBLE = 2
$CVV2_HAS_NO_CVV2 = 9
var merchantId = 1111111
var apiToken = '1e1e1e1e1e1e1e1e1e1ee'
var url = "https://test.salt.com/gateway/creditcard/processor.do"
var service = HttpsCreditCardService.new(merchantId, apiToken, url)
var card = CreditCard.new("4242424242424242", "1010", "111", "123 Street", "A1B2C3")
var vr = VerificationRequest.new($AVS_VERIFY_STREET_AND_ZIP, $CVV2_PRESENT)
console.log(service)
console.log(card)
console.log(vr)