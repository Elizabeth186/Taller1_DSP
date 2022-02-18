import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Select from 'react-select';
function  ListaArreglo(){

var sports = [{
  text: 'Basketball',
  id: 1
}, {
  text: 'Football',
  id: 2
}, {
  text: 'Tennis',
  id: 3
}, {
  text: 'Volleyball',
  id: 4
}];


return(
    <div>
        <Select options={sports}></Select>
        
    </div>

);
}
 
export default ListaArreglo;