import React from 'react';
import './App.css';

const Sum = () => {
  return (
      <button type= "submit">+</button>
  )
}

const App1 = () => {
  const [n1, setN1] = React.useState(0);
  const [n2, setN2] = React.useState(0);
  const [result, setResult] = React.useState('Resultado');

  const handleNumberChange = (e : React.ChangeEvent<HTMLInputElement>) :void => {
    if("n1" === e.target.id){
      setN1(parseInt(e.target.value))  
    } else {
      setN2(parseInt(e.target.value))
    }
  }

  const handleChangeResult = (e :React.MouseEvent<HTMLFormElement>) : void => {
    setResult(String(n1 + n2))
    e.preventDefault();
  };

  let title : string = process.env.REACT_APP_APP_TITTLE as string;

  return (
    <div className="App">
      <h1>{title}</h1>
      <div onChange= {handleNumberChange}>
        <input type= "number" id= "n1"/>
        <input type= "number" id= "n2"/>
      </div>
      
      <form onClick={handleChangeResult}>
        <Sum /><br/>
      </form>
      <div className= "result">
        {result}
      </div>
    </div>
  );
} 

export default App1;