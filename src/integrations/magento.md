

## Integration Requirements
Get started by [signing up for a BitPay merchant account.](https://bitpay.com/dashboard/signup)

View [server requirements](https://github.com/bitpay/magento-plugin/blob/master/GUIDE.md#server-requirements) for this plugin

## Installing the Plugin
Remember to back up your database before installing extensions.

1. Go to the [Magento Connect Manager](http://www.magentocommerce.com/magento-connect/bitpay-bitcoin-payment-method.html) and click the **"Install Now"** link which will give you the **Extension Key** needed for the next step
2. Once you have the key, log into your Magento Store's Admin Panel and navigate to **"System" > "Magento Connect" > "Magento Connect Manager"**

<div class="note">The Connect Manager may ask you to log in again using the same credentials that you use to log into the Admin Panel. All you need to do is paste the extension key and click on the "Install" button.</div>

<div class="warning">**Very Important** You must complete remove any previous versions of the Bitpay Magento plugin before installing this new updated version.</div>

The plugin has been completely re-written to work with BitPay's new cryptographically secure RESTful API and will conflict with any previous plugin versions which use the old API.

To help you remove the old plugin files from your system, we have created a convenient shell script for Unix/Linux/Mac OS systems which will scan your webserver for these older files and delete them. You can [download this delete script](https://github.com/bitpay/magento-plugin/blob/master/scripts/delete.sh) from GitHub.

## Connecting BitPay and magento
1. Log in to the admin section of your Magento store. Once logged in, you will find the configuration settings under System > Configuration > Sales > Payment Methods.

![magento-step-1](/images/integrations/details/magento-settings.png)

2. Create a [Pairing Code](https://bitpay.com/dashboard/login/eyJ0b1N0YXRlTmFtZSI6Im1lbnUuZGFzaGJvYXJkIiwidG9QYXJhbXMiOnsicGFnZSI6ImFwaS10b2tlbnMifX0=) in your BitPay merchant dashboard.
3. Copy and paste this pairing code into the "Pairing Code" field in your Magento admin dashboard to create an API token for BitPay transactions.

<div class="note">Unused pairing codes are only valid for twenty-four hours. If one expires before you get to use it, you can always create a new one. You will only need to pair once for each installation of the extension.</div>

## Advanced Setup

### Installing the Plugin Using Modman
You can also use the [modman](https://github.com/colinmollenhour/modman) module management software to this plugin.

1. Once you have modman installed, run `modman init` if you have not already done so.
2. Run `modman clone https://github.com/bitpay/magento-plugin.git` in the root of the Magento installation. In this case it is `/var/www/magento`

### Order Status Customization
Configure how BitPay's IPN (Instant Payment Notification) settings change the order status in your Magento store.

![magento-step-1](/images/integrations/details/magento-invoice-settings.png)

### Transaction Speed settings
Select a transactions speed for bitcoin payments made in your Magento store.

<div class="note">This setting only affects the time after which BitPay considers the payment fully confirmed and irrevocable on the Bitcoin network. Your customers will be immediately notified when their payments have been sent, and a typical transaction only takes a few seconds to complete.</div>

- "High" speed confirmations will be sent as soon as a transaction is received in the Bitcoin network (usually a few seconds). This speed should be used for digital or low-risk items.
- "Medium" speed confirmations typically take 10 minutes and should be used for fulfillment processes with medium risk or items with median value.
- "Low" speed confirmations take about 1 hour and should be used for high-value items.

<div class="note">Double-spending on the Bitcoin network is extremely unlikely, but selecting slower transaction speeds will provide the greatest protection against them.</div>
