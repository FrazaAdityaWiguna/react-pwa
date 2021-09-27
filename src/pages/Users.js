import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

function Users() {
  const [users, setUsers] = useState([]);
  const [mode, setMode] = useState('online');

  useEffect(() => {
    let url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then((resp) => {
        resp.json().then((result) => {
          console.log(result);
          setUsers(result);
          localStorage.setItem('users', JSON.stringify(result));
        });
      })
      .catch((err) => {
        setMode('offline');
        let dataUsers = localStorage.getItem('users');
        setUsers(JSON.parse(dataUsers));
      });
  }, []);

  return (
    <Container className='mt-3'>
      <div className='mb-3'>
        {mode === 'offline' ? (
          <div className='alert alert-warning' role='alert'>
            you are in mode offline or some issue with your connection!
          </div>
        ) : null}
      </div>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Users;
