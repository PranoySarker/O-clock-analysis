import React from 'react';

const Blog = () => {
    return (
        <div className='d-inline-block ps-5 w-75 mt-2' >
            <div className='mt-5 mb-3  col-centered'>
                <h3>Context API</h3>
                <p>Context API helps us to pass specific forms of data across all level of the application without dealing with 'props drilling'.
                    This is the alternative to 'props drilling' or moving props from grandparent to child to parent.
                </p>
                <p>To create Context API, first we call the function React.createContext() which gives us two components named, Provider and Consumner</p>
                <p>Provider is a component that as it's names suggests provides the state to its children and Consumer is a component that consumes and uses the state.</p>
            </div>

            <div className='mt-5  p-3'>
                <h3>Semantic Tags</h3>
                <p>Semantic tags are allow us to add meaning to the markup so that it can parse well by the parsers of search engine.it helps to increase the chance to rank website.Semantic HTML tags let us serve structured content to users.which is important for on-page SEO</p>
            </div>
            <div className='mt-5 pb-3'>
                <h3>Inline Vs Inline-block Vs Block</h3>
                <p>inline: The element doesnot start on a new line and only occupy just the width it requires. You can not set the width or height.
                </p>
                <p>
                    Inline-block: Its formatted just like the inline element, where it doesnot start on a new line. BUT, you can set width and height values.
                </p>
                <p>
                    Block: The element will start on a new line and occupy the full width available. And you can set width and height values.
                </p>
            </div>
        </div >
    );
};

export default Blog;