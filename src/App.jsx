import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import Blogs from './Component/Blogs/Blogs'
import BookMark from './Component/BookMark/BookMark'

function App() {
  const [count, setCount] = useState(0)

  // use blog
  const [book, setbook] = useState([])
  const hendlBook = (mark) => {
    const newBook = [...book, mark]
    setbook(newBook)

  }

  // minit time
  const [time, settime] = useState(0)
  const heandletime = (add) => {
    const newTime = time + add
    settime(newTime)
    console.log(time);

  }

  return (
    <>
      <Header></Header>
      <div className='flex max-w-6xl mx-auto justify-between'>
        <Blogs hendlBook={hendlBook} heandletime={heandletime}></Blogs>
        <BookMark bookM={book} addtime={time}></BookMark>
      </div>
    </>
  )
}

export default App
