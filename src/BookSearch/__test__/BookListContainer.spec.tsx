import React from 'react';
import {mount, ReactWrapper} from 'enzyme';
import {BookListContainer, Props} from '../views/BookListContainer';


describe('BookListContainer', () => {

    let
        subject: ReactWrapper<Props>
    ;

    beforeEach(() => {
        subject = mount(
            <BookListContainer/>
        );
    });

    it('looks good', async () => {
        expect(subject).toMatchSnapshot();
    });

});
