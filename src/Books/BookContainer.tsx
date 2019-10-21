import React, {Component} from 'react';
import BookDetail from "./BookDetail";
interface StateProps {

}

interface State {
}


export type Props = StateProps;

export class BookContainer extends Component<Props, State> {

    render() {

        return (
            <div>
                <div> Book Container Page</div>
                <BookDetail/>
            </div>
        );
    }
}
export default BookContainer;



