import './App.css';
import './Style/Header.css';
import './Style/UserDetail.css';
import './Style/FinalCheckout.css';
import './Style/PaymentMode.css';
import './Style/FAQ.css';
import './Style/Footer.css';
import Header from './Component/Header';
import UserDetails from './Component/UserDetail';
import FinalCheckout from './Component/FinalCheckout';
import PaymentMode from './Component/PaymentMode';
import FAQ from './Component/FAQ';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div id='userdetail_finalcheckout'>
        <UserDetails />
        <FinalCheckout />
      </div>
      <div id='paymentmodemain'>
        <PaymentMode />
        <hr className='hrline' />
      </div>
      <div id='faqmain'>
        <FAQ />
        <hr className='hrline' />
      </div>
      <Footer />
    </div>
  );
}

export default App;
