import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import Toggle from "../features/components/Toggle";

describe('Toggle component', () => {

    test('renders Toggle as a text', () => {
        render(<Toggle />);

        const toggleTextElement = screen.getByText('Changed!');

        expect(toggleTextElement).toBeInTheDocument();
    });

    test('renders frontend as a text', () => {
        render(<Toggle />);

        const worldElement = screen.getByText(/Hello/);

        expect(worldElement).toBeInTheDocument();
    });

    test('Toogle button click', () => {
        render(<Toggle />);

        const buttonElement = screen.getByRole('button', { name: /Changed/i });
        userEvent.click(buttonElement);

        const backendElement = screen.getByText(/welcome/i);
        expect(backendElement).toBeInTheDocument();
    });

    test('Toogle button two times click', () => {
        render(<Toggle />);

        const buttonElement = screen.getByRole('button', { name: /changed/i });
        userEvent.click(buttonElement);
        userEvent.click(buttonElement);

        const worldElement = screen.getByText('world', { exact: false });
        expect(worldElement).toBeInTheDocument();
    });

});