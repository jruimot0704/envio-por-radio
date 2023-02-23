radio.onReceivedNumber(function (receivedNumber) {
    if (0 == receivedNumber) {
        basic.showNumber(randint(0, 10))
    }
    if (1 == receivedNumber) {
        basic.showNumber(randint(0, 10))
    }
    if (2 == receivedNumber) {
        basic.showNumber(randint(0, 10))
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 10))
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
radio.setGroup(25)
