import React, { useState, useEffect } from 'react'
import {db} from "../firebase"

const renderData = (data) => {
    return(
        <ul>
            {data.map((datos, index) =>{
                return (
                    <li key={index}>
                      <img width="100" height="50" src={datos.url} alt={datos.title} />
                      <p>{datos.title}</p>
                    </li>
                  );
            })}
        </ul>
    );
};


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
            
            <h1>layouts</h1>

            {renderData(data)}
        </div>
    )
}

export default Main
