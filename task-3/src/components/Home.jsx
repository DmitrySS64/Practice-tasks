import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Box, Button, Typography } from '@mui/material';

const Home = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

    const signOutHandle = () =>{
        localStorage.removeItem('token');
        localStorage.removeItem('login');
        setIsLoggedIn(!isLoggedIn)
    }
    return(
        <Container>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
                <Typography variant="h4" gutterBottom>Welcome to File Manager{isLoggedIn && `, ${localStorage.getItem('login')}!`}</Typography>
                <Box display="flex" flexDirection="row" justifyContent="center" mt={3}>
                    { !isLoggedIn && 
                    <> 
                        <Button variant="contained" color="primary" onClick={() => navigate('/login')} sx={{ m: 1 }}>
                            Login
                        </Button>
                        <Button variant="contained" color="secondary" onClick={() => navigate('/register')} sx={{ m: 1 }}>
                            Register
                        </Button>
                    </>
                    }
                    { isLoggedIn &&
                    <>  
                        <Button variant="contained" color="primary" onClick={() => navigate('/drive')} sx={{ m: 1 }}>
                            drive
                        </Button>
                        <Button variant="contained" color="secondary" onClick={() => signOutHandle()} sx={{ m: 1 }}>
                            Sign out
                        </Button>
                    </>
                    }
                </Box>
            </Box>
        </Container>
    )
}

export default Home;

