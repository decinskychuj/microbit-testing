input.onButtonPressed(Button.A, function () {
    led.plot(1, 0)
    basic.pause(1000)
    led.unplot(1, 0)
    led.plot(1, 1)
    basic.pause(1000)
    led.unplot(1, 1)
    led.plot(1, 2)
    basic.pause(1000)
    led.unplot(1, 2)
    led.plot(1, 3)
    basic.pause(1000)
    led.unplot(1, 3)
    led.plot(1, 4)
    basic.pause(1000)
    led.unplot(1, 4)
})
input.onButtonPressed(Button.B, function () {
    led.plot(0, 0)
    basic.pause(1000)
    led.unplot(0, 0)
    led.plot(0, 1)
    basic.pause(1000)
    led.unplot(0, 1)
    led.plot(0, 2)
    basic.pause(1000)
    led.unplot(0, 2)
    led.plot(0, 3)
    basic.pause(1000)
    led.unplot(0, 3)
    led.plot(0, 4)
    basic.pause(1000)
    led.unplot(0, 4)
})
basic.showNumber(69)
basic.showString("hh")
