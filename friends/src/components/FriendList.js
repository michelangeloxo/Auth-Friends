import React, { useState } from 'react';

const FriendList = ({ addFriend }) => {
const [friends, setFriends] = useState({name:"", email:"", age:""});
const handleChange = event => {
    setFriends({...friends, [event.target.name]: event.target.value});
};

const handleSubmit = event => {
    event.preventDefault();
    addFriend(friends);
    };
    
return (
<form onSubmit={handleSubmit}>
<input name='name' placeholder="name" value={friends.name} onChange={handleChange} />
<input name='email' placeholder="email" value={friends.email} onChange={handleChange} />
<input name='age' placeholder="age" value={friends.age} onChange={handleChange} />
<button type='submit'>Add Friend</button>
</form>
);
};

export default FriendList; 
