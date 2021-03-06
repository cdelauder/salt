require_relative '../lib/HttpsCreditCardService.rb'
require_relative '../env.rb'

url = "https://test.salt.com/gateway/creditcard/processor.do"
merchantId = MERCHANT_ID
apiToken = API_KEY
service = HttpsCreditCardService.new(merchantId, apiToken, url)

creditCard = CreditCard.new("4242424242424242", "1010", "111", "123 Street", "A1B2C3")
vr = VerificationRequest.new($AVS_VERIFY_STREET_AND_ZIP, $CVV2_PRESENT)

# receipt = service.singlePurchase("order-125", creditCard, "268", vr)
receipt = service.voidTransaction(50005803, 'order-124')

if receipt != nil then
  if receipt.isApproved()
  puts receipt.isApproved()
  puts receipt.getProcessedDateTime()
  puts receipt.getApprovalInfo().getAuthorizedAmount()
  puts receipt.getApprovalInfo().getApprovalCode()
  puts receipt.getApprovalInfo().getTraceNumber()
  puts receipt.getOrderId()
  puts receipt.getPeriodicPurchaseInfo()
  else
  puts receipt.isApproved()
  puts receipt.getProcessedDateTime()
  puts receipt.getErrorCode()
  puts receipt.getErrorMessage()
  puts receipt.getDebugMessage()
  end
else
  puts service.errorMsg
  puts service.errorCode
end