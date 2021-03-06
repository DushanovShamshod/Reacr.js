import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "store/slices/UserSlice";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignUp = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/" );
      })
      .catch(console.error);
  };
  return (
    <>
      <Form title="Sign Up" handleClick={handleSignUp} />
    </>
  );
};

export default SignUp;
