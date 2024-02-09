import './App.css';
import './Style/Header.css';
import './Style/UserDetail.css';
import './Style/FinalCheckout.css';
import Header from './Component/Header';
import UserDetails from './Component/UserDetail';
import FinalCheckout from './Component/FinalCheckout';

function App() {
  return (
    <div className="App">
      <Header />
      <div id='userdetail_finalcheckout'>
        <UserDetails />
        <FinalCheckout />
      </div>

    </div>
  );
}

export default App;
