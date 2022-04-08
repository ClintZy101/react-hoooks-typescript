
import './App.css';
import { CustomHook } from './components/CustomHook';
import { UseContext } from './components/UseContext';
import { UseEffectComp } from './components/UseEffectComp';
import { UseReducer } from './components/UseReducer';
import { UseRef } from './components/UseRef';
import { UseStateComp } from './components/UseStateComp';

function App() {

  return (
    <div className="App">
      <h1>Custom Hook</h1>
      <CustomHook />
      <h1>UseRef</h1>
      <UseRef />
      <h1>UseReducer</h1>
      <UseReducer />
      <h1>UseContext</h1>
      <UseContext />
      <h1>UseEffect</h1>
      <UseEffectComp />
      <h1>UseState</h1>
      <UseStateComp />
    </div>
  );
}

export default App;
