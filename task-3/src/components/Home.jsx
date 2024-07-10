import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Box, Button, Typography } from '@mui/material';

const Home = () => {
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem('token');

    return(
        <Container>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
                <Typography variant="h4" gutterBottom>Welcome to File Manager{isLoggedIn && `, ${localStorage.getItem('login')}!`}</Typography>
                <Box display="flex" flexDirection="row" justifyContent="center" mt={3}>
                    <Button variant="contained" color="primary" onClick={() => navigate('/login')} sx={{ m: 1 }}>
                        Login
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => navigate('/register')} sx={{ m: 1 }}>
                        Register
                    </Button>
                    { isLoggedIn &&  
                        <Button variant="contained" color="secondary" onClick={() => navigate('/drive')} sx={{ m: 1 }}>
                            drive
                        </Button>
                    }
                </Box>
            </Box>
        </Container>
    )
}

export default Home;

