function CruiseControl(obd){
    console.log("Hello! I'm CC module! Constructor")
}

CruiseControl.prototype.setup = function(){
    console.log("Hello! I'm CC module! Setup")
}

CruiseControl.prototype.loop = function(){
    console.log("Hello! I'm CC module! Loop")
}

exports = CruiseControl;

