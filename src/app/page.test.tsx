import { render, screen } from '@testing-library/react';
import Home from './page';
import { apiMovies } from './_api/axios';

jest.mock('./_api/axios', () => ({
    apiMovies: {
        get: jest.fn(),
        default: {}
    }
}))

describe('Testando Home', () => {
    test('renderizando filmes', async () => {
        (apiMovies.get as jest.Mock).mockResolvedValue({
            data: {
                Search: [
                    { Title: 'Harry Potter' },
                    { Title: 'Harry Potter and the Chamber of Secrets' },
                    { Title: 'Harry Potter and the Prisoner of Azkaban' },
                ]
            }
        });

        render(await Home());

        expect(screen.getByText('Harry Potter')).toBeInTheDocument();
        expect(screen.getByText('Harry Potter and the Chamber of Secrets')).toBeInTheDocument();
        expect(screen.getByText('Harry Potter and the Prisoner of Azkaban')).toBeInTheDocument();
    })

    test('renderizando casas', async () => {
        render(await Home());

        expect(screen.getByText('Gryffindor')).toBeInTheDocument();
        expect(screen.getByText('Slytherin')).toBeInTheDocument();
        expect(screen.getByText('Ravenclaw')).toBeInTheDocument();
        expect(screen.getByText('Hufflepuff')).toBeInTheDocument();
    })
})