import "./App.css";
import Header from './Components/Header'
import Home from './Components/Home'
import Checkout from "./Components/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import { useEffect } from "react";
import { auth } from "./Components/firebase";
import Payment from "./Components/Payment";
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from "./Components/Orders";
import { useStateValue } from "./Components/StateProvider";

const promise = loadStripe(
	'pk_test_51MebHoGqJxDY57r4u9eMYiiGUzQLmckhh4QT5LnhF7UQVlt3uKGFhFLyDFXlnYrRrRj8N3XGctnYBHnRJQMUiX4g00TTuPNxl1'
);

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/login" element={ <Login />} /> 
          <Route path="/" element={<><Header /> <Home /></>} />
          <Route path="/checkout" element={<><Header /> <Checkout /></>} />
          <Route path="/orders" element={<><Header /><Orders /> </>} />
          <Route path="/payment" element={<><Header /><Elements stripe={promise}><Payment /></Elements> </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
