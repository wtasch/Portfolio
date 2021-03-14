import React from 'react';

import '../KidsPage.css';


let picNum = 0;
let picText = '';


const KidsPage = (props) => {

  const reset = () => {
   picNum = picNum + 2
    console.log("prop from kids payge here" + props)
    console.log("picnum " + picNum)
    picText = "https://source.unsplash.com/550x225/?horses&i=" + picNum
    console.log(picText)
}
  return (
<div className="kid-wrapper">
<h1>Check Out These Random Horse Pics</h1>

<img  className="kidImg" src="https://source.unsplash.com/550x225/?horses&i=0" />
<img  className="kidImg" src="https://source.unsplash.com/550x225/?horses&i=1" />
<img  className="kidImg" src="https://source.unsplash.com/550x225/?horses&i=2" />
<img  className="kidImg" src="https://source.unsplash.com/550x225/?horses&i=3" />
<img  className="kidImg" src="https://source.unsplash.com/550x225/?horses&i=4" />
<img  className="kidImg" src="https://source.unsplash.com/550x225/?horses&i=5" />
<img  className="kidImg" src="https://source.unsplash.com/550x225/?horses&i=6" />
<img  className="kidImg" src="https://source.unsplash.com/550x225/?horses&i=7" />
<img  className="kidImg" src="https://source.unsplash.com/550x225/?horses" />
<img  className="kidImg" src="https://source.unsplash.com/550x225/?horses" />

{/* <button type="submit" name="uname" value="uname" onclick="browserlink(ex.google.com,home.html etc)or myfunction();"> submit</button> */}



{/* <button onClick="reset();" >Click for new Horse Pic</button> */}
{props.potentialKids.map(kid => (
    <div key={kid.cell}>
      <img src={kid.picture.thumbnail} />
      <h3>{kid.name.first} {kid.name.last} </h3>
      <p>{kid.login.username}</p>
      <button onClick={() => props.addKid(kid)}      
        >Add Family Member</button>
      <button onClick={() => props.addKid(kid)}      
        >reset</button>

  </div>

))}
</div>
  )
}

export default KidsPage;