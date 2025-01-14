// import React, { useState } from 'react'

// const App = () => {

//   // let user  = "Mayank"


//   // const changeUser = () => {
//   //   console.log(user);
//   //   user = "Sanvi"
//   //   console.log(user);  // value is changing but not reflecting in UI
//   //   // we have to use useState hook to reflect the changes in UI
//   // }
//   // // hello() // will print Hello in console, but in strict mode it will give 2 times hello


//   const [user, setUser] = useState("Mayank")
//   const [num, setNum] = useState("9");

//   // when i made num as "may" then when i increment it gone to may1 to may11 to may111
//   // and when i decrement it gone to NaN 
 
//   // but when i made it "9" aa a string then increrement then it goes to 91 to 9111 to 91111
//   // but when decrement is goes from 9 to 8 to 7  to 6 and if its 91 then 90 to 89

//   const changeUser = () => {
//     console.log(user);
//     setUser("Sanvi")
//     console.log(user);
//   }

  



//   return (
//     // <div>
//     //   <h1>Username is {user}</h1 >
//     //   <button onClick={changeUser}>Change User</button>
//     //   {/* <button onClick={hello()}>Change User</button>  here without clicking it, it will give me hello */}
//     // </div>
//     <div>
//       <h1 className='te'>Number is {num} </h1>
//       <button onClick={function(){
//         setNum(num + 1)
//       }}>Increment number </button>
//       <br />
//       <button onClick={function(){
//         setNum(num - 1)
//       }}>Decrement number </button>
//     </div>
//   )
// }

// export default App



// // 

import React, { useState } from 'react'


const App = () => {

  const [username, setUsername] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted');
    console.log(username);

    setUsername('')
    
    
  }
  return (
    <div>
     <form onSubmit={ (e) => {submitHandler(e)}}>
       <input onChange={(e) =>{
        // console.log("hey");
        // console.log(e.target.value);
        setUsername(e.target.value)
        //it is called 2 way binding 
        
       }}
       value={username} className='px-4 py-3 text-xl m-5 rounded-xl' type="text" placeholder='Enter name'  />
       <br />
       <button className='px-10 py-3 text-xl font-semibold m-4 bg-purple-800 rounded-xl text-cyan-50'> Submit </button>
     </form>

    </div>
  )
}

export default App


