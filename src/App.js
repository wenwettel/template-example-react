import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Benefits from "components/Benefits";
import FrequentQuestions from "components/FrequentQuestions";
import { Header, Footer } from "styled";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Header />
          <Footer />
        </Route>
        <Route path="/">
          <Header />
          <Benefits />
          <FrequentQuestions />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
