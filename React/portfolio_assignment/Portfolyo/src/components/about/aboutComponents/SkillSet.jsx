import React from 'react';
import { useOutletContext } from 'react-router-dom';

function SkillSet() {


  const user = useOutletContext()

  const skillSet = user.skills.map((skill)=>{
    return {
      skill:skill.name,
      percent:skill.percentage,
      image:skill.image.url
    };
  })


  return (
    <div >

      <div className='flex flex-col items-center gap-4 m-10 p-4'>

        <h3 className='text-2xl md:text-3xl lg:text-5xl' >
          We help to create visual strategies.
        </h3>

        <ul className='flex flex-wrap justify-center items-center'>

          {skillSet.map((skill,index)=>(
            <li key={index}
            className='border border-gray-black flex justify-center items-center m-2 p-1'
            >
              <div className='flex flex-col items-center m-1 p-1'>

                <span className='text-xl'>{skill.skill}</span>
                
                <div className='h-52 w-52'>
                  <img src={skill.image} alt="" />
                </div>

                <span className='text-lg'>{skill.percent + ' % '}</span>

              </div>
            </li>
          ))}

        </ul>

      </div>

    </div>

  );
}

export default SkillSet;