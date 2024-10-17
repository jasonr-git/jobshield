// src/GooglePayButton.js
import React from 'react';
import { GooglePayButton } from '@google-pay/button-react';
import { db } from '../firebase';

const GooglePayComponent = ({ formData, onPaymentSuccess }) => {
  const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA']
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId'
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant'
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '1.00',
      currencyCode: 'USD',
      countryCode: 'US'
    }
  };

  const handleLoadPaymentData = (paymentData) => {
    console.log('load payment data', paymentData);
    // Save data to Firebase
    const timestamp = new Date();
    db.collection('payments').add({
      ...formData,
      paymentData,
      timestamp
    }).then(() => {
      onPaymentSuccess();
    }).catch((error) => {
      console.error('Error saving payment data: ', error);
    });
  };

  return (
    <GooglePayButton
      environment="TEST"
      buttonColor="black"
      buttonType="buy"
      paymentRequest={paymentRequest}
      onLoadPaymentData={handleLoadPaymentData}
    />
  );
};

export default GooglePayComponent;
