import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from 'Components/Header'
import Footer from 'Components/Footer'
import Content from 'Components/Homepage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              <Content />
              <Footer />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
