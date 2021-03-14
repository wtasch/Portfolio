
import React from 'react';
import PostContainer from './PostContainer';

const Profile = (props) => {
  return (
    <div>
      <h3>{props.user.name}</h3>
      <h3>{props.user.username}</h3>
      <img src={props.user.image} />
      {props.user.kidList.map(kid => <p>kids list here {kid.name.first}</p>)}
      <PostContainer post={props.user.postList} />
    </div>
  )
}
export default Profile;