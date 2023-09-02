import Header from "./components/Header/Header";
import Hero from './components/Hero/Hero';
import './App.css';
import ContentHistoricalSites from "./components/Content/content-historical-sites";
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <ContentHistoricalSites/>
      <Footer/>
    </div>
  );
}

export default App;
