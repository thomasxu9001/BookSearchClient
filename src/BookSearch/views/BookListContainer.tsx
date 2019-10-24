import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import BookCard from '../components/BookCard';
import {Book} from '../Book';
import "../Book.less";
import SearchInput from '../components/SearchInput';
import PaginationFooter from '../../PaginationFooter';



interface StateProps {

}

interface State {
    error: any
    isLoaded: boolean
    items: []
    totalPage: number
    currentPage: number
    filter: string
}


export type Props = StateProps;

export class BookListContainer extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            totalPage: 0,
            currentPage: 1,
            filter:''
        };
    }

    componentDidMount() {
        this.searchBook();
    };

    searchBook = (keyword?: string, page?: number) => {
        const baseUrl = "http://localhost:8000/Rest/books";
        let url = keyword ? baseUrl + '?search=' + keyword + '&': baseUrl + '?';
        url = page ? url + 'page=' + page : url;

        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(
                (result) => {

                    this.setState({
                        filter: keyword ? keyword : '',
                        isLoaded: true,
                        items: result['items'],
                        totalPage: result['total_page'],
                        currentPage: result['page']
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        filter: keyword ? keyword : '',
                        isLoaded: true,
                        error,
                        totalPage: 0,
                        currentPage: 1
                    });
                }
            );
    };

    onPaginationClickHandler = ( page: number) => {
        const {filter} = this.state;
        this.searchBook(filter, page);
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
        const {isLoaded, totalPage, currentPage} = this.state;

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
                <PaginationFooter totalPage={totalPage} currentPage={currentPage} onPageChange={this.onPaginationClickHandler}/>
            </>
        );
    }
}

export default BookListContainer;



