import React from 'react'

function ProfessionalExperience() {
  return (
    <div
      name="experience"
      className="h-screen w-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="flex flex-col justify-center h-full">
                <div className="pb-20">
                    <p className="text-4xl font-bold inline border-b-4 border-black">
                        Professional Experience
                    </p>
                </div>
                <p className="text-2xl font-bold">
                      Urjanet Energy Solutions Pvt. Limited, Chennai &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;2.8 Years (Feb 2019 - Oct 2021)
                </p>
                <p className="text-xl font-bold">
                      Software Engineer
                </p><br/>
                <p className="text-xl font-bold">
                      Project - Billing Data Extraction Service:
                </p>
                <p className='text-xl'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We automate the collection of massive amounts of hard-to-get, disparate energy datafrom more 
than 1k utilities in abroad, normalize and convert the data into a consistent, standardizedand unique format, so 
the data will be used by the business intelligence, energy management, accounting and procurement systems
which help to achieve the business need in various aspects
                </p><br/>
                <p className="text-xl font-bold">
                    Technologies Used:
                </p>
                <p className='text-xl'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Core Java, HTML, Git, Eclipse
                </p>
            </div>
        </div>
    </div>
  )
}

export default ProfessionalExperience