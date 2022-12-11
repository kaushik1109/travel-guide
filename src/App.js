import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Content from './components/Content'
import Data from './Data'


function App() {
  const places= Data.map((item) =>{
    return <Content 
         item={item}
     />
 })

  return (
    <div className="App">
      <Navbar />
      {places}
    </div>
  );
}

export default App;
