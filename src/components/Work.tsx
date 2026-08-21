import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface WorkItem {
  label: string;
  href?: string;
}

interface WorkSection {
  title: string;
  items: WorkItem[];
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
        items: [
          { label: "VRG Digital", href: "https://www.instagram.com/vrgdigital12/" },
          { label: "Juhi Fertility", href: "https://www.instagram.com/juhi_fertilitycentre/" },
          { label: "TradeX", href: "https://www.instagram.com/tradex.live/" },
          { label: "JOLOCHIP", href: "https://www.instagram.com/p/CwSGtVTPmmR/" },
        ],
      },
    ],
  },
  {
    name: "LinkedIn Content",
    category: "Thought Leadership Posts",
    sections: [
      {
        title: "LinkedIn Posts For",
        items: [
          {
            label: "Startup Veda",
            href: "https://www.linkedin.com/company/startupveda/",
          },
          {
            label: "Portico Webworks",
            href: "https://www.linkedin.com/company/porticowebworks/",
          },
        ],
      },
    ],
  },
  {
    name: "Landing Pages",
    category: "Conversion-Focused Copy",
    sections: [
      {
        title: "Landing Pages",
        items: [
          { label: "Portico WebWorks", href: "https://porticowebworks.com/" },
          { label: "Zarnik", href: "https://zarnik.com/" },
          { label: "Compliance Bridge", href: "https://compliance-bridge.com/" },
          { label: "Dollartraq", href: "https://www.dollartraq.com/" },
        ],
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
          {
            label: "Best Colour Combinations to Decorate Your Kid's Room",
            href: "https://docs.google.com/document/d/18nbOVURPv-_9u455LjBlo-jCfXNAOn2vcszJYDNmTb4/edit?usp=sharing",
          },
          {
            label: "Best Outdoor Furniture Collection For Small Outdoor Spaces",
            href: "https://docs.google.com/document/d/1RezuvuRcacMTuqbt3CLO89YzVuU-mgrS0I9UCO65GUk/edit?usp=sharing",
          },
          {
            label: "Convertible Furniture For Kids: Grow With Your Child's Changing Needs",
            href: "https://docs.google.com/document/d/1FDr55U4h9ESp3g8n8LPo6ytR5fndXjxeFCay2JYirG8/edit?usp=sharing",
          },
          {
            label: "Are You Planning Your Dream Home – Important Tips To Keep In Mind Before Doing",
            href: "https://docs.google.com/document/d/1BCTbuDfjZtpkgiYTigEH--jnjZ6IqjYr8hdDZX9zF3M/edit?usp=sharing",
          },
        ],
      },
      {
        title: "Real Estate Samples",
        items: [
          {
            label: "Basic Information For Expatriates To Buy A House In Amsterdam",
            href: "https://docs.google.com/document/d/1uDG6X1SEBG6f34-u9lIcjdIaLf4drD2EHNJX7HGiVsE/edit",
          },
          {
            label: "Best Places To Own A Property In Hague",
            href: "https://docs.google.com/document/d/1BfV2Lo4RQJl-qzDGy00R-WDjgQmzYO9-Q07_BajKJm0/edit?usp=sharing",
          },
        ],
      },
      {
        title: "Finance Samples",
        items: [
          {
            label: "Best Private grants for individuals with disabilities",
            href: "https://docs.google.com/document/d/1kAu-0AB6pApQvIClPLtGgSUCpol3cKZQAAz17DpsGPQ/edit?usp=sharing",
          },
          {
            label: "Why dental grants for low-income adults are essential",
            href: "https://docs.google.com/document/d/13wjvuVpzAq3grQaEkkEX1tv0i6ANtv4Iryvk55cZu6A/edit?usp=sharing",
          },
        ],
      },
      {
        title: "Visa Consultant-Related Samples",
        items: [
          {
            label: "A STUDY ABROAD DESTINATION CAN OFFER YOU THESE 5 PERKS",
            href: "https://docs.google.com/document/d/1p9SBky9aG4Rtlluxr6jkwF4mdRukq7sntscjG-A0RIw/edit?usp=sharing",
          },
          {
            label: "Experts in Canada Study Visa Consultation in Ludhiana",
            href: "https://docs.google.com/document/d/1n9oK8uRq_KFCtk7nX98W7pw5_pL4nHX9pL1f03T_Of8/edit?usp=sharing",
          },
        ],
      },
      {
        title: "Hospitality Samples",
        items: [
          {
            label: "Why a Beautiful Website Isn't Enough? The Case for Hotel Website Competitive Positioning",
            href: "https://porticowebworks.com/blog/hotel-website-competitive-positioning",
          },
          {
            label: "7 On-Page SEO Mistakes That Are Quietly Killing Your Hotel's Direct Bookings",
            href: "https://porticowebworks.com/blog/on-page-seo-mistakes",
          },
        ],
      },
    ],
  },
  {
    name: "",
    sections: [],
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
              className={`work-box${project.sections.length > 2 ? " work-box-wide" : ""}${project.sections.length === 0 ? " work-box-empty" : ""}`}
              key={`work-card-${index + 1}`}
            >
              <div className="work-info">
                {(project.name || project.sections.length > 0) && (
                  <div className="work-title">
                    <h3>0{index + 1}</h3>
                    {project.name && (
                      <div>
                        <h4>{project.name}</h4>
                        {project.category && <p>{project.category}</p>}
                      </div>
                    )}
                  </div>
                )}
                {project.sections.length > 0 && (
                  <div className="work-info-scroll">
                    {project.sections.map((section) => (
                      <div className="work-section-block" key={section.title}>
                        <h4>{section.title}</h4>
                        <ul className="work-list">
                          {section.items.map((item) => (
                            <li key={item.label}>
                              {item.href ? (
                                <a
                                  href={item.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  data-cursor="disable"
                                  className="work-list-link"
                                >
                                  {item.label}
                                </a>
                              ) : (
                                item.label
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
