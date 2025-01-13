import { Header } from "./components/Header/Index"
import { Menu } from "./components/Menu/Index"
import { UserSearch } from "./pages/UserSearch/Index"
import { UserConfig } from "./pages/UserConfig/Index"
import { Footer } from "./components/Footer/Index"
import './styles/config.scss'
import './styles/normalize.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="wrapperContent">
        <Menu />
        <Routes>
          <Route path="/" element={<UserSearch />} />
          <Route path="/UserConfig/:id" element={<UserConfig />} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App
