import React from 'react';
import {createLocation, createMemoryHistory} from 'history';
import {match as routerMatch} from 'react-router';
import {BrowserRouter} from 'react-router-dom'

import {mount, ReactWrapper} from 'enzyme';
import {BookContainer, Props} from "../views/BookContainer";

const history = createMemoryHistory();
const path = `/route/:id`;

const match: routerMatch<{ id: string }> = {
    isExact: false,
    path,
    url: path.replace(':id', '1'),
    params: {id: "1"}
};

const location = createLocation(match.url);

describe('BookContainer', () => {

    let
        subject: ReactWrapper<Props>
    ;

    beforeEach(() => {

        subject = mount(
            <BrowserRouter>
                <BookContainer
                    history={history}
                    location={location}
                    match={match}
                />
            </BrowserRouter>
        );
    });

    it('looks good', () => {
        expect(subject).toMatchSnapshot();
    });

});
