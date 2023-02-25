import { Button } from "@mui/material";
import "./Login.css";
import { auth, signInWithGoogle } from "../../firebase";

function Login() {
  const signIn = async () => {
    try {
      await auth.signInWithGoogle;
    } catch (error) {
      console.error(error);
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
