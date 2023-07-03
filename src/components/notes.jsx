import React, { useEffect, useState } from 'react';
import './CSS/notes.css';
import { Link } from 'react-router-dom';

const Notes = () => {
  const [notesindex, setnotesindex] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:4000/blog')
      .then((response) => response.json())
      .then((data) => {
        setnotesindex(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='container mb-3' style={{ padding: 0 }}>
      <h1 style={{ color: 'black', marginTop: 140 }} className='blogs text-center'>
        Blogs
      </h1>

      <div className='row'>
        {notesindex.map((notes) => (
          <div className="col-md-12 col-lg-6" key={notes.id}>
            <div className="cards">
              <Link style={{ textDecoration: "none", color: "white" }} to={`/Notesdetails/${notes.id}`}>
                <div className='card-body  text-center '>
                  {notes.title}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
