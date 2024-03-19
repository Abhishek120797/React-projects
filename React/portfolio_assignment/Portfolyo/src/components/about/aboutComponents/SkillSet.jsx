import React from 'react';

function SkillSet() {
  return (
    <div className='h-[33rem] flex items-center space-x-12'>

      <div className='w-[30rem] flex flex-col space-y-4'>

        <h3 className='text-white text-4xl'>
          We help to create visual strategies.
        </h3>

        <p >
          A very small stage in a vast cosmic arena great turbuslent clouds encyclo-paedia galactica star
          stuff harvesting star light
        </p>

        <ul >

          <li>
            <div >
              <span >Website Development</span>

              <span>95%</span>
            </div>

            <div >
              <div ></div>
            </div>
          </li>

          <li>
            <div >
              <span >Design UI & UX</span>

              <span >85%</span>
            </div>

            <div >
              <div></div>
            </div>
          </li>

        </ul>

      </div>

      <figure >
        <img src="../src/assets/images/skill-banner.jpg" alt="skill banner"
          />
      </figure>

    </div>

  );
}

export default SkillSet;