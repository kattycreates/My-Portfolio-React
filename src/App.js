import Header from './components/Header';
import Menubar from './components/MenuBar.js';
import Pages from './components/Pages';
import Footer from './components/Footer.js';
import './App.css';
import {useState} from 'react';



function App() {
  const [menu,setMenu]=useState(false);
  return (
    <div className="App">
     <Header menu={menu} setMenu={setMenu}/>
     <Menubar menu={menu} setMenu={setMenu}/>
     <Pages />
     <Footer />
    </div>
  );
}

export default App;
