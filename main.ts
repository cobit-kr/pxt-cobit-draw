/**
 * Functions to operate the co:bit
 */
//% color=#f44242 icon="\uf1b9" block="cobit-draw"
namespace cobit_draw {

    /**
     * Go forward
     *  * @param distance distance of motor
     */
    //% distance.min=0 distance.max=500
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
            pins.digitalWritePin(DigitalPin.P10, 1)
            pins.digitalWritePin(DigitalPin.P9, 0)
            pins.digitalWritePin(DigitalPin.P7, 0)
            pins.digitalWritePin(DigitalPin.P6, 1)
            basic.pause(1)
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.digitalWritePin(DigitalPin.P14, 0)
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.digitalWritePin(DigitalPin.P16, 1)
            pins.digitalWritePin(DigitalPin.P10, 0)
            pins.digitalWritePin(DigitalPin.P9, 0)
            pins.digitalWritePin(DigitalPin.P7, 1)
            pins.digitalWritePin(DigitalPin.P6, 1)
            basic.pause(1)
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.digitalWritePin(DigitalPin.P14, 1)
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.digitalWritePin(DigitalPin.P16, 0)
            pins.digitalWritePin(DigitalPin.P10, 0)
            pins.digitalWritePin(DigitalPin.P9, 1)
            pins.digitalWritePin(DigitalPin.P7, 1)
            pins.digitalWritePin(DigitalPin.P6, 0)
            basic.pause(1)
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.digitalWritePin(DigitalPin.P14, 1)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.digitalWritePin(DigitalPin.P16, 0)
            pins.digitalWritePin(DigitalPin.P10, 1)
            pins.digitalWritePin(DigitalPin.P9, 1)
            pins.digitalWritePin(DigitalPin.P7, 0)
            pins.digitalWritePin(DigitalPin.P6, 0)
            basic.pause(1)

        }

    }

    /**
     * Go backward
     *  * @param distance distance of motor
     */
    //% distance.min=0 distance.max=500
    //% weight=90
    //% blockId="cobit_goStepBackward" block="뒤로 %distance|% 거리만큼 가기"
    export function goStepBackward(distance: number): void {

        if (distance > 100) {
            distance = 100
        }
        for (let i = 0; i < distance; i++) {
            pins.digitalWritePin(DigitalPin.P16, 1)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.digitalWritePin(DigitalPin.P14, 0)
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.digitalWritePin(DigitalPin.P6, 1)
            pins.digitalWritePin(DigitalPin.P7, 0)
            pins.digitalWritePin(DigitalPin.P9, 0)
            pins.digitalWritePin(DigitalPin.P10, 1)
            basic.pause(1)
            pins.digitalWritePin(DigitalPin.P16, 0)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.digitalWritePin(DigitalPin.P14, 1)
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.digitalWritePin(DigitalPin.P6, 0)
            pins.digitalWritePin(DigitalPin.P7, 0)
            pins.digitalWritePin(DigitalPin.P9, 1)
            pins.digitalWritePin(DigitalPin.P10, 1)
            basic.pause(1)
            pins.digitalWritePin(DigitalPin.P16, 0)
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.digitalWritePin(DigitalPin.P14, 1)
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.digitalWritePin(DigitalPin.P6, 0)
            pins.digitalWritePin(DigitalPin.P7, 1)
            pins.digitalWritePin(DigitalPin.P9, 1)
            pins.digitalWritePin(DigitalPin.P10, 0)
            basic.pause(1)
            pins.digitalWritePin(DigitalPin.P16, 1)
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.digitalWritePin(DigitalPin.P14, 0)
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.digitalWritePin(DigitalPin.P6, 1)
            pins.digitalWritePin(DigitalPin.P7, 1)
            pins.digitalWritePin(DigitalPin.P9, 0)
            pins.digitalWritePin(DigitalPin.P10, 0)
            basic.pause(1)

        }

    }

     /**
     * Turn left 
     *  * @param angle angle of motor
     */
    //% angle.min=0 angle.max=90
    //% weight=90
    //% blockId="cobit_turnLeft" block="왼쪽으로 %angle|% 도만큼 돌기"
    export function goTurnLeft(angle: number): void {

        if (angle > 90) {
            angle = 90
        }
        for (let i = 0; i < angle; i++) {
            pins.digitalWritePin(DigitalPin.P16, 1)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.digitalWritePin(DigitalPin.P14, 0)
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.digitalWritePin(DigitalPin.P10, 1)
            pins.digitalWritePin(DigitalPin.P9, 0)
            pins.digitalWritePin(DigitalPin.P7, 0)
            pins.digitalWritePin(DigitalPin.P6, 1)
            basic.pause(1)
            pins.digitalWritePin(DigitalPin.P16, 0)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.digitalWritePin(DigitalPin.P14, 1)
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.digitalWritePin(DigitalPin.P10, 0)
            pins.digitalWritePin(DigitalPin.P9, 0)
            pins.digitalWritePin(DigitalPin.P7, 1)
            pins.digitalWritePin(DigitalPin.P6, 1)
            basic.pause(1)
            pins.digitalWritePin(DigitalPin.P16, 0)
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.digitalWritePin(DigitalPin.P14, 1)
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.digitalWritePin(DigitalPin.P10, 0)
            pins.digitalWritePin(DigitalPin.P9, 1)
            pins.digitalWritePin(DigitalPin.P7, 1)
            pins.digitalWritePin(DigitalPin.P6, 0)
            basic.pause(1)
            pins.digitalWritePin(DigitalPin.P16, 1)
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.digitalWritePin(DigitalPin.P14, 0)
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.digitalWritePin(DigitalPin.P10, 1)
            pins.digitalWritePin(DigitalPin.P9, 1)
            pins.digitalWritePin(DigitalPin.P7, 0)
            pins.digitalWritePin(DigitalPin.P6, 0)
            basic.pause(1)

        }

    }


     /**
     * Turn right 
     *  * @param angle angle of motor
     */
    //% angle.min=0 angle.max=90
    //% weight=90
    //% blockId="cobit_turnRight" block="오른쪽으로 %angle|% 도만큼 돌기"
    export function goTurnRight(angle: number): void {

        if (angle > 90) {
            angle = 90
        }
        for (let i = 0; i < angle; i++) {
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.digitalWritePin(DigitalPin.P14, 0)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.digitalWritePin(DigitalPin.P16, 1)
            pins.digitalWritePin(DigitalPin.P6, 1)
            pins.digitalWritePin(DigitalPin.P7, 0)
            pins.digitalWritePin(DigitalPin.P9, 0)
            pins.digitalWritePin(DigitalPin.P10, 1)
            basic.pause(1)
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.digitalWritePin(DigitalPin.P14, 0)
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.digitalWritePin(DigitalPin.P16, 1)
            pins.digitalWritePin(DigitalPin.P6, 0)
            pins.digitalWritePin(DigitalPin.P7, 0)
            pins.digitalWritePin(DigitalPin.P9, 1)
            pins.digitalWritePin(DigitalPin.P10, 1)
            basic.pause(1)
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.digitalWritePin(DigitalPin.P14, 1)
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.digitalWritePin(DigitalPin.P16, 0)
            pins.digitalWritePin(DigitalPin.P6, 0)
            pins.digitalWritePin(DigitalPin.P7, 1)
            pins.digitalWritePin(DigitalPin.P9, 1)
            pins.digitalWritePin(DigitalPin.P10, 0)
            basic.pause(1)
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.digitalWritePin(DigitalPin.P14, 1)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.digitalWritePin(DigitalPin.P16, 0)
            pins.digitalWritePin(DigitalPin.P6, 1)
            pins.digitalWritePin(DigitalPin.P7, 1)
            pins.digitalWritePin(DigitalPin.P9, 0)
            pins.digitalWritePin(DigitalPin.P10, 0)
            basic.pause(1)

        }

    }

    /**
	 * Moves the servo.
     * @param degree servo rotation degree 
	 */
    //% weight=90
    //% degree.min=0 degree.max=180
    //% blockId="cobit_rotateServo" block="서보모터 %degree|도 회전하기"
    export function rotateServo(degree: number): void {
        if (degree > 180) {
            degree = 180
        }
        if (degree < 0) {
            degree = 0
        }
        pins.servoWritePin(AnalogPin.P1, degree)
    }
}