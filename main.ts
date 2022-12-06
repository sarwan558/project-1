basic.clearScreen()
radio.setGroup(86)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    music.playMelody("C5 B A G F E D C ", 120)
})
