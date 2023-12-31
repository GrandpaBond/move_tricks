function trick2 () {
    moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Blue))
    moveMotorZIP.show()
    Speed = 50
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, Speed)
}
function trick3 () {
    moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Yellow))
    moveMotorZIP.show()
    Speed = 30
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, Speed)
}
function trick4 () {
    moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Purple))
    moveMotorZIP.show()
    Speed = 30
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, Speed)
}
function Halt () {
    Kitronik_Move_Motor.stop()
    for (let index = 0; index < 5; index++) {
        moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
        basic.pause(500)
        moveMotorZIP.clear()
        basic.pause(500)
    }
}
input.onSound(DetectedSound.Loud, function () {
    Pattern += 1
    if (Pattern > 4) {
        Pattern = 0
    }
    basic.showNumber(Pattern)
    Perform(Pattern)
})
function Perform (trick: number) {
    if (trick == 1) {
        trick1()
    } else if (trick == 2) {
        trick2()
    } else if (trick == 3) {
        trick3()
    } else if (trick == 3) {
        trick4()
    } else {
        Halt()
    }
}
function trick1 () {
    moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Green))
    moveMotorZIP.show()
    Speed = 50
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, Speed)
}
let Speed = 0
let Pattern = 0
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
moveMotorZIP.setBrightness(255)
moveMotorZIP.showRainbow(1, 360)
for (let index = 0; index < 20; index++) {
    moveMotorZIP.rotate(1)
    moveMotorZIP.show()
    basic.pause(200)
}
Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
input.setSoundThreshold(SoundThreshold.Loud, 200)
let dim = 40
Pattern = 0
basic.showNumber(Pattern)
basic.forever(function () {
    if (input.lightLevel() < dim) {
        Halt()
    } else {
        if (Kitronik_Move_Motor.measure() < 5) {
            Halt()
        } else if (Kitronik_Move_Motor.measure() < 20) {
            Kitronik_Move_Motor.beepHorn()
            Speed = 15
        }
    }
    basic.pause(200)
})
