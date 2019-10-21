import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {debounce} from 'throttle-debounce';
import "./Book.less";
import {Book} from "./Book";

interface StateProps {
    searchBook: Function
}

interface State {
    searchHint: []
}


export type Props = StateProps;

export class SearchInput extends Component<Props, State> {
    private readonly debounceSearch: debounce<any>;

    constructor(props: Props) {
        super(props);
        this.debounceSearch = debounce(300, this.searchHint.bind(this));
        this.state = {
            searchHint: [],
        };
    }

    onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {searchBook} = this.props;
        e.persist();
        if (e.target.value && e.target.value.length > 0) {
            this.debounceSearch(e.target.value);
        } else {
            this.setState({searchHint: []}, () => {
                searchBook();
            });
        }

    };

    searchHint = (keyword?: string) => {
        // For better practise, we should have another api which just return matched title.
        const baseUrl = "http://localhost:8000/Rest/books";
        let url = keyword ? baseUrl + '?search=' + keyword : baseUrl;
        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        searchHint: result
                    });
                },
                (error) => {
                }
            );
    };

    renderSearchHint = () => {
        const {searchHint} = this.state;
        const {searchBook} = this.props;
        let items = searchHint.map((item: Book) => {
                return <div className="hintItem" key={item.id} onClick={() => searchBook(item.title)}> {item.title}</div>
            }
        );

        return <div className="searchHintContainer">
            {items}
        </div>
    };

    render() {
        const {searchHint} = this.state;

        return (
            <>
                <div className="SearchBoxContainer">
                    <FontAwesomeIcon icon="search"/>
                    <input onChange={this.onChangeHandler}/>
                </div>
                <div className="dropDownContainer">
                    {searchHint && searchHint.length > 0 &&
                    this.renderSearchHint()
                    }
                </div>


            </>
        );
    }
}

export default SearchInput;



