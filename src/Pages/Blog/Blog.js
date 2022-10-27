import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className="question-part">
        <h2>Question Bank</h2>
        <div className='question-container'>
            <div className='que-1'>
                <h1>1.what is `cors`?</h1>
                <p>The behavior you are observing is the effect of browsers CORS implementation.

Before CORS became standarized there was no way to call an API endpoint under different domain for security reasons. This was (and to some degree still is) blocked by the Same-Origin Policy.

CORS is a mechanism which aims to allow requests made on behalf of you and at the same time block some requests made by rogue JS and is triggered whenever you are making an HTTP request to:</p>
            </div>
            <div className='que-2'>
                <h1>2.Why are you using `firebase`? What other options do you have to implement authentication?</h1>
                <p>Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>

            </div>

            <div className='que-3'>
                <h1>3. How does the private route work?</h1>
                <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                </p>

            </div>
            <div className='que-3'>
                <h1>4. What is Node? How does Node work?</h1>
                <p>Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into Node.It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive
                </p>

            </div>
        </div>
    </div>
    );
};

export default Blog;