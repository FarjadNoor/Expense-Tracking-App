import logo from './logo.svg';
import './App.css';

// import Components

import Header from "./Components/Header";
import Balance from "./Components/Balance";
import { AccountSummary } from "./Components/AccountSummary";
import { TransactionHistory } from "./Components/TransactionHistory";
import { AddTransaction } from "./Components/AddTransaction";
import { GlobalProvider } from "./Components/Context/GlobalState";

function App() {
  return (
    <GlobalProvider >
      <Header />
      <div className='container'>

        <Balance />
        <AccountSummary />
        <TransactionHistory/>
        <AddTransaction/>
      </div>
    </GlobalProvider>

  );
}

export default App;
