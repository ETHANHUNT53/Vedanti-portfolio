import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO ?</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>WRITE</h3>
              <p>
                Crafting content that informs, engages, and converts across digital platforms. From SEO-driven articles to compelling brand stories, every piece is designed to create impact and deliver measurable results.
              </p>
              <h5>Skillset & Tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">SEO Writing</div>
                <div className="what-tags">Content Strategy</div>
                <div className="what-tags">Copywriting</div>
                <div className="what-tags">WordPress</div>
                <div className="what-tags">Keyword Research</div>
                <div className="what-tags">Blog Writing</div>
                <div className="what-tags">Social Media Content</div>
                <div className="what-tags">AI Content Workflows</div>
                <div className="what-tags">Editing & Proofreading</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>BUILD</h3>
              <p>
                Building brands through storytelling, audience-first content, and strategic communication. Helping startups, founders, and businesses establish authority and grow their digital presence.
              </p>
              <h5>Skillset & Tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Brand Storytelling</div>
                <div className="what-tags">LinkedIn Content</div>
                <div className="what-tags">Personal Branding</div>
                <div className="what-tags">Content Marketing</div>
                <div className="what-tags">Audience Research</div>
                <div className="what-tags">Editorial Planning</div>
                <div className="what-tags">Canva</div>
                <div className="what-tags">Social Media Strategy</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>LEAD</h3>
              <p>
                Founder of Startup Veda, leading content-driven initiatives and collaborating with businesses to turn ideas into scalable content ecosystems. Focused on creating value through creativity, strategy, and execution.
              </p>
              <h5>Skillset & Tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Project Management</div>
                <div className="what-tags">Client Communication</div>
                <div className="what-tags">Team Collaboration</div>
                <div className="what-tags">Campaign Planning</div>
                <div className="what-tags">Business Strategy</div>
                <div className="what-tags">Startup Growth</div>
                <div className="what-tags">Content Operations</div>
                <div className="what-tags">Community Building</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
