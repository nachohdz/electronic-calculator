//Parte 1 del Examen

import { resistorCode } from "./IOhmValueCalculator";

interface IOhmValueCalculatorInterface {
    bandAColor: resistorCode;
    bandBColor: resistorCode;
    bandCColor: resistorCode;
    bandDColor: resistorCode;

    calculateOhmnValue(bandAColor: resistorCode, bandBColor: resistorCode, bandCColor: resistorCode, bandDColor: resistorCode): number;
}

export default IOhmValueCalculatorInterface;