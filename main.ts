radio.onReceivedNumber(function (receivedNumber) {
    if ((0 as any) == (1 as any)) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
        basic.showString("Forward")
    } else if (false) {
        if (receivedNumber == 2) {
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 1)
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P12, 1)
            basic.showString("Backwards")
        }
    } else if (receivedNumber == 3) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        basic.showString("Left")
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
    }
})
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
radio.setGroup(44)
