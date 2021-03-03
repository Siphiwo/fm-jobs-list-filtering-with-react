import React from 'react'

function Details({ 
    company, 
    recent, 
    featured, 
    position, 
    postedAt, 
    contract, 
    location,
    languages,
    tools,
    filter_f
 }) {
    function handleClick(skill){
        filter_f(skill)
    }

    const Skills = skill => (<div class="tag rounded-md p-1 px-2 m-2">
        <button onClick={() => handleClick(skill)}>
            {skill}
        </button>
        </div>)
        
    return (
        <>
        <div className="flex-1 px-4 py-2">
            <div className="flex flex-grow">
                <p className="mr-2 flex justify-center items-center">{company}</p>
                {recent ? <p className="tags new-tag rounded-xl px-2 p-1">new</p> : null}
                {featured ? <p className="tags new-tag rounded-xl px-2 p-1">featured</p> : null}
            </div>
            <p className="main-heading my-2">{position}</p>
            <div className="flex flex-grow">
                <small className="text-gray-400">{postedAt}</small>
                <small className="text-gray-400">{contract}</small>
                <small className="text-gray-400">{location}</small>
            </div>
        </div>
        <div className="tags flex flex-1 justify-center items-end">
            {
                [...languages, ...tools].map( skill => Skills(skill))
            }
        </div>
        </>
    )
}

export default Details
