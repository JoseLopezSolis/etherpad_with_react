import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowPads from '../showPads/ShowPads';

const PadInfo = () => {
    const [padIDs, setPadIDs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Define the API call function
        const fetchPadIDs = async () => {
            try {
                const response = await axios.get('http://localhost:9001/api/1.2.1/listAllPads?apikey=1e1b26df5656b6152f8efc6420111ad9ec2b2e8ebbfddf4bb4569ed1c6857650');
                // Check if the response is successful
                if (response.data.code === 0) {
                    setPadIDs(response.data.data.padIDs);
                } else {
                    setError('Failed to fetch pad IDs');
                }
            } catch (err) {
                setError('An error occurred: ' + err.message);
            } finally {
                setLoading(false);
            }
        };

        // Call the API when the component mounts
        fetchPadIDs();
    }, []);

    // Render the component
    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && (
                <ul>
                    {padIDs.map((padID, index) => (
                        <ShowPads padName={padID} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PadInfo;