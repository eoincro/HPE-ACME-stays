import React, { useState } from 'react';
import { Box, Button, Avatar, Card, CardBody, CardFooter, CardHeader } from 'grommet';
import { HomeRounded } from 'grommet-icons';
import './NavBar.css';


const NavBar = () => {
    const [showCard, setShowCard] = useState(false);

    const toggleCard = () => {
        setShowCard(!showCard);
    };


    return (
        <Box
            direction="row"
            align="center"
            pad={{ horizontal: 'medium', vertical: 'small' }}
            justify="between"
            style={{ position: 'relative' }}
        >
                <HomeRounded color="#0D7AB5" label="Acme Homes" />
                <span className="home-name">Acme Homes</span>

            <Avatar background="dark-2" onClick={toggleCard}>
                JS
            </Avatar>
            {showCard && (
                <Box className="card-container">
                    <Card
                                width="medium"
                                elevation="small"
                                pad="medium"
                            >
                        <CardHeader>
                            Jane Smith
                        </CardHeader>
                        <CardBody>
                            <span className="email">Jane.Smith@me.com</span>
                        </CardBody>
                        <CardFooter>
                            <Button
                                plain
                                onClick={() => alert("View Profile")}
                                label="View Profile"
                            />
                            <Button
                                primary
                                color="#0D7AB5"
                                label="Sign Out"
                                onClick={toggleCard}
                            />
                        </CardFooter>
                    </Card>
                </Box>
            )}
        </Box>
    );
};

export default NavBar;