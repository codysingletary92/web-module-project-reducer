import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers/index'
import {addOne, applyNumber, changeOperator, clearDisplay, changeMemory } from './actions/index'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)


  const onChangeMemory = event => {
    dispatch(changeMemory(event.target.textContent))
  }

  const onChangeOperator = event => {
    dispatch(changeOperator(event.target.textContent))
  }

  const onClick = event => {
    dispatch(applyNumber(event.target.textContent))
  }

  const onClearDisplay = event => {
    
    dispatch(clearDisplay())
  }

  console.log(state.total)
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={onChangeMemory}/>
              <CalcButton value={"MR"} onClick={onChangeMemory}/>
              <CalcButton value={"MC"} onClick={onChangeMemory}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={onClick}/>
              <CalcButton value={2} onClick={onClick}/>
              <CalcButton value={3} onClick={onClick}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={onClick}/>
              <CalcButton value={5} onClick={onClick}/>
              <CalcButton value={6} onClick={onClick}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={onClick}/>
              <CalcButton value={8} onClick={onClick}/>
              <CalcButton value={9} onClick={onClick}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={onChangeOperator}/>
              <CalcButton value={"*"} onClick={onChangeOperator}/>
              <CalcButton value={"-"} onClick={onChangeOperator}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={onClearDisplay}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
