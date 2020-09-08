class OBD
  PIDS: {
    ENGINE_RPM:         12, # 0x0C
    VEHICLE_SPEED:      13, # 0x0D
    THROTTLE_POSITION:  17  # 0x11
  }
  constructor: (wifi)->
    @wifi = wifi
    console.log("Hello! I'm OBD module! Constructor")
    @currentValues = {}

  parseData: (data)->
    parsed_PID = data.parsed_PID
    @currentValues[parsed_PID] = { value: value, date: Date.now() }

  reqestPID: (pid)->


exports = CruiseControl