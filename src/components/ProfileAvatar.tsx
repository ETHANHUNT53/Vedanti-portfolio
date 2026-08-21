import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLoading } from "../context/LoadingProvider";
import { setProgress } from "./Loading";
import { setAllTimeline, setCharTimeline } from "./utils/GsapScroll";
import "./styles/ProfileAvatar.css";

const AVATAR_IMAGE = "/images/vedanti-avatar.png";

const ProfileAvatar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const progressRef = useRef<ReturnType<typeof setProgress> | null>(null);
  const { setLoading } = useLoading();

  const finishLoading = () => {
    if (!progressRef.current) return;
    progressRef.current.setPercent(100);
    progressRef.current.loaded().then(() => {
      containerRef.current?.classList.add("character-loaded");
    });
  };

  useEffect(() => {
    progressRef.current = setProgress(setLoading);

    const refreshScroll = () => {
      const workTrigger = ScrollTrigger.getById("work");
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger !== workTrigger) {
          trigger.kill();
        }
      });
      setCharTimeline();
      setAllTimeline();
      ScrollTrigger.refresh();
    };

    refreshScroll();
    window.addEventListener("resize", refreshScroll);

    if (imageRef.current?.complete) {
      finishLoading();
    }

    return () => {
      progressRef.current?.clear();
      window.removeEventListener("resize", refreshScroll);
    };
  }, [setLoading]);

  return (
    <div className="character-container" ref={containerRef}>
      <div className="character-model profile-avatar">
        <div className="character-rim" />
        <figure className="profile-avatar-figure">
          <img
            ref={imageRef}
            src={AVATAR_IMAGE}
            alt="Vedanti Kohli"
            onLoad={finishLoading}
            decoding="async"
          />
        </figure>
      </div>
    </div>
  );
};

export default ProfileAvatar;
