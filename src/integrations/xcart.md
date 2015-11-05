## Integration Requirements
Get started by [signing up for a BitPay merchant account.](https://bitpay.com/dashboard/signup)

You must also have already installed the [X-Cart Gold ecommerce store software.](http://www.x-cart.com/)

## Installing the Plugin

1. [Download the latest release of the plugin.](https://github.com/bitpay/xcartgold-plugin/releases)
2. Copy these files into your xcart/ directory (e.g. ~/www/xcart/ or ~/www/). They will not overwrite any existing files.
3. Run `modules/Bitpay/install.sql` on your X-Cart database `(use mysql -u [user] -p [xcartdb] < install.sql]` or copy the contents into a tool like phpMyAdmin).

## Connecting BitPay and X-Cart Gold

1. Log in to your X-Cart Gold admin page and select **"Settings" > "Payment Methods" > "Payment Gateways".**

2. Change your **"Country"** setting to **"All Countries".**

3. Select **"BitPay" > "Add".**

4. Click the **"Payment Methods"** tab, check the box next to "BitPay", and select **"Apply Changes".**

5. [Create an API Key](https://bitpay.com/dashboard/login/eyJ0b1N0YXRlTmFtZSI6Im1lbnUuZGFzaGJvYXJkIiwidG9QYXJhbXMiOnsicGFnZSI6ImFwaS10b2tlbnMifX0=) in your BitPay merchant dashboard.

6. Select **"Configure"** in your admin dashboard.

7. Copy and paste the API Key into the required field to pair your accounts.

8. Select a preferred transaction speed setting.

<div class="note">This setting only affects the time after which BitPay considers the payment fully confirmed and irrevocable on the Bitcoin network. You and your customer will be immediately notified when a payment is sent, and a typical transaction only takes a few seconds to complete.</div>

- "High" speed confirmations will be sent as soon as a transaction is received in the Bitcoin network (usually a few seconds). This speed should be used for digital or low-risk items.

- "Medium" speed confirmations typically take 10 minutes and should be used for fulfillment processes with medium risk or items with median value.

- "Low" speed confirmations take about 1 hour and should be used for high-value items.

<div class="note">Double-spending on the Bitcoin network is extremely unlikely, but selecting slower transaction speeds will provide the greatest protection against them.</div>

9. Select currency pricing that matches the currency used in your X-Cart store. Before using currencies other than defaults, verify that these pricing options are supported by BitPay.

Nice work! Your customers will now be able to check out with bitcoin on your X-Cart site.
