import { resistorCode } from "../types/IOhmValueCalculator";

const url = 'http://localhost:4000/resistencias';

export const getResistencias = async (): Promise<resistorCode[]> => {
    try {
        const response = await fetch(url);
        const data: resistorCode[] = await response.json();
        return data;
    } catch (error) {
        throw new Error('an error occurred');
    }

}