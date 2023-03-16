import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayTopics from '../DisplayTopices/DisplayTopics';
import './Home.css'

const Home = () => {
    
    const courses = useLoaderData();
    // console.log(courses)
    // const {name,logo} = courses.data;

    return (
        <div>
            <div className='paragraph'> 
            <p><span>JavaScript:</span>JavaScript is a lightweight, interpreted programming language. It is designed for creating network-centric applications. It is complimentary to and integrated with Java. JavaScript is very easy to implement because it is integrated with HTML. It is open and cross-platform.</p>
            <p><span>React:</span>In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.
               You can see what we’ll be building here: Final Result. If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry! The goal of this tutorial is to help you understand React and its syntax.

               We recommend that you check out the tic-tac-toe game before continuing with the tutorial. One of the features that you’ll notice is that there is a numbered list to the right of the game’s board. This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.</p>
            </div>
           <div className='course-container'>
           {
                courses.data.map(course=><DisplayTopics
                key = {course.id}
                course = {course}
                ></DisplayTopics>)
            }

           </div>
        </div>
    );
};

export default Home;