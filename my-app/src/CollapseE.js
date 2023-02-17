import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import NavBar from './Components/NavBar';
import Fade from './Fade'




function CollapseE({movieSearch, setSearch, newMovie, show, type}) {
  const [open, setOpen] = useState(false);

  return (
    <>
        <nav id='homeNav' style={{backgroundColor:"black"}}>
            <div class='text-center'>
            <Button style={{backgroundColor:"black"}}
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
            See Who's Hot
            </Button>
            </div>
            <NavBar movieSearch={movieSearch} setSearch={setSearch} newMovie={newMovie} show={show} type={type} />
        </nav>
      <Collapse in={open}>
            <div id="example-collapse-text">
                <Fade/>
            </div>
      
      </Collapse>
    </>
  );
}


export default CollapseE;