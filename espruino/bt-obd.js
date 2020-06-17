var stop = false;
var wifi = null;
var obd = null;

setTimeout(function () {
    if (stop) return;
    console.log("Stop was false. Running the code.");


    setInterval(function(){
        console.log("Hello world");
    }, 2000);

}, 5000);
