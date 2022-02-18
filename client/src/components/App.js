import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SideBar from './SideBar';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import Chart from './Chart';
import NotFound from './NotFound';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">

        <SideBar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">

            <TopBar />

            <Switch>
              <Route exact path='/' component={ContentRowTop} />
              <Route path='/lastmovie' component={LastMovieInDb} />
              <Route path='/genres' component={GenresInDb} />
              <Route path='/content' component={Chart} />
              <Route component={NotFound} />
            </Switch>
            
            <Footer />

          </div>
        </div>

      </div>
    </React.Fragment>
  );
}

export default App;
