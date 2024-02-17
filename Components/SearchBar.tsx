"use client"
import { manufacturers } from '@/constants'
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


const SearchButton = (otherClasses: any) => (
  <button
    type='submit'
    className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
)


export default function SearchBar() {
  const [manufacturer, setManuFacturer] = useState("");
  const [model, setModel] = useState("")
  const router = useRouter()


  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (manufacturer.trim() === "" && model.trim() === "") {
      return alert('Please Provide some input')
    }

    UpdateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  }

  const UpdateSearchParams = (model: string, manufacturer: string) => {

    //! Create a new URLSearchParams object using the current URL search parameters
    const SearchParams = new URLSearchParams(window.location.search)

    // !Update or delete the 'model' search parameter based on the 'model' value
    if (model) {
      SearchParams.set("model", model)
    } else {
      SearchParams.delete('model')
    }

    // !Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
    if (manufacturer) {
      SearchParams.set("manufacturer", manufacturer)
    } else {
      SearchParams.delete('manufacturer')
    }

    // !Generate the new pathname with the updated search parameters
    const newPathName = `${window.location.pathname}?${SearchParams.toString()}`
    console.log("model==>", model, "manufacturer =>", manufacturer, "router =>",
      router, "searhParam=>", SearchParams, "new path name", newPathName);

    router.push(newPathName)
  }


  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
        <button
          type='submit'
          className={`-ml-3 z-10 sm:hidden`}
        >
          <Image
            src="/magnifying-glass.svg"
            alt="magnifying glass"
            width={40}
            height={40}
            className='object-contain'
          />
        </button>
      </div>
      <div className="searchbar__item">
        <Image src="/model-icon.png"
          alt="car model"
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Tiguan...'
          className="searchbar__input"
        />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  )
}
