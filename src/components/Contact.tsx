import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { TbDownload } from "react-icons/tb";
import "./styles/Contact.css";
import { RESUME_DOWNLOAD_NAME, RESUME_URL } from "../data/resume";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:vedantikohli353@gmail.com" data-cursor="disable">
              vedantikohli353@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            {/* <a
              href="https://github.com/yourusername"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a> */}
            <a
              href="https://www.linkedin.com/in/vedanti-kohli-03225b199/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linked In <MdArrowOutward />
            </a>

            <a
              href="https://www.instagram.com/kohli.vedanti?igsi=MXRqeXN6b3F5MWZjZA%3D%3D&utm_source=qr"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>

            <a
              href="https://startupveda.in/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Startup Veda <MdArrowOutward />
            </a>
            {/* <a
              href="https://x.com/yourusername"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a> */}
          </div>
          <div className="contact-box">
            <a
              href={RESUME_URL}
              download={RESUME_DOWNLOAD_NAME}
              data-cursor="disable"
              className="contact-resume"
            >
              <TbDownload /> Download Resume
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Built by <span>Vedanti Kohli</span>
            </h2>
            <h5>
              <MdCopyright /> 2026 Vedanti Kohli. All Rights Reserved.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
