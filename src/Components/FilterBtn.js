import React from 'react'


const FilterBtn = ({id, cat , selected, setSelected}) => {

    const clickHandler = ()=>{
        setSelected(id);
    }

  return (
    <button onClick={clickHandler} className={selected===id?('border mx-3 px-3 py-1 rounded-sm bg-gray-700 text-white'):('border mx-3 px-3 py-1 rounded-sm')}>
          {cat}
    </button>
  )
}

export default FilterBtn
