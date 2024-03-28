import React from 'react';

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



const tabBtns = document.querySelectorAll("[data-tab-btn]");
const tabContents = document.querySelectorAll("[data-tab-content]");

let lastActiveTabBtn = tabBtns[0];
let lastActiveTabContent = tabContents[0];

const filterContent = function () {
  if (!(lastActiveTabBtn === this)) {
    lastActiveTabBtn.classList.remove("active");
    lastActiveTabContent.classList.remove("active");

    this.classList.add("active");
    lastActiveTabBtn = this;

    const currentTabContent = document.querySelector(
      `[data-tab-content="${this.dataset.tabBtn}"]`
    );

    currentTabContent.classList.add("active");
    lastActiveTabContent = currentTabContent;
  }
};

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

addEventOnElements(tabBtns, "click", filterContent);

  return (
    <section className="section about" aria-label="about-me" id="about">
      <div className="container">

        <div className="tab-container">

          <ul className="tab-btn-list">

            <li className="tab-btn-item">
              <button className="tab-btn title h6 active" data-tab-btn="about">About Me</button>
            </li>

            <li className="tab-btn-item">
              <button className="tab-btn title h6" data-tab-btn="skillset">Skillset</button>
            </li>

            <li className="tab-btn-item">
              <button className="tab-btn title h6" data-tab-btn="interview">Interview</button>
            </li>

            <li className="tab-btn-item">
              <button className="tab-btn title h6" data-tab-btn="awward">Awwards</button>
            </li>

            <li className="tab-btn-item">
              <button className="tab-btn title h6" data-tab-btn="exhibition">Exhibition</button>
            </li>

          </ul>

          <div className="tab-content active" data-tab-content="about">
            <div className="grid-list">

              <figure className="about-banner img-holder" style={{"--width":"570px", "--height":"420px" }}data-tilt>
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

          <div className="tab-content" data-tab-content="skillset">
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

              <figure className="skill-banner img-holder" style={{ '--width': '570px', '--height': '420px' }} data-tilt>
                <img src="./images/skill-banner.jpg" width="570" height="420" loading="lazy" alt="skill banner"
                  className="img-cover"/>
              </figure>

            </div>
          </div>

          <div className="tab-content" data-tab-content="interview">
            <div className="grid-list">

              <div className="interview-card img-holder" style={{ '--width': '376px', '--height': '420px' }} data-tilt>
                <img src="./images/interview-1.jpg" width="376" height="420" loading="lazy" alt="interview 1"
                  className="img-cover"/>

                <button className="btn btn:hover">Play</button>
              </div>

              <div className="interview-card img-holder" style={{ '--width': '376px', '--height': '420px' }} data-tilt>
                <img src="./images/interview-2.jpg" width="376" height="420" loading="lazy" alt="interview 2"
                  className="img-cover"/>

                <button className="btn btn:hover">Play</button>
              </div>

              <div className="interview-card img-holder" style={{ '--width': '376px', '--height': '420px' }} data-tilt>
                <img src="./images/interview-3.jpg" width="376" height="420" loading="lazy" alt="interview 3"
                  className="img-cover"/>

                <button className="btn btn:hover">Play</button>
              </div>

            </div>
          </div>

          <div className="tab-content" data-tab-content="awward">

            <h3 className="h4 title section-title">
              We’re a team of creatives who are excited about unique ideas and help IT-tech companies to make identity
              by crafting UI/UX.
            </h3>

            <ul className="grid-list">

              <li>
                <div className="award-card">
                  <figure className="card-banner img-holder" style={{ '--width': '534px', '--height': '383px' }} data-tilt>
                    <img src="./images/awward-1.jpg" width="534" height="383" loading="lazy" alt="certificate"
                      className="img-cover"/>
                  </figure>
                </div>
              </li>

              <li>
                <div className="award-card">
                  <figure className="card-banner img-holder" style={{ '--width': '534px', '--height': '383px' }} data-tilt>
                    <img src="./images/awward-2.jpg" width="534" height="383" loading="lazy" alt="certificate"
                      className="img-cover"/>
                  </figure>
                </div>
              </li>

              <li>
                <div className="award-card">
                  <figure className="card-banner img-holder" style={{ '--width': '534px', '--height': '383px' }} data-tilt>
                    <img src="./images/awward-3.jpg" width="534" height="383" loading="lazy" alt="certificate"
                      className="img-cover"/>
                  </figure>
                </div>
              </li>

            </ul>

          </div>

          <div className="tab-content" data-tab-content="exhibition">
            <ul className="grid-list">

              <li>
                <div className="exhibition-card">

                  <figure className="card-banner img-holder" style={{ '--width': '376px', '--height': '200px' }} data-tilt>
                    <img src="./images/exhibition-1.jpg" width="376" height="200" loading="lazy" alt="image"
                      className="img-cover"/>
                  </figure>

                  <div className="card-icon">
                    <ion-icon name="image-outline" aria-hidden="true"></ion-icon>
                  </div>

                </div>
              </li>

              <li>
                <div className="exhibition-card">

                  <figure className="card-banner img-holder" style={{ '--width': '376px', '--height': '200px' }} data-tilt>
                    <img src="./images/exhibition-2.jpg" width="376" height="200" loading="lazy" alt="video"
                      className="img-cover"/>
                  </figure>

                  <div className="card-icon">
                    <ion-icon name="logo-youtube" aria-hidden="true"></ion-icon>
                  </div>

                </div>
              </li>

              <li>
                <div className="exhibition-card">

                  <figure className="card-banner img-holder" style={{ '--width': '376px', '--height': '200px' }} data-tilt>
                    <img src="./images/exhibition-3.jpg" width="376" height="200" loading="lazy" alt="music"
                      className="img-cover"/>
                  </figure>

                  <div className="card-icon">
                    <ion-icon name="logo-soundcloud" aria-hidden="true"></ion-icon>
                  </div>

                </div>
              </li>

              <li>
                <div className="exhibition-card">

                  <figure className="card-banner img-holder" style={{ '--width': '376px', '--height': '200px' }} data-tilt>
                    <img src="./images/exhibition-4.jpg" width="376" height="200" loading="lazy" alt="image"
                      className="img-cover"/>
                  </figure>

                  <div className="card-icon">
                    <ion-icon name="image-outline" aria-hidden="true"></ion-icon>
                  </div>

                </div>
              </li>

              <li>
                <div className="exhibition-card">

                  <figure className="card-banner img-holder" style={{ '--width': '376px', '--height': '200px' }} data-tilt>
                    <img src="./images/exhibition-5.jpg" width="376" height="200" loading="lazy" alt="image"
                      className="img-cover"/>
                  </figure>

                  <div className="card-icon">
                    <ion-icon name="image-outline" aria-hidden="true"></ion-icon>
                  </div>

                </div>
              </li>

              <li>
                <div className="exhibition-card">

                  <figure className="card-banner img-holder" style={{ '--width': '376px', '--height': '200px' }} data-tilt>
                    <img src="./images/exhibition-6.jpg" width="376" height="200" loading="lazy" alt="image"
                      className="img-cover"/>
                  </figure>

                  <div className="card-icon">
                    <ion-icon name="image-outline" aria-hidden="true"></ion-icon>
                  </div>

                </div>
              </li>

            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;