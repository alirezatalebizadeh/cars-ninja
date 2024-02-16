
import React, { Fragment, useState } from 'react'
import Image from 'next/image';
import { Combobox, Transition } from '@headlessui/react'
import { SearchManufaturerProp } from '@/types';
import { manufacturers } from "@/constants"


export default function SearchManufacturer({ manufacturer, setManuFacturer }: SearchManufaturerProp) {
    const [query, setQuery] = useState("")

    const filteredManufacturers =
    manufacturer === ""
            ? manufacturers
            : manufacturers.filter((item) =>
                item
                    .toLowerCase()
                    .replace(/\s+/g, "")
                    .includes(manufacturer.toLowerCase().replace(/\s+/g, ""))
            );


    return (
        <div className='search-manufacturer'>
            <Combobox value={manufacturer} onChange={setManuFacturer}>
                <div className="relative w-full">
                    {/* Button for the combobox. Click on the icon to see the complete dropdown */}
                    <Combobox.Button
                        className="absolute top-[14px]">
                        <Image
                            src='/car-logo.svg'
                            alt="car logo"
                            width={20}
                            height={20}
                            className='ml-4'
                        />

                    </Combobox.Button>

                    {/* Input field for searching  */}
                    <Combobox.Input
                        className={`w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm`}
                        displayValue={(item: string) => item}
                        onChange={(event) => setQuery(event.target.value)}// Update the search query when the input changes
                        placeholder='Volkswagen...'
                    />
                    {/* Transition for displaying the options */}
                    <Transition
                        as={Fragment}// group multiple elements without introducing an additional DOM node i.e., <></>
                        leave='Transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery("")}// Reset the search query after the transition completes
                    >
                        <Combobox.Options
                            className={`absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}
                            static
                        >
                            {/* اگر مقداری بعد از سرچ پیدا نشد این کار رو میکنه */}
                            {filteredManufacturers.length === 0 && manufacturer !== "" ? (
                                <Combobox.Option
                                    value={manufacturer}
                                    className={`absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}
                                >
                                    Create " {manufacturer}"
                                </Combobox.Option>
                            ) : (
                                filteredManufacturers.map((item) => (
                                    <Combobox.Option
                                        key={item}
                                        className={({ active }) => `relative search-manufacturer__option ${active ? "bg-primary-blue text-white" : "text-gray-900"}`
                                        }
                                        value={item}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                    {item}
                                                </span>

                                                {/* Show an active blue background color if the option is selected */}
                                                {selected ? (
                                                    <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-primary-blue-100"}`}></span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>

                    </Transition>
                </div>
            </Combobox >

        </div >
    )
}
