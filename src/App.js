import { useEffect, useState } from 'react';
import FilterItem from './components/FilterItem';
import Header from './components/Header';
import JobCard from './components/JobCard';
import listingsData from './data/data.json'

function App() {
  const [listings, setListings] = useState([])
  const [filters, setFilters] = useState([])

  useEffect(() => {
    if(filters.length == 0)
      setListings(listingsData)
  }, [filters])
  
  const filterListings = (filter_by = null) => {

    if (!filters.includes(filter_by) && filter_by !== null)
      setFilters([...filters, filter_by])

    setListings(listings.filter(listing => [...listing.languages, ...listing.tools].includes(filter_by)))
  }

  const removeFilter = (removed_filter) => {
    setFilters( filters.filter( item => item !== removed_filter ) )
  }

  return (
    <div>
     <Header />
     <div className="flex justify-center items-center text-gray-900 h-12">
       { filters.map(filter => <FilterItem item={filter} _callback={removeFilter} key={filter} />)}
     </div>
     <div className="grid p-16 justify-center items-center text-gray-900">
       { listings.map(listing => <JobCard listing={listing} key={listing.id} filtering={filterListings} />) }
     </div>
    </div>
  );
}

export default App;
