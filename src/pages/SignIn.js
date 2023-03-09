import "./signIn.css";
function SignIn() {
  return (
    <div className="signin_page">
      <div className="box">
        <p className="form_heading">Sign-in to get your best interests!</p>
        <form>
          <input type="text" name="Username" placeholder="Username" className="inptext"/>
          <input type="text" name="Password" placeholder="Password" className="inptext"/>
          <input type="submit" name="Submit" className="submitbutton" />
          <p className="or">or</p>
          <p className="siwg">Sign-in with <img src="/images/google.png" className="google" alt="google"></img></p>
          <div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignIn;
