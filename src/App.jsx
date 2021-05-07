import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { FooterApp } from './components/common/FooterApp';
import { HeaderApp } from './components/common/HeaderApp';
import { SwitchRoutesApp } from './routing/SwitchRoutesApp';

function App() {
  return (
    <Router>
      <HeaderApp />
      <SwitchRoutesApp />
      <FooterApp />
    </Router>
  );
}

export default App;
