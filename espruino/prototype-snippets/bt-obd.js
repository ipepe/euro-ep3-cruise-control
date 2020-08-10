var stop = false;
var wifi = null;
var obd = null;

setTimeout(function () {
    if (stop) return;
    console.log("Stop was false. Running the code.");

    var VLINK_MAC = "00:1D:A5:15:E9:68";

    NRF.connect(VLINK_MAC).then(function(g) {
        console.log("VLINK CONNECTED!")
    })

    var gatt;
    NRF.requestDevice({ filters: [{ name: 'Puck.js abcd' }] }).then(function(device) {
        console.log("found device");
        return device.gatt.connect();
    }).then(function(g) {
        gatt = g;
        console.log("connected");
        return gatt.startBonding();
    }).then(function() {
        console.log("bonded", gatt.getSecurityStatus());
        gatt.disconnect();
    }).catch(function(e) {
        console.log("ERROR",e);
    });

}, 5000);
