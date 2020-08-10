var stop = false;
var wifi = null;
var client = null;

setTimeout(function () {
    if (stop) return;
    console.log("Stop was false. Running the code.");

    // setup wifi
    wifi = require('Wifi');
    var ssid = 'WiFi-OBDII';

    wifi.setHostname('espruino-' + getSerial());
    wifi.stopAP();
    wifi.connect(ssid,{}, function (e) {
        if (!e) {
            wifi.save();
            console.log('connected to', ssid, arguments);
        }else{
            console.log(e);
        }
        console.log(wifi.getDetails());
        console.log(wifi.getIP());
    });

    setTimeout(function(){
        console.log("connect OBD");

    }, 5000);

}, 5000);