import Install from './components/Install';
import Home from './components/Home';

function App() {
  
  return (window.ethereum ? <Home /> : <Install />);

  // if (window.ethereum) {
  //   return <Home />;
  // } else {
  //   return <Install />
  // }
}

export default App;