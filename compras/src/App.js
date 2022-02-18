import React, { useState } from 'react';
import './App.css';
import "antd/dist/antd.css";
import Select from 'react-select';
import { InputNumber } from 'antd';


function App() {
  const compras = [{
    value: 1,
    label: 'Melon',
    price: 3
  }, {
    value: 2,
    label: 'Pepsi',
    price: 4
  }, {
    value: 3,
    label: 'Taquis',
    price: 3
  }, {
    value: 4,
    label: 'Peras',
    price: 1,
  }, {
    value: 5,
    label: 'Mango',
    price: 1,
  },
  {
    value: 6,
    label: 'Papas',
    price: 2,
  }, {
    value: 7,
    label: 'Gallina',
    price: 5,
  }, {
    value: 8,
    label: 'Fresa',
    price: 2,
  }, {
    value: 9,
    label: 'Uva',
    price: 3,
  }
  , {
    value: 10,
    label: 'Leche',
    price: 1.50,
  }];
  var [productvalu, getvalu] = useState();
  var [productvalue, getvalue] = useState();
  var listproduct = (e) => {
    getvalue(Array.isArray(e) ? e.map(x =>x.label+ "\n$\n"+x.price + "\n") : [])
    getvalu(Array.isArray(e) ? e.map(y =>y.price ) : [])
  }

  const [currentValue, setCurrentValue] = useState(0)
  return (
    <div className="App">
      <div>

        <center>
          <h1>LISTA DE COMPRAS</h1>

          <Select id='seleccion' isMulti onChange={listproduct} options={compras}>Seleccione su producto</Select>
         
        
        </center>
      
      </div>
      <center>
         
         
          <b>Lista de Prodtuctos</b>
          <ul>{productvalue?.map(x => <li id='list'>{x}<InputNumber
           onChange={(value) => {
            setCurrentValue(value)}}
             id="cant"  min={1} ></InputNumber></li>)}</ul>
          <h1>TOTAL:</h1>
          <div className='total'>
         <ul id='segundo'><h2>{productvalu?.map(y=>y*currentValue)+"\n"}</h2></ul> 
         </div>
        </center>
      
      </div>
     
    

  );
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  select: {
    with: '20em',
  },
}


export default App;
