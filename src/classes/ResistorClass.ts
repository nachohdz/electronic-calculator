//Parte 1 del Examen

import { resistorCode } from "../types/IOhmValueCalculator";
import IOhmValueCalculatorInterface from "../types/IOhmValueCalculator.interface";


class Resistor implements IOhmValueCalculatorInterface {
    bandAColor: resistorCode;
    bandBColor: resistorCode;
    bandCColor: resistorCode;
    bandDColor: resistorCode;

    resistance: number;

    constructor(bandAColor: resistorCode, bandBColor: resistorCode, bandCColor: resistorCode, bandDColor: resistorCode) {
        this.bandAColor = bandAColor;
        this.bandBColor = bandBColor;
        this.bandCColor = bandCColor;
        this.bandDColor = bandDColor;

        this.resistance = this.calculateOhmnValue();
    }

    calculateOhmnValue(): number {
        return parseInt(this.bandAColor.resistance.toString() + this.bandBColor.resistance.toString(), 10) * this.bandCColor.multiplier;
    }
};

export default Resistor;