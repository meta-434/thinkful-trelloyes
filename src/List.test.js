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
        const tree = renderer
            .create(<List id={'1'} header={'First list'} cardIds={[ 'a', 'b']} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
});