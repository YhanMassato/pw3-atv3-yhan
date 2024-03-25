import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar.js'
import Create from './components/pages/Create.jsx'
import Delete from './components/pages/Delete.jsx'
import Get from './components/pages/Get.jsx'
import Home from './components/pages/Home.js'
import List from './components/pages/List.jsx'
import Update from './components/pages/Update.jsx'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<NavBar/>}>
            <Route index element={<Home/>}/>

            <Route path='create' element={<Create/>}/>
    
            <Route path='delete' element={<Delete/>}/>

            <Route path='get' element={<Get/>}/>

            <Route path='list' element={<List/>}/>

            <Route path='update' element={<Update/>}/>
            
          </Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}