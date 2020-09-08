var wifi = require('Wifi');
var ssid = 'WiFi-OBDII';

wifi.setHostname('espruino-' + getSerial());
wifi.stopAP();
var connectWifi = function(){
    wifi.connect(ssid,{}, function (e) {
        console.log('After wifi connect');
        if (!e) {
            wifi.save();
            console.log('connected to', ssid, arguments);
        }else{
            console.log(e);
        }
        console.log(wifi.getDetails());
        console.log(wifi.getIP());
    });
};

connectWifi();

setInterval(function(){
    if(wifi.getDetails().status !== 'connected'){
        connectWifi();
    }
}, 1000);

c = require("net").connect({host: "192.168.0.10", port: 35000}, function(client) {
    console.log('client connected', arguments);

    client.on('data', function(data) {
        console.log(">"+JSON.stringify(data));
    });
    client.write("ATE0\r\n"); // echo off
    client.write("ATH1\r\n"); // headers on
    client.write("ATL0\r\n"); // linefeeds OFF
    client.write("AT RV\r\n"); // read voltage
    client.write("AT RV\r\n"); // read voltage
    client.on('end', function() {
        console.log('client disconnected');
    });
});