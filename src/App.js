import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App font-['roboto']">
      <div className='md:px-12 lg: px-12'>
        <Home></Home>
      </div>
      <div>
      <section className='pt-32 px-0'>
            <Footer></Footer>
          </section>
      </div>
    </div>
  );
}

export default App;
