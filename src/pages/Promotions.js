import React from 'react';
import './Promotions.scss';

const Promotions = props => (
    <div className="Promotions">
        <h2>Promotional Package #1</h2>
        <p>
            1 Hardy Hybrid Everblooming Water Lily- Pick Pink or Yellow<br />
            1 Hardy Water Iris- Pick blue or black<br />
            1 Blue Rush (H) 1 Umbrella Grass (H) 1 Umbrella Palm (T) 1 Hyacianth (T)<br />
            $24.95 Pick-Up. Add $9.95 for Delivery.<br />
        </p>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
        <h2>Promotional Package #2</h2>
        <p>
            2 Hardy Hybrid Everblooming Water Lilies- Pick Pink or Yellow or 1 of each color<br />
            2 Hardy Water Iris- 1 Blue and 1 Black<br />
            1 Lucky 4-Leaf Water Clover (SH) 1 Taro (T)<br />
            1 Umbrella Grass (H) 1 Umbrella Palm (T)<br />
            1 Floating Fairy Moss (T) 1 Blue Rush (H)<br />
            $49.95 Pick-Up. Add $13.95 for Delivery
        </p>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
        <h2>Promotional Package #3</h2>
        <p>
            Double Promotional Package #2 & Save Even More<br />
            $79.95 Pick-Up. Add $15.95 for Delivery.
        </p>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
        <h2>More Savings</h2>
        <p>
            Any or all of the following aquatic plants will be shipped with any of the above promotions for $6.00 each with no additional shipping charges.
            <br /><br />
            Dwf. Cattail (H) Water Celery (H) Cherry Bounce Iris (H)<br />
            Var. Sweet Flag (H) Zephyr Lily (SH) Water Mint (H)<br />
            Dwf. Papyrus (T) Water Snowball (SH) Star Grass (SH)<br />
            Blue Bell (T) Pink Bell (T) Pennywort (SH)<br />
            <br />
            -- After May 20th the following floaters are also available--<br />
            <br />
            Water Hyacinth (T) - Regular or Dwarf<br />
            Water Lettuce (T) - Regular or Dwarf<br />
            Water Velvet (T) Frog Bit (SH) Duckweed (H) Fairy Moss (SH)<br />
            <br />
            (H)=Hardy- Store in pond below ice level<br />
            (SH)=Semi-Hardy- Store in protected area above freezing.<br />
            (T)=Tropical- Take inside as house plants- Floaters put in well lighted fish tank<br />
        </p>
    </div>
);

export default Promotions;