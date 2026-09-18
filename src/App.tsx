import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import "./App.css";

import backgroundAnimation from "./assets/background.gif";
import backgroundExtension from "./assets/background-extension.png";
import vineWall from "./assets/vine-wall.png";
import desk from "./assets/desk.png";
import frontDesk from "./assets/front-desk.png";
import deskAsset from "./assets/desk-asset.png";
import backgroundFill from "./assets/background-fill.png";

const DESIGN_WIDTH = 1285;
const DESIGN_HEIGHT = 700;
const MIN_DESKTOP_VISIBLE = 0.7;

type Tab =
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "gallery"
  | "contact";

type RoomMode = "desktop" | "mobile";

function App() {
  const [screenScale, setScreenScale] = useState(1);
  const [roomMode, setRoomMode] = useState<RoomMode>("desktop");
  const [activeTab, setActiveTab] = useState<Tab>("about");

  useEffect(() => {
    let lastScreenWidth = 0;
    let lastScreenHeight = 0;

    const calculateLayout = () => {
      const screenWidth = window.screen.availWidth;
      const screenHeight = window.screen.availHeight;

      lastScreenWidth = screenWidth;
      lastScreenHeight = screenHeight;

      const scaleX = screenWidth / DESIGN_WIDTH;
      const scaleY = screenHeight / DESIGN_HEIGHT;

      const roomScale = Math.max(scaleX, scaleY);

      const renderedRoomWidth = DESIGN_WIDTH * roomScale;

      const visibleWidthRatio = Math.min(
        1,
        screenWidth / renderedRoomWidth
      );

      const nextRoomMode: RoomMode =
        visibleWidthRatio >= MIN_DESKTOP_VISIBLE
          ? "desktop"
          : "mobile";

      setScreenScale(roomScale);
      setRoomMode(nextRoomMode);
    };

    calculateLayout();

    const handleResize = () => {
      const currentScreenWidth = window.screen.availWidth;
      const currentScreenHeight = window.screen.availHeight;

      if (
        currentScreenWidth !== lastScreenWidth ||
        currentScreenHeight !== lastScreenHeight
      ) {
        calculateLayout();
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  const portfolioStyle = {
    "--screen-scale": screenScale,
  } as CSSProperties;

  return (
    <main
      className={`portfolio ${roomMode}-room`}
      style={portfolioStyle}
    >
      <div className="world">
        <div
          className="background-fill"
          style={{
            backgroundImage: `url(${backgroundFill})`,
          }}
        />

        <div
          className="background"
          style={{
            backgroundImage: `url(${backgroundAnimation})`,
          }}
        />

        <div
          className="background-extension"
          style={{
            backgroundImage: `url(${backgroundExtension})`,
          }}
        />

        <img src={desk} className="desk" alt="" />
      </div>

      <div className="portfolio-vine">
        <img src={vineWall} alt="" />
      </div>

      <section className="portfolio-window">
        <nav className="side-nav">
          <div className="nav-buttons">
            <button
              type="button"
              className={`nav-button ${
                activeTab === "about" ? "active" : ""
              }`}
              onClick={() => setActiveTab("about")}
              aria-label="About Me"
            >
              <span className="nav-icon">⌂</span>
              <span className="nav-label">About Me</span>
            </button>

            <button
              type="button"
              className={`nav-button ${
                activeTab === "skills" ? "active" : ""
              }`}
              onClick={() => setActiveTab("skills")}
              aria-label="Skills"
            >
              <span className="nav-icon">✦</span>
              <span className="nav-label">Skills</span>
            </button>

            <button
              type="button"
              className={`nav-button ${
                activeTab === "experience" ? "active" : ""
              }`}
              onClick={() => setActiveTab("experience")}
              aria-label="Experience"
            >
              <span className="nav-icon">▣</span>
              <span className="nav-label">Experience</span>
            </button>

            <button
              type="button"
              className={`nav-button ${
                activeTab === "projects" ? "active" : ""
              }`}
              onClick={() => setActiveTab("projects")}
              aria-label="Projects"
            >
              <span className="nav-icon">◇</span>
              <span className="nav-label">Projects</span>
            </button>

            <button
              type="button"
              className={`nav-button ${
                activeTab === "gallery" ? "active" : ""
              }`}
              onClick={() => setActiveTab("gallery")}
              aria-label="Gallery"
            >
              <span className="nav-icon">▧</span>
              <span className="nav-label">Gallery</span>
            </button>

            <button
              type="button"
              className={`nav-button ${
                activeTab === "contact" ? "active" : ""
              }`}
              onClick={() => setActiveTab("contact")}
              aria-label="Contact Me"
            >
              <span className="nav-icon">✉</span>
              <span className="nav-label">Contact Me</span>
            </button>
          </div>
        </nav>

        <div className="content">
          {activeTab === "about" && (
            <div className="page about-page">
              <div className="eyebrow">
                <span>PORTFOLIO</span>
              </div>

              <div className="hero-name">
                <h1>Judy Chen</h1>
              </div>

              <div className="hero-role">
                Software Engineer <span>·</span> Frontend Developer
              </div>

              <div className="hero-degree">
                Computer Science <span>·</span> UCF '26
              </div>

              <div className="hero-line" />
            </div>
          )}

          {activeTab === "skills" && (
            <div className="page">
              <div className="section-heading">
                <h1>SKILLS</h1>
              </div>

              <div className="editorial-list">
                <section className="editorial-row">
                  <div className="row-content">
                    <h2>DEVELOPMENT</h2>
                    <p>
                      Java · Python · JavaScript · C · HTML · CSS · SQL
                    </p>
                    <p className="secondary-text">
                      React · React Native · Node.js · Express.js · Tailwind CSS
                    </p>
                  </div>
                </section>

                <section className="editorial-row">
                  <div className="row-content">
                    <h2>DESIGN & CREATIVE</h2>
                    <p>
                      Figma · UI Design · Graphic Design · Pixel Art · Live2D
                    </p>
                  </div>
                </section>

                <section className="editorial-row">
                  <div className="row-content">
                    <h2>TOOLS & PLATFORMS</h2>
                    <p>
                      Git · GitHub · GitLab · Docker · Jira · Android Studio
                    </p>
                    <p className="secondary-text">
                      Unity · AWS · Netlify · Render
                    </p>
                  </div>
                </section>

                <section className="editorial-row">
                  <div className="row-content">
                    <h2>DATA & LANGUAGE</h2>
                    <p>MongoDB · SQLite · Room</p>
                    <p className="secondary-text">
                      English · Chinese (Native)
                    </p>
                  </div>
                </section>
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="page">
              <div className="section-heading">
                <h1>EXPERIENCE</h1>
              </div>

              <div className="editorial-list experience-list">
                <section className="editorial-row experience-row">
                  <div className="row-content">
                    <div className="experience-top">
                      <div>
                        <h2>
                          <a
                            href="https://www.getcompete.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            COMPETE.CO ↗
                          </a>
                        </h2>

                        <p className="role-name">Software Engineer</p>
                      </div>

                      <span className="date">2025 — 2026</span>
                    </div>

                    <div className="inline-tags">
                      <span>React Native</span>
                      <span>JavaScript</span>
                      <span>REST APIs</span>
                    </div>

                    <p className="experience-description">
                      Developed features for a social sports application,
                      including tournament brackets, matchup displays, event
                      timers, live event status interfaces, and API-connected
                      frontend components.
                    </p>
                  </div>
                </section>

                <section className="editorial-row experience-row">
                  <div className="row-content">
                    <div className="experience-top">
                      <div>
                        <h2>GREAT WALL INSURANCE</h2>
                        <p className="role-name">Assistant</p>
                      </div>

                      <span className="date">2022 — PRESENT</span>
                    </div>

                    <div className="inline-tags">
                      <span>Full-Time</span>
                      <span>Remote</span>
                      <span>Excel</span>
                    </div>

                    <p className="experience-description">
                      Process and organize confidential customer documents,
                      verify insurance records and forms, and maintain accurate
                      customer information using Excel and internal database
                      systems.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          )}

          {activeTab === "projects" && (
            <div className="page projects-page">
              <div className="section-heading">
                <h1>PROJECTS</h1>
              </div>

              <div className="project-list">
                <article className="project-row">
                  <div className="project-info">
                    <div className="project-title-line">
                      <h2>TUMBLR COMMENT TRACKER</h2>

                      <a
                        href="https://tumblr-comment-tracker.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        LIVE ↗
                      </a>
                    </div>

                    <div className="inline-tags">
                      <span>React</span>
                      <span>Node.js</span>
                      <span>Express</span>
                      <span>OAuth</span>
                    </div>

                    <p>
                      Full-stack application for retrieving Tumblr activity
                      and organizing comments and nested reply threads with
                      search, sorting, filtering, and pagination.
                    </p>
                  </div>
                </article>

                <article className="project-row">
                  <div className="project-info">
                    <div className="project-title-line">
                      <h2>LAESSO</h2>

                      <a
                        href="https://codster177.itch.io/laeseo"
                        target="_blank"
                        rel="noreferrer"
                      >
                        PLAY ↗
                      </a>
                    </div>

                    <div className="inline-tags">
                      <span>Unity</span>
                      <span>C#</span>
                      <span>Game Design</span>
                      <span>2D Art</span>
                    </div>

                    <p>
                      A 2D dungeon crawler where I worked as both programmer
                      and artist, creating scene transitions, cutscenes,
                      dialogue systems, character animation, story elements,
                      and level design.
                    </p>
                  </div>
                </article>

                <article className="project-row">
                  <div className="project-info">
                    <div className="project-title-line">
                      <h2>CLOVERSHELF</h2>
                    </div>

                    <div className="inline-tags">
                      <span>Java</span>
                      <span>Android</span>
                      <span>Room</span>
                      <span>SQLite</span>
                    </div>

                    <p>
                      Android application for organizing personal book
                      collections with local storage, search, custom categories,
                      reading-status filters, notes, and progress tracking.
                    </p>
                  </div>
                </article>

                <article className="project-row">
                  <div className="project-info">
                    <div className="project-title-line">
                      <h2>THIS PORTFOLIO</h2>
                    </div>

                    <div className="inline-tags">
                      <span>React</span>
                      <span>TypeScript</span>
                      <span>CSS</span>
                      <span>UI Design</span>
                    </div>

                    <p>
                      Responsive interactive portfolio inspired by pixel RPG
                      interfaces, combining custom artwork, layered
                      environments, responsive layouts, and interactive
                      navigation.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          )}

          {activeTab === "gallery" && (
            <div className="page gallery-page">
              <div className="section-heading">
                <h1>GALLERY</h1>
              </div>

              <div className="gallery-empty">
                <span className="gallery-symbol">✦</span>
                <h2>COMING SOON</h2>
                <p>
                  It exist I swear, i'm just still debating what looks good and
                  actually finishing them.
                </p>
              </div>
            </div>
          )}

          {activeTab === "contact" && (
            <div className="page contact-page">
              <div className="section-heading">
                <h1>CONTACT</h1>
              </div>

              <div className="contact-list">
                <a href="mailto:Judychen7284@gmail.com">
                  <span className="contact-type">EMAIL</span>
                  <span className="contact-value">
                    Judychen7284@gmail.com
                  </span>
                  <span className="contact-arrow">↗</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/judy-chen-871432345/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-type">LINKEDIN</span>
                  <span className="contact-value">Judy Chen</span>
                  <span className="contact-arrow">↗</span>
                </a>

                <a
                  href="https://github.com/Judy7284"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-type">GITHUB</span>
                  <span className="contact-value">Judy7284</span>
                  <span className="contact-arrow">↗</span>
                </a>

                <div className="contact-location">
                  <span className="contact-type">LOCATION</span>
                  <span className="contact-value">Orlando, Florida</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="room-decor">
        <img src={desk} className="desk" alt="" />
      </div>

      <div className="front-desk-layer">
        <div
          className="front-desk"
          style={{
            backgroundImage: `url(${frontDesk})`,
          }}
        />
      </div>

      <div className="desk-asset-layer">
        <img src={deskAsset} className="desk-asset" alt="" />
      </div>
    </main>
  );
}

export default App;