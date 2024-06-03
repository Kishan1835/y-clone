import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
    const { searchTerm } = useParams(); // Destructure searchTerm from useParams
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
            .catch((error) => console.error('Error fetching videos:', error));
    }, [searchTerm]);

    return (
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
            <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
                Search results for: <span style={{ color: '#FC1503' }}>{searchTerm}</span> videos
            </Typography>
            <Videos videos={videos} />
        </Box>
    );
}

export default SearchFeed;
