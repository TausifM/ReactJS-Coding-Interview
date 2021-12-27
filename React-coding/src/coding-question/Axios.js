axios
  .post("/register", {
    firstName: "Fred",
    lastName: "Flintstone",
    email: "",
    password: "",
    confirmPassword: "",
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

// try catch in Action.js File of redux
//here dispatch is used to call the action and userData as a props
try {
  dispatch({ type: "REGISTER_USER_REQUEST" });
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  axios.post("/register", userData, config);
  dispatch({ type: "REGISTER_USER_SUCCESS", payload: data.user });
} catch (error) {
  dispatch({
    type: "REGISTER_USER_FAILURE",
    payload: error.response.data.message,
  });
}
