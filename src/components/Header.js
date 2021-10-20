import React from 'react'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const Header = () => {
    return (
        <div >
            <Row className="mx-0 ">
                <Button as={Col} variant="primary" className="">Button #1</Button>
                
            </Row>
        </div>
    )
}

export default Header
