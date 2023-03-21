import { GlobalStyle } from '../GlobalStyle';
import { Layout } from "./Layout/Layout.styled";

import { User } from './User/UserMarkup'
import userData from './data/userData.json'
import { Statistics } from 'components/Statistics/StatsList';
import stats from './data/statistics.json'
import { FriendList } from './friends/FriendList/FriendList'
import friends from './data/friends.json'
import {TransactionHistory} from './Transactionst/TransactionsList'
import transactions from './data/transactions.json'
export const App = () => {
  return (
      <Layout>
      <User user={userData}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </Layout>
  );
};