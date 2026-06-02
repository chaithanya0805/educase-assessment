import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import '../styles/index.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes'
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <div className="page form-page">
      <h1>Create your<br/>PopX account</h1>

      <div className="form-container">
        <Input label="Full Name" required value={formData.fullName} onChange={handleChange('fullName')} />
        <Input label="Phone number" required value={formData.phone} onChange={handleChange('phone')} />
        <Input label="Email address" required value={formData.email} onChange={handleChange('email')} />
        <Input label="Password" type="password" required value={formData.password} onChange={handleChange('password')} />
        <Input label="Company name" value={formData.company} onChange={handleChange('company')} />

        <div className="radio-group-container">
          <label className="radio-group-label">Are you an Agency?<span className="required-star">*</span></label>
          <div className="radio-options">
            <label className="radio-label">
              <input 
                type="radio" 
                name="agency" 
                value="yes" 
                checked={formData.isAgency === 'yes'} 
                onChange={() => setFormData({...formData, isAgency: 'yes'})} 
              />
              <span className="radio-custom"></span>
              Yes
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                name="agency" 
                value="no" 
                checked={formData.isAgency === 'no'} 
                onChange={() => setFormData({...formData, isAgency: 'no'})} 
              />
              <span className="radio-custom"></span>
              No
            </label>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Button variant="primary" onClick={() => navigate('/profile')}>
          Create Account
        </Button>
      </div>
    </div>
  );
};

export default Signup;
