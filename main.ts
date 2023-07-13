let tel = false
let teller = 0
function tellen () {
    while (tel == true) {
        teller += 1
        basic.pause(100)
    }
}
function knoppen () {
    if (input.buttonIsPressed(Button.A)) {
        tel = true
        teller = 0
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (input.buttonIsPressed(Button.B)) {
        tel = false
        basic.showNumber(teller)
    }
}
basic.forever(function () {
    knoppen()
})
basic.forever(function () {
    tellen()
})
basic.forever(function () {
	
})
