import React, {useState, useEffect} from "react";
import axios from 'axios';
import DataTable from './data-table'

const Users = (props) => {

  const [usersCollection, setUsersCollection] = useState([]);

  useEffect(() => {
    //****** ON BUILD: Swap the .get parameter for String(window.location.href).replace('/users', '') + '/api/users'
    axios.get('http://localhost:4000/api/users')
      .then(res => {
        setUsersCollection(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  const dataTable = () => {
    return usersCollection.map((data, i) => {
      return <DataTable obj={data} key={i} />;
    });
  };

  return(
    <div className="wrapper-users">
      <div className="container">
        <table className="table table-striped table-dark">
          <thead className="thead-dark">
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {dataTable()}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
