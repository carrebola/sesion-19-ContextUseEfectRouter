import { Routes, Route } from 'react-router-dom'


import { Home } from './vistas/Home'
import { About } from './vistas/About'
import { Login } from './vistas/Login'
import { Header } from './componentes/Header'
import { Registro } from './vistas/Registro'
import { GlobalContextProvider } from './context/GlobalContext'

function App() {

  return (
    <GlobalContextProvider>
      <div className='bg-slate-300 h-svh'>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registro' element={<Registro />} />
        </Routes>
      </div>

    </GlobalContextProvider>

  )
}

export default App
