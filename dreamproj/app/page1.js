<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from '@/components/ui/button'
import ComboboxDemo from '@/dropmenu'
import React from 'react'

const Page1 = () => {
  return (
    <div className=" h-screen m-0 flex flex-col justify-center items-center">
      <h1 className='text-4xl font-bold mb-4'>
        Meal Fetcher
      </h1>
      <div className="flex flex-col justify-center items-center"> 
        <ComboboxDemo />
        <Button className="bg-green-500 mt-4">
          Enter!
        </Button>
      </div>
    </div>
  )
}

export default Page1