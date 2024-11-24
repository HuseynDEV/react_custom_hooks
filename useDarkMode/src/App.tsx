import { useDarkMode } from "./useDarkMode"

const App = () => {

  const [mode, setMode]=useDarkMode('theme')
  return (
    <div>
      <div>{mode}</div>
      <button onClick={()=>setMode('dark')}>Dark</button>
      <button onClick={()=>setMode('light')}>Light</button>
    </div>
  )
}

export default App