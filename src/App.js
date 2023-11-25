import React, { useState } from 'react';
import UserList from './components/UserList';
import AddUser from './components/AddUser';

const App = () => {
  const [showAddUser, setShowAddUser] = useState(false);
  const [users, setUsers] = useState([]);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
    setShowAddUser(false);
  };

  return (
    <div>
      <h1>React Axios CRUD App</h1>
      {showAddUser ? (
        <AddUser onAddUser={handleAddUser} />
      ) : (
        <button onClick={() => setShowAddUser(true)}>Add User</button>
      )}
      <UserList users={users} />
    </div>
  );
};

export default App;
