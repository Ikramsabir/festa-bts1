import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Festa2016.css";

const activities = [
  "June 1 – Opening Ceremony – ‘I Know’ by RM & Jung Kook",
  "June 2 – Special Choreography Stage – ‘Baepsae’ Dance Practice (Fun Ver.)",
  "June 3 – BTS Photo Album: 3rd JUNE",
  "June 4 – BTS 3rd Anniversary 가족사진 ‘Real Family Picture’",
  "June 5 – Special Choreography Stage",
  "June 7 – Bangtan Bomb Special Collection",
  "June 8 – Self-Written Profile Ver. 3",
  "June 9 – Our Written Profile (2016 ver.)",
  "June 10 – Behind the Scene: ARMY Zip Shooting",
  "June 11 – Eat Jin Live",
  "June 12 – BHC Radio (BTS 꿀 KKUL FM 06.13)",
  "June 13 – Happy BTS Day Party 2016 & Young Forever (0613 ver.)",
];

const festaMomentsImages = [
  "/images/festa-2016/slider1.jpg",
  "/images/festa-2016/slider2.jpg",
  "/images/festa-2016/slider3.jpg",
  "/images/festa-2016/slider4.jpg",
  "/images/festa-2016/slider5.jpg",
  "/images/festa-2016/slider6.jpg",
  "/images/festa-2016/slider7.jpg",
  "/images/festa-2016/slider8.jpg",
  "/images/festa-2016/slider9.jpg",
  "/images/festa-2016/slider10.jpg",
  "/images/festa-2016/slider11.jpg",
  "/images/festa-2016/slider12.jpg",
  "/images/festa-2016/slider13.jpg",
  "/images/festa-2016/slider14.jpg",
  "/images/festa-2016/slider15.jpg",
  "/images/festa-2016/slider16.jpg",
  "/images/festa-2016/slider17.jpg",
  "/images/festa-2016/slider18.jpg",
  "/images/festa-2016/slider19.jpg",
  "/images/festa-2016/slider20.jpg",
  "/images/festa-2016/slider21.jpg",
  "/images/festa-2016/slider22.jpg",
  "/images/festa-2016/slider23.jpg",
  "/images/festa-2016/slider24.jpg",
  "/images/festa-2016/slider25.jpg",
  "/images/festa-2016/slider26.jpg",
  "/images/festa-2016/slider27.jpg",
  "/images/festa-2016/slider28.jpg",
  "/images/festa-2016/slider29.jpg",
  "/images/festa-2016/slider30.jpg",
  "/images/festa-2016/slider31.jpg",
  "/images/festa-2016/slider32.jpg",
  "/images/festa-2016/slider33.jpg",
  "/images/festa-2016/slider34.jpg",
];

