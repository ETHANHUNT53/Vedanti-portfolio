import "./styles/Work.css";
import gsap from "gsap";import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface WorkSection {
  title: string;
  items: string[];
}

interface WorkProject {
  name: string;
  category?: string;
  sections: WorkSection[];
  image?: string;
}

const WORK_PROJECTS: WorkProject[] = [
  {
    name: "Copywriting Content",
    category: "Social Media Creatives",
    sections: [
      {
        title: "Instagram Creatives For",
        items: ["VRG Digital", "Juhi Fertility", "TradeX", "JOLOCHIP"],
      },
    ],
  },
  {
    name: "LinkedIn Content",
    category: "Thought Leadership Posts",
    sections: [
      {
        title: "LinkedIn Posts For",
        items: ["Juhi Fertility", "TradeX"],
      },
    ],
  },
  {
    name: "Landing Pages",
    category: "Conversion-Focused Copy",
    sections: [
      {
        title: "Landing Pages",
        items: ["Portico WebWorks", "Zarnik"],
      },
    ],
  },
  {
    name: "Blogs and Articles",
    category: "SEO & Long-Form Writing",
    sections: [
      {
        title: "Interior Design and Furniture Samples",
        items: [
          "Best Colour Combinations to Decorate Your Kid's Room",
          "Best Outdoor Furniture Collection For Small Outdoor Spaces",
          "Convertible Furniture For Kids: Grow With Your Child's Changing Needs",
          "Are You Planning Your Dream Home – Important Tips To Keep In Mind Before Doing",
        ],
      },
      {
        title: "Real Estate Samples",
        items: [
          "Basic Information For Expatriates To Buy A House In Amsterdam",
          "Best Places To Own A Property In Hague",
        ],
      },
      {
        title: "Finance Samples",
        items: [
          "Best Private grants for individuals with disabilities",
          "Why dental grants for low-income adults are essential",
        ],
      },
      {
        title: "Visa Consultant-Related Samples",
        items: [
          "A STUDY ABROAD DESTINATION CAN OFFER YOU THESE 5 PERKS",
          "Experts in Canada Study Visa Consultation in Ludhiana",
        ],
      },
      {
        title: "Hospitality Samples",
        items: [
          "Why a Beautiful Website Isn't Enough? The Case for Hotel Website Competitive Positioning",
          "7 On-Page SEO Mistakes That Are Quietly Killing Your Hotel's Direct Bookings",
        ],
      },
    ],
  },
];

const Work = () => {
  useGSAP(() => {
    const workSection = document.querySelector(".work-section");
    if (!workSection) return;

    gsap.set(workSection, { autoAlpha: 0 });

    let translateX = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX =
        rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true,
        onEnter: () => gsap.set(workSection, { autoAlpha: 1 }),
        onLeaveBack: () => gsap.set(workSection, { autoAlpha: 0 }),
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    timeline.to(
      ".work-scroll-progress",
      {
        scaleX: 1,
        ease: "none",
      },
      0
    );

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-scroll-track">
        <div className="work-scroll-progress" />
      </div>
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {WORK_PROJECTS.map((project, index) => (
            <div
              className={`work-box${project.sections.length > 2 ? " work-box-wide" : ""}`}
              key={project.name}
            >
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    {project.category && <p>{project.category}</p>}
                  </div>
                </div>
                <div className="work-info-scroll">
                  {project.sections.map((section) => (
                    <div className="work-section-block" key={section.title}>
                      <h4>{section.title}</h4>
                      <ul className="work-list">
                        {section.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
