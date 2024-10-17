// src/FormComponent.js
import React, { useState } from 'react';
import GooglePayComponent from './GooglePayButton';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    remarks: '',
    paymentType: ''
  });

  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handlePaymentSuccess = () => {
    setIsPaymentSuccessful(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Initiate Google Pay transaction
  };

  return (
    <div>
      {!isPaymentSuccessful ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Remarks:</label>
            <input
              type="text"
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Payment Type:</label>
            <select
              name="paymentType"
              value={formData.paymentType}
              onChange={handleChange}
              required
            >
              <option value="">Select Payment Type</option>
              <option value="fixed_deposit">Fixed Deposit</option>
              <option value="recurring_deposit">Recurring Deposit</option>
              <option value="more">More</option>
            </select>
          </div>
          <GooglePayComponent formData={formData} onPaymentSuccess={handlePaymentSuccess} />
        </form>
      ) : (
        <div>Payment Successful!</div>
      )}
    </div>
  );
};

export default FormComponent;
