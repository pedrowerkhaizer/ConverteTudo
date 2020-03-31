import React, { useState } from 'react';
import './global.css'


function App() {
  const [ convertType, setConvertType ] = useState('moeda');
  const [ typeOne, setTypeOne ] = useState('usd');
  const [ typeTwo, setTypeTwo ] = useState('brl');

  function handleConvertion(conversionType, firstValue, secondValue){

  }

  return (
    <div className="convertContainer">
      <div className="titleContainer">
        <p className="fixedTitle">Converter </p>
        <a className="variableTitle" href="/">{convertType}</a>
        <select name="convertTypeSelector" className="selector" 
        onChange={e => setConvertType(e.target.options[e.target.selectedIndex].text.toLocaleLowerCase())}>
          <option value="moeda">Moeda</option>
          <option value="massa">Massa</option>
          <option value="comprimento">Comprimento</option>
      </select>
      </div>
      
      <div className="inputContainer">
        <input type="text" placeholder="1"/>
        <p className="inputType">usd</p>
      </div>
      <div className="parameterSelector">
      <a href="/">{typeOne}</a>
      <select name="typeOneSelector" className="selector"
      onChange={e => setTypeOne(e.target.options[e.target.selectedIndex].text.toLocaleLowerCase())}>
        <option value="usd">USD</option>
        <option value="brl">REAL</option>
        <option value="peso">PESO ARG</option>
      </select>
      </div>

      <p className="equalsTitle">é igual a:</p>

      <div className="inputContainer">
        <input type="text" placeholder="5.17"/>
        <p className="inputType">real</p>
      </div>
      <div className="parameterSelector">
      <a href="/">{typeTwo}</a> 
      <select name="typeTwoSelector" className="selector"
      onChange={e => setTypeTwo(e.target.options[e.target.selectedIndex].text.toLocaleLowerCase())}>
        <option value="brl">REAL</option>
        <option value="usd">USD</option>
        <option value="peso">PESO ARG</option>
      </select>
      </div>

    </div>
  );
}

export default App;
