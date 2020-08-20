import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalCard from  './ApprovalCard';

const App = () => {
    return (
     <div className="ui container comments">
        
         <ApprovalCard>
            <CommentDetails author="Dhruv" 
            timeAgo="Today at 6:00pm" 
            text="good" 
            avatar={faker.image.avatar()} />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetails author="sai" 
            timeAgo="Today at 8:00pm"
             text="Nice one!" 
             avatar={faker.image.avatar()}  />
        </ApprovalCard>

        <ApprovalCard>     
            <CommentDetails author="Nani" 
            timeAgo="Today at 9:00pm" 
            text="crap!!" 
            avatar={faker.image.avatar()} />
        </ApprovalCard>
   </div>


    );
};


ReactDom.render(<App />, document.querySelector('#root'));