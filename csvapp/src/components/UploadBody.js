import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';

class UploadBody extends Component{
    render(){
        return(
            <div>
                <br></br><br></br><br></br>
                <div id="formMargin">
                <Form id="Formcss">
                    <Form.Group controlId="formBasicEmail">
                        {/* TODO: Connect this email address with the Flask backend */}
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email
                    </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        {/* TODO: After email address, try to pass the CSV file as well */}
                        <Form.File id="exampleFormControlFile1" label="Browse your CSV-file" />
                    </Form.Group>
                    <br></br><br></br><br></br>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </div>
            </div>
        )
    }
}

export default UploadBody;