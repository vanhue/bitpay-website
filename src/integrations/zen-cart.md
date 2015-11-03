## Integration Requirements
Get started by signing up for a BitPay merchant account

'You must also already have the Zen Cart shopping cart software installed.

## Installing the Plugin
1. Download the latest version of the BitPay plugin for Zen Cart.
2. Unzip the downloaded file and copy its contents into the Zen Cart directory of your web server to complete installation.

## Connecting BitPay and Zen Cart
1. Navigate to the Admin panel in your Zen Cart store and select "Modules" > "Payment" > "Bitcoins" > "Install".

2. Verify that the "Bitcoins" module is enabled.

3. Create an API Key in your BitPay merchant dashboard.

4. Copy and paste the API Key into the required field to pair your accounts.

**NOTE:** Pairing codes are only valid for a short period of time. If a code expires before you get to use it, you can always create a new one and pair with it. You will only need to pair once.

5. Select a transaction speed.

**NOTE:** This setting only affects the time after which BitPay considers the payment fully confirmed and irrevocable on the Bitcoin network. You and your customer will be immediately notified when a payment is sent, and a typical transaction only takes a few seconds to complete.

- "High": A payment confirmation will be sent as soon as a transaction is received in the Bitcoin network (usually a few seconds). This speed should be used for digital or low-risk items.

- "Medium" speed confirmations typically take 10 minutes and should be used for fulfillment processes with medium risk or items with median value.

- "Low" speed confirmations take about 1 hour and should be used for high-value items.

**NOTE:** Double-spending on the Bitcoin network is extremely difficult, but selecting slower transaction speeds will provide the greatest protection against them.

6. Choose a status for unpaid and paid orders (or leave the default values as defined).

7. Select currency pricing. Before using currencies other than defaults, verify that these pricing options are supported by BitPay.

8. Choose a sort order for displaying this payment option to visitors. Lowest is displayed first.

Nice work! Your customers will now be able to check out with bitcoin on your website.
