import React from 'react';
import './Resistor.css';
import { resistorCode } from '../../types/IOhmValueCalculator';
import ResistorClass from '../../classes/ResistorClass';
import { NONE_COLOR } from '../../constants/appConstants';

interface ResistorProps {
    bandAColor: resistorCode;
    bandBColor: resistorCode;
    bandCColor: resistorCode;
    bandDColor: resistorCode;
}

function Resistor({
    bandAColor,
    bandBColor,
    bandCColor,
    bandDColor
}: ResistorProps) {

    let resistor = {
        resistance: 0
    };

    const noneLabel = NONE_COLOR.label;

    if (bandAColor.label !== noneLabel && bandBColor.label !== noneLabel && bandCColor.label !== noneLabel) {
        resistor = new ResistorClass(bandAColor, bandBColor, bandCColor, bandDColor);
    }

    return (
        <div>
            <div className="resistor">
                <div className={`bar a-bar ${bandAColor.label}-bg`}></div>
                <div className={`bar b-bar ${bandBColor.label}-bg`}></div>
                <div className={`bar c-bar ${bandCColor.label}-bg`}></div>
                <div className={`bar d-bar ${bandDColor.label}-bg`}></div>
            </div>
            <div className='value-label'>Value: {resistor.resistance} Tolerancia: {bandDColor.tolerance} </div>
        </div>
    );
}

export default Resistor;
