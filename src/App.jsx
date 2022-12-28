import { useEffect } from 'react'

function App() {
  useEffect(() => {
    async function go() {
      const picsPromise = await fetch('http://localhost:8000/news')
      const pics = await picsPromise.json()
      console.log({pics})
    }
    go()

    // cleanup after unmounting...
    // return () => {
      
    // }
  }, [])

  return (
    <div>
      <h1 className="text-green-500 font-bold text-3xl">Cat Breed Game</h1>
    </div>
  )
}

export default App