import React from 'react';
import { Redirect, Router } from '@reach/router';
import { ParallaxProvider } from 'react-scroll-parallax';

import { LayoutPaths, Pages, Paths, PublicRoute } from '@/pages/routers';
import Guest from '@/layouts/Guest';

const App = () => {
  return (
    <div className="App">
      <ParallaxProvider>
        <Router primary={false}>
          <Guest path={LayoutPaths.Guest}>
            <PublicRoute path={Paths.Home} component={Pages.Home} />
            <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Guest}${Paths.Home}`} />
            <PublicRoute path={Paths.Record} component={Pages.Record} />
            <PublicRoute path={Paths.List} component={Pages.List} />
          </Guest>
        </Router>
      </ParallaxProvider>
    </div>
  );
};

export default App;
