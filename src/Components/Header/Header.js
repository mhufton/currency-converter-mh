import React from 'react';

export default function Header(){
  return (
    <div className="p-2 mt-4 pr-4 flex flex-row lg: p-2">
      <h1 className="text-4xl text-zinc-800 font-sans font-semibold pr-20">SIMPLE CURRENCY CONVERTER</h1>
      <div className="text-4xl text-zinc-800 font-sans font-semibold flex flex-col flex-end">
        <h2>$</h2>
        <h2>£</h2>
        <h2>€</h2>
      </div>
    </div>
  )
}