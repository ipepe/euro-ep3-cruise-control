class CruiseControl
  MINIMUM_SPEED: 40
  MAXIMUM_SPEED: 160
  CLUTCH_PIN: 99
  THROTTLE_DOWN_PIN: 99
  THROTTLE_UP_PIN: 99

  constructor: (obd)->
    @obd = obd
    console.log("Hello! I'm CC module! Constructor")

  setup: ->
    console.log("Hello! I'm CC module! Setup")

    pinMode(@CLUTCH_PIN, "output");
    pinMode(@THROTTLE_DOWN_PIN, "output");
    pinMode(@THROTTLE_UP_PIN, "output");

    digitalWrite(@CLUTCH_PIN, 0)
    digitalWrite(@THROTTLE_DOWN_PIN, 0)
    digitalWrite(@THROTTLE_UP_PIN, 0)

  turnOffCruiseControl: ->
    @slowDown 1000, ->
      @setClutchState(false)

  setClutchState: (flag)->
    if flag
      digitalWrite(@CLUTCH_PIN, 1)
    else
      digitalWrite(@CLUTCH_PIN, 0)

  loop: ->
    console.log("Hello! I'm CC module! Loop")
    if @obd.currentSpeed < @MINIMUM_SPEED
      @turnOffCruiseControl()
    else if @obd.currentSpeed > @MAXIMUM_SPEED
      @turnOffCruiseControl()

  @slowDown: (time=50, callback = null)->
    digitalWrite(@THROTTLE_DOWN_PIN, 1)
    setTimeout((=>
      digitalWrite(@THROTTLE_DOWN_PIN, 0)
      callback() if callback
    ), time)

  @speedUp: (time=50, callback = null)->
    digitalWrite(@THROTTLE_UP_PIN, 1)
    setTimeout((=>
      digitalWrite(@THROTTLE_UP_PIN, 0)
      callback() if callback
    ), time)


exports = CruiseControl


