import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router';

import App from './App';
import BookListContainer from "./Books";

describe('render APP', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

describe('routes using memory router', () => {
    it('should show BookListContainer / router', () => {
        const component = mount(<MemoryRouter initialEntries={['/']}>
                <App/>
            </MemoryRouter>
        );
        expect(component.find(BookListContainer)).toHaveLength(1);
    });

});


