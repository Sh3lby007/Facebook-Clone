import { Button } from "@mui/material";
import "./Login.css";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { FirebaseError } from "firebase/app";

function Login() {
  const signIn = async () => {
    try {
      /**
       * signInWithPopup is a method of the 'Auth' object that initiates Google
       * sign-in flow and returns a promise that resolves with an object containing
       * user information upon successful authenticatio.
       */
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
    } catch (error) {
      // If user closes the google sign in, log a message instead of an error in console.
      if (
        error instanceof FirebaseError &&
        error.code === "auth/popup-closed-by-user"
      ) {
        console.log("User closed the sign-in popup");
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign in
      </Button>
    </div>
  );
}

export default Login;
