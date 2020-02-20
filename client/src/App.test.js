import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { MockedProvider } from '@apollo/client/testing';
import { GET_COMMENTS } from './graphql'

const mocks = [
  {
    request: {
      query: GET_COMMENTS,
    },
    result: {
      data: {
        comments: { id: '1', name: 'Buck', email: 'buck@wild.com', body: 'Howdy', createdAt: '1582164534965' },
      },
    },
  },
];

test('shows app', async () => {
  const component = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );
  const title = component.getByText(/Guestbook/i);
  expect(title).toBeInTheDocument();
});
