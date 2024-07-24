import './App.scss';
import ShowPads from './components/showPads/ShowPads';
import PadInfo from './components/fetchingPadInfo/PadInfo';

function App() {
  return (
    <div className="App">
      <h1 className='mt-4'>Existings pads</h1>
      <PadInfo/>
    </div>
  );
}

export default App;
