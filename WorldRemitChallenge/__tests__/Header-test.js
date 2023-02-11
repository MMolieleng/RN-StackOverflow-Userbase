/**
 * @format
 */

import 'react-native';
import React from 'react';
import Header from '../components/Header';
import { render } from '@testing-library/react-native';

it('Check Header Renders Correct Title', () => {
        const screen = render(<Header title={"App Title"} />);
        expect(screen.getAllByText("App Title")).toHaveLength(1)
});
