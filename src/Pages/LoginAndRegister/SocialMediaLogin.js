import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const SocialMediaLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubError] = useSignInWithGithub(auth);
  
   let loginError;
    if(error || githubError){
        console.log(error.message);
        loginError = <p className='text-danger'>Error: {error?.message} {githubError?.message}</p>
    }
    if (user || githubUser) {
        navigate("/checkout");
    }
    const handleGoogleLogin = () => {
        signInWithGoogle();
    }
    const handleGithubLogin = () => {
        signInWithGithub();
    }
  
    return (
           <div className="social-media">
               {loginError}
                <Button variant="primary" size="lg" onClick={handleGoogleLogin}><span className='icon'><FcGoogle /></span>Google</Button>
                <Button variant="primary" size="lg" onClick={handleGithubLogin}><span className='icon'><BsGithub /></span>Github</Button>
            </div>
    );
};

export default SocialMediaLogin;