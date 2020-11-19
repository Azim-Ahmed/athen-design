import React from 'react';
import { Button, Container } from 'reactstrap';

const Search = () => {
    return (
        <Container className=" py-4 my-5">
           <div className="text-center py-4 my-4">
           <h1 className="runningProjectHeader">Get your design right, right now</h1>
            <p><small>Be the first know our latest offers and updates!
</small></p>
           </div>
           <div className="text-center searchAra">
               <input className="inputsearch" type="text"/>
               <button className="btnSearch">Get Started</button>
           </div>
        </Container>
    );
};

export default Search;