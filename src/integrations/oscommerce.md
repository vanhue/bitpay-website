## Accept bitcoin on your website with BitPay's open source plugin for osCommerce.
Get started by [signing up for a BitPay merchant account.](https://bitpay.com/dashboard/signup)

You must also have already installed [the OSCommerce store software.](http://www.oscommerce.com/)

## Installing the Plugin
1. [Download the latest release](https://github.com/bitpay/oscommerce-plugin/releases) of the plugin and extract the contents of the zip file.
2. Copy `bitpay_callback.php` into your osCommerce catalog directory.
3. Copy the `bitpay` directory into your osCommerce catalog directory.
4. Copy `includes/modules/payment/bitpay.php` into `catalog/includes/modules/payment/`` to complete installation.``

## Connecting BitPay and osCommerce
1. Navigate to your osCommerce admin page and select **"Modules" > "BitPay" > "Configure".**
2. Verify that the **"Bitcoin via BitPay"** module has been enabled.
3. [Create an API Key](https://bitpay.com/dashboard/login/eyJ0b1N0YXRlTmFtZSI6Im1lbnUuZGFzaGJvYXJkIiwidG9QYXJhbXMiOnsicGFnZSI6ImFwaS10b2tlbnMifX0=) in your BitPay merchant dashboard.
4. Copy and paste this key into the **"API Key"** field on your osCommerce admin configuration page to finish connecting your accounts.

Nice work! Your customers will now be able to check out with bitcoin on your osCommerce-enabled site.

<div class="note">This extension does not provide a means of automatically pulling a current BTC exchange rate for presenting BTC prices to shoppers.</div>

## Advanced Setup

1. Select a tranasaction speed for bitcoin payments made in your osCommerce store.

<div class="note">This setting only affects the time after which BitPay considers the payment fully confirmed and irrevocable on the Bitcoin network. Your customers will be immediately notified when their payments have been sent, and a typical transaction only takes a few seconds to complete.</div>

**"High"** speed confirmations will be sent as soon as a transaction is received in the Bitcoin network (usually a few seconds). This speed should be used for digital or low-risk items.

**"Medium"** speed confirmations typically take 10 minutes and should be used for fulfillment processes with medium risk or items with median value.

**"Low"** speed confirmations take about 1 hour and should be used for high-value items.

<div class="note">Double-spending on the Bitcoin network is extremely unlikely, but selecting slower transaction speeds will provide the greatest protection against them.</div>

2. Modify the following bitcoin payment settings as needed:

- Choose a status for unpaid and paid orders (or leave the default values as defined).

- Select a sort order for the payment methods viewable by your customers. Lowest appears first.

- Select currency pricing. Before using currencies other than defaults, verify that these pricing options are supported by BitPay.