const albums = [
  {
    id: 1,
    img: "/images/festa-2016/album1.jpg",
    description: "1 – The Most Beautiful Moment in Life, Pt. 2 (November 30, 2015): The second installment of the HYYH series, featuring emotional tracks like “RUN,” “Butterfly,” and “Whalien 52.” It marked BTS's first entry on the Billboard 200 (at #171) and spent four weeks atop the World Albums chart"
  },
  {
    id: 2,
    img: "/images/festa-2016/album2.jpg",
    description: "2 – The Most Beautiful Moment in Life: Young Forever (May 2, 2016): A special compilation blending tracks from Pt. 1 & 2 with three new songs: “Epilogue: Young Forever,” “Fire,” and “Save Me.” It debuted at #107 on the Billboard 200, topped the World Albums chart, and achieved multiple “All-Kill” TV wins for “Fire”"
  },
  {
    id: 3,
    img: "/images/festa-2016/album3.jpg",
    description: "3 – “Prometheus” by Yankie ft. RM (2015) : A hip-hop collaboration where RM showcases both his rapping and songwriting skills. Featured on Yankie's Andre album alongside artists like Dok2 and Double K, the track sees RM delivering introspective verses over a gritty beat, cementing his presence in the Korean hip-hop scene "
  },
  {
    id: 4,
    img: "/images/festa-2016/concert1.webp",
    description: "1 – The Most Beautiful Moment in Life On Stage Tour (November 27, 2015 – March 23, 2016) : A major Asia-focused tour supporting the HYYH series. BTS performed in Seoul, Yokohama, and Kobe, drawing over 182,500 fans across 8 shows in 3 countries. The tour featured emotional performances of hits like “Run,” “Butterfly,” and “I Need U.”"
  },
  {
    id: 5,
    img: "/images/festa-2016/concert2.webp",
    description: "2 – The Most Beautiful Moment in Life On Stage: Epilogue (May 7, 2016 – June 9, 2016) : An extension of the previous tour, starting in Seoul and expanding across Asia—visiting Taipei, Macau, Nanjing, Osaka, and Tokyo. It attracted more than 144,000 fans over several venues, including a highlight performance at the Olympic Gymnastics Arena."
  },
  {
    id: 6,
    img: "/images/festa-2016/concert3.webp",
    description: "3 – BTS 2nd Muster (January 24, 2016 – Hwajung Gymnasium, Korea) : A fan-exclusive concert with approximately 9,000 attendees. This intimate event featured interactive stages, special performances, and heartwarming moments connecting BTS directly with their A.R.M.Y."
  },
  {
    id: 7,
    img: "/images/festa-2016/festival1.png",
    description: "1 – Summer Sonic Festival (June 16, 2015): BTS performed at Japan’s major summer music festival for the first time, showcasing energetic stages with “Dope,” “We Are Bulletproof Pt.2,” and “Attack on Bangtan.”"
  },
  {
    id: 8,
    img: "/images/festa-2016/festival2.jpg",
    description: "2  – Dream Concert & Inkigayo Appearances (May 30–31, 2015): BTS appeared on these key Korean music shows promoting their “The Most Beautiful Moment in Life” series with powerful performances."
  },
  {
    id: 9,
    img: "/images/festa-2016/festival3.jpg",
    description: "3  – KCON Paris 2016 (June 2, 2016): BTS took the stage at KCON France, performing fan favorites like “I Need U,” “Fire,” and “Dope,” expanding their global presence in Europe."
  },
  {
    id: 10,
    img: "/images/festa-2016/festival4.png",
    description: "4  – Mnet Asian Music Awards Hong Kong (December 2, 2015): BTS delivered a memorable performance of “Run” at one of Asia’s biggest music award shows, marking a milestone in their international recognition."
  },
  {
    id: 11,
    img: "/images/festa-2016/festival5.webp",
    description: "5  – KBS Song Festival & MBC Gayo Daejejun (December 30–31, 2015): Ended the year with appearances at major year-end festivals in Korea, performing hits such as “Butterfly,” “Dope,” and “I Need U” to a nationwide audience."
  },
  {
    id: 12,
    img: "/images/festa-2016/awards1.jpeg",
    description: "1 – Album Bonsang – 29th Golden Disc Awards (January 2016) : BTS secured the Album Bonsang (Main Prize) for Dark & Wild, affirming their artistic growth and solid commercial performance"
  },
  {
    id: 13,
    img: "/images/festa-2016/awards2.webp",
    description: "2 – Bonsang – 24th Seoul Music Awards (January 2016) : They received another Bonsang trophy at Korea's prestigious Seoul Music Awards, cementing their strong presence in the national music industry ."
  },
  {
    id: 14,
    img: "/images/festa-2016/awards3.png",
    description: "3 – Best Male Dance Performance – 7th MelOn Music Awards (late 2015) : BTS earned the award for their dynamic choreography in “I Need U,” showcasing their dance prowess and stage charisma. "
  },
  {
    id: 15,
    img: "/images/festa-2016/awards4.jpg",
    description: "4 – Best World Performer – 2015 Mnet Asian Music Awards (December 2015) : Recognized for commanding the global stage, BTS took home the Best World Performer award, solidifying their international influence. "
  },
  {
    id: 16,
    img: "/images/festa-2016/awards5.jpg",
    description: "5 – World Rookie Award – 4th Gaon Chart Music Awards (January 2016) : Honored as “World Rookie,” BTS was acknowledged for their rapid global rise and expanding influence in the music industry. "
  },
  {
    id: 17,
    img: "/images/festa-2016/awards6.webp",
    description: "6 – Best Performance (Boy Group) – 2015 Simply K‑Pop Awards : Their high-energy stage performance earned them this recognition, reinforcing their reputation for showmanship ."
  },
  {
    id: 18,
    img: "/images/festa-2016/awards7.png",
    description: "7 – Best Korean Act – 2015 MTV Europe Music Awards (November 2015) : BTS was named Best Korean Act at the EMAs, marking their first major international award outside Asia ."
  },
];

