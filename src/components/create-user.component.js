import React from "react";
import axios from 'axios';

const CreateUser = (props) => {
  // const [user, setUser] = useState({name: "", email: ""});

  const onChange = e => {
    props.onChange(e);
      // const { name, value } = e.target;
      // setUser(prevUser => ({
      //     ...prevUser,
      //     [name]: value
      // }));
  };

  const onSubmit = e => {
    e.preventDefault();
    //****** ON BUILD: Swap the .post parameters for String(window.location.href).replace('/create-user', '') + 'api/users/create', props.user
    axios.post('http://localhost:4000/api/users/create', props.user)
      .then((res) => {
        console.log(res.data);
      }).catch((error) => {
        console.log(error);
      });

      // const clearUser = {name: "", email: ""};
      //
      // setUser(prevUser => (clearUser));

      props.clearUser();
  }

  console.log(props.user);

  return (
    <div className="wrapper">
      <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Add User Name</label>
        <input type="text" name="name" value={props.user.name} onChange={onChange} className="form-control"/>
      </div>
      <div className="form-group">
        <label>Add User Email</label>
        <input type="text" name="email" value={props.user.email} onChange={onChange} className="form-control"/>
      </div>
      <div className="form-group">
        <input type="submit" value="Create User" className="btn btn-success btn-block"/>
        </div>
      </form>
    </div>
  )
}

export default CreateUser;
