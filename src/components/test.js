import React from "react";
import { useState } from "react";
import validation from "./validation";

export default function Test() {

const [values, setvalues] = useState({name:"",email:"",password:""});
const [errors, setErrors] = useState({})

function handleInput(event){
  const newObj = {...values,[event.target.name]: event.target.value}
  setvalues(newObj)
}

function handleValidation (event){
  event.preventDefault();
  setErrors(validation(values));
  const validationErrors = validation(values);


  if (Object.keys(validationErrors).length === 0) {
    // Perform form submission logic here
    console.log("Form submitted successfully!");
    // You can also reset the form values here if needed
    // setvalues({name: "", email: "", password: ""});
  }
}

  return (
    <div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1>validation</h1>
        
          <form action="" onSubmit={handleValidation}>
            <div style={{ padding: "10px 0px 0px 0px" }}>
              <label htmlFor="">Name:</label>
              <input type="text" name="name" className="form-control" onChange={handleInput} />
              {errors.name && <small style={{color:"red"}}>{errors.name}</small>}
            </div>

            <div style={{ padding: "10px 0px 0px 0px" }}>
              <label htmlFor="">Email:</label>
              <input type="email" name="email" className="form-control" onChange={handleInput}/>
              {errors.email && <small style={{color:"red"}}>{errors.email}</small>}
            </div>

            <div style={{ padding: "10px 0px 0px 0px" }}>
              <label htmlFor="">password:</label>
              <input type="password" name="password" className="form-control" onChange={handleInput}/>
              {errors.password && <small style={{color:"red"}}>{errors.password}</small>}
            </div>
            
              <button>save</button>
          </form>
      </div>
    </div>
  );
};


// Function definition with parameters
// function greet(name) {
//   console.log("Hello, " + name + "!");
// }

// Function call with arguments
// greet("Alice"); // "Alice" is the argument passed to the function
