function Movimiento () {
    for (let Index = 0; Index <= 4; Index++) {
        led.plot(Carril, Index)
        basic.pause(100)
        basic.clearScreen()
    }
}
let Carril = 0
Carril = 2
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && Carril > 0) {
        Carril += -1
        Movimiento()
    } else if (input.buttonIsPressed(Button.B) && Carril < 4) {
        Carril += 1
        Movimiento()
    } else {
        Movimiento()
    }
})
