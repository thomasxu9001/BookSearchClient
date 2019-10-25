import React from 'react';
import {mount, ReactWrapper} from 'enzyme';
import {BookCard, Props} from '../components/BookCard';
import {Book} from "../Book";
import {createLocation, createMemoryHistory} from "history";
import {match as routerMatch} from "react-router";


const history = createMemoryHistory();
const path = `/route/:id`;

const match: routerMatch<{ id: string }> = {
    isExact: false,
    path,
    url: path.replace(':id', '1'),
    params: {id: "1"}
};
const location = createLocation(match.url);

describe('SearchInput', () => {

    let
        subject: ReactWrapper<Props>,
        item: Book
    ;

    beforeEach(() => {
        item = {
            id: 1,
            title: 'test',
            author: 'me',
            description: 'long description.'
        }
        subject = mount(
            <BookCard
                item={item}
                history={history}
                match={match}
                location={location}
            />
        );
    });

    it('looks good', async () => {
        expect(subject).toMatchSnapshot();
    });

});
