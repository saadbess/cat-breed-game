import { useEffect } from 'react'

function App() {
  useEffect(() => {
    // the reqController is to avoid the useEffect remounting strict mode feature
    const reqController = new AbortController()

    async function go() {
      try {
        const picsPromise = await fetch('http://localhost:8000/news', {signal: reqController.signal})
        const pics = await picsPromise.json()
        console.log({pics})
      } catch {
        console.log("our request was canceled")
      }
    }
    go()

    // cleanup after unmounting...
    return () => {
      reqController.abort()
    }
  }, [])

  return (
    <div>
      <h1 className="text-green-500 font-bold text-3xl">Cat Breed Game</h1>
    </div>
  )
}

export default App