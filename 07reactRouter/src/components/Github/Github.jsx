import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

// const [data , setData] = useState([])
// useEffect( () => {
//     fetch('https://api.github.com/users/vishallyours')
//     .then( res => res.json() )
//     .then( data => {
//         console.log();
//         setData(data)
//     })
// }, [])

    return (
        <div className='text-center bg-gray-700 text-white p-4 text-3xl flex flex-col gap-4 justify-center items-center '>
            Github Followers : {data.followers}
            <img src={data.avatar_url} alt="Git Picture" className="rounded-full h-auto w-48"  /> 
        </div>
    )
}

export default Github

export const githubInfoLoader = async() => {
    const res = await fetch('https://api.github.com/users/vishallyours')
     
    return res.json()
}