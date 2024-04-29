import React from 'react'
import { Link } from 'react-router-dom'
import standarddeduction from '../../pdf-files/2023_federal_standard_deduction_and_tax_rate.pdf'
import checklist from '../../pdf-files/checklist_for_the_iowa_farm_tenancy_income_exclusion_-_jan._2024.pdf'
import activematerial from '../../pdf-files/active_material___passive_participation_-_jan._2024.pdf'
import './newsletter.css'

const Archive = () => {
  const archivearticle1 = () => {
    window.open(standarddeduction); 
  }
  const archivearticle2 = () => {
    window.open(checklist); 
  }
  const archivearticle3 = () => {
    window.open(activematerial); 
  }
  return (
    <>    
    <div className='archive-title-card'>Archive Newsletters</div>
    <div className='archive-content-card'>
        <div className='archive-content1'>
        <h5>Fed Standard Deduction</h5>
              <button onClick={archivearticle1}>Read</button>
          </div>
          <div className='archive-content2'>
        <h5>Check List</h5>
              <button onClick={archivearticle2}>Read</button>
          </div>
          <div className='archive-content3'>
        <h5>Active Material</h5>
              <button onClick={archivearticle3}>Read</button>
          </div>
      </div>
        <div className='archive-content4'>
            <Link to='/newsletter'>
                <button type='button'>Newsletter Home</button>
            </Link>
    </div>
    </>
  )
}

export default Archive