import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import BookListContainer from "./Books";
import {BookContainer} from "./Books/BookContainer";
import {NotFoundPage} from "./NotFoundPage";
import './App.css';

//Font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faBook, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faSearch, faBook, faChevronLeft, faChevronRight);

const App: React.FC = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={BookListContainer} />
                <Route exact path="/book/:id" component={BookContainer} />
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>

    </div>
  );
};

export default App;
