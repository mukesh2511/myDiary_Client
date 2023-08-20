import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NoteItem.css";

const ViewNote = () => {
  const [note, setNote] = useState({});
  const host = "http://localhost:5000";
  const location = useLocation().pathname.split("/")[2];
  console.log(location);
  useEffect(() => {
    const fetchNote = async () => {
      const response = await fetch(`${host}/api/notes/find/${location}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      if (!response) throw new Error();

      const data = await response.json();
      setNote(data);
    };
    fetchNote();
  }, [location]);

  return (
    <>
      <div className="notecontainer">
        <div className="title">
          <h1>Title</h1>
          <p>{note.title}</p>
        </div>
        <div className="desc">
          <h1>Description</h1>
          <p>{note.description}</p>
        </div>
        <div className="tags">
          <h1>Tags</h1>
          <p>{note.tag}</p>
        </div>
        <Link to="/">
          <button className="btn btn-primary">Back</button>
        </Link>
      </div>
    </>
  );
};

export default ViewNote;
