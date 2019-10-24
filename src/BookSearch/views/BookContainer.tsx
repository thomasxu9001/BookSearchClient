import React, {Component} from 'react';
import {withRouter, RouteComponentProps, } from 'react-router';
import {Link} from 'react-router-dom';

import BookDetail from "../components/BookDetail";
interface StateProps {

}

interface State {
}


export type Props = StateProps & RouteComponentProps<{ id: string }>;

export class BookContainer extends Component<Props, State> {

    render() {
        const {match} = this.props;

        return (
            <div className="bookContainer">
                <Link className="backToList" to={'/'}>
                    Back to Book List
                </Link>
                <BookDetail bookId={+match.params.id}/>
            </div>
        );
    }
}

export default withRouter(BookContainer);



