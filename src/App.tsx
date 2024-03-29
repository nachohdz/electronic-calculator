import React, { useEffect, useState } from 'react';
import './App.css';
import Resistor from './components/Resistor/Resistor';
import { resistorCode } from './types/IOhmValueCalculator';
import { NONE_COLOR } from './constants/appConstants';
import ColorSelector from './components/ColorSelector/ColorSelector';
import { getResistencias } from './api';

//usar el siguiente import si no se tiene el backend para testing y eliminar o comentar líneas 19-32
//import { resistencias } from './constants/appConstants';

function App() {

  const [aBar, setABar] = useState<resistorCode>(NONE_COLOR);
  const [bBar, setBBar] = useState<resistorCode>(NONE_COLOR);
  const [cBar, setCBar] = useState<resistorCode>(NONE_COLOR);
  const [dBar, setDBar] = useState<resistorCode>(NONE_COLOR);

  const [resistencias, setResistencias] = useState<resistorCode[]>([]);

  useEffect(() => {
    const getValues = async () => {
      try {
        const datosResistencias = await getResistencias();
        setResistencias(datosResistencias);
      } catch (error) {
        console.error('Error al obtener resistencias:', error);
      }
    }

    getValues();
  }, []);

  return (

    <div className="App">
      <h1>Calculadora</h1>
      <Resistor
        bandAColor={aBar}
        bandBColor={bBar}
        bandCColor={cBar}
        bandDColor={dBar}
      />
      <div className='selectors'>
        <ColorSelector label='A' selectedColor={aBar} setSelectedColor={setABar} resistencias={resistencias} />
        <ColorSelector label='B' selectedColor={bBar} setSelectedColor={setBBar} resistencias={resistencias} />
        <ColorSelector label='C' selectedColor={cBar} setSelectedColor={setCBar} resistencias={resistencias} />
        <ColorSelector label='D' selectedColor={dBar} setSelectedColor={setDBar} resistencias={resistencias} />
      </div>
    </div>
  );
}

export default App;
