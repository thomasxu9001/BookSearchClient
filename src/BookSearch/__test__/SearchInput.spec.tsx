import React from 'react';
import {mount, ReactWrapper} from 'enzyme';
import {SearchInput, Props} from '../components/SearchInput';

describe('SearchInput', () => {

    let
        subject: ReactWrapper<Props>,
        searchBook: Function
    ;

    beforeEach(() => {
        searchBook = jest.fn();
        subject = mount(
            <SearchInput searchBook={searchBook}/>
        );
    });

    it('looks good', async () => {
        expect(subject).toMatchSnapshot();
    });

});
