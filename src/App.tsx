import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import BookListContainer from "./Books";
import BookDetail from "./Books/BookDetail";


library.add(fab, faSearch);

const App: React.FC = () => {
  return (
    <div className="App">
        <Router>
            <div>
                <Route exact path="/" component={BookListContainer} />
                <Route path="/book/:id" component={BookDetail} />
            </div>
        </Router>

    </div>
  );
}

export default App;
