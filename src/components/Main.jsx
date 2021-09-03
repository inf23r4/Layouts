import React, { useState, useEffect } from 'react'
import {db} from "../firebase";
import {Li, Img, Container} from "./styled/MainStyle"

const renderData = (data) => {
    return(
        <ul>
        {data.map((datos, index) =>{
            return (
                <Li key={index}>
                <Img width="500" height="250" src={datos.url} alt={datos.title} />
                <p>{datos.title}</p>
                </Li>
            ); })}
        </ul>
    );};

function Main() {
    const [data, setData] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 1;

    const pages = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++){
        pages.push(i);
    }
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

    const handlePrevBtn = ()=>{
        setCurrentPage(currentPage -1)
    };
    const handleNextBtn = ()=>{
        setCurrentPage(currentPage +1)
    }

    useEffect(() => {
        const fetchData = async () => {
            const dataCollection = await db.collection("archivo").get();
            setData(
                dataCollection.docs.map((doc) => {
                    return doc.data();
                }))
        }
       fetchData();
    }, [])
    return (
        <Container>
            
            <h1>layouts</h1>

            {renderData(currentItems)}
        
            <button onClick={handlePrevBtn} 
                    disabled={currentPage === pages[0]? true : false}>prev</button>
            
            <button onClick={handleNextBtn}
                    disabled={currentPage === pages[pages.length -1 ]? true : false}>next</button>
        </Container>
    )
}

export default Main
