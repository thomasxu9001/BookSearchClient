import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Book.less";
interface StateProps {

}

interface State {
}


export type Props = StateProps;

export class SearchInput extends Component<Props, State> {

    render() {

        return (
            <div className="SearchBoxContainer">
                <FontAwesomeIcon icon="search" />
                <input/>
            </div>
        );
    }
}
export default SearchInput;



