import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { Snackbar, IconButton } from '@mui/material';
import Alert from '@mui/material/Alert';
import DeleteIcon from '@mui/icons-material/Delete';



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
//   background-color: #f5f5f5;
  margin-top:18rem;
  margin-bottom:10%;
  z-index:2;
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background-color:rgba(255, 255, 255, 0.85);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  color: #36454F;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const FormLabel = styled.label`
  font-size: 16px;
  margin-bottom: 6px;
  color: #666666;
`;

const FormInput = styled.input`
  padding: 12px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  font-size: 16px;
  color: #333333;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const FormTextArea = styled.textarea`
  padding: 12px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  font-size: 16px;
  color: #333333;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const FormButton = styled.button`
  padding: 14px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

const FormNote = styled.p`
  font-size: 14px;
  color: #999999;
  text-align: center;
  margin-top: 10px;
`;

const FileUploadWrapper = styled.div`
  border: 2px dashed grey;;
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  margin-bottom: 15px;
  cursor: pointer;
  transition: border-color 0.2s ease-in-out;
  position: relative;

  &:hover {
    border-color: #007bff;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const FileName = styled.span`
  font-size: 16px;
  color: #333333;
`;

const DeleteButton = styled(IconButton)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const StyledSnackbar = styled(Snackbar)`
  .MuiAlert-filledSuccess {
    background-color: #4caf50;
  }
  .MuiAlert-filledError {
    background-color: #f44336;
  }
`;

const BankAccountForm = () => {
  const formRef = useRef();
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  const [panFileName, setPanFileName] = useState('');
  const [aadharFileName, setAadharFileName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_t5bh5t6', 'template_ubxan2m', formRef.current, 'w5fGLVI0VKb3QrOkW')
      .then(
        (result) => {
          setAlertSeverity('success');
          setAlertMessage('Application submitted successfully!');
          setAlertOpen(true);
          formRef.current.reset();
          setPanFileName('');
          setAadharFileName('');
        },
        (error) => {
          setAlertSeverity('error');
          setAlertMessage('Failed to submit application. Please try again later.');
          setAlertOpen(true);
          console.log(error.text);
        }
      );
  };

  const handleFileChange = (e, setFileName) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleDeleteFile = (setFileName) => {
    setFileName('');
  };

  return (
    <Container>
      <FormWrapper>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <FormTitle>OPEN SAVINGS ACCOUNT</FormTitle>
          <FormGroup>
            <FormLabel>Name</FormLabel>
            <FormInput type="text" name="name" required />
          </FormGroup>
          <FormGroup>
            <FormLabel>Phone Number</FormLabel>
            <FormInput type="tel" name="phone" required />
          </FormGroup>
          <FormGroup>
            <FormLabel>Address</FormLabel>
            <FormTextArea name="address" rows="3" required />
          </FormGroup>
          <FormGroup>
            <FormLabel>PAN Card Number</FormLabel>
            <FormInput type="text" name="pan_number" required />
          </FormGroup>
          <FormGroup>
            <FormLabel>PAN Card Photo Upload</FormLabel>
            <FileUploadWrapper>
              <FileInput 
                type="file" 
                name="pan_photo" 
                accept="image/*" 
                required 
                id="pan_photo" 
                onChange={(e) => handleFileChange(e, setPanFileName)}
              />
              <label htmlFor="pan_photo">
                {panFileName ? (
                  <>
                    <FileName>{panFileName}</FileName>
                    <DeleteButton 
                      onClick={() => handleDeleteFile(setPanFileName)}
                    >
                      <DeleteIcon />
                    </DeleteButton>
                  </>
                ) : (
                  'Drag and drop or browse files'
                )}
              </label>
            </FileUploadWrapper>
          </FormGroup>
          <FormGroup>
            <FormLabel>Aadhar Card Number</FormLabel>
            <FormInput type="text" name="aadhar_number" required />
          </FormGroup>
          <FormGroup>
            <FormLabel>Aadhar Card Photo Upload</FormLabel>
            <FileUploadWrapper>
              <FileInput 
                type="file" 
                name="aadhar_photo" 
                accept="image/*" 
                required 
                id="aadhar_photo" 
                onChange={(e) => handleFileChange(e, setAadharFileName)}
              />
              <label htmlFor="aadhar_photo">
                {aadharFileName ? (
                  <>
                    <FileName>{aadharFileName}</FileName>
                    <DeleteButton 
                      onClick={() => handleDeleteFile(setAadharFileName)}
                    >
                      <DeleteIcon />
                    </DeleteButton>
                  </>
                ) : (
                  'Drag and drop or browse files'
                )}
              </label>
            </FileUploadWrapper>
          </FormGroup>
          <FormButton type="submit">Submit Application</FormButton>
          <FormNote>By submitting this form, you agree to our Terms and Privacy Policy.</FormNote>
        </Form>
        <StyledSnackbar
          open={alertOpen}
          autoHideDuration={6000}
          onClose={() => setAlertOpen(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={() => setAlertOpen(false)} severity={alertSeverity}>
            {alertMessage}
          </Alert>
        </StyledSnackbar>
      </FormWrapper>
    </Container>
  );
};

export default BankAccountForm;
