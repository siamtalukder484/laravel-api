import React, { useState } from 'react'

const Home = () => {

  let [count, setCount] = useState("0")
  let [error , setError] = useState("")

let handleIncrement = () => {
  if(count < 10){
    count++
    setCount(count)
    setError("")
  }else{
      setError("10 er thake boro newa jabea na")
  }
}
let handleDecrement = () => {
  count--
  setCount(count)
  setError("")
}

  return (
   <section>
        <div className='container'>
            <button onClick={handleIncrement}>Increment</button>
            <h1 className='count'>{count}</h1>
            <button onClick={handleDecrement}>Decrement</button>
            <p>{error}</p>
        </div>
   </section>
  )
}

export default Home