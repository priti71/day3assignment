import React, { useState } from 'react';
import userData from '../../data';

const Users = () => {
  const [users, setUsers] = useState(userData);
  
  return (
    <div className="container">
      <h1 className="text-center mt-5 text-primary">Users</h1>
      <table className="table table-hover text-center table-bordered mt-3">
        <thead>
          <tr className='table-primary'>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
