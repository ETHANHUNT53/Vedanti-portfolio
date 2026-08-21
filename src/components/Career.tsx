import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Content Lead</h4>
                <h5>Portico WebWorks</h5>
              </div>
              <h3>Dec 2025 – Present</h3>
            </div>
            <p>
              Hospitality-tech company operating Zarnik (hotel procurement) and Portico WebWorks (direct-booking websites). Own content strategy, brand voice, and SEO content across both brands while leading the creative team to ensure quality, consistency, and publishing cadence.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5>Startup Veda</h5>
              </div>
              <h3>May 2025 – Present</h3>
            </div>
            <p>
              Built and managed a media platform from the ground up, defining its content strategy and brand identity while leading a creative team across content, community, and graphic design.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Head of Content</h4>
                <h5>Karostartup</h5>
              </div>
              <h3>Oct 2024 – Aug 2025</h3>
            </div>
            <p>
              Built the brand's content identity from scratch and led overall content strategy, curating founder stories for the startup community. Ran client meetings and owned creative direction across all content output.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Content Writer & Project Manager</h4>
                <h5>Shinepixel Digitech</h5>
              </div>
              <h3>Jul 2021 – Jan 2023</h3>
            </div>
            <p>
              Built content plans and wrote SEO-optimised blogs while managing client communication and end-to-end project execution. Supervised design and content teams to maintain quality standards across deliverables.
            </p>
          </div>
          <div className="career-earlier">
            <h4 className="career-earlier-heading">Earlier Experience</h4>
            <div className="career-earlier-box">
              <div className="career-earlier-role">
                <span className="career-earlier-title">Astrology Content Writer</span>
                <span className="career-earlier-company">Vama</span>
              </div>
              <span className="career-earlier-period">Jan 2024 – Sep 2024</span>
            </div>
            <div className="career-earlier-box">
              <div className="career-earlier-role">
                <span className="career-earlier-title">Content Editor</span>
                <span className="career-earlier-company">Jolochip Pvt. Ltd.</span>
              </div>
              <span className="career-earlier-period">Feb 2023 – Dec 2023</span>
            </div>
            <div className="career-earlier-box">
              <div className="career-earlier-role">
                <span className="career-earlier-title">Content Writer</span>
                <span className="career-earlier-company">Game Instants</span>
              </div>
              <span className="career-earlier-period">Aug 2020 – Jul 2021</span>
            </div>
            <div className="career-earlier-box">
              <div className="career-earlier-role">
                <span className="career-earlier-title">Content Writer Intern</span>
                <span className="career-earlier-company">KeepTheTech</span>
              </div>
              <span className="career-earlier-period">Mar 2020 – Aug 2020</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
