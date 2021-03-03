import { useEffect, useState } from 'react';
import Header from './components/Header';
import JobCard from './components/JobCard';
import listingsData from './data/data.json'


function App() {
  const [listings, setListings] = useState([])
  useEffect(() => {
    setListings(listingsData)
  }, [])
  
  const filterListings = (filter_by = '') => setListings(listings.filter(listing =>  [...listing.languages, ...listing.tools].includes(filter_by)))
  return (
    <div className="App">
     <Header />
     <div className="grid p-16 justify-center items-center text-gray-900">
       { listings.map(listing => <JobCard listing={listing} key={listing.id} filtering={filterListings} />) }
     </div>
    </div>
  );
}

export default App;
