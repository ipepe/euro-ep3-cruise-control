function OBD(wifi){
    console.log("Hello! I'm OBD module! Constructor linked from outside")
}

OBD.prototype.setup = function(){
    console.log("Hello! I'm OBD module! Setup")
}

OBD.prototype.loop = function(){
    console.log("Hello! I'm OBD module! Loop")
}

exports = OBD;

