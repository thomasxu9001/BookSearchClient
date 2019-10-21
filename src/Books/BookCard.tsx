import React, {Component} from 'react';
import "./Book.less";
import {Book} from "./Book";

interface StateProps {
    item: Book
}

interface State {
}


export type Props = StateProps;

export class BookCard extends Component<Props, State> {

    render() {
        const {item} = this.props;
        return (
            <div className="BookCard">
                <div className="Card__field">
                    Title: {item.title}
                </div>
                <div className="Card__field">
                    Author: {item.author}
                </div>
            </div>
        );
    }
}
export default BookCard;



