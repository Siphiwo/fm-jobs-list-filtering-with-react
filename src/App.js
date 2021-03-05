import { useEffect, useState } from 'react';
import Header from './components/Header';
import JobCard from './components/JobCard';
import listingsData from './data/data.json'


function App() {
  const [listings, setListings] = useState([])
  const [filters, setFilters] = useState([])
  useEffect(() => {
    setListings(listingsData)
  }, [])
  
  const filterListings = (filter_by = '') => {

    setListings(listings.filter(listing => [...listing.languages, ...listing.tools].includes(filter_by)))
    
    if (!filters.includes(filter_by))
       setFilters([...filters, filter_by])
  }

  const removeFilter = (removed_filter) => {
    
  }

  return (
    <div className="App">
     <Header />
     <div className="flex justify-center items-center text-gray-900 h-12">
       { filters.map(filter => <span className="p-2 mr-3 bg-white rounded cursor-pointer" onClick={() => removeFilter(filter)}>{filter}</span>)}
     </div>
     <div className="grid p-16 justify-center items-center text-gray-900">
       { listings.map(listing => <JobCard listing={listing} key={listing.id} filtering={filterListings} />) }
     </div>
    </div>
  );
}

export default App;
