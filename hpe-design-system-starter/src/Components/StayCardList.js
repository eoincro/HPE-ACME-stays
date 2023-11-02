import React, { useEffect, useState } from 'react';
import { Box, Grommet } from 'grommet';
import axios from 'axios';
import CustomPagination from './CustomPagination';
import './StayCardList.css';
import StayCard from './StayCard';


const StayCardList = () => {
    const [data, setData] = useState([]);
    const [dataSuggestedPlaces, setSuggestedPlacesData] = useState([]);
    const [page, setPage] = useState(1);
    const [itemsPerPage] = useState(6);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/airbnb-listings/records?limit=20'
            );
            setData(response.data.results);
        } catch (error) {
            console.error('Error fetching nearby stays data:', error);
        }
        try {
            const responseSuggestedStays = await axios.get(
                'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/airbnb-listings/records?limit=3'
            );
            setSuggestedPlacesData(responseSuggestedStays.data.results);
        } catch (error) {
            console.error('Error fetching suggested stays data:', error);
        }
    };

    const onPageChange = (newPage) => {
        setPage(newPage);
    };

    const renderCards = () => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = page * itemsPerPage;

        return data.slice(startIndex, endIndex).map((item, index) => (
            <StayCard key={index} item={item} showBadge={true} />
        ));
    };
    const renderSuggestedCards = () => {
        return dataSuggestedPlaces.map((item, index) => (
            <StayCard key={index} item={item} showBadge={false}/>
        ));
    };

    const totalCards = data.length;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(page * itemsPerPage, totalCards);

    return (
        <Box align="center" pad="large">
            <Grommet>
                <div className="cards-container">
                    <h3 style={{ textAlign: 'left' }}>Places you might like</h3>
                    <Box direction="row" wrap style={{ justifyContent: 'center' }}>
                        {renderSuggestedCards()}
                    </Box>

                    <h3 style={{ textAlign: 'left' }}>Nearby stays</h3>
                    <Box direction="row" wrap style={{ justifyContent: 'center' }}>
                        {renderCards()}
                    </Box>
                    <span className="pagination-count">
                        Showing {startIndex + 1} - {endIndex} of {totalCards}
                    </span>
                </div>
                <CustomPagination
                    totalItems={totalCards}
                    itemsPerPage={itemsPerPage}
                    currentPage={page}
                    onPageChange={onPageChange}
                />
            </Grommet>
        </Box>
    );
};

export default StayCardList;
