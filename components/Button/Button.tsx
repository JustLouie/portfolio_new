import React from 'react'

const Button = ({ children, className }: { children: React.ReactNode; className?: string}) => {
    return (
        <button
            className={`flex item-center gap-2 py-2 px-4 border border-purple-100 text-white ${className}`}
        >
            { children }
        </button>
    )
}

export default Button