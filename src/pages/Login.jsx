import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import '../styles/index.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="page form-page">
      <h1>Signin to your<br/>PopX account</h1>
      <p className="subtitle w-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

      <div className="form-container">
        <Input 
          label="Email Address" 
          placeholder="Enter email address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <Input 
          label="Password" 
          type="password" 
          placeholder="Enter password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />

      <Button variant="disabled" onClick={() => navigate('/profile')}>
  Login
</Button>
      </div>
    </div>
  );
};

export default Login;
