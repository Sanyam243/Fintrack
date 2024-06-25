import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Home=()=>{
  window.location.href='/'
}
const Budgets=()=>{
  window.location.href='/dashboard/budgets'
}
const Expenses=()=>
  {
    window.location.href='/dashboard/expensesData'
  
  }
const Dash=()=>{
  window.location.href='/dashboard'

}
function DashboardHeader() {
  return (
    <div className='p-5 shadow-sm border flex justify-between'>
    <div></div>
     <div className='flex justify-between gap-8'>


     <Button onClick={()=>Home()} >
     
      Home</Button>
      <Button  onClick={()=>Dash()} className='md:hidden '>Dashboard</Button>
      <Button  onClick={()=>Budgets()}className=' md:hidden'>Budgets</Button>
      <Button  onClick={()=>Expenses()} className=' md:hidden'>Expenses</Button>
      <UserButton/></div>

    </div>
  )
}

export default DashboardHeader
