import { useEffect, useState } from "react";
import "./User.scss";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser, deleteUser, getAllUser } from "./UserApi";
import { userState } from "./UserSlice";

const User = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(userState);
  const [input, setInput] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });

  // handleInputChange.
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handleAddNewUser.
  const handleAddNewUser = (e) => {
    e.preventDefault();
    dispatch(addNewUser(input));
    setInput({
      name: "",
      email: "",
      role: "",
      password: "",
    });
  };

  useEffect(() => {
    dispatch(getAllUser());
    dispatch(deleteUser());
    dispatch(addNewUser());
  }, [dispatch]);

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="user_area">
            <div className="col-md-5">
              <h1>Add New User.</h1>
              <form onSubmit={handleAddNewUser}>
                <input
                  type="text"
                  className="form-control my-2"
                  placeholder="Name"
                  value={input.name}
                  name="name"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="form-control my-2"
                  placeholder="Email"
                  value={input.email}
                  name="email"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="form-control my-2"
                  placeholder="Role"
                  value={input.role}
                  name="role"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="form-control my-2"
                  placeholder="Password"
                  value={input.password}
                  name="password"
                  onChange={handleInputChange}
                />
                <input
                  type="submit"
                  className="form-control my-2 btn btn-sm btn-primary"
                />
              </form>
            </div>
            <div className="col-md-7">
              <h1>All Users.</h1>
              <hr />
              <table className="table table-stript">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0
                    ? users.map((item, index, id) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td>
                              <button
                                onClick={() => dispatch(deleteUser(item._id))}
                                className="btn btn-sm btn-danger"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    : "No user found."}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
