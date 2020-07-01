import React from 'react';
import Login from  './components/login/login'
import  {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Layout  from './components/admin/layout'

function App() {
  return (
    <div className="App">

          <Router>
              <Switch >
                  <Route path="/" exact component={Login} />:
                  <Route path="/home"  component={Layout} />
              </Switch>
                {/* <Protected exact path="/profile" component={Profile}></Protected> */}
          </Router>




      {/* <Layout></Layout> */}
      {/* <Login></Login> */}
    </div>
  );
}

export default App;
