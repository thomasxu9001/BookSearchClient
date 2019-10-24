import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router';

import App, {SwitchConfig} from './App';
import BookListContainer from './Books';
import {BookContainer} from './Books/BookContainer';
import {NotFoundPage} from './NotFoundPage';

describe('render APP', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

describe('routes using memory router', () => {

    it('should show BookListContainer / router', async () => {
        const component = mount(<MemoryRouter initialEntries={['/']}>
                <SwitchConfig/>
            </MemoryRouter>
        );
        expect(component.find(BookListContainer)).toHaveLength(1);
    });

    it('should show BookContainer /book/1 router', async () => {
        const component = mount(<MemoryRouter initialEntries={['/book/1']}>
                <SwitchConfig/>
            </MemoryRouter>
        );
        expect(component.find(BookContainer)).toHaveLength(1);
    });

    it('should show NotFoundPage /unknown router', async () => {
        const component = mount(<MemoryRouter initialEntries={['/unknown']}>
                <SwitchConfig/>
            </MemoryRouter>
        );
        expect(component.find(NotFoundPage)).toHaveLength(1);
    });

});


