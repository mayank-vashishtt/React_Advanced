// import React from 'react'

// const Card = (props) => {

//     console.log(props.user);
    
//   return (
//     <div>

//         <h1 className='text-3xl'>Username is {props.user}  </h1>
//     </div>
//   )
// }

// export default Card


import React from 'react'

const Card = (props) => {

    console.log(props.photo);
  return (
    <div className='bg-white text-black inline-block p-6 text-center rounded m-3'>
        <img  className="h-32 w-32 rounded-full mb-3" src={props.photo} alt="" />

        <h1 className='text-2xl font-semibold mb-4 '>{props.user}</h1>
        <h4 className='text-blue-700'>{props.profession}</h4>
        <h2>{props.city}, {props.age}</h2>
        <button className='mt-5 bg-emerald-950 text-white px-4 py-2 rounded font-medium'>Add Friend </button>


        {/* <Nav elem={props.city}/> */}

    
    </div>
  )
}

export default Card