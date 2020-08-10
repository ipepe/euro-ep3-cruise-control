var stop = false;
var wifi = null;
var obd = null;

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
            console.log(e);
        }
        console.log(wifi.getDetails());
        console.log(wifi.getIP());
    });
    console.log("After wifi setup 5");

    obd = new Serial();
    obd.setup(38400, {rx: 13, tx: 12});
    obd.on('data', function (data) {
        console.log("Serial<- "+data);
    });
    setInterval(function(){
        console.log("Serial-> AT RV");
        obd.println("AT RV\n");
    }, 2000);

}, 5000);

var getBattery = "AT RV"
var getELMVersion = "ATI"
