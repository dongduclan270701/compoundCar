import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from 'Components/Header'
import Footer from 'Components/Footer'
import Banner from 'Components/Content/Banner'
import Location from 'Components/Content/Location'
import Services from 'Components/Content/Services'
import Prices from 'Components/Content/Prices'
import Cars from 'Components/Content/Cars'
import Feedbacks from 'Components/Content/Feedbacks'
import Booking from 'Components/Content/Booking'
import Quanlity from 'Components/Content/Quanlity'
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Location />
      <Services />
      <Prices />
      <Cars />
      <Feedbacks />
      <Booking />
      <Quanlity />
      <Footer />
    </div>
  );
}

export default App;
