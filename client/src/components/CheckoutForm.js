import React, { useState } from "react";
import useForm from "../hooks/useForm";

const initialValues = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: ""
};

const CheckoutForm = props => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [setValues, formValues, onChange] = useForm(initialValues);

  const handleSubmit = e => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 data-testid="title">Checkout Form</h2>
        <label>
          First Name:
          <input
            data-testid="first"
            name="firstName"
            value={formValues.firstName}
            onChange={onChange}
          />
        </label>
        <label>
          Last Name:
          <input
            data-testid="last"
            name="lastName"
            value={formValues.lastName}
            onChange={onChange}
          />
        </label>
        <label>
          Address:
          <input
            data-testid="address"
            name="address"
            value={formValues.address}
            onChange={onChange}
          />
        </label>
        <label>
          City:
          <input
            data-testid="city"
            name="city"
            value={formValues.city}
            onChange={onChange}
          />
        </label>
        <label>
          State:
          <input
            data-testid="state"
            name="state"
            value={formValues.state}
            onChange={onChange}
          />
        </label>
        <label>
          Zip:
          <input
            data-testid="zip"
            name="zip"
            value={formValues.zip}
            onChange={onChange}
          />
        </label>
        <button data-testid="submit">Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {formValues.firstName} {formValues.lastName}
          </p>
          <p>{formValues.address}</p>
          <p>
            {formValues.city}, {formValues.state} {formValues.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
