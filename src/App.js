import React from 'react';
import Mapa from './mapa';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


import './App.css'
import {usePosition} from './useposition';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';


function onTakePhoto (dataUri) {
  console.log('takePhoto', dataUri);
}

function sendData(){
  // firebase.database().ref('/incendio').on('value', snapshot => { });
}

function App() {
  const { latitude, longitude, timestamp, error } = usePosition(true, {enableHighAccuracy: true});
  return (
    <div className="App">
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home">Ignis</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Mapa</Nav.Link>
            <Nav.Link href="#noti">Notificações</Nav.Link>
            <Nav.Link href="#info">Informações</Nav.Link>
            <Nav.Link href="#profile">Perfil</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <div className="App">
        <Camera
          onTakePhoto = { (dataUri) => { onTakePhoto(dataUri); } }
        />
      </div> */}
      
      <Mapa latitude={latitude} longitude={longitude}></Mapa>
      <Button>Registrar foco de incêndio</Button>
      {/* latitude: {latitude}<br/>
      longitude: {longitude}<br/>
      timestamp: {timestamp}<br/>
      error se tiver: {error}

    <button onClick={sendData()}> Denunciar Fogareuuuu </button> */}
      
    </div>
  );
}

export default App;
