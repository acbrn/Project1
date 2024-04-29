import React from 'react'
import { Link } from 'react-router-dom'
import iowafarm from '../../pdf-files/new_iowa_tax_law_benefits_for_retired_farmers_-_dec._2023.pdf'
import iowatution from '../../pdf-files/iowa_tuition__textbook_credit_-_updated_feb._7th__2024.pdf'
import medicaltax from '../../pdf-files/what_medical_expense_are_tax_deductions_-_2-5-2024.pdf'
import './newsletter.css'

const Latest = () => {
  const latestarticle1 = () => {
    window.open(medicaltax); 
  }
  const latestarticle2 = () => {
    window.open(iowafarm); 
  }
  const latestarticle3 = () => {
    window.open(iowatution); 
  }
  return (
    <>    
    <div className='latest-title-card'>Latest Newsletters</div>
    <div className='latest-content-card'>
        <div className='latest-content1'>
        <h5>Medical Tax</h5>
              <button onClick={latestarticle1}>Read</button>
          </div>
          <div className='latest-content2'>
          <h5>Iowa Farm Tax</h5>
              <button onClick={latestarticle2}>Read</button>
          </div>
          <div className='latest-content3'>
        <h5>Iowa Tution</h5>
              <button onClick={latestarticle3}>Read</button>
          </div>
      </div>
        <div className='latest-content4'>
            <Link to='/newsletter'>
                <button type='button'>Newsletter Home</button>
            </Link>
    </div>
    </>
  )
}

export default Latest