
import { Button } from '@/components/ui/button'
import ComboboxDemo from '@/dropmenu'
import React from 'react'

import Link from 'next/link'

function Page1 (){
  return (
    <div className=" h-screen m-0 flex flex-col justify-center items-center">
      <h1 className='text-4xl font-bold mb-4'>
        Meal Fetcher
      </h1>
      <div className="flex flex-col justify-center items-center"> 
        <ComboboxDemo />
        <Link href="/page2">
      <Button className="bg-green-500 mt-4">
        Enter!
      </Button>
      </Link>
      </div>
    </div>
  )
}

export default Page1