import React from 'react'
import Header from '../../Shared/Components/Header'
import PortalsUsername from '../../PortalsUsername'
import { useSelector } from 'react-redux'
export default function Questions() {
  const count = useSelector((state) => state.counter.value)

  return (
    <div>
        <Header />
        <PortalsUsername>Sagar</PortalsUsername>
        Questions

       the global counter is now : {count}
        </div>
  )
}
