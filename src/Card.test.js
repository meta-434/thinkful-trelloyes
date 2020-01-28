import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

describe('Card component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the card as expected', () => {
        const tree = renderer
            .create(<Card key={3} title={'test title'} content={'test content!'} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
});