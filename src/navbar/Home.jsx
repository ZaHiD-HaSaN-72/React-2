import React, { useState } from 'react'
import Nav from './shared/nav';

function Home() {
    
    const [count, setcount] = useState(0);
    const IncHandler = ()=>{
        setcount(count+1)
    }
    const DecHandler = ()=>{
        if (count>0) {
            setcount(count-1)
        }
    }
  return (
    <>
   <Nav/>
      <h1 className='text-4xl font-bold text-center'>counter: {count}</h1>
      <button 
      onClick={IncHandler}
      className='block text-xl py-1 px-3 bg-stone-500 text-white rounded mx-auto mt-3 font-bold'>Increment</button>
      <button
      onClick={DecHandler}
      className='block text-xl py-1 px-3 bg-stone-500 text-white rounded mx-auto mt-3 font-bold'>Decrement</button>
    </>
  )
}

export default Home;
