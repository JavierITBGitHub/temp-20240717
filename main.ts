input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.soundLevel())
})
let i = 0
let espera = 720000
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
basic.forever(function () {
    led.setBrightness(125)
    basic.showNumber(input.temperature())
    datalogger.log(
    datalogger.createCV("temperatura", input.temperature()),
    datalogger.createCV("Temps execució", input.runningTime()),
    datalogger.createCV("Nivell de so", input.soundLevel())
    )
    led.setBrightness(5)
    led.plot(i, i)
    i += 1
    if (i == 5) {
        i = 0
    }
    basic.pause(espera)
})
