var wifi = require('Wifi');
var obd = new require('OBD')();
var cruise = new require('CruiseControl')();
var cruise_logger = new require('CruiseLogger')()

obd.setup(wifi);
cruise.setup(obd);
cruise_logger.setup(obd, cruise);
