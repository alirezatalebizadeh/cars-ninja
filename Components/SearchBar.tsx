"use client"
import { manufacturers } from '@/constants'
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer';


export default function SearchBar() {
  const [manufacturer, setManuFacturer] = useState("");
  const [model, setModel] = useState("")


  const handleSearch = () => { }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturers}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  )
}
