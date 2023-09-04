import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Check if all mandatory fields are filled
    if (!firstName || !lastName || !dob || !gender || !contactNo || !email || !password || !confirmPassword) {
      alert('Please fill in all mandatory fields.');
      return;
    }

    // Check email format
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Check contact number length
    if (contactNo.length !== 10) {
      alert('Contact number must have exactly 10 digits.');
      return;
    }

    // Check password requirements (8 letters with at least one uppercase and one lowercase)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert('Password must contain at least 8 characters with at least one uppercase and one lowercase letter.');
      return;
    }

    // All validations passed, you can proceed with sign-up logic
    // Handle sign-up logic here

    // Redirect to the WelcomePage after successful signup using the navigate function
    navigate('/welcome');
  };

  return (
    <div className="SignUpPage">
      <div className="form-container">
        <h1>Sign Up</h1>
        <div className="form-label">
          <label htmlFor="firstName">First Name *</label>
          <input
            className="form-input"
            type="text"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-label">
          <label htmlFor="lastName">Last Name *</label>
          <input
            className="form-input"
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-label">
          <label htmlFor="dob">Date of Birth *</label>
          <input
            className="form-input"
            type="date"
            id="dob"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="form-label">
          <label htmlFor="gender">Gender *</label>
          <input
            className="form-input"
            type="text"
            id="gender"
            placeholder="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="form-label">
          <label htmlFor="contactNo">Contact Number *</label>
          <input
            className="form-input"
            type="tel"
            id="contactNo"
            placeholder="Contact Number"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
          />
        </div>
        <div className="form-label">
          <label htmlFor="email">Email Address *</label>
          <input
            className="form-input"
            type="email"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-label">
          <label htmlFor="password">Password *</label>
          <input
            className="form-input"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-label">
          <label htmlFor="confirmPassword">Confirm Password *</label>
          <input
            className="form-input"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className="form-button" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
