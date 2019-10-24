import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import BookSearch from './BookSearch';
import {BookContainer} from './BookSearch/views/BookContainer';
import {NotFoundPage} from './NotFoundPage';
import style from './App.less';

//Font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faBook, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faSearch, faBook, faChevronLeft, faChevronRight);

export const SwitchConfig: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={BookSearch} />
            <Route exact path="/book/:id" component={BookContainer} />
            <Route component={NotFoundPage} />
        </Switch>
    );
};

const App: React.FC = () => {
  return (
    <div className={style.App}>
        <BrowserRouter>
            <SwitchConfig/>
        </BrowserRouter>

    </div>
  );
};


export default App;

