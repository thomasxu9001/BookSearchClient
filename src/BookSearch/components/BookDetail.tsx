import React, {Component} from 'react';

import {Book} from '../Book';
import s from "../Book.less";

interface StateProps {
    bookId: number
}

interface State {
    error: any
    isLoaded: boolean
    book: Book | any
}


export type Props = StateProps;

export class BookDetail extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            book: []
        };
    }

    componentDidMount() {
        this.getBookDetail();
    };

    getBookDetail = () => {
        const {bookId} = this.props;
        const url = "http://localhost:8000/Rest/book/id/" + bookId;

        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        book: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    };

    render() {
        const {book} = this.state;
        return (
            <div>
                {book &&
                <div>
                    <div className={s.bookDetailTitle}>
                        {book.title}
                    </div>
                    <div className={s.bookDetailAuthor}>
                        Author: {book.author}
                    </div>
                    <div className={s.bookDetailDescription}>
                        {book.description}
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default BookDetail;



