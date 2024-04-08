import React from 'react';
import { useState } from 'react';

function About({user}) {

  const social = user.social_handles.map((social)=>{
    return {
      link:social.url,
      title:social.platform,
      text:social.platform.slice(0,3)+"."
    }
  })

  const skillSet = user.skills.map((skill)=>{
    return {
      skill:skill.name,
      percent:skill.percentage,
      image:skill.image.url
    };
  })

  const interview = [
    {
      image:"./images/interview-1.jpg",
      alt:"interview 1",
    },
    {
      image:"./images/interview-2.jpg",
      alt:"interview 1",
    },
    {
      image:"./images/interview-3.jpg",
      alt:"interview 1",
    }
  ]

  const certificate = [
    {
      image:"./images/awward-1.jpg",
      alt:"certificate",
    },
    {
      image:"./images/awward-2.jpg",
      alt:"certificate",
    },
    {
      image:"./images/awward-3.jpg",
      alt:"certificate",
    },
  ]

  const exhibition = [
    {
      image:"./images/exhibition-1.jpg",
      alt:"image",
    },
    {
      image:"./images/exhibition-2.jpg",
      alt:"video",
    },
    {
      image:"./images/exhibition-3.jpg",
      alt:"music",
    },
    {
      image:"./images/exhibition-4.jpg",
      alt:"image",
    },
    {
      image:"./images/exhibition-5.jpg",
      alt:"image",
    },
    {
      image:"./images/exhibition-6.jpg",
      alt:"image",
    },
  ]

  const tabs = [
    {
      id:"about",
      label:"About Me"
    },
    {
      id:"skillset",
      label:"Skillset"
    },
    {
      id:"interview",
      label:"Interview"
    },
    {
      id:"awward",
      label:"Awwards"
    },
    {
      id:"exhibition",
      label:"Exhibition"
    },
  ]

  const [activeTab, setActiveTab] = useState('about');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <section className="section about" aria-label="about-me" id="about">
      <div className="container">

        <div className="tab-container">

          <ul className="tab-btn-list">
          {tabs.map((tab,index)=>(

            <li key={index} className="tab-btn-item">
            <button 
            className={`tab-btn title h6 ${activeTab === tab.id ? 'active':''}`}
            onClick={()=>handleTabClick(tab.id)} 
            >
              {tab.label}
            </button>
            </li>

          ))}
            

          </ul>

          <div className={`tab-content ${activeTab === 'about' ? 'active':''}`}>
            <div className="grid-list">

              <figure className="about-banner img-holder" style={{"--width":"570px", "--height":"420px" }}>
                <img src="./images/about-banner.jpg" width="570" height="420" loading="lazy" alt="about banner"
                  className="img-cover"/>
              </figure>

              <div className="about-content">

                <h2 className="h4 title section-title">
                  A very small stage in a vast cosmic.
                </h2>

                <p className="section-text">
                  A very small stage in a vast cosmic arena great turbuslent clouds encyclo-paedia galactica star
                  stuff harvesting star light the carbon in our apple pies realm of the galaxies
                </p>

                <ul className="about-list">

                  <li className="about-item">
                    <p className="list-title">Name</p>

                    <span className="span title h5">{user.about.name}</span>
                  </li>

                  <li className="about-item">
                    <p className="list-title">Phone Number</p>

                    <span className="span title h5">{user.about.phoneNumber}</span>
                  </li>

                  <li className="about-item">
                    <p className="list-title">Email Address</p>

                    <span className="span title h5">{user.email}</span>
                  </li>

                  <li className="about-item">
                    <p className="list-title">Social Network</p>

                    <div className="social-list">

                      {social.map((socialdata,index)=>(
                        <a key={index} href={socialdata.link}  
                        title={socialdata.title} 
                        className='social-link h6'
                        >{socialdata.text}</a>
                      ))}
                      
                    </div>
                  </li>

                </ul>

              </div>

            </div>
          </div>

          <div className={`tab-content ${activeTab === 'skillset' ? 'active':''}`}>
            <div className="grid-list">

              <div className="skill-content">

                <h3 className="h4 title section-title">
                  We help to create visual strategies.
                </h3>

                <p className="section-text">
                  A very small stage in a vast cosmic arena great turbuslent clouds encyclo-paedia galactica star
                  stuff harvesting star light
                </p>

                <ul className="skill-list">
                {skillSet.map((skill,index)=>(
                  <li key={index}>
                    <div className="skill-wrapper">
                      <span className="span">{skill.skill}</span>

                      <span className="value">{skill.percent}</span>
                    </div>

                    <div className="progress-bar">
                      <div className="progress-fill" style={{"width": `${skill.percent}%` }}></div>
                    </div>
                  </li>
                ))}
                </ul>

              </div>

              <figure className="skill-banner img-holder" style={{ '--width': '570px', '--height': '420px' }} >
                <img src="./images/skill-banner.jpg" width="570" height="420" loading="lazy" alt="skill banner"
                  className="img-cover"/>
              </figure>

            </div>
          </div>

          <div className={`tab-content ${activeTab === 'interview' ? 'active':''}`}>
            <div className="grid-list">

              {interview.map((interview,index)=>(

                <div key={index} className="interview-card img-holder" style={{ '--width': '376px', '--height': '420px' }} >
                  <img src={interview.image} width="376" height="420" loading="lazy" alt={interview.alt}
                    className="img-cover"/>

                  <button className="btn btn:hover">Play</button>
                </div>

              ))}


            </div>
          </div>

          <div className={`tab-content ${activeTab === 'awward' ? 'active':''}`}>

            <h3 className="h4 title section-title">
              We’re a team of creatives who are excited about unique ideas and help IT-tech companies to make identity
              by crafting UI/UX.
            </h3>

            <ul className="grid-list">

              {certificate.map((awward,index)=>(

                <li key={index}>
                <div className="award-card">
                  <figure className="card-banner img-holder" style={{ '--width': '534px', '--height': '383px' }} >
                    <img src={awward.image} width="534" height="383" loading="lazy" alt={awward.alt}
                      className="img-cover"/>
                  </figure>
                </div>
                </li>

              ))}

            </ul>

          </div>

          <div className={`tab-content ${activeTab === 'exhibition' ? 'active':''}`}>
            <ul className="grid-list">

              {exhibition.map((exhibition,index)=>(

                <li key={index}>
                  <div className="exhibition-card">

                    <figure className="card-banner img-holder" style={{ '--width': '376px', '--height': '200px' }} >
                      <img src={exhibition.image} width="376" height="200" loading="lazy" alt={exhibition.alt}
                        className="img-cover"/>
                    </figure>

                    <div className="card-icon">
                      <ion-icon name="image-outline" aria-hidden="true"></ion-icon>
                    </div>

                  </div>
                </li>

              ))}

            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;