import React, {Component} from 'react';
import "./Book.less";

interface StateProps {

}

interface State {
}


export type Props = StateProps;

export class BookCard extends Component<Props, State> {

    render() {

        return (
            <div className="BookCard">
                <div> Book Name</div>
                <div> Author</div>
                <div> Description</div>
            </div>
        );
    }
}
export default BookCard;



