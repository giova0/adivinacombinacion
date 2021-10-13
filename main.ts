input.onButtonPressed(Button.A, function () {
    Combinacion = "" + Combinacion + "A"
    Digitos += 1
})
input.onButtonPressed(Button.B, function () {
    Combinacion = "" + Combinacion + "B"
    Digitos += 1
})
let Combinacion = ""
Combinacion = ""
let Digitos = 0
basic.showLeds(`
    # # # # #
    # . . . #
    # . . # #
    # . . . #
    # # # # #
    `)
basic.forever(function () {
    if (Combinacion == "AABA") {
        basic.showIcon(IconNames.Target)
    } else {
        if (Digitos == 4) {
            basic.showIcon(IconNames.Sad)
            Combinacion = ""
            Digitos = 0
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . # #
                # . . . #
                # # # # #
                `)
        }
    }
})
