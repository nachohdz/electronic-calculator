import { resistorCode } from '../types/IOhmValueCalculator';
import ResistorClass from './ResistorClass';

describe('Resistor', () => {

    const red: resistorCode = {
        label: 'Red',
        resistance: 2,
        multiplier: 100,
        tolerance: 2
    };

    const brown: resistorCode =
    {
        label: 'Brown',
        resistance: 1,
        multiplier: 10,
        tolerance: 1
    };


    const black: resistorCode = {
        label: 'Black',
        resistance: 0,
        multiplier: 1,
        tolerance: 0
    };

    it('should create a resistance correctly', () => {
        const resistor = new ResistorClass(brown, black, red, black);
        expect(resistor.bandAColor.label).toEqual('Brown');
        expect(resistor.bandBColor.label).toEqual('Black');
        expect(resistor.bandCColor.label).toEqual('Red');
        expect(resistor.resistance).toEqual(1000);
    });
});