import React, {useState, useEffect } from 'react';
import axiosWithAuth from '../utilities/axiosWithAuth';
import FriendList from './FriendList';


const Friends = () => {
const [friendsList, setFriendsList] = useState([]);

useEffect(() => {
    axiosWithAuth().get('http://localhost:5000/api/friends')
    .then(res => {setFriendsList(res.data);
})
.catch(err => console.log(err.response));

},[]);

const addFriend = friend => {
    axiosWithAuth().post('http://localhost:5000/api/friends', friend)
    .then(res => setFriendsList(res.data))
    .catch(err => console.log(err.response));
}

return(
<div>

<h2>FRIENDS</h2>
<FriendList addFriend={addFriend} />
{friendsList.map(friend => {return <div key={friend.id}>{friend.name}</div>
})}

</div>

)};

export default Friends;