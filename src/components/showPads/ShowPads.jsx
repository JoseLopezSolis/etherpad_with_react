import React from 'react'
import "./ShowPads.scss"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Imagefile from '../../imgs/fileImage.png';

export default function ShowPads({padName}) {
  return (
    <div>
        <div className="container">
            <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={Imagefile} />
            <Card.Body>
                <Card.Title>{padName}</Card.Title>
                <Card.Text>
                    Una descripcion corta del pad
                </Card.Text>
                <div className='d-flex justify-content-center gap-2'>
                    <a href={`http://localhost:9001/p/${padName}`}>
                        <Button variant="primary">Editar</Button>
                    </a>
                    <a href={`http://localhost:9001/p/r.c09a69e956eb01f98d3990319fb51f11`}>
                        <Button variant="secondary">Visualizar</Button>
                    </a>
                </div>
            </Card.Body>
            </Card>
        </div>

    </div>
  )
}
