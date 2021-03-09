import React from 'react';

const Comment = (props) => {
const {name, email} = props.comment;
    return (
        <div>
            
            <p>comment name : {name}</p>
            <p>comment email : {email}</p>
        </div>
    );
};

export default Comment;