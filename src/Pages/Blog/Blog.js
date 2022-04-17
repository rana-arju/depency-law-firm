import React from 'react';
import { Container } from 'react-bootstrap';
import "./blog.css";
const Blog = () => {
    return (
        <Container>
            <div className='blog-page'>
                <h2>1) Difference between authorization and authentication?</h2>
                <p>Authentication and authorization are the two words used in the security world. They might sound similar but are completely different from each other. Authentication is used to authenticate someone's identity, whereas authorization is a way to provide permission to someone to access a particular resource. Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. </p>
            </div>
            <div>
                <hr />
                <h2>2) Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
                <hr />
                <h2>Firebase alternative:</h2>
                <h4>1) Parse</h4>
                <h4>2)Back4app</h4>
                <h4>3) AWS Amplify</h4>
                <h4>4) Kuzzle</h4>
                <h4>5) Couchbase</h4>
                <h4>7)NativeScript</h4>
            </div>
            <div>
                <hr />
                <h2>What other services does firebase provide other than authentication?</h2>
                <h3>6 Useful Firebase Services For Mobile Application Development</h3>
                <p>There are many services which Firebase provides, Most useful of them are:</p>
                <ul>
                    <li>Cloud Firestore</li>
                    <li>Cloud Functions</li>
                    <li>Authentication</li>
                    <li>Hoisting</li>
                    <li>Cloud Storage</li>
                    <li>Google Analytics</li>
                    <li>Predictions</li>
                    <li>Cloud Messaging</li>
                    <li>Dynamic Links</li>
                    <li>Remote Config</li>
                </ul>
            </div>
        </Container>
    );
};

export default Blog;