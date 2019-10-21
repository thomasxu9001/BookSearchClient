import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import BookListContainer from "./Books";

library.add(fab, faSearch);

const App: React.FC = () => {
  return (
    <div className="App">
      <BookListContainer/>
    </div>
  );
}

export default App;
