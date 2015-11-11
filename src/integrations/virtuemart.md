## Integration Requirements
Get started by [signing up for a BitPay merchant account.](https://bitpay.com/dashboard/signup)

You must also have already installed the [VirtueMart store software](http://virtuemart.net/download) on your Joomla site.

## Installing the Plugin

1. Create a zip file of from the contents [Download the latest version](https://github.com/bitpay/virtuemart-plugin/releases) of the BitPay plugin for VirtueMart.

2. Log in to your VirtueMart store and navigate to your **"Extension Manager" > "Install"**

3. Select the downloaded plugin zip file and click **"Upload" & "Install". Navigate to the "Manage"** section of your Extension Manager and select "Publish".

<div class="warning">We always recommend that you backup your database before installing plugins.</div>

## Connecting BitPay and VirtueMart

1. In your VirtueMart Extension Manager, navigate to **"Components" > "VirtueMart".**

2. Select **"Payment Methods" > "New"**. Type in the required information for the new payment method, choosing "VMPAYMENT_BITPAY" as the name.

3. [Create an API Key](https://bitpay.com/dashboard/login/eyJ0b1N0YXRlTmFtZSI6Im1lbnUuZGFzaGJvYXJkIiwidG9QYXJhbXMiOnsicGFnZSI6ImFwaS10b2tlbnMifX0=) in your BitPay merchant dashboard.

![virtuemart-step-1](/images/integrations/details/virtuemartstep6.png)

4. Navigate to "Configuration" in the Extension Manager menu. Copy and paste this API Key ID to pair with your BitPay account.

<div class="note">Pairing codes are only valid for a short period of time. If a code expires before you get to use it, you can always create a new one and pair with it. You will only need to do this once since each time you do this, the extension will generate public</div>

Nice work! Your customers will now be able to check out with bitcoin on your VirtueMart site.
