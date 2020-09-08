function CruiseControl(obd){
    console.log("Hello! I'm CC module! Constructor")
}
CruiseControl.MINIMUM_SPEED = 40
CruiseControl.MAXIMUM_SPEED = 160


CruiseControl.prototype.setup = function(){
    console.log("Hello! I'm CC module! Setup")
}

CruiseControl.prototype.turnOffCruiseControl = function() {
    this.slowDown(1000).then(function(){
        this.
    })
}
CruiseControl.prototype.loop = function(){
    console.log("Hello! I'm CC module! Loop")
    if(this.obd.currentSpeed < CruiseControl.MINIMUM_SPEED){
        this.turnOffCruiseControl()
    }else if(this.obd.currentSpeed > CruiseControl.MAXIMUM_SPEED){
        this.turnOffCruiseControl()
    }
}

exports = CruiseControl;

