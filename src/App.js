import logo from './logo.svg';
import './App.css';
import ButtonV1 from "tsrnspikerolluppackage/components/Button";
import { Button as ButtonV2 } from "tsrnspikerolluppackage/components/v2"; //TODO: default import????
import { Button as ButtonV3 } from "tsrnspikerolluppackage/components/v3";

function App() {
  return (
    <div className="App">
      <ButtonV1>ConsumerJS v1</ButtonV1>
      <ButtonV2>ConsumerJS v2</ButtonV2>
      <ButtonV3>ConsumerJS v3</ButtonV3>
    </div>
  );
}

export default App;
