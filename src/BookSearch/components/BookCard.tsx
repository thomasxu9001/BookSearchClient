import React, {Component} from 'react';
import {RouteComponentProps, withRouter} from 'react-router';

import {Book} from '../Book';
import s from '../Book.less';


interface StateProps {
    item: Book
}

interface State {
}


export type Props = StateProps & RouteComponentProps;

export class BookCard extends Component<Props, State> {

    handleBookCardClick = () => {
        const {item} = this.props;
        this.props.history.push('/book/' + item.id);
    };

    render() {
        const {item} = this.props;
        return (
            <div className={s.bookCard} onClick={this.handleBookCardClick}>
                <div className={s.card__field}>
                    Title: {item.title}
                </div>
                <div className={s.card__field}>
                    Author: {item.author}
                </div>
            </div>
        );
    }
}

export default withRouter(BookCard);



