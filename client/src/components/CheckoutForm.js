import React, { useState } from "react";
import useForm2 from "../hooks/useForm2";

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
  const [handleSubmit, values, handleChanges] = useForm2(initialValues);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={values.address}
            onChange={handleChanges}
          />
        </label>
        <label>
          City:
          <input name="city" value={values.city} onChange={handleChanges} />
        </label>
        <label>
          State:
          <input name="state" value={values.state} onChange={handleChanges} />
        </label>
        <label>
          Zip:
          <input name="zip" value={values.zip} onChange={handleChanges} />
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
