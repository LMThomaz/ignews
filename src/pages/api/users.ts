import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {
      id: 1,
      name: 'Thomaz'
    }, {
      id: 2,
      name: 'Faleiros'
    }, {
      id: 3,
      name: 'Marssarp'
    }
  ];

  return response.json(users);
}