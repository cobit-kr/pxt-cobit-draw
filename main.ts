/**
 * Functions to operate the co:bit
 */
//% color=#f44242 icon="\uf1b9" block="cobit-draw"
namespace cobit_draw {

    /**
     * Go forward
     *  * @param distance distance of motor
     */
    //% distance.min=0 distance.max=100
    //% weight=90
    //% blockId="cobit_goStepForward" block="앞으로 %distance|% 거리만큼 가기"
    export function goStepForward(distance: number): void {

        if (distance > 100) {
            distance = 100
        }
        for (let i = 0; i < distance; i++) {
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.digitalWritePin(DigitalPin.P14, 0)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.digitalWritePin(DigitalPin.P16, 1)
            //pins.digitalWritePin(DigitalPin.P6, 1)
            //pins.digitalWritePin(DigitalPin.P7, 0)
            //pins.digitalWritePin(DigitalPin.P9, 0)
            //pins.digitalWritePin(DigitalPin.P10, 1)
            pins.digitalWritePin(DigitalPin.P10, 1)
            pins.digitalWritePin(DigitalPin.P9, 0)
            pins.digitalWritePin(DigitalPin.P7, 0)
            pins.digitalWritePin(DigitalPin.P6, 1)
            basic.pause(1)
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.digitalWritePin(DigitalPin.P14, 0)
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.digitalWritePin(DigitalPin.P16, 1)
            //pins.digitalWritePin(DigitalPin.P6, 0)
            //pins.digitalWritePin(DigitalPin.P7, 0)
            //pins.digitalWritePin(DigitalPin.P9, 1)
            //pins.digitalWritePin(DigitalPin.P10, 1)
            pins.digitalWritePin(DigitalPin.P10, 0)
            pins.digitalWritePin(DigitalPin.P9, 0)
            pins.digitalWritePin(DigitalPin.P7, 1)
            pins.digitalWritePin(DigitalPin.P6, 1)
            basic.pause(1)
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.digitalWritePin(DigitalPin.P14, 1)
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.digitalWritePin(DigitalPin.P16, 0)
            //pins.digitalWritePin(DigitalPin.P6, 0)
            //pins.digitalWritePin(DigitalPin.P7, 1)
            //pins.digitalWritePin(DigitalPin.P9, 1)
            //pins.digitalWritePin(DigitalPin.P10, 0)
            pins.digitalWritePin(DigitalPin.P10, 0)
            pins.digitalWritePin(DigitalPin.P9, 1)
            pins.digitalWritePin(DigitalPin.P7, 1)
            pins.digitalWritePin(DigitalPin.P6, 0)
            basic.pause(1)
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.digitalWritePin(DigitalPin.P14, 1)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.digitalWritePin(DigitalPin.P16, 0)
            //pins.digitalWritePin(DigitalPin.P6, 1)
            //pins.digitalWritePin(DigitalPin.P7, 1)
            //pins.digitalWritePin(DigitalPin.P9, 0)
            //pins.digitalWritePin(DigitalPin.P10, 0)
            pins.digitalWritePin(DigitalPin.P10, 1)
            pins.digitalWritePin(DigitalPin.P9, 1)
            pins.digitalWritePin(DigitalPin.P7, 0)
            pins.digitalWritePin(DigitalPin.P6, 0)
            basic.pause(1)

        }

    }
}