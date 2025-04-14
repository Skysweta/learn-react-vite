import React from 'react'
// import { Movies } from './MovieZone/Movies'
// import UseEEffect from './components/UseEEffect'
// import Fetch_Data_API from './components/Fetch_Data_API'
// import Form from './components/Form'
// import Multiple_Input_Handling from './components/Multiple_Input_Handling'
// import Meal from './Food_Recipe/Meal'
import {BrowserRouter  as Router , Routes , Route} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Course_Detail from './pages/Course_Detail';
import Navbar from"./components/Navbar";

const App = () => {

  return (
    <>

    <Router>
       <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/team" element={<Team></Team>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route path="/product/:id" element={<Course_Detail></Course_Detail>}></Route>
      </Routes>
    </Router>
     

    </>
  )
}

export default App