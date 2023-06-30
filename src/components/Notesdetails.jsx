import React, { useState, useEffect } from "react";
import "./notes.css";
import { useParams } from "react-router-dom";

export default function Notes() {
  const [note, setNote] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/blog/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setNote(data);
      });
  }, [id]);

  return (
    <div>
      {note && (
        <div className="notesdetail">
          <h1>Nov 16, 2019</h1>
          <h1>{note.title}</h1>
         
        </div>
      )}
    </div>
  );
}
