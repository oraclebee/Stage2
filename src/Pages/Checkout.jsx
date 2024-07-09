import React from 'react';
import '../Resources/Checkout.css';
import Header from '../Components/Header'
import Footer from '../Components/Footer'


const CheckoutForm = () => {
  return (
    <>
    <Header />
    <div id="checkout-form" className="checkout-form">
      <form>
        <div className="delivery-options">
          <label>
            <input type="radio" name="delivery" value="international" /> International Shipping
          </label>
          <label>
            <input type="radio" name="delivery" value="local" defaultChecked /> Local Delivery/Pickup
          </label>
        </div>

        <div className="customer-address">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" name="firstName" value="NK" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" name="lastName" value="Harrison" />
          </div>
          <div className="form-group">
            <label>Country</label>
            <select name="country" defaultValue="Nigeria">
              <option value="Nigeria">Nigeria</option>
            </select>
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" name="city" value="Abuja" />
          </div>
          <div className="form-group">
            <label>Zip Code</label>
            <input type="text" name="zipCode" value="402111" />
          </div>
          <div className="form-group">
            <label>Address 1</label>
            <input type="text" name="address1" value="NO 2, Amino Crescent Wuse 2" />
          </div>
          <div className="form-group">
            <label>Address 2</label>
            <input type="text" name="address2" value="NO 2, Amino Crescent Wuse 2" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" name="phone" value="09000000000" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" value="nkh77@gmail.com" />
          </div>
        </div>

        <div className="payment-methods">
          <label>
            <input type="radio" name="paymentMethod" value="card" defaultChecked /> Debit/Credit Card
          </label>
          <div className="card-details">
            <div className="form-group">
              <label>Card Number</label>
              <input type="text" name="cardNumber" value="016 460 0001" />
            </div>
            <div className="form-group">
              <label>Card Holder</label>
              <input type="text" name="cardHolder" value="NK Harrison" />
            </div>
            <div className="form-group">
              <label>Month</label>
              <input type="text" name="expMonth" value="06" />
            </div>
            <div className="form-group">
              <label>Year</label>
              <input type="text" name="expYear" value="06" />
            </div>
            <div className="form-group">
              <label>CVC</label>
              <input type="text" name="cvc" value="25" />
            </div>
          </div>
          <label>
            <input type="radio" name="paymentMethod" value="paypal" /> PayPal
          </label>
        </div>

        <div className="cart-summary">
          <p>Item(s) total: $1200</p>
          <p>Shipping Fees: $100</p>
          <p>Delivery Fees: $100</p>
          <p>Tax: $50</p>
          <div className="form-group">
            <label>Enter Promotional Code</label>
            <input type="text" name="promoCode" />
            <button type="button">Submit</button>
          </div>
          <p>Estimated Total: $1450</p>
          <button type="submit">PAY $1450</button>
        </div>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default CheckoutForm;
