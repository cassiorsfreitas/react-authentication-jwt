import React, { useState, useEffect } from 'react';

import api from '../api';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get('/users');

      setUsers(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.website})
          </li>
        ))}
      </ul>

      <button type="button">Logout</button>
    </>
  );
}
