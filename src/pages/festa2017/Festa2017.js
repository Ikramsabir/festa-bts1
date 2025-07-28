import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Festa2017.css";

const activities = [
  "June 1 – Opening Ceremony: About 2017 BTS FESTA",
  "June 2 – BTS Photo Collection",
  "June 3 – We Don’t Talk Anymore PT. 2 <<JK & JIMIN>>",
  "June 4 – Exclusive Stage Cam 'Wings' (BTS Focus)",
  "June 5 – 방탄소년단을 소개합니다 / BTS Introduces BTS",
  "June 7 – Stage Choreography A: NOT TODAY",
  "June 8 – Stage Choreography B: 좋아요 PT. 2 / I Like It Pt. 2",
  "June 9 – 네 시 / 4 O’Clock <<RM & V>>",
  "June 10 – BTS 4th Anniversary Family Portrait Pt. 1 / Pt. 2",
  "June 11 – What About Me? BTS RESUME & Birthday Drawings",
  "June 12 – BHC Radio <BTS KKUL FM 06.13>",
  "June 13 – 2017 BTS HOME PARTY (VLIVE)",
  "June 14 – So Far Away <<SUGA, JIN, JUNGKOOK Ver.>>",
];

const festaMomentsImages = [
  "/images/festa-2017/slider1.jpg",
  "/images/festa-2017/slider2.jpg",
  "/images/festa-2017/slider3.jpg",
  "/images/festa-2017/slider4.jpg",
  "/images/festa-2017/slider5.jpg",
  "/images/festa-2017/slider6.jpg",
  "/images/festa-2017/slider7.jpg",
  "/images/festa-2017/slider8.jpg",
  "/images/festa-2017/slider9.jpg",
  "/images/festa-2017/slider10.jpg",
  "/images/festa-2017/slider11.jpg",
  "/images/festa-2017/slider12.jpg",
  "/images/festa-2017/slider13.jpg",
  "/images/festa-2017/slider14.jpg",
  "/images/festa-2017/slider15.jpg",
  "/images/festa-2017/slider16.jpg",
  "/images/festa-2017/slider17.jpg",
  "/images/festa-2017/slider18.jpg",
];

