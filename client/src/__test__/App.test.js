import React from 'react';
import App from '../App';
import {render} from '@testing-library/react';
//when app output component loads correctly it should display requested message
test('render App correctly and display welcome text if "output" contains data', () => {
    const {container} = render(<App/>);
    expect(container.innerHTML).toMatch('Welcome! Enter a search term and click search button!');
})