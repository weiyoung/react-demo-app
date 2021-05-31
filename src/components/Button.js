import { useState } from 'react'

export default function Button() {
    const [count, setCount] = useState(5)

    function decrement() {
        // notice we need to setCount to take in an argument (prevCount), and change prevCount, instead of changing count.
        // this is because if we have two different lines of code that depends on the variable count, the first line's effects would be overridden.
        setCount(prevCount => prevCount - 1)
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div>
            <h1>I want {count} pieces of chicken nuggets!</h1>
            <button onClick={() => setCount(count + 1)}>MORE CHICKIN</button>
            <button onClick={decrement}>less chickin</button>
        </div>
    )
}
