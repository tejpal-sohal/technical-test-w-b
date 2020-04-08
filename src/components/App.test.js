import React from 'react';
import { render, fireEvent, cleanup, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App'

afterEach(cleanup)

describe('Top Trumps Card Check', () =>{
    test('Nav Bar has 6 Cards by Default', () => {
        const { asFragment, getByText } = render(<App />)
        expect(getByText('You have 6 Cards')).toBeInTheDocument()
        // expect(asFragment()).toMatchSnapshot();
    })

    test('Nav Bar Main Logo', () => {
        const { getByAltText} = render(<App />)
        expect(getByAltText('nav-logo')).toBeInTheDocument()
    })

    test('New Card should contain Name label', () => {
        render(<App />)
        const name = screen.getByText('Name')
        expect(name).toBeInTheDocument()
    })

    test('New Card should contain Type label', () => {
        render(<App />)
        const type = screen.getByText('Type')
        expect(type ).toBeInTheDocument()
    })

    test('New Card should contain Diet label', () => {
        render(<App />)
        const diet = screen.getByText('Diet')
        expect(diet).toBeInTheDocument()
    })

    test('New Card should contain Living label', () => {
        render(<App />)
        const living = screen.getByText('Living')
        expect(living).toBeInTheDocument()
    })

});





