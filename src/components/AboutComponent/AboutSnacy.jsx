import React from 'react'
import AbtSnacky from "../../assets/snaimg.png"
const AboutSnacy = () => {
  return (
    <div className='row container py-5'>
      <div className='col-md-6'>
        <img src={AbtSnacky} alt="img" className='w-100' />
      </div>
      <div className='col-md-6'>
        <h1 className='text-danger'>Snacky! Italy’s Pizza Restaurant</h1>
        <p>We are Pesto Pizza Company. The brand is owned by SmartDataSoft Group, one of Asia's leading groups in the hospitality and fine dining industries. Established in 1982, Pesto Pizza Company - Italian-style Pizza restaurant chain began to expand, develop an international franchise and store system. To date, Pesto Pizza Company brand has more than 300 stores in more than 12 markets worldwide.</p>
      </div>
    </div>
  )
}

export default AboutSnacy