GeeVeeAPI
=========
GeeVeeAPI allows you to use a Google Voice account to send real SMS messages to phone numbers and call phone numbers using your second number that is registered with your account. There has been a lot of similar classes and libraries but due to some recent changes that Google has made to their Google Voice and other products, most of these classes no longer work. I enountered this problem so I decided to write my own. Feel free to use and modify

How to use
==========
Include the class file
```php
include 'class.geeveeapi.php';
```

Then initialize it with your account info
```php
$geevee = new GeeVeeSMS("YOUR EMAIL ADDRESS", "YOU PASSWORD");
```

To send sms, call the function sendSMS
```php
$geevee->sendSMS("312-123-1234", "Hi there, this is an SMS!");
```

To initialize a call to your phone number that is listed on your google voice account, call the function call
```php
$geevee->call('312-123-1234', 'PHONE NUMBER THAT IS LISTED ON GOOGLE VOICE ACCOUNT');
```

Images of Dialer (still needs a lot of work)
============================================
<img src="http://gv.hbattat.com/images/geevee_1.jpg" width="200"/>
<img src="http://gv.hbattat.com/images/geevee_2.jpg" width="200"/>
<img src="http://gv.hbattat.com/images/geevee_3.jpg" width="200"/>

IMPORTANT INFO
==============
Make sure your hosting or server settings allow CURLOPT_FOLLOWLOCATION
as this required for the class to work properly

!!!IMPORTANT!!!
Google now has a security feature that requires additional steps to login from unrecognized devices, if its turned on, the class might not be able to login due to captcha. To turn this off go to this url:

https://accounts.google.com/DisplayUnlockCaptcha




Enjoy!
Sam Battat 
