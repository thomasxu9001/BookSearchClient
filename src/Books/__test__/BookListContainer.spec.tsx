import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import {BookListContainer, Props} from '../index';


describe('BookListContainer', () => {

    let
        subject: ReactWrapper<Props>
    ;

    beforeEach(() => {
        subject = mount(
            <BookListContainer/>
        );
    });

    it('looks good', () => {
        expect(subject).toMatchSnapshot();
    });

});
