import { Clicker } from "./components/clicker/clicker"
import { Layout } from "./components/layout/layout"
import { BgGameMusic } from "./components/MusicGame/musicgame"
import { ClickerProvider } from "./components/ClickerContext/clickerContext"

function App() {

  return (
    <>
      <ClickerProvider>
        <Layout />
          <Clicker />
          <BgGameMusic />
      </ClickerProvider>
    </>
  )
}

export default App
