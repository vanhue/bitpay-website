## Integration Requirements
Get started by signing up for a BitPay merchant account

You must also have already installed the Prestashop e-commerce store software.

## Installing the Plugin
1. Download the latest release of the plugin.
2. Login to your PrestaShop admin page and select "Modules" > "Modules" > "Add A New Module".
3. Upload the zip file containing the latest release of the BitPay plugin.
4. When the upload is complete, "BitPay" will be listed as a PrestaShop module on this page. Select the "Install" option to finish.

## Connecting BitPay and PrestaShop
1. Navigate to your PrestaShop admin page. Select "Modules" > "BitPay" > "Configure".

**NOTE:** In PrestaShop versions 1.5 and lower, navigate from "Modules" > "Payment Gateways" > "BitPay".

2. Create an API Key in your BitPay merchant dashboard.

3. Copy and paste the API Key into the required field to pair your accounts.

4. Select "Low" or "Medium" transaction speed settings.

**NOTE:** This setting only affects the time after which BitPay considers the payment fully confirmed and irrevocable on the Bitcoin network. You and your customer will be immediately notified when a payment is sent, and a typical transaction only takes a few seconds to complete.

- "Low" speed confirmations take about 1 hour and should be used for high-value items.

- "Medium" speed confirmations typically take 10 minutes and should be used for fulfillment processes with medium risk or items with median value.

Double-spending on the Bitcoin network is extremely difficult, but selecting slower transaction speeds will provide the greatest protection against them.

The "High" order speed setting is not available for this integration.

Nice work! Your customers will now be able to check out with bitcoin on your PrestaShop site.
