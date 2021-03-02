import React from 'react';
import './index.css';
import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './db/user.json';
import statisticalData from './db/statistical-data.json';
import friends from './db/friends.json';
import transactions from './db/transactions.json';

const { name, tag, location, avatar, stats } = user;
function App() {
  return (
    <>
      <Container>
        <Profile
          name={name}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </Container>
    </>
  );
}
export default App;
