import React, { useState } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/api';

const Register = () => {
    const [loginValue, setLoginValue] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const responce = register(loginValue, password);
            localStorage.setItem('login', loginValue)
            localStorage.setItem('token', responce.data.token)
            navigate('/');
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <Container>
            <Box component="form" noValidate autoComplete="off">
                <TextField
                    label="Login"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={loginValue}
                    onChange={(e) => setLoginValue(e.target.value)}
                />
                <TextField
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={() => setShowPassword(!showPassword)}>Show Password</Button>
                <Button variant="contained" color="primary" onClick={handleRegister}>
                    Register
                </Button>
            </Box>
        </Container>
    );
};

export default Register;
