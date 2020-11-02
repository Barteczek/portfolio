import React from 'react';
import { Switch, Route } from 'react-router-dom';


import {MainLayout} from './components/layout/MainLayout/MainLayout';

// import routes
import { Homepage } from './components/views/Homepage/Homepage';

class App extends React.Component {

  render() {
    return (
      <MainLayout>
          <Switch>
            <Route path='/' exact component={Homepage} />
            {/* <Route path='/products/:id' exact component={Product} />
            <Route path='/cart' exact component={Cart} />
            <Route path='/checkout' exact component={Checkout} />
            <Route path='/submit' exact component={Submit} />
            <Route component={NotFound} /> */}
          </Switch>
      </MainLayout>
    );
  }
}

export default App;