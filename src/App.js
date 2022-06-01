import './App.css';
import Button  from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Button onClick={() => {
      console.log("clicked")
    }}>Test</Button>
  );
}

export default App;
