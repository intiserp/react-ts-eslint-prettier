import reactLogo from './assets/react.svg'
import changePlusPlusLogo from './assets/changeplusplus.png'
import './App.css'

function App() {
  return (
    <div className="app">
      <div>
        <a href="https://www.changeplusplus.org" target="_blank">
          <img src={changePlusPlusLogo} className="logo" alt="Change++ logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ChangePlusPlus + React = ❤️</h1>
      <p>React TypeScript ESLint Prettier Template</p>
        <p>Start editing from <code>src/App.tsx</code></p>
    </div>
  )
}

export default App
