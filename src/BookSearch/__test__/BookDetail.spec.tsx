import React from 'react';
import {mount, ReactWrapper} from 'enzyme';
import {BookDetail, Props} from '../components/BookDetail';


describe('BookDetail', () => {

    let
        subject: ReactWrapper<Props>,
        id: number
    ;

    beforeEach(() => {
        id = 1;
        subject = mount(
            <BookDetail bookId={id}/>
        );
    });

    it('looks good', async () => {
        expect(subject).toMatchSnapshot();
    });

});
