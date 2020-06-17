
diagram = Diagram.new do |diagram|
  diagram.alias_connection(:gnd, :ground)
  diagram.default_color_for(:gnd, :black)
  diagram.default_color_for(:vin_5v, :red)
  diagram.default_color_for(:vin_12v, :red)
end

diagram.add(:denso_cruise_control_actuator) do |component|
  component.connect(:ground)
  component.connect(:electroclutch_on)
  component.connect(:actuate_a)
  component.connect(:actuate_b)
end

diagram.add(:ds18b20_outside) do |component|
  component.connect(:ground)
  component.connect(:vcc_5v)
  component.connect(:one_wire_signal)
end

diagram.add(:ds18b20_inside) do |component|
  component.connect(:ground)
  component.connect(:vcc_5v)
  component.connect(:one_wire_signal)
end

diagram.add(:lidar) do |component|
  component.connect(:ground)
  component.connect(:vcc_5v)
  component.connect(:lidar_tx)
  component.connect(:lidar_rx)
end

diagram.add(:resistor_4point7k_ohm) do |component|
  component.connect(:vcc_5v)
  component.connect(:one_wire_signal)
end

diagram.add(:dc_motor_controller) do |component|
  component.connect
end

diagram.add(:lcd_screen) do |component|
  component.connect(:lcd_signal)
  component.connect(:vin_5v)
  component.connect(:gnd)
end

diagram.add(:elm327) do |component|
  component.connect(:gnd)
  component.connect(:obd_tx)
  component.connect(:obd_rx)
end

diagram.add(:buzzer) do |component|
  component.description = 'Buzzer for warning signals'
  component.connect(:gnd)
  component.connect(:buzzer_signal)
end

diagram.verify!(duplicate_connections: false, empty_connections: false)