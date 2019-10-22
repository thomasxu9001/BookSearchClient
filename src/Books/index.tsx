import React, {Component} from 'react';
import BookCard from "./BookCard";
import {Book} from "./Book";

import "./Book.less"
import SearchInput from "./SearchInput";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface StateProps {

}

interface State {
    error: any
    isLoaded: boolean
    items: []
}


export type Props = StateProps;

export class BookListContainer extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        this.searchBook();
    };

    searchBook = (keyword?: string) => {
        const baseUrl = "http://localhost:8000/Rest/books";
        let url = keyword ? baseUrl + '?search=' + keyword : baseUrl;
        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    };

    // Generate BookCard list
    getBookList = () => {
        const {items} = this.state;
       if (items && items.length > 0){
           return items.map((item: Book) => {
                   return <BookCard key={item.id} item={item}/>
               }
           );
       }
        return <div className="noResult">No results found.</div>
    };

    render() {
        const {isLoaded} = this.state;

        return (
            <>
                <div className='bookMainHeader'>
                    <h1><FontAwesomeIcon icon="book"/> Smart Book Search</h1>
                    <SearchInput searchBook={this.searchBook}/>
                </div>
                {isLoaded ? (
                    <div className="bookList">
                        {this.getBookList()}
                    </div>
                ) : (
                    `Loading......`
                )}

            </>
        );
    }
}

export default BookListContainer;



