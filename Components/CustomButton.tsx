import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '../types/index'

export default function CustomButton({ isDisabled, btnType, title, containerStyles, textStyle, rightIcon, handleClick }: CustomButtonProps) {
    return (
        <button
            disabled={isDisabled}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
            type={btnType || "button"}

        >
            <span className={`flex-1 ${textStyle}`}>{title}</span>
            {rightIcon && (
                <div className='relative w-6 h-6'>
                    <Image
                        src={rightIcon}
                        alt="arrow-left"
                        fill
                        className='object-contain'
                    />
                </div>
            )}
        </button>
    )
}
