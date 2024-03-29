export type color = 'None' | 'Pink' | 'Silver' | 'Gold' | 'Black' | 'Brown' | 'Red' | 'Orange' | 'Yellow' | 'Green' | 'Blue' | 'Violet' | 'Gray' | 'White';

export type resistorCode = {
    label: color;
    resistance: number;
    multiplier: number;
    tolerance: number;
}