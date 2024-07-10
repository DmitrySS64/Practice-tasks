import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Box } from '@mui/material';
import { login } from "../../services/api";

const Login = () => {
    const [loginValue, setLoginValue] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await login(loginValue, password);
            localStorage.setItem('login', loginValue)
            localStorage.setItem('token', response.data.token);
            navigate('/');
        }
        catch (error) {
            console.error('Login failed', error);
        }
    }
    return(
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
                <Button variant="contained" color="primary" onClick={handleLogin}>
                    Login
                </Button>
            </Box>
        </Container>
    )
}

export default Login;