import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Footer = () => {
    return (
        <div >
            <Row className="mx-0 ">
                <Button as={Col} variant="primary" onClick={() => window.location.reload(false)} className="btn">New Quote </Button>
                
            </Row>
        </div>
    )
}

export default Footer
