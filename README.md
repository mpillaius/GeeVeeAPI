GeeVeeSMS
=========
GeeVeeSMS allows you to use a Google Voice account to send real SMS messages to phone numbers. There has been a lot of similar classes and libraries but due to some recent changes that Google has made to their Google Voice and other products, most of these classes no longer work. I enountered this problem so I decided to write my own. Feel free to use and modify

How to use
==========
Include the class file
```php
include 'class.geeveesms.php';
```

Then initialize it with your account info
```php
$geevee = new GeeVeeSMS("YOUR EMAIL ADDRESS", "YOU PASSWORD");
```

To send sms call the function sendSMS
```php
$geevee->sendSMS("312-123-1234", "Hi there, this is an SMS!");
```

IMPORTANT INFO
==============
Make sure your hosting or server settings allow CURLOPT_FOLLOWLOCATION
as this required for the class to work properly

!!!IMPORTANT!!!
Google now has a security feature that requires additional steps to login from unrecognized devices, if its turned on, the class might not be able to login due to captcha. To turn this off go to this url:

https://accounts.google.com/DisplayUnlockCaptcha




Enjoy!
Sam Battat 
