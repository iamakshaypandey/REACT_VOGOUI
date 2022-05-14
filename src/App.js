import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Heroimg from './component/heroimg';
import VogoNow from './component/VogoNow';
import About from './component/About';
import MidilImg from './component/midil-img';
import Redeyscooter from './component/redeyscooter';
import LocatVogo from './component/locatVogo';
import NewAbout from './component/NewAbout';
import Ourgallary from './component/Ourgallary';
import Custumerfeedback from './component/custumerfeedback';
import WhatsnewVoGo from './component/whatsnewVoGo';
import Awaord from './component/awaord';
import Footer from './component/footer';

function App() {
  return (
    <div  className="App">
      <Header/>
      <Heroimg/>
      <VogoNow/>
      <NewAbout/>
      {/* <About/> */}
      <MidilImg/>
      <Redeyscooter/>
      <LocatVogo/>
      <Ourgallary/>
      <Custumerfeedback/>
      <WhatsnewVoGo/>
      <Awaord/>
      <Footer/>
      
    </div>
  );
}

export default App;
