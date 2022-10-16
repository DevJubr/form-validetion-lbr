// import InputGroup from "./components/FormGroup/InputGroup";
// import styled from "styled-components";
// import { useState } from "react";
// import { deepClon, ObjIsEmpty, mapStateToValue } from "./utils/Obj-utils";
// const Form = styled.form`
//   margin: 5rem 0;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   justify-content: center;
//   gap: 1rem;
// `;
// function App() {
//   const init = {
//     title: {
//       value: "",
//       error: "",
//       focus: false,
//     },
//     bio: {
//       value: "",
//       error: "",
//       focus: false,
//     },
//     tech: {
//       value: "",
//       error: "",
//       focus: false,
//     },
//   };
//   //
//   const [State, setState] = useState({ ...init });

//   const hendelChenge = (e) => {
//     console.log("here");
//     const { name: key, value } = e.target;
//     const copyedState = deepClon(State);
//     copyedState[key].value = value;
//     const values = mapStateToValue(State);
//     const { error } = checkVelidity(values);

//     // console.log(error[key], key);
//     if (copyedState[key].focus && error[key]) {
//       copyedState[key].error = error[key];
//     } else {
//       copyedState[key].error = "";
//     }

//     setState(copyedState);
//   };

//   const hendelSubmitted = (e) => {
//     e.preventDefault();
//     const values = mapStateToValue(State);
//     const { error, isValid } = checkVelidity(values);
//     if (isValid) {
//       console.log(State);
//     } else {
//       const copyedState = deepClon(State);
//       Object.keys(error).forEach((key) => {
//         copyedState[key].error = error[key];
//       });
//       setState(copyedState);
//     }
//     // console.log(State);
//   };

//   const hendelFocus = (e) => {
//     const key = e.target.name;
//     const copyedState = deepClon(State);
//     copyedState[key].focus = true;
//     setState(copyedState);
//   };
//   const hendelblur = (e) => {
//     const key = e.target.name;
//     const copyedState = deepClon(State);
//     const values = mapStateToValue(copyedState);
//     const { error } = checkVelidity(values);
//     if (copyedState[key].focus && error[key]) {
//       copyedState[key].error = error[key];
//     } else {
//       copyedState[key].error = "";
//     }
//     setState(copyedState);
//   };

//   const checkVelidity = (values) => {
//     console.log(values);
//     let error = {};
//     const { title, bio, tech } = values;
//     if (!title) {
//       error.title = "invalid title";
//     }
//     if (!bio) {
//       error.bio = "invalid bio";
//     }
//     if (!tech) {
//       error.tech = "invalid tech";
//     }
//     return {
//       error,
//       isValid: ObjIsEmpty(error),
//     };
//   };

//   return (
//     <Form className="App" onSubmit={hendelSubmitted}>
//       <InputGroup
//         name="title"
//         placeholder="Enter your Title"
//         label="Title"
//         error={State.title.error}
//         onChange={hendelChenge}
//         onBlur={hendelblur}
//         onFocus={hendelFocus}
//         value={State.title.value}
//       />
//       <InputGroup
//         name="bio"
//         placeholder="Enter your Bio"
//         label="Bio"
//         error={State.bio.error}
//         onChange={hendelChenge}
//         onBlur={hendelblur}
//         onFocus={hendelFocus}
//         value={State.bio.value}
//       />
//       <InputGroup
//         name="tech"
//         placeholder="Enter your Technology"
//         label="Technology"
//         error={State.tech.error}
//         onChange={hendelChenge}
//         onBlur={hendelblur}
//         onFocus={hendelFocus}
//         value={State.tech.value}
//       />
//       <button type="submit">submit</button>
//     </Form>
//   );
// }

// export default App;
