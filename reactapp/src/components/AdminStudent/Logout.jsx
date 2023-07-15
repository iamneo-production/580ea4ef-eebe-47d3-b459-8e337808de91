import React from 'react'
import Navbar from './Navbar'
import Textform from './Textform';
export default function Home() {
  return (
    <>

      <Navbar Home="IAS Academy" Academy="Academy" Courses="Course" Students="Students" Logout="Logout" />
      <Textform />
      
    </>
  )
}
