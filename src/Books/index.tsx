import React, {Component} from 'react';
import BookCard from "./BookCard";
import {Book} from "./Book";

import "./Book.less"
import SearchInput from "./SearchInput";

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


    render() {
        const {items, isLoaded} = this.state;
        // Generate BookCard list
        let list = items.map((item: Book) => {
                return <BookCard key={item.id} item={item}/>
            }
        );
        return (
            <>
                <SearchInput searchBook={this.searchBook}/>
                {isLoaded ? (
                    <div className="BookList">
                        {list}
                    </div>
                ) : (
                    `Loading......`
                )}

            </>
        );
    }
}

export default BookListContainer;



