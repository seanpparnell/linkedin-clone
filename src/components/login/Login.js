import '../styles/Login.css';

const Login =() => {
  return(
    <>
      <div className="login">
        <img 
        src="https://news.hitb.org/sites/default/files/styles/medium/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=ecA8o3uw" alt="linkedin_logo" />

        <form>
          <input placeholder="Full name (required if registering)" type="text" />
        </form>
      </div>
    </>
  )
}

export default Login;