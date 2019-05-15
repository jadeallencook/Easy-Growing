import React from 'react';
import './Paypal.scss';
import payal from '../paypal.json'

const Paypal = props => {
    let price = (props.price) ? props.price.toFixed(2).toString() : null;
    let key = (price && payal[price.replace('.', '')]) ? payal[price.replace('.', '')] : null;
    if (price && props.name && key) {
        return (
            <form className="Paypal" target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
                <span><b>${price}</b></span>
                <input type="hidden" name="cmd" value="_s-xclick" />
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <input type="hidden" name="on0" value="Type" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="hidden" value={props.name} name="os0" maxLength="200" />
                        </td>
                    </tr>
                    </tbody>
                </table>
                <input type="hidden" name="encrypted" value={key} />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
        );
    } else {
        return (<p><b>Please Call: </b>(810)639-4769</p>)
    }
}

export default Paypal;