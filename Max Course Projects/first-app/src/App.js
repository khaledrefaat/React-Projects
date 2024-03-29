import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersItem from './components/Users/UserItem';
import Card from './components/Ui/Card';
import ErrorModal from './components/Ui/ErrorModal';
import './App.css';

function App() {
  const [usersList, setUsersList] = useState([]);
  const [isErorr, setIsError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const addUser = user => setUsersList(users => [...users, user]);

  const showModal = errorText => {
    setIsError(true);
    setErrorText(errorText);
  };
  const hideModal = () => setIsError(false);

  return (
    <>
      {isErorr && (
        <ErrorModal error={errorText} hideModal={hideModal}>
          this is shit shity shit
        </ErrorModal>
      )}
      <main className="app">
        <Card>
          <AddUser showError={showModal} AddUserHandler={addUser} />
        </Card>
        {usersList.map(user => (
          <Card key={Math.random()}>
            <UsersItem user={user} />
          </Card>
        ))}
      </main>
    </>
  );
}

export default App;
