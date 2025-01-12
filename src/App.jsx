import { Header } from "./components/Header/Index"
import { Menu } from "./components/Menu/Index"
import { UserSearch } from "./pages/UserSearch/Index"
import './styles/config.scss'
import './styles/normalize.scss'

function App() {
  return (
    <>
    <Header/>
    <div className="wrapperContent">
      <Menu/>
      <UserSearch/>
    </div>
    </>
  )
}

export default App
