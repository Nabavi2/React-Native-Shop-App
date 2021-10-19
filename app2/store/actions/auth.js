export const SIGNUP = "SIGNUP";

export const signUp = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB3Ra0Kqnn480HVZtljjaml_ijQpzmr0ng",
      {
        method: "POST",
        headers: {
          "Content-Type": "aplication/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: false,
        }),
      }
    );

    if (!response.ok) {
      throw Error("Something went wrong");
    }
    const responseData = response.json();
    console.log(" this is my response that i get from firbase", responseData);
    dispatch({
      type: SIGNUP,
    });
  };
};
