import React, {Component} from 'react';
import {withRouter, RouteComponentProps, } from "react-router";
import {Link} from 'react-router-dom';
import {Book} from "./Book";

interface StateProps {

}

interface State {
    error: any
    isLoaded: boolean
    book: Book | any
}


export type Props = StateProps & RouteComponentProps<{ id: string }>;

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
        const {match} = this.props;

        const url = "http://localhost:8000/Rest/book?id=" + match.params.id;

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
                <Link to={'/'}>
                    Back to Book List
                </Link>
                <div> Book Detail Page</div>
                {book &&
                    <div>
                        <div className="Card__field">
                            Title: {book.title}
                        </div>
                        <div className="Card__field">
                            Author: {book.author}
                        </div>
                        <div className="Card__field">
                            Description: {book.description}
                        </div>
                    </div>
                }

            </div>
        );
    }
}
export default withRouter(BookDetail);



