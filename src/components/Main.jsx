import React, { useState, useEffect } from 'react'
import {db} from "../firebase"

function Main() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const dataCollection = await db.collection("archivo").get();
            setData(
                dataCollection.docs.map((doc) => {
                    return doc.data();
                })
            )
        }
       fetchData();
    }, [])
    return (
        <div>
            <ul>
            {data.map((todo, index) =>{
                return <li key={index}>{todo.title}</li>
            })}
        </ul>
        </div>
    )
}

export default Main
