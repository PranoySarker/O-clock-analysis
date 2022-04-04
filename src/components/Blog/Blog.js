import React from 'react';

const Blog = () => {
    return (
        <div className='text-center' style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='first mt-5 w-50 '>
                <h3>Context API</h3>
                <p>Context API helps us to pass specific forms of data across all level of the application without dealing with 'props drilling'.
                    This is the alternative to 'props drilling' or moving props from grandparent to child to parent.
                </p>
                <p>To create Context API, first we call the function React.createContext() which gives us two components named, Provider and Consumner</p>
                <p>Provider is a component that as it's names suggests provides the state to its children and Consumer is a component that consumes and uses the state.</p>
            </div>
        </div >
    );
};

export default Blog;