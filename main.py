i = 0
espera = 3000
basic.show_leds("""
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    """)

def on_forever():
    global i
    basic.show_number(input.temperature())
    datalogger.log(datalogger.create_cv("temperatura", input.temperature()),
        datalogger.create_cv("data", input.running_time()),
        datalogger.create_cv("Marca de temps", control.event_timestamp()))
    led.plot(i, i)
    i += 1
    if i == 5:
        i = 0
    basic.pause(espera)
basic.forever(on_forever)
