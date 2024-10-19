import './App.css'
import CharDisplayBlock from './components/CharDisplayBlock'
import HeaderBlock from './components/HeaderBlock'
import InputsBlock from './components/InputsBlock'

function App() {

  return (
    <div className="flex flex-row text-left">
      <div className="basis-1/2">
        <CharDisplayBlock />
      </div>
      <div className="flex flex-col basis-1/2">
        <HeaderBlock />
        <InputsBlock />
      </div>
    </div>
  )
}

export default App
