import React, { useState } from 'react'
import About from '../pages/About'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/slices/counterSlice'
import { setAuthToken, removeAuthToken } from '../store/slices/authTokenSlice'
import { useEffect } from 'react'
const Home = () => {
    const [homeValue, setHomeValue] = useState("")
    // functions
    // handleHomeValue
    const handleHomeValue = () => {
        setHomeValue("lorem ipsum")
    }
    // console.log(homeValue)
    // redux toolkit hooks
    const count = useSelector((state) => state.counter.value)
    const authToken = useSelector((state) => state.authToken.authToken)
    const dispatch = useDispatch()
    useEffect(() => {
        const storedAuthToken = localStorage.getItem('authtoken')
        if (storedAuthToken) {
            dispatch(setAuthToken(storedAuthToken))
        }
    }, [dispatch])

    return (
        <>
            <p>
                Home
            </p>
            <p>
                Why Redux
            </p>
            <button
                onClick={handleHomeValue}
            >
                Set Home Value
            </button>
            {homeValue}
            <About home={homeValue} />
            <hr />
            <h1>Redux toolkit documentation example</h1>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
            <hr />
            <h2>Redux our practical use case</h2>
            <h3>auth token in redux store</h3>
            {/* auth token */}
            <div>
                {authToken ? (
                    <div>
                        <p>Authenticated with token: {authToken}</p>
                        <button onClick={() => dispatch(removeAuthToken())}>
                            Logout (Remove Auth Token)
                        </button>
                    </div>
                ) : (
                    <p>Not authenticated</p>
                )}
            </div>
        </>
    )
}

export default Home