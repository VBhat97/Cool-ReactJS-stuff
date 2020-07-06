import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <div>
                <div class="container-fluid">
    <div class="row footer-top">
        <div class="col-sm-4 text-center">
            <h4 class="ft-text-title">Media Name</h4>
            <h6 class="ft-desp">Company Name 
                <br></br>Country Name
            </h6>
            <h4 class="details">
                <a class="contact" href="tel:+977-1-4107223">
                    <i class="fa fa-phone" aria-hidden="true"></i> +977-000000</a>
                </h4>
            </div>
            <div class="col-sm-4 text-center border-left">
                <h4 class="ft-text-title">Our Team</h4>
                <div class="address-member">
                    <p class="member">
                        <b>Director</b> : 
                    </p>
                    <p class="member">
                        <b>Editor</b> : 
                    </p>
                    <p class="member">
                        <b>Reporter</b> : 
                    </p>
                    <p class="member">
                        <b>Reporter</b> : 
                    </p>
               </div>
           </div>
    </div>
	<div class="row ft-copyright pt-2 pb-2">
		<div class="col-sm-4 text-pp-crt">cpoyright 2018 All  Rights Reserved</div>
		<div class="col-sm-4 text-pp-crt-rg">Department of Information Reg No :</div>
		<div class="col-sm-4 developer">
			<a href="https://topline-tech.com" class="text-pp-crt">By : <b>T</b>op<b>L</b>ine</a>
		</div>
	</div>
</div>
            </div>
        )
    }
}

export default Footer;