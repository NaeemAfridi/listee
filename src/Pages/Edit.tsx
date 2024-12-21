import React, { useState, useEffect } from 'react';
import dataService from './../services/dataService';
import { useNavigate, useParams } from 'react-router-dom';

interface Player {
  firstname: string;
  lastname: string;
  position: string;
}

interface Errors {
  firstname?: { message: string };
  lastname?: { message: string };
  position?: { message: string };
}

const Edit: React.FC = () => {
  const [firstname, setFirstName] = useState<string>('');
  const [lastname, setLastName] = useState<string>('');
  const [position, setPosition] = useState<string>('');

  const [errors, setErrors] = useState<Errors>({});
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      dataService.getOnePlayer(params.id, (player: Player) => {
        setFirstName(player.firstname);
        setLastName(player.lastname);
        setPosition(player.position);
      });
    }
  }, [params.id]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});

    if (params.id) {
      dataService.updatePlayer(
        params.id,
        { firstname, lastname, position },
        (error: any) => {
          if (!error) {
            navigate('/');
          } else {
            console.error(error);
          }
        }
      );
    }
  };

  return (
    <form className="form-signin" onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 font-weight-normal text-center">Edit Players</h1>

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

export default Edit;
