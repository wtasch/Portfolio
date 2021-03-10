





import React from 'react';



const KidsPage = (props) => {
    console.log("here" + props)
  return (
<div>
    
{props.potentialKids.map(kid => (
    <div key={kid.cell}>
      <img src={kid.picture.thumbnail} />
      <h3>{kid.name.first} {kid.name.last} </h3>
      <p>{kid.login.username}</p>
      <button onClick={() => props.addKid(kid)}
      >Add Family Member</button>

  </div>

))}
</div>
  )
}

export default KidsPage;