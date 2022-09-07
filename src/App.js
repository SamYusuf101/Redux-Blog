import "./index.css";
import Header from "./container/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import productListing from "./container/ProductListing";
import ProductDetails from "./container/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={productListing} />
          <Route path="/product/:productId" exact component={ProductDetails} />
          <Route>404 not found </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
