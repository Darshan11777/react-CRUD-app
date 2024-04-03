import React from "react";
import Form from "./Form";
import nanoid from "nano-id";

export default function Home() {
  // console.log(nanoid());
  let employes = [
    {
      id: nanoid(),
      userName: "ddd",
      name: "darshan",
    },
  ];



  const [imployee, setImployee] = React.useState(
    () =>  JSON.parse(localStorage.getItem("employee")) || employes
  );
  let list =
    imployee &&
    imployee.map((item) => {
      return (
        <tbody  key={item.id}>
          <tr>
            <td scope="row">n{item.name}</td>
            

            <td>un{item.userName}</td>

            <td>
              <button
                onClick={() => {
                  editEmployee(item.id);
                }}
                className="btn  btn-c"
              >
                Edit
              </button>
           
              <button onClick={() => deleteImployee(item.id) }className="btn btn-c">Delete</button>
            </td>
          </tr>
        </tbody>
      );
    });
  function deleteImployee(id) {
    setImployee((prev) => prev.filter((i) => i.id !== id));
  }
  function editEmployee(id) {
    setedit(id);
    // console.log( id);
    return id;
  }

  const [edit, setedit] = React.useState(false);

  React.useEffect(() => {
    localStorage.setItem("employee", JSON.stringify(imployee));
  }, [imployee]);

  return (
    <div className="container">
        
     
      <Form
        imlist={setImployee}
        id={nanoid}
        edit={edit}
        editEmployee={editEmployee}
        imployee={imployee}
        />
        

<div className="tableContainer">

<h2>View user</h2>
      <table className="table">
        <thead className="fw-bolder">
          <tr >
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Action</th>
            
          </tr>
        </thead>
        {list}
      </table>
</div>
    </div>
  );
}
