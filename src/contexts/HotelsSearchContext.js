import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { API_HOTELS_URL } from '../services';
import PropTypes from 'prop-types';

const HotelsSearchContext = createContext({});

export const useHotelsSearch = () => {
  return useContext(HotelsSearchContext);
};

export const HotelsSearchProvider = ({ children }) => {
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {
    console.log('Starting search with term:', searchTerm);
    setSearchTerm(searchTerm);
    axios
      .get(API_HOTELS_URL, {
        params: {
          search: searchTerm.toLowerCase(),
        },
      })
      .then((res) => {
        console.log('Search successful, received data:', res.data);
        setFilteredHotels(res.data);
      })
      .catch((error) => {
        console.error('Search failed:', error);
        setFilteredHotels([]);
      });
  };

  return (
    <HotelsSearchContext.Provider
      value={{
        filteredHotels,
        searchTerm,
        handleSearch,
      }}
    >
      {children}
    </HotelsSearchContext.Provider>
  );
};

HotelsSearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
