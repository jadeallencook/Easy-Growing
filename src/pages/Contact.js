import React from 'react';
import './Contact.scss';

const Contact = props => (
    <div className="Contact">
        <h2>EASY GROWIN'</h2>
        <p>
            10295 Duffield Road <br />
            Montrose, MI 48457 <br />
            (810) 639-4769 or (810) 639-7425 <br />
            <br />
            Other services we offer:
        </p>
        <ul>
            <li>Pond Clean-Outs</li>
            <li>Pond Maintenance</li>
            <li>Airation Unit Installation</li>
        </ul>
        <iframe width="100%" height="400" title="map" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=10295+Duffield+Rd+%C2%B7+Montrose,+MI+48457&amp;aq=&amp;sll=45.00109,-86.270553&amp;sspn=9.291759,20.456543&amp;t=h&amp;ie=UTF8&amp;hq=&amp;hnear=10295+Duffield+Rd,+Montrose,+Michigan+48457&amp;ll=43.154923,-83.91386&amp;spn=0.009361,0.019977&amp;z=14&amp;output=embed"></iframe>
    </div>
);

export default Contact;