import React, {Component} from 'react';
import BookCard from "./BookCard";
import {Book} from "./Book";

import "./Book.less"

interface StateProps {

}

interface State {
    error: any
    isLoaded: boolean
    items: []
}


export type Props = StateProps;

export class BookList extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8000/Rest/books")
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
            )
    }

    render() {
        const {items} = this.state;
        let list = items.map((item: Book) => {
                return <BookCard key={item.id} item={item}/>
            }
        );
        return (
            <div className="BookList">
                {list}
            </div>
        );
    }
}

export default BookList;



