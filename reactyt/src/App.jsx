import React, { useState } from 'react'

const App = () => {

  // let user  = "Mayank"


  // const changeUser = () => {
  //   console.log(user);
  //   user = "Sanvi"
  //   console.log(user);  // value is changing but not reflecting in UI
  //   // we have to use useState hook to reflect the changes in UI
  // }
  // // hello() // will print Hello in console, but in strict mode it will give 2 times hello


  const [user, setUser] = useState("Mayank")
  const [num, setNum] = useState(0);

  const changeUser = () => {
    console.log(user);
    setUser("Sanvi")
    console.log(user);
  }

  



  return (
    // <div>
    //   <h1>Username is {user}</h1 >
    //   <button onClick={changeUser}>Change User</button>
    //   {/* <button onClick={hello()}>Change User</button>  here without clicking it, it will give me hello */}
    // </div>
    <div>
      <h1>Number is {num} </h1>
      <button onClick={function(){
        setNum(num + 1)
      }}>Increment number </button>
      <br />
      <button onClick={function(){
        setNum(num - 1)
      }}>Decrement number </button>
    </div>
  )
}

export default App



// 