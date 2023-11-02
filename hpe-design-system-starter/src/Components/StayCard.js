import React from 'react';
import { Box, Card, CardBody, CardFooter, CardHeader } from 'grommet';
import { Favorite } from 'grommet-icons';
import './StayCard.css';

const StayCard = ({ item, showBadge }) => {
    return (
        <Box width="30%" margin="medium">
            <Card width="100%" elevation="small" pad="medium">
                <CardHeader>
                    {item.smart_location}
                    {item.price === 50 && showBadge && <button className="low-rate-caret">Low rate</button>}
                    {item.price > 100 && showBadge && <button className="usually-booked-caret">Usually Booked</button>}
                    <Favorite />
                </CardHeader>
                <CardBody>
                    <span>{item.beds} bedrooms, {item.bathrooms} bathrooms</span>
                    <span>Oct 6 - Oct 21</span>
                    <hr />
                </CardBody>
                <CardFooter>
                    Total <span></span> <span>${item.price}</span>
                </CardFooter>
            </Card>
        </Box>
    );
};

export default StayCard;