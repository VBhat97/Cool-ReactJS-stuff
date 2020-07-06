import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <div>
                <div class="container-fluid">
    <div class="row footer-top">
        <div class="col-sm-4 text-center">
            <h4 class="ft-text-title">Vaibhav Bhat</h4>
            <h6 class="ft-desp">Lakehead University
                <br></br>Canada
            </h6>
            <h4 class="details">
                <a class="contact" href="tel:+977-1-4107223">
                    <i class="fa fa-phone" aria-hidden="true"></i> +1 807-357-6443</a>
                </h4>
            </div>
            <div class="col-sm-4 text-center border-left">
                <h4 class="ft-text-title">Motivation</h4>
                <div class="address-member">
                    <p class="member">
                        <b>To ease the process of adding an initial model for various data analytics methods and to get information about the data</b>
                    </p>
               </div>
           </div>
    </div>
	<div class="row ft-copyright pt-2 pb-2">
		<div class="col-sm-4 text-pp-crt"></div>
		<div class="col-sm-4 text-pp-crt-rg"></div>
		<div class="col-sm-4 developer">
			<a href="https://topline-tech.com" class="text-pp-crt">Copyright 2020 All  Rights Reserved</a>
		</div>
	</div>
</div>
            </div>
        )
    }
}

export default Footer;