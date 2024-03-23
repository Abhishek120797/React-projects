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
    <div className='flex justify-center items-center'>

      <div className='flex flex-col justify-center items-center m-4 md:m-8'>

        <h3 className='text-2xl md:text-4xl text-white m-5 p-2'>
          We help to create visual strategies.
        </h3>

        <ul className='text-white text-lg flex flex-wrap justify-center items-center'>

          {skillSet.map((skill,index)=>(
            <li key={index}>
              <div className='flex flex-col justify-center items-center border border-gray-black m-1 p-1 h-56 w-44'>

                <span>{skill.skill}</span>
                
                <div>
                  <img src={skill.image} alt="" />
                </div>

                <span>{skill.percent + ' % '}</span>

              </div>
            </li>
          ))}

        </ul>

      </div>

    </div>

  );
}

export default SkillSet;