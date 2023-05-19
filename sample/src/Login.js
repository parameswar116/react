// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import logo from "./logo.png";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";

// const Login = () => {
//   const [data, setData] = useState({ username: "", password: "" });
//   // we can use the useState for declaring the variables.And  to store the values in the 'data' variable.

//   const { username, password } = data;
//   // we will do destucturing the variables to store the values in above line .

//   const changeHandler = (e) => {
//     setData({ ...data, [e.target.name]: [e.target.value] });
//   };
//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(data.username, data.password);
//   };
//   return (
//     <div>
//       {/*  */}
//       <div className="login-logo-div">
//         <img src={logo} alt="logo" className="login-logo"></img>
//         <h2>Bigger. Better. Stronger</h2>
//         <h6 className="text-head">Building Quality Relationships</h6>
//       </div>
//       {/*  */}
//       <div style={{ alignItems: "center" }} className="login-input">
//         <div style={{ textAlign: "center" }}>
//           <form onSubmit={submitHandler}>
//             <OutlinedInput
//               type="username"
//               name="username"
//               className="MuiInputBase-input-MuiOutlinedInput-input"
//               value={username}
//               onChange={changeHandler}
//               placeholder="Username"
//             />
//             <OutlinedInput
//               type="password"
//               name="password"
//               className="MuiInputBase-input-MuiOutlinedInput-input"
//               value={password}
//               onChange={changeHandler}
//               placeholder="Password"
//             />
//             <br />
//             <Button
//               style={{ marginTop: 10, marginBottom: 15, width: 400 }}
//               type="submit"
//               variant="contained"
//               //   color="success"
//             >
//               Login
//             </Button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
