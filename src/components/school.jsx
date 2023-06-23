import React from "react";
import './school.css';
import { useState, useEffect } from 'react';
function School() {
    return (
        <div>
            <div className='image-fixed'>
                <Fixed1 />
            </div>
        </div>
    )
}

export default School;

export function Fixed1() {
    const [schoolindex, setschoolindex] = useState([]);
    const fetchData = () => {
        fetch('http://localhost:4000/school')
            .then((response) => response.json())
            .then((data) => {
                setschoolindex(data);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container-fluid d-flex justify-content-center" id='bg2'>
        {schoolindex.map((school) => (
          <div key={school.id} id='logo' className="logo-item text-center ">
            <img 
              src={school.imgurl}
              alt={school.name}
              className="logo-img"
              height={50}
              width={60}
            />
            <p className="school-name" style={{fontSize:12,fontWeight:'700'}}>{school.name}</p>
          </div>
        ))}
      </div>

    )
}