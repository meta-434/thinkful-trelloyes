import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

describe('List component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the List as expected', () => {
        const c = [
            { id: 'a', title: 'First card', content: 'lorem ipsum' },
            { id: 'b', title: 'Second card', content: 'lorem ipsum' }
        ]
        const tree = renderer
            .create(<List key={'1'} header={'First list'} cards={c} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
});
