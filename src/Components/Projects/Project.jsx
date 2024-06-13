import React from 'react'
import './project.css'
import project_data from '../../assets/mywork_data'

const Project = () => {
  return (
    <div className='project mt-[270px] mb-[300px]' id='project'>
      <div className="flex justify-center mb-10 ">
      <h1 className="text-3xl font-[600] mb-[50px]">My <span className="p-2 rounded ml-1">Projects</span></h1>
      </div>

      <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 mx-2'>
          {project_data.map((item,index)=>{
            return <div>
                <div key={index} className='item-data   my-3 mx-8 rounded overflow-hidden'>
                   <div className='card-top relative flex justify-center items-center'>
                      <img src={item.w_img} alt="" className='w-[350px]'/>
                      <div className='card-content absolute inset-0'>
                        <h4  className='text-center'>Project {item.w_no}</h4>
                        <h2>{item.w_name}</h2>
                      </div>
                   </div>

                    <div className='card-bottom flex mx-5 py-3 float-end'>
                      
                      <a href={item.w_link} target='_blank' className='mx-4 mb-2'> Preview <i className='bx bx-link-external ml-1 text-2xl'></i></a>
                    </div>
                </div> 
              </div>
          })}
      </div>
      
    </div>
  )
}

export default Project

