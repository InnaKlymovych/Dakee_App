import { Routes , Route } from 'react-router-dom'
import './App.css';
import {Container} from "react-bootstrap";
import { home } from './pages/home';

function App() {
  return <Container>(
    <Route path="/" element={<home />} />
    <Route path="/login" element={<login />} />
    <Route path="/signup" element={<signup />} />
    <Route path="/tutorial" element={<tutorial />} />
    <Route path="/questionaire" element={<questionaire />} />
  
  );
}

export default App;
