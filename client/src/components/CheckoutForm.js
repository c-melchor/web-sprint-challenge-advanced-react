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
            name="firstName"
            value={formValues.firstName}
            onChange={onChange}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={formValues.lastName}
            onChange={onChange}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={formValues.address}
            onChange={onChange}
          />
        </label>
        <label>
          City:
          <input name="city" value={formValues.city} onChange={onChange} />
        </label>
        <label>
          State:
          <input name="state" value={formValues.state} onChange={onChange} />
        </label>
        <label>
          Zip:
          <input name="zip" value={formValues.zip} onChange={onChange} />
        </label>
        <button>Checkout</button>
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
