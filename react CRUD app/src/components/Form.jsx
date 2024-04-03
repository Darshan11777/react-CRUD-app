import React, { useState } from "react";

export default function Form({ imlist, id, editEmployee, edit, imployee }) {
  const [warning, setwarning] = React.useState(false);
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
  const [update, setupdate] = React.useState(false);

  function updateList(params) {
    setupdate(false);
    let newArr = imployee.filter((i) => i.id !== edit);
    console.log(newArr);
    imlist((prev) => {
      return [
        ...newArr,
        {
          id: id(),
          userName: formData.userName,
          name: formData.name,
        },
      ];
    });
  }

  React.useEffect(() => {
    if (edit) {
      let curruntEmployee = imployee.find((item) => {
        return item.id === edit;
      });
      // console.log("username",formData.userName);
      // console.log("foram data",formData);
      // console.log("naem",formData.name);
      // console.log("naem",curruntEmployee);

      setFormData({
        name: curruntEmployee.name,

        userName: curruntEmployee.userName,
      });
      setupdate(true);
    }
  }, [edit]);

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.name.length > 1 && formData.userName.length > 1) {
      setFormData({
        name: "",
        userName: "",
      });

      setwarning(false);
      imlist((prev) => {
        return [
          ...prev,
          {
            id: id(),
            userName: formData.userName,
            name: formData.name,
          },
        ];
      });
    } else {
      setwarning(true);
    }
  }
  return (
    <>
      
    
      <div className="form">
        <h2>Add user</h2>
        <form onSubmit={update ? updateList : handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-bolder" type="text">
              Name
            </label>
            <input
              type="text"
              className="form-control "
              id="name"
              aria-describedby="name"
              onChange={handleChange}
              name="name"
              value={formData.name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label fw-bolder">
              Username
            </label>
            <input
              className="form-control"
              id="userName"
              type="text"
              onChange={handleChange}
              name="userName"
              value={formData.userName}
            />
          </div>

        {warning && <div className="warning">Please enter valide value</div>}
          <button type="submit" className="btn btn-primary fw-bolder">
            Add new user
          </button>
        </form>
      </div>
    </>
  );
}
