## Integration requirements
Get started by [signing up for a BitPay merchant account.](https://bitpay.com/dashboard/signup)

You must also have a commerce:SEO store to use this plugin.


## Connecting BitPay and Commerce:SEO

1. [Visit the GitHub page for this plugin](https://github.com/bitpay/commerce-seo-plugin) and copy the "Callback," "Includes," and "Lang" folders into your commerce:SEO site directory

<div class="note">This action should merge the BitPay plugin folders into your existing commerce:SEO folders.</div>

2. [Create an API Key](https://bitpay.com/dashboard/login/eyJ0b1N0YXRlTmFtZSI6Im1lbnUuZGFzaGJvYXJkIiwidG9QYXJhbXMiOnsicGFnZSI6ImFwaS10b2tlbnMifX0=) in your BitPay merchant dashboard and copy it to your clipboard.
3. Go to your commerce:SEO admin panel and navigate to **"Modules" > "Payment"**. Install the module **"Bitcoin via BitPay".**
4. Verify that the module is enabled. Then paste the API Key generated in your BitPay dashboard into the **"API Key"** field.

<div class="note">Pairing codes are only valid for a short period of time. If a code expires before you get to use it, you can always create a new one and pair with it. You will only need to pair once.</div>

5. Select a transaction speed.

**"High"**: A payment confirmation will be sent as soon as a transaction is received in the Bitcoin network (usually a few seconds). This speed should be used for digital or low-risk items.

**"Medium"** speed confirmations typically take 10 minutes and should be used for fulfillment processes with medium risk or items with median value.

**"Low"** speed confirmations take about 1 hour and should be used for high-value items.

<div class="note">This setting only affects the time after which BitPay considers the payment fully confirmed and irrevocable on the Bitcoin network. You and your customer will be immediately notified when a payment is sent, and a typical transaction only takes a few seconds to complete.</div>

6. Choose a status for unpaid and paid orders (or leave the default values as defined).
7. Select currency pricing that matches the currency used in your commerce:SEO store. Before using currencies other than defaults, verify that these [pricing options](https://bitpay.com/bitcoin-exchange-rates) are supported by BitPay.
8. Choose a sort order for displaying this payment option to visitors. Lowest is displayed first.
9. Line 108 in bitpay.php sets "fullNotifications" to "true". Set this to "false" if you want fewer status update emails.

Nice work! Your customers will now be able to check out with bitcoin on your commerce:SEO site.

## Using BitPay with Commerce:SEO
1. When a customer chooses the "Bitcoin via BitPay" payment method, they will be presented with an order summary (prices are shown in whatever currency they've selected for shopping).
2. Upon confirming their order, the customer will be taken to bitpay.com to pay. Once payment is received, a link is presented that will bring the customer back to your website.

In your Admin control panel, you can see the orders made via bitcoin just as you could for any other payment method. The status settings selected in the configuration steps above will indicate if the order has been paid.

<div class="note">This extension does not provide a means of automatically pulling a current BTC exchange rate for presenting BTC prices to shoppers.</div>
