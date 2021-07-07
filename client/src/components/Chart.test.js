import React from 'react';
import { render, fireEvent, waitForElement, wait, getByTestId } from '@testing-library/react';
import Chart from './Chart';

test('renders component', () => { render(<Chart />) });

test('checks if table exist', async () => {
    const { findByTestId } = render(<Chart />);
    await findByTestId('chart');
});

test('checks if title is displayed', async () => {
    const { findByText, findAllByText } = render(<Chart />);
    await findByText(/players with more than 10 searches/i);
});