import './App.css'
import { Waku } from './Waku.js'

const App = ({ name }: { name: string }) => {
  return (
    <main className="container">
      <Waku/>
      <div>
        Hello, {name}!
      </div>
      <div className="description">
        Edit <code>src/components/App.tsx</code> and save to reload.
      </div>
    </main>
  )
}

export default App