export default function Festa2016Page() {
   useEffect(() => {
      document.title = "Festa-2016";
    }, []);
    const [momentIndex, setMomentIndex] = useState(0);
    const [albumIndex, setAlbumIndex] = useState(0);
    const [showDescription, setShowDescription] = useState(false);
  
    
    const [fade, setFade] = useState(true);
  
    const prevMoment = () => {
      setFade(false);
      setTimeout(() => {
        setMomentIndex((prev) =>
          prev === 0 ? festaMomentsImages.length - 1 : prev - 1
        );
        setFade(true);
      }, 300);
    };
  
    const nextMoment = () => {
      setFade(false);
      setTimeout(() => {
        setMomentIndex((prev) =>
          prev === festaMomentsImages.length - 1 ? 0 : prev + 1
        );
        setFade(true);
      }, 300);
    };
  
    const prevAlbum = () => {
      setShowDescription(false);
      setAlbumIndex((prev) => (prev === 0 ? albums.length - 1 : prev - 1));
    };
  
    const nextAlbum = () => {
      setShowDescription(false);
      setAlbumIndex((prev) => (prev === albums.length - 1 ? 0 : prev + 1));
    };
  
    const toggleDescription = () => {
      setShowDescription((prev) => !prev);
    };
  
    return (
      <div className="festa-container">
        {/* Section 1: Activities */}
        <section className="festa-activities section">
          <img
            src="/images/festa-2016/banner.jpg"
            alt="FESTA Banner"
            className="festa-banner"
          />
          <div className="activities-list">
            <h2>2016 FESTA Schedule</h2>
            <ul>
              {activities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
  
        {/* Section 2: Festa Moments Slider */}
        <section className="festa-moments section">
          <h2>BTS Moments 2015-2016</h2>
          <div className="festa-slider festa-moments-slider">
            <button onClick={prevMoment} className="btn-arrow left">
              <ChevronLeft size={36} />
            </button>
            <img
              src={festaMomentsImages[momentIndex]}
              alt={`Festa Moment ${momentIndex + 1}`}
              className={`slider-image ${fade ? "fade-in" : "fade-out"}`}
              loading="lazy"
              draggable={false}
            />
            <button onClick={nextMoment} className="btn-arrow right">
              <ChevronRight size={36} />
            </button>
          </div>
          <div className="slider-counter">
            Moment {momentIndex + 1} of {festaMomentsImages.length}
          </div>
        </section>
  
        {/* Section 3: Albums Slider - 3D Carousel */}
        <section className="festa-albums section">
          <h2>Albums, Concerts & BTS Awards</h2>
          <div className="carousel-3d">
            <button onClick={prevAlbum} className="btn-arrow left">
              <ChevronLeft size={28} />
            </button>
  
            <div className="carousel-track">
              {albums.map((album, i) => {
                let className = "carousel-album";
                if (i === albumIndex) {
                  className += " active";
                } else if (
                  i === (albumIndex - 1 + albums.length) % albums.length
                ) {
                  className += " left";
                } else if (i === (albumIndex + 1) % albums.length) {
                  className += " right";
                } else {
                  className += " hidden";
                }
  
                return (
                  <div key={album.id} className={className}>
                    <img
                      src={album.img}
                      alt={`Album ${album.id}`}
                      className="album-img"
                    />
                    {i === albumIndex && (
                      <>
                        <button
                          onClick={toggleDescription}
                          className="desc-toggle-btn"
                        >
                          {showDescription
                            ? "Hide Achievements"
                            : "View Achievements"}
                        </button>
                        {showDescription && (
                          <p className="album-description">{album.description}</p>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
  
            <button onClick={nextAlbum} className="btn-arrow right">
              <ChevronRight size={28} />
            </button>
          </div>
        </section>
      </div>
    );
  }
  
  