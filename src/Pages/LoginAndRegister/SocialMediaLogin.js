import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const SocialMediaLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [signInWithGoogle, user,googleLoading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub,githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
  
   let loginError;
    if(error || githubError){
        loginError = <p className='text-danger'>{error?.message} {githubError?.message}</p>
    }
    if (user || githubUser) {
        navigate(from, {replace: true});
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