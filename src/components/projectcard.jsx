import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Projectcard = ({name, description, im}) => {
    const v = 'md-down';
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <div>
      <div style={{margin:'20px'}}>
      <div  style={{position:'relative', maxWidth:'400px'}}>
                                    <img style={{width:'100%'}} src={im} alt="" />
                                    <div className='text-center' style={{color:'#fff', position:'absolute', bottom:'0', left:'0', padding:'10px', backgroundColor:'rgba(0,0,0,0.5', width:'100%'}}>{name}</div>
                                </div>

<button className='' style={{width:'100%',border:'20px', borderBottomLeftRadius:'50%', borderBottomRightRadius:'50%', background:"#FFEA00", color:'black'}} onClick={() => handleShow(v)} size="lg">
              More...
            </button>
      </div>
      
        <Modal  show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header style={{background:'grey', color:'#fff'}} closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{background:'#000', color:'#fff'}}>{description}</Modal.Body>
      </Modal>
    </div>
  )
}

export default Projectcard