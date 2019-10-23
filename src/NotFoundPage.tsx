import React, {Component} from 'react';
import {RouteComponentProps, withRouter} from "react-router";
import {Link} from "react-router-dom";

interface StateProps {

}

interface State {

}


export type Props = StateProps & RouteComponentProps;


export class NotFoundPage extends Component<Props, State> {

    render() {
        return (
            <>
                <Link className="backToList" to={'/'}>
                    Back to Book List
                </Link>
                <h1> Whoops~ This page has not been built.</h1>
            </>
        );
    }
}

export default withRouter(NotFoundPage);



