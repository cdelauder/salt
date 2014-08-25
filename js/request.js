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

var merchantId = 1111111
var apiToken = '1e1e1e1e1e1e1e1e1e1ee'
var url = "https://test.salt.com/gateway/creditcard/processor.do"
var service = HttpsCreditCardService.new(merchantId, apiToken, url)
console.log(service)