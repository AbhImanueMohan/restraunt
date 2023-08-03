
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Allrest from './Components/AllRest/Allrest'
import { Route, Routes } from 'react-router-dom';
import View from './Components/ViewRest/View'



function App() {
  return (
    <div className="App">
      <header className="App-header">
       
{/* localhost ://300 - all restraunt view */}
         <Header/>
         <Routes>
          <Route path='/' element=   {<Allrest/>}/>
          <Route path='/view/:id' element= {<View/>}/>
          
        </Routes>
        <Footer/>
       
      </header>
    </div>
  );
}

export default App;
