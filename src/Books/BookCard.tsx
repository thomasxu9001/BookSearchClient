import React, {Component} from 'react';

interface StateProps {

}

interface State {
}


export type Props = StateProps;

export class BookCard extends Component<Props, State> {

    render() {

        return (
            <div>
                <div> Book Name</div>
                <div> Author</div>
                <div> Description</div>
            </div>
        );
    }
}
export default BookCard;



