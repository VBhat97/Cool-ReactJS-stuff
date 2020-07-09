import React, {Component} from 'react';
import {Card} from 'react-bootstrap';

class HomeBody extends Component{
    render(){
        return(
            <div>
                <div>
                <br></br><br></br>
                <center>
                    <h1 id="keepwhite">Welcome to CSV Analytics Application</h1>
                
                <br></br><br></br>
                <div className='parentdiv'>
                    <div className='childdiv'>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    <h1>Some quick example text to build on the card title and make up the bulk of the card's content.</h1>
                </Card.Text>
                </Card.Body>
                </Card>
                     </div>
                     <div class='childdiv'>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    <h1>Some quick example text to build on the card title and make up the bulk of the card's content.</h1>
                </Card.Text>
                </Card.Body>
                </Card>
                    </div>
                </div>
                </center>
                {/* TODO: Think of the home content and write this stuff via react-bootstrap */}
                </div>
            </div>
        )
    }
}

export default HomeBody;