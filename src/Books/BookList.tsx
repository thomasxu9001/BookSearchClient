import React, {Component} from 'react';
import BookCard from "./BookCard";

interface StateProps {

}

interface State {
}


export type Props = StateProps;

export class BookList extends Component<Props, State> {

    render() {

        return (
            <div>
                <div> BOOK1</div>
                <div> BOOK2</div>
                <div> BOOK3</div>
                <div> BOOK4</div>

                <BookCard/>
            </div>
        );
    }
}
export default BookList;



