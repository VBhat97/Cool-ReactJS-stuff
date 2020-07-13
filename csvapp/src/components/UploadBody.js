import React, {Component} from 'react';
import {Form} from 'react-bootstrap';

class UploadBody extends Component{
    render(){
        return(
            <div>
                <br></br><br></br><br></br>
                <div id="formMargin">
                <Form id="Formcss">
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Browse your CSV" />
                </Form.Group>
                </Form>
                </div>
            </div>
        )
    }
}

export default UploadBody;