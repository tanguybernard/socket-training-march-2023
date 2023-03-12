import { render, screen, waitFor } from '@testing-library/react';
import nock from 'nock';
import HomePage from "../pages/HomePage";


const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
];


describe('expectedData', () => {
    it('checks if returned data from API rendered into component', async () => {
        nock('https://jsonplaceholder.typicode.com/')
            .defaultReplyHeaders({
                'access-control-allow-origin': '*',
            })
            .get('/posts?_limit=8')
            .reply(200, posts);

        render(<HomePage />);

        await waitFor(() => {
            expect(
                screen.getByText('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
            ).toBeInTheDocument();
        });
    });
});
