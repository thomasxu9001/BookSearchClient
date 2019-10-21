import React from 'react';
import './App.css';
import SearchInput from "./Books/SearchInput";
import BookList from "./Books/BookList";

const App: React.FC = () => {
  return (
    <div className="App">
      <SearchInput/>
      <BookList/>
    </div>
  );
}

export default App;
