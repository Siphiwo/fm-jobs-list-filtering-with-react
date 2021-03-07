import React from 'react'

function FilterItem({item, _callback}) {

    const removeFilter = () => {
        _callback(item)
    }

    return (
        <span className="p-2 mr-3 bg-white rounded cursor-pointer hover:bg-red-400" onClick={() => removeFilter()}>{item}</span>
    )
}

export default FilterItem
