## Integration Requirements
Get started by [signing up for a BitPay merchant account.](https://bitpay.com/dashboard/signup)

You must also have already installed the [Woocommerce plugin](https://wordpress.org/plugins/woocommerce/) from the WordPress Plugin Directory.

**NOTE:** View the [server requirements](https://github.com/bitpay/woocommerce-plugin/blob/master/GUIDE.md#server-requirements) for this plugin.

## Installing the Plugin

1. [Download the latest version](https://github.com/bitpay/woocommerce-plugin/releases) of the BitPay plugin for Woocommerce.

2. Navigate to your WordPress Admin Panel and select Plugins > Add New > Upload Plugin.

3. Select the downloaded plugin and click "Install Now". Select "Activate" to complete installation.

**WARNING** We always recommend that you backup your database before installing plugins.

**NOTE:** Merchants who have a previous version of the WooCommerce BitPay Payment Gateway will need to remove it. This can be done by navigating to Wordpress's Adminstration Panel > Plugins. Deactivate the old plugin, then delete it.

## Connecting BitPay and Woocommerce
1. Log in to your WordPress admin panel and select "WooCommerce" > "Settings" > "Checkout" > "BitPay" to access the configuration settings for the plugin.

You can also access the configuration settings by navigating to "Plugins" and clicking the "Settings" link for this plugin.
2. [Create a pairing code](https://bitpay.com/dashboard/login/eyJ0b1N0YXRlTmFtZSI6Im1lbnUuZGFzaGJvYXJkIiwidG9QYXJhbXMiOnsicGFnZSI6ImFwaS10b2tlbnMifX0=) in your BitPay merchant dashboard.
3. Copy and paste this pairing code into the "Pairing Code" field in your WordPress plugin admin dashboard to create an API token for BitPay transactions.

**NOTE:** Pairing codes are only valid for a short period of time. If a code expires before you get to use it, you can always create a new one and pair with it.

You will only need to do this once since each time you do this, the extension will generate public and private keys that are used to identify you when using the API.

Nice work! Your customers will now be able to check out with bitcoin on your WordPress site.

## Advanced Setup

### Order Status Customizaton
You can customize how BitPay's IPNs (Instant Payment Notifications) display order statuses in your WooCommerce store.

### Optimizing Plugin Performance
It is highly recommended that you install the GMP extension for PHP to achieve maximum performance when using this plugin.
