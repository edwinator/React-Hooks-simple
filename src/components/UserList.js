import React from 'react';
import useResources from './useResources';
import { isError } from 'util';

const UserList = () => {
  const users = useResources('users');
  return (
    <ul>
      {users.map(user => (
        <li key={isError.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
