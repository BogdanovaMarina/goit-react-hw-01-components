import React from "react"
import "./App.css"
import "./index.css"
import Profile from "./components/Profile/Profile"
import FriendList from "./components/FriendList/FriendList"
import Statistics from "./components/Statistics/Statistics"
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"

import user from "./db/user.json"
import statisticalData from "./db/statistical-data.json"
// console.log(statisticalData)
// console.log(user)
const { name, tag, location, avatar, stats } = user
function App() {
	return (
		<>
			<Profile name={name} tag={tag} location={location} avatar={avatar} stats={stats} />
			<Statistics title="Upload stats" stats={statisticalData} />
			<FriendList />
			<TransactionHistory />
		</>
	)
}
export default App
