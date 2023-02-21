import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Fade from './Fade'
import Slider from  './Slider'
import Button from 'react-bootstrap/Button';




function CollapseE() {
  const [open, setOpen] = useState(false);

  return (
    <>
        <nav style={{backgroundColor:"black"}}>
            <Button style={{backgroundColor:"black"}}
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
            click
            </Button>
        </nav>
      <Collapse in={open}>
            <div id="example-collapse-text">
                <Fade/>
                <Slider/>
            </div>
      
      </Collapse>
    </>
  );
}


export default CollapseE;