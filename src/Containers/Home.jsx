import React from 'react'
import Products from '../Components/Products'
import initialState from '../initialState'

function Home() {
    return (
        <>
            <h1>
            Home
            </h1>
            <Products products={initialState.products}/>
        </>
    )
}

export default Home
