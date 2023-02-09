import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import Header from './components/Layout/Header';
function App() {

  return (
    <Router>
        <Header />
        <AppRouter />
    </Router>
  )
}

export default App;
