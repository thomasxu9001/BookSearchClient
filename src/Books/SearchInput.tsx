import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {debounce} from 'throttle-debounce';
import "./Book.less";

interface StateProps {
    searchBook: Function
}

interface State {
    
}


export type Props = StateProps;

export class SearchInput extends Component<Props, State> {
    private readonly debounceSearch: debounce<any>;
    constructor(props: Props) {
        super(props);
        this.debounceSearch = debounce(500, this.props.searchBook.bind(this));
    }

    onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        this.debounceSearch(e.target.value);
    };

    render() {

        return (
            <div className="SearchBoxContainer">
                <FontAwesomeIcon icon="search"/>
                <input onChange={this.onChangeHandler}/>
            </div>
        );
    }
}

export default SearchInput;



