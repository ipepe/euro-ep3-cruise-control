var stop = false;
var wifi = null;

setTimeout(function () {
    if (stop) return;
    console.log("Stop was false. Running the code.");

    // setup wifi
    wifi = require('Wifi');
    var ssid = 'MyPhysicsTrophy-24GHz';
    var password = atob('cGF0cnlrOTIx');

    wifi.setHostname('espruino-' + getSerial());
    wifi.stopAP();
    wifi.connect(ssid, {password: password}, function (e) {
        if (!e) {
            wifi.save();
            console.log('connected to', ssid, arguments);
        }else{
            console.log(e)
        }
        console.log(wifi.getDetails());
        console.log(wifi.getIP());
    });

    console.log('I2C1.setup');
    I2C1.setup({scl: 0, sda: 2});
    console.log('lcd = require');
    lcd = require("HD44780").connectI2C(I2C1);

    var value = 0;
    setInterval(function(){
        console.log('lcd.print');
        value = value + 1;
        lcd.clear();
        lcd.setCursor(0,0);
        lcd.print("Hello World!" + value.toString());
    }, 500);
}, 5000);