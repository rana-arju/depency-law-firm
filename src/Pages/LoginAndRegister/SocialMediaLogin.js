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
      const handleGoogleLogin = () => {
        signInWithGoogle();
    }
    const handleGithubLogin = () => {
        signInWithGithub();
    }
    if (user || githubUser) {
        navigate("/checkout");
    }
    let loginError;
    if(error || githubError){
        loginError = <p>{error} {githubError}</p>
    }
    return (
           <div className="social-media">
                <Button variant="primary" size="lg" onClick={handleGoogleLogin}><span className='icon'><FcGoogle /></span>Google</Button>
                <Button variant="primary" size="lg" onClick={handleGithubLogin}><span className='icon'><BsGithub /></span>Github</Button>
            </div>
    );
};

export default SocialMediaLogin;