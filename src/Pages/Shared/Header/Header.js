import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo1 from '../../../images/logo.png'

function ColorSchemesExample() {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <Navbar bg="primary" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home"><img src={logo1} alt="" /></Navbar.Brand>
                            <Nav className="m-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </>
    );
}

export default ColorSchemesExample;