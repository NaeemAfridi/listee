import axios from "axios";
import authService from "../services/authService";

class dataService {
  getPlayers(callback: any) {
    axios.get(`${process.env.REACT_APP_API_URL}/players`).then((response) => {
      console.log(response.data);
      callback(response.data);
    });
  }

  getOnePlayer(id: any, callback: any) {
    axios
      .get(`${process.env.REACT_APP_API_URL}/players/${id}`)
      .then((response) => {
        console.log(response.data);
        // return response.data;
        callback(response.data);
      });
  }

  createPlayer(create: any, callback: any) {
    // console.log("create");
    axios
      .post(`${process.env.REACT_APP_API_URL}/players`, create, {
        headers: { "x-auth-token": authService.getToken() },
      })
      .then((response) => {
        if (response.status === 201) {
          console.log(response);
          callback();
        }
      })
      .catch((error) => {
        console.log(error);
        callback(error.response);
      });
  }

  updatePlayer(updateId: any, updatePlayer: any, callback: any) {
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/players/${updateId}`,
        updatePlayer,
        { headers: { "x-auth-token": authService.getToken() } }
      )
      .then((response) => {
        console.log(response);
        callback();
      })
      .catch((error) => {
        console.log(error);
        callback(error.response);
      });
  }

  deletePlayer(deleteId: any, callback: any) {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/players/${deleteId}`, {
        headers: { "x-auth-token": authService.getToken() },
      })
      .then((response) => {
        console.log(response);
        callback();
      })
      .catch((error) => {
        console.log(error);
        callback(error.response);
      });
  }
}

export default new dataService();
