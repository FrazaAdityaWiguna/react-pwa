import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url).then((resp) => {
      resp.json().then((result) => {
        console.log(result);
        setUsers(result);
      });
    });
  }, []);

  return (
    <Container className='mt-3'>
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
