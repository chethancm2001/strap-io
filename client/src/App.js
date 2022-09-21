import {Routes,BrowserRouter,Route} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Nav from './components/Nav';
function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/nav' element={<Nav />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
