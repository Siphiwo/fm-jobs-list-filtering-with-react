import React from 'react'
import Details from './Details'
import Image from './Image'

function JobCard({listing, filtering}) {
    const rules = `bg-white ${listing.featured ? 'featured-item' : ''} max-w-4xl mb-10 shadow-lg p-4 flex justify-center items-center`
    return (
        <div className={rules}>
            <Image url={listing.logo} desc={listing.company} />
            <Details

                company={listing.company}
                recent={listing.new}
                featured={listing.featured}
                position={listing.position}
                postedAt={listing.postedAt}
                contract={listing.contract}
                location={listing.location}
                languages={listing.languages}
                tools={listing.tools}
                filter_f={filtering}
            />
        </div>
    )
}

export default JobCard
