import React from 'react';
import './App.css';
import SearchInput from "./Books/SearchInput";
import BookList from "./Books/BookList";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faSearch);

const App: React.FC = () => {
  return (
    <div className="App">
      <SearchInput/>
      <BookList/>
    </div>
  );
}

export default App;
