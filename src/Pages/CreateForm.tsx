import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dataService from "./../services/dataService";

interface Errors {
  firstname?: { message: string };
  lastname?: { message: string };
  position?: { message: string };
}

const Create: React.FC = () => {
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});

  const navigate = useNavigate();

  const handleCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});

    dataService.createPlayer(
      { firstname, lastname, position },
      (error: any) => {
        if (!error) {
          navigate("/");
        } else {
          console.error(error);
        }
      }
    );
  };

  return (
    <form className="form-signin" onSubmit={handleCreate}>
      <label htmlFor="inputFirstName" className="sr-only">
        First Name
      </label>
      <input
        type="text"
        id="inputFirstName"
        name="firstname"
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
        className="form-control"
        placeholder="First name"
        autoFocus
      />
      {errors.firstname && (
        <div className="alert alert-danger"> {errors.firstname.message}</div>
      )}

      <label htmlFor="inputLastName" className="sr-only">
        Last Name
      </label>
      <input
        type="text"
        id="inputLastName"
        name="lastname"
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
        className="form-control"
        placeholder="Last Name"
        autoFocus
      />
      {errors.lastname && (
        <div className="alert alert-danger"> {errors.lastname.message}</div>
      )}

      <label htmlFor="inputPosition" className="sr-only">
        Position
      </label>
      <input
        type="text"
        id="inputPosition"
        name="position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className="form-control"
        placeholder="Position"
        autoFocus
      />
      {errors.position && (
        <div className="alert alert-danger"> {errors.position.message}</div>
      )}

      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Create;
