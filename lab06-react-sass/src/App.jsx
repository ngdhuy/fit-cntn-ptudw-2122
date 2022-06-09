import logo from './logo.svg';
import './App.sass';
import SassModules from './components/SassModules';
import SassNesting from './components/SassNesting';
import SassMixing from './components/SassMixing';

function App() {
  return (
    <div className="App">
      <SassModules />
      <SassNesting />
      <SassMixing />
    </div>
  );
}

export default App;