const albums = [
  {
    id: 1,
    img: "/images/festa-2017/album1.jpg",
    description: "1 - Wings (October 10, 2016) : A major artistic leap for BTS, exploring themes of growth, temptation, and self-discovery. This album marked their transition to more mature storytelling and diverse musical styles, earning critical acclaim and commercial success worldwide."
  },
  {
    id: 2,
    img: "/images/festa-2017/album2.jpg",
    description: "2 - You Never Walk Alone (February 13, 2017): A repackaged version of Wings featuring two new tracks, “Spring Day” and “Not Today.” The release strengthened BTS’s global presence with emotional lyrics and powerful performances that resonated deeply with fans."
  },
  {
    id: 3,
    img: "/images/festa-2017/album3.jpg",
    description: "3 - Agust D (Suga Solo Mixtape) (August 16, 2016): Suga’s solo debut under the name Agust D revealed raw and honest reflections on his struggles, ambitions, and identity, blending intense rap with diverse beats, gaining praise for its authenticity and lyrical depth."
  },
  {
    id: 4,
    img: "/images/festa-2017/album4.jpg",
    description: "4 - RM × Wale – “Change” (2016) : A powerful hip-hop collaboration between RM and Wale that delivers a message of change and growth, blending Korean and American rap styles seamlessly."
  },
  {
    id: 5,
    img: "/images/festa-2017/concert.jpg",
    description: "– The Wings Tour (Feb 18, 2017 – Oct 29, 2017) : BTS kicked off their major global tour in Seoul, then traveled to key cities across North America (California, Chicago, New York), Europe (Paris, London), and Asia (Bangkok, Taipei, Tokyo). This tour marked a major milestone, expanding their worldwide fanbase with rapid ticket sales and powerful performances."
  },
  {
    id: 6,
    img: "/images/festa-2017/festival1.jpg",
    description: "1 – December 24, 2016 – SBS Gayo Daejejun : BTS delivered a memorable performance at one of Korea’s biggest year-end music festivals. Sharing the stage with top K-pop acts, they showcased their evolving artistry and solidified their position as rising stars in the industry, thrilling thousands of fans across the country."
  },
  {
    id: 7,
    img: "/images/festa-2017/festival2.png",
    description: "2 – December 31, 2016 – MBC Gayo Daejejeon & Seoul Countdown : To close out 2016, BTS performed on both MBC’s prestigious year-end music show and Seoul’s massive New Year’s Eve countdown event. Their energetic and charismatic stages helped ring in the new year with excitement and anticipation for what was to come in 2017."
  },
  {
    id: 8,
    img: "/images/festa-2017/festival3.jpg",
    description: "3 –February 18, 2017 – Mnet Asian Music Awards (MAMA) in Hong Kong : At the MAMA ceremony in Hong Kong, BTS delivered a powerful and electrifying performance that captured the attention of the international audience. They also took home several awards, marking a major milestone in their growing global success."
  },
  {
    id: 9,
    img: "/images/festa-2017/festival4.webp",
    description: "4 – April 30, 2017 – Billboard Music Awards (BBMAs) : Making their debut on a major American awards stage, BTS performed “Spring Day” at the BBMAs. This historic appearance introduced them to a wider Western audience and was praised for its emotional depth and flawless execution, marking a turning point in their global breakthrough."
  },
  {
    id: 10,
    img: "/images/festa-2017/festival5.webp",
    description: "5 –March 25, 2017 – Gaon Chart Music Awards : At Korea’s prestigious Gaon Chart Music Awards, BTS not only performed but also earned multiple accolades. Their achievements at this event reflected their dominance in the Korean music scene and their growing influence worldwide."
  },
  {
    id: 11,
    img: "/images/festa-2017/awards1.jpg",
    description: "1 – 2016 Mnet Asian Music Awards (MAMA) : BTS won multiple prestigious awards including “Best Male Group” and “Best Dance Performance – Male Group,” solidifying their status as one of K-pop’s leading acts. Their electrifying performance captivated audiences worldwide."
  },
  {
    id: 12,
    img: "/images/festa-2017/awards2.jpg",
    description: "2 – 2016 Melon Music Awards : BTS took home several major trophies such as “Artist of the Year” and “Album of the Year” for The Most Beautiful Moment in Life: Young Forever. This recognition marked a milestone in their artistic growth and popularity."
  },
  {
    id: 13,
    img: "/images/festa-2017/awards3.jpg",
    description: "3 – Golden Disc Awards 2017 : The group won the “Disk Bonsang” (main album award) and the “Popularity Award,” highlighting both critical acclaim and massive fan support. Their consistent quality and appeal resonated deeply in the Korean music industry."
  },
  {
    id: 14,
    img: "/images/festa-2017/awards4.jpeg",
    description: "4 –Seoul Music Awards 2017 : BTS received the “Bonsang” (main award) and “Popularity Award,” further confirming their top-tier position in the competitive K-pop scene. Their impact on the industry and fans alike was undeniable."
  },
  {
    id: 15,
    img: "/images/festa-2017/awards5.jpeg",
    description: "5 –Gaon Chart Music Awards 2017 : Recognized for their commercial success and influence, BTS earned awards including “Song of the Year – April” for “Spring Day.” This reflected their powerful connection with listeners and their musical consistency."
  },
  {
    id: 16,
    img: "/images/festa-2017/awards6.jpg",
    description: "6 –Billboard Music Awards 2017 – Top Social Artist Nominee : BTS received their first-ever Billboard nomination, marking a significant step toward their global recognition and international breakthrough."
  },
];
export default function Festa2017Page() {
   useEffect(() => {
      document.title = "Festa-2017";
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
            src="/images/festa-2017/banner.jpg"
            alt="FESTA Banner"
            className="festa-banner"
          />
          <div className="activities-list">
            <h2>2017 FESTA Schedule</h2>
            <ul>
              {activities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
  
        {/* Section 2: Festa Moments Slider */}
        <section className="festa-moments section">
          <h2>BTS Moments 2016-2017</h2>
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
  
  