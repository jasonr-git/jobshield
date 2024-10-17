import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import emailjs from 'emailjs-com';
import './ChatBot.css';
import styled from 'styled-components';
import { ReactComponent as SendIcon } from '../../icons/send.svg'; // Correct import path

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [collectingAppointment, setCollectingAppointment] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState({ name: '', email: '', phone: '', date: '', time: '' });

  const chatboxRef = useRef(null);

  const apiKey = 'AIzaSyAqN_oaVBUP9OJ1K9HZFC5wQAg1cQ5AnJk'; // Replace with your API key
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    systemInstruction: `
System Instructions for Job Authenticity Chatbot


Objective:
To determine whether a job posting is authentic or fraudulent by collecting and analyzing information about the job.
please dont give answer in the long format , just give the direct answer about the job weather it is fake or not

Instructions:

1. Greeting and Introduction:
    Begin the conversation with a friendly greeting and a brief explanation of the chatbot’s purpose.
    Example: Hello! I’m here to help you determine if a job posting is legitimate or not. I’ll ask you for some details about the job, and then I’ll analyze the information.

2. Collect Job Information:
    - Job Title:
      Prompt the user to provide the job title.
      Example: Please enter the job title you are inquiring about.

    - Job Description:
      Ask for a detailed description of the job.
      Example: Can you provide a detailed description of the job duties and responsibilities?

    - Country:
      Request the country where the job is located.
      Example: Which country is this job located in?

    - Salary:
      Inquire about the salary offered for the position.
      Example: What is the salary range or amount offered for this job?

3. Information Analysis:
    After receiving the information, analyze the job posting for common signs of authenticity or fraud.
    Example: Thank you for providing the details. I will now analyze the information to determine if the job posting appears to be authentic.

4. Provide Feedback:
    Based on the analysis, provide feedback on the legitimacy of the job posting.
    Example: Based on the details provided, this job posting [appears to be legitimate / has several red flags indicating it might be fraudulent]. It’s important to verify further through additional research or contact the company directly.

5. Offer Further Assistance:
    Offer to assist with any additional questions or concerns the user may have.
    Example: If you have any more questions or need further assistance, feel free to ask. I’m here to help!

6. End the Conversation:
    Close the conversation politely and offer a final note of encouragement.
    Example: Thank you for using our service. Good luck with your job search!
`,
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: 'text/plain',
  };

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    const userMessage = { role: 'user', parts: [{ text: input }] };
    setMessages([...messages, userMessage]);

    if (collectingAppointment) {
      handleAppointmentInput(input);
      setInput('');
      return;
    }

    setIsBotTyping(true);

    const chatSession = await model.startChat({
      generationConfig,
      history: [...messages, userMessage],
    });

    const result = await chatSession.sendMessage(input);
    const sanitizedResponse = result.response.text().replace(/\*\*/g, '');

    const botMessage = { role: 'model', parts: [{ text: sanitizedResponse }] };
    setMessages([...messages, userMessage, botMessage]);

    // Check for keywords to trigger appointment scheduling
    if (input.toLowerCase().includes('schedule an appointment') || input.toLowerCase().includes('book an appointment')) {
      setCollectingAppointment(true);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'model', parts: [{ text: 'Sure, I can help with that. Please provide your name.' }] },
      ]);
    }

    setIsBotTyping(false);
    setInput('');
  };

  const handleAppointmentInput = (userInput) => {
    const updatedDetails = { ...appointmentDetails };

    if (!updatedDetails.name) {
      updatedDetails.name = userInput;
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'model', parts: [{ text: 'Please provide your email address.' }] },
      ]);
    } else if (!updatedDetails.email) {
      updatedDetails.email = userInput;
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'model', parts: [{ text: 'Please provide your phone number.' }] },
      ]);
    } else if (!updatedDetails.phone) {
      updatedDetails.phone = userInput;
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'model', parts: [{ text: 'Please provide the preferred date for the appointment.' }] },
      ]);
    } else if (!updatedDetails.date) {
      updatedDetails.date = userInput;
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'model', parts: [{ text: 'Please provide the preferred time for the appointment.' }] },
      ]);
    } else if (!updatedDetails.time) {
      updatedDetails.time = userInput;
      setAppointmentDetails(updatedDetails);
      sendEmail(updatedDetails);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'model', parts: [{ text: 'Your appointment request has been sent. We will contact you shortly.' }] },
      ]);
      setCollectingAppointment(false);
    }
    setAppointmentDetails(updatedDetails);
  };

  const sendEmail = (details) => {
    const templateParams = {
      name: details.name,
      email: details.email,
      phone: details.phone,
      date: details.date,
      time: details.time,
    };

    emailjs.send('service_ttmxq4p', 'template_jpp3vne', templateParams, 'w5fGLVI0VKb3QrOkW')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      })
      .catch((err) => {
        console.error('Failed to send email.', err);
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const Alignment = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    background: #f5f5f5;
  `;

  return (
    <div className="chatbot">
      <header>
        <h2>JobShield.online</h2>
      </header>
      <div ref={chatboxRef} className="chatbox">
        {messages.map((message, index) => (
          <div key={index} className={`chat ${message.role === 'user' ? 'outgoing' : 'incoming'}`}>
            {message.role === 'model' && <span>🤖</span>}
            <p>{message.parts[0].text}</p>
          </div>
        ))}
        {isBotTyping && (
          <div className="typing-indicator">analyzing...</div>
        )}
      </div>
      <div className="chat-input">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
        ></textarea>
        <span onClick={handleSendMessage}>
          <SendIcon />
        </span>
      </div>
    </div>
  );
};

export default ChatBot;
