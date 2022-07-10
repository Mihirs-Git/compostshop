import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Home></Home> */}
      <Cart></Cart>
    </div>
  );
}

export default App;
