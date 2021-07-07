import React from 'react';
import { render, fireEvent, waitForElement, wait, getByTestId } from '@testing-library/react';
import SearchesList from './SearchesList';

test('renders component', () => { render(<SearchesList />) });

test('checks if table exist', async () => {
    const { findByTestId } = render(<SearchesList />);
    await findByTestId('table');
});

test('checks if all columns are displayed', async () => {
    const { findByText, findAllByText } = render(<SearchesList />);
    await findByText(/name/i);
    await findByText(/country/i);
    await findAllByText(/searches/i);
});