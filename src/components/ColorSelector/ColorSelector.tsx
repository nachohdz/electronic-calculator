import React from 'react';
import { resistorCode } from '../../types/IOhmValueCalculator';
import './ColorSelector.css';

interface ColorSelectorProps {
    label: string,
    selectedColor: resistorCode;
    setSelectedColor: React.Dispatch<React.SetStateAction<resistorCode>>;
    resistencias: resistorCode[];
}

function ColorSelector({ label, selectedColor, setSelectedColor, resistencias }: ColorSelectorProps) {

    return (
        <div className='color-selector'>
            {`${label}: `}
            <select
                value={selectedColor.label}
                onChange={e => {
                    const _selectedColor = resistencias.find(_color => _color.label === e.target.value);
                    _selectedColor && setSelectedColor(_selectedColor);
                }}>
                {
                    resistencias.map(_color => {
                        return <option key={_color.label} className={`${_color}-bg`} value={_color.label}>{_color.label}</option>
                    })
                }
            </select>
        </div>
    );
}

export default ColorSelector;
