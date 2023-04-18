import React, { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Shows } from '../database/db';

const Show = () => {
    const [data, setData]= useState({});
    const {userId} = useParams();

    useLayoutEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=> {
        let fetchData = Shows.filter((key, index)=> key.id == userId);        
        setData(...fetchData);
        // console.log(userId);
    }

    return (
        <div>
            {`useID ${userId}`}
            <button onClick={()=> console.log(data)}>check data state</button>
        </div>
    );
};

export default Show;