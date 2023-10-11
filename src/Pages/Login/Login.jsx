import React, { useContext } from 'react';
// import { AuthConstext } from '../../Firebase/AuthProvider';

const Login = () => {
    const handlelogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value; // Corrected this line
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    // const {googleSignIn} = useContext(AuthConstext)
    return (
        <div class="hero  ">
        <div class="hero-content  flex-col bg-gray-200 shadow-xl rounded   mt-10 ">
          <div class="text-center ">
            <h1 class="text-3xl font-bold pt-10">Login now!</h1>
            {/* <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
          </div>
          <div class="-pt-10 card flex-shrink-0 w-full max-w-sm ">
            <form onSubmit={handlelogin} class="card-body w-80">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" class="input input-bordered" required />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" class="input input-bordered" required />
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;