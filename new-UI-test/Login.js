import React from 'react';

class Home extends React.Component{
  render(){
    return(
    
      <body>
      <div class ="container">
        <div class= "blueBG">
          <div class="box signin">
          <h2>Already Have An Account?</h2>
          <button class="signinbtn">Sign In</button>
          </div>
          <div class="box signup">
            <h2>Don't Have An Account?</h2>
            <button class="signupbtn">Register</button>
          </div>
        </div>
        <div class="form-box"></div>
          <div class="form signinform"></div>
          {/* <form>
            <h3>Sign In</h3>
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
            <input type="submit" value="Sign In"></input>
          </form> */}
      </div>
      </body>    
      
    );
  }
}

export default Home;