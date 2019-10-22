import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import BookListContainer from "./Books";
import {BookContainer} from "./Books/BookContainer";
import './App.css';

//Font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faBook } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faSearch, faBook);

const App: React.FC = () => {
  return (
    <div className="App">
        <Router>
            <div>
                <Route exact path="/" component={BookListContainer} />
                <Route path="/book/:id" component={BookContainer} />
            </div>
        </Router>

    </div>
  );
}

export default App;
