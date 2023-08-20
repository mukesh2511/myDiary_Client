import React, { useContext } from "react";
import "./NoteItem.css";
import notecontext from "../context/notes/noteContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Noteitem = (props) => {
  const { showAlert } = props;
  const context = useContext(notecontext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  const navigate = useNavigate();

  const shortenText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };
  return (
    <>
      <div className="box col-md-3 my-3">
        <div className="card">
          <div className="card-body">
            <div className="icon d-flex align-items-center ">
              <h5 className="card-title">{shortenText(note.title, 8)}</h5>
              <div>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="delete mx-2 "
                  onClick={() => {
                    deleteNote(note._id);
                    showAlert("Deleted Successfully", "Success");
                  }}
                />
                <FontAwesomeIcon
                  icon={faEdit}
                  className="edit mx-2 "
                  onClick={() => {
                    updateNote(note);
                  }}
                />
                <button onClick={() => navigate(`/find/${note._id}`)}>
                  view
                </button>
              </div>
            </div>
            <p className="card-text">{shortenText(note.description, 20)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Noteitem;
