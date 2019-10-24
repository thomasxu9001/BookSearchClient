import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {debounce} from 'throttle-debounce';

import s from '../Book.less';
import {Book} from '../Book';

interface StateProps {
    searchBook: Function
}

interface State {
    searchHint: []
    searchValue: string
}


export type Props = StateProps;

export class SearchInput extends Component<Props, State> {
    private readonly debounceSearch: debounce<any>;

    constructor(props: Props) {
        super(props);
        this.debounceSearch = debounce(300, this.searchHint.bind(this));
        this.state = {
            searchHint: [],
            searchValue: ''
        };
    };

    onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {searchBook} = this.props;

        e.persist();
        // Update input value
        this.setState({searchValue: e.target.value});
        // Update search hint logic
        if (e.target.value && e.target.value.length > 0) {
           this.debounceSearch(e.target.value);
        } else {
            this.setState({searchHint: []}, () => searchBook());
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
                        searchHint: result['items']
                    });
                },
                (error) => {
                }
            );
    };

    searchClickHandler = () => {
        const {searchBook} = this.props;
        const {searchValue} = this.state;

        if (searchValue) {
            this.setState({searchHint: []}, () => searchBook(searchValue));
        }
    };

    dropdownClickHandler = (title: string) => {
        const {searchBook} = this.props;
        this.setState({searchHint: [], searchValue: title}, () => searchBook(title));
    };

    renderSearchHint = () => {
        const {searchHint} = this.state;

        let items = searchHint.map((item: Book) => {
                return <div className={s.hintItem} key={item.id}
                            onClick={() => this.dropdownClickHandler(item.title)}> {item.title}</div>
            }
        );

        return <div className={s.searchHintContainer}>
            {items}
        </div>
    };

    render() {
        const {searchHint, searchValue} = this.state;

        return (

            <div className={s.searchBoxContainer}>
                <div className={s.searchInputContainer}>
                    <input className={s.searchInput} onChange={this.onChangeHandler} value={searchValue}/>
                    <div className={s.searchIcon} onClick={this.searchClickHandler}>
                        <FontAwesomeIcon icon="search"/>
                    </div>

                </div>
                <div className={s.dropDownContainer}>
                    {searchHint && searchHint.length > 0 &&
                    this.renderSearchHint()
                    }
                </div>
            </div>

        );
    }
}

export default SearchInput;



