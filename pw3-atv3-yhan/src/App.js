import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar.js'
import Create from './components/pages/Create.jsx'
import Get from './components/pages/Get.jsx'
import Home from './components/pages/Home.js'
import List from './components/pages/List.jsx'
import Edit from './components/pages/Edit.jsx'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<NavBar/>}>
            <Route index element={<Home/>}/>

            <Route path='create' element={<Create/>}/>

            <Route path='get' element={<Get/>}/>

            <Route path='list' element={<List/>}/>

            <Route path='edit' element={<Edit/>}/>
            
          </Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}