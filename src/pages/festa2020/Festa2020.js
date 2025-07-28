import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Festa2020.css";

const activities = [
  "Jun 1 - OPENING Ceremony: Airplane Pt. 2 (Summer ver.)",
  "Jun 2 - 7th Anniversary Family Portrait",
  "Jun 3 - Choreography Video #1: Rehearsal Stage CAM 'Dionysus' @ SY IN SEOUL",
  "Jun 4 - BTS Photo Collection ‘19/‘20",
  "Jun 5 - Still With You - JK",
  "Jun 7 - BTS Profile #1 (2020 ver.)",
  "Jun 8 - Choreography Video #2: 2018 MAMA Performance Practice (Formation Check ver.)",
  "Jun 9 - Answer: BTS 3 Units Videos",
  "Jun 10 - BTS Profile #2 (2020 ver.)",
  "Jun 11 - Map of the Song: 7",
  "Jun 12 - We Are Bulletproof: The Eternal",
  "Jun 13 - BTS Birthday Party: Video & Behind Photos & BHC Radio Behind Photos",
  "Jun 14 - CLOSING Ceremony & BangBangCon: The Live Photo Sketch",
];


const festaMomentsImages = [
  "/images/festa-2020/slider1.jpg",
  "/images/festa-2020/slider2.jpg",
  "/images/festa-2020/slider3.jpg",
  "/images/festa-2020/slider4.jpg",
  "/images/festa-2020/slider5.jpg",
  "/images/festa-2020/slider6.jpg",
  "/images/festa-2020/slider7.jpg",
  "/images/festa-2020/slider8.jpg",
  "/images/festa-2020/slider9.jpg",
  "/images/festa-2020/slider10.jpg",
  "/images/festa-2020/slider11.jpg",
  "/images/festa-2020/slider12.jpg",
  "/images/festa-2020/slider13.jpg",
  "/images/festa-2020/slider14.jpg",
  "/images/festa-2020/slider15.jpg",
  "/images/festa-2020/slider16.jpg",
  "/images/festa-2020/slider17.jpg",
  "/images/festa-2020/slider18.jpg",
  "/images/festa-2020/slider19.jpg",
  "/images/festa-2020/slider20.jpg",
  "/images/festa-2020/slider21.jpg",
  "/images/festa-2020/slider22.jpg",
  "/images/festa-2020/slider23.jpg",
  "/images/festa-2020/slider24.jpg",
  "/images/festa-2020/slider25.jpg",
  "/images/festa-2020/slider26.jpg",
  "/images/festa-2020/slider27.jpg",
  "/images/festa-2020/slider28.jpg",
  "/images/festa-2020/slider29.jpg",
  "/images/festa-2020/slider30.jpg",
];

const albums = [
  {
    id: 1,
    img: "/images/festa-2020/album1.jpg",
    description: "1 – Map of the Soul: 7 (February 21, 2020) : BTS’s seventh studio album and a major milestone, combining new songs with reflections on their seven-year journey. It features tracks like “ON,” “Black Swan,” and “Filter.” The album topped charts worldwide and received critical acclaim."
  },
  {
    id: 2,
    img: "/images/festa-2020/album2.jpg",
    description: "2 - – Suga (Agust D) – D-2 (May 22, 2020) : Suga’s second solo mixtape under the name Agust D. This project explores deeper themes of identity, mental health, and artistry, featuring the popular track “Daechwita.” It was praised for its raw honesty and musical diversity."
  },
  {
    id: 3,
    img: "/images/festa-2020/album3.jpg",
    description: "1 – “Crying Over You” by Honne ft. RM (March 27, 2019) : A mellow electro-R&B collaboration between British duo Honne and RM. RM added a Korean rap verse to the track, blending Western electronic sounds with K-hip hop sensibility."
  },
  {
    id: 4,
    img: "/images/festa-2020/album4.jpg",
    description: "2 – “SUGA’s Interlude” by Halsey ft. SUGA (December 6, 2019) : Part of Halsey’s Manic album, this emotional interlude features SUGA’s reflective rap about ambition and uncertainty, paired with Halsey’s soft vocals."
  },
  {
    id: 5,
    img: "/images/festa-2020/album5.jpg",
    description: "3 – “Chicken Noodle Soup” by J-Hope ft. Becky G (September 27, 2019) : A vibrant trilingual remake of the early 2000s classic. J-Hope and Becky G brought together Korean, Spanish, and English lyrics over a catchy beat. The track went viral and trended worldwide."
  },
  {
    id: 6,
    img: "/images/festa-2020/album6.jpg",
    description: "6 – “Seoul Town Road (Remix)” by Lil Nas X ft. RM (July 25, 2019) : A special remix of the global hit “Old Town Road,” featuring RM with a fresh Korean-English verse.The collab gained global attention, bridging Korean hip-hop and American country-trap. Though brief, RM’s verse added a unique BTS flavor to the viral track. The remix was also performed live with BTS and Lil Nas X at the 2020 Grammy Awards."
 },
  {
    id: 7,
    img: "/images/festa-2020/festival1.jpg",
    description: "1 – The Late Show with Stephen Colbert (May 15, 2019) : BTS paid tribute to The Beatles by performing Boy With Luv in black suits and a retro black-and-white setup, marking their debut on this iconic American show."
  },
  {
    id: 8,
    img: "/images/festa-2020/festival2.webp",
    description: "2 – BTS at Wembley Stadium, London (June 1–2, 2019) : BTS became the first Korean act to headline Wembley Stadium. Over 60,000 fans attended each night, making it a milestone moment in K-pop history."
  },
  {
    id: 9,
    img: "/images/festa-2020/festival3.jpg",
    description: "3 – BTS at King Fahd International Stadium, Riyadh (October 11, 2019) : The group made history as the first K-pop act to perform in Saudi Arabia, delivering a powerful concert as part of their Love Yourself: Speak Yourself tour."
  },
  {
    id: 10,
    img: "/images/festa-2020/festival4.webp",
    description: "4 – iHeartRadio Jingle Ball (December 6, 2019) : BTS joined the star-studded holiday lineup in Los Angeles, performing hits like Boy With Luv and Mic Drop for an excited U.S. crowd."
  },
  {
    id: 11,
    img: "/images/festa-2020/festival5.webp",
    description: "5 – Dick Clark’s New Year’s Rockin’ Eve (December 31, 2019) : BTS closed out 2019 with a high-energy performance in Times Square, New York, and took part in the live countdown to 2020."
  },
  {
    id: 12,
    img: "/images/festa-2020/festival6.webp",
    description: "6 – The Tonight Show Starring Jimmy Fallon (February 24, 2020) : BTS took over NYC with Fallon, performing ON in Grand Central Terminal and participating in games and interviews during a special BTS episode."
  },
  {
    id: 13,
    img: "/images/festa-2020/festival7.avif",
    description: "7 – Carpool Karaoke on The Late Late Show with James Corden (February 25, 2020) : A fan-favorite appearance! BTS joined Corden in his car, singing along to their hits and chatting, showcasing their fun personalities."
  },
  {
    id: 14,
    img: "/images/festa-2020/festival8.webp",
    description: "8 – MTV Unplugged (Recorded before June 2020) : Though aired later in 2021, the acoustic-style performances of Blue & Grey, Life Goes On, and others were recorded before June 2020."
  },
  {
    id: 15,
    img: "/images/festa-2020/festival9.webp",
    description: "9 - BTS at the 2020 Grammys (January 26, 2020) : Performed alongside Lil Nas X on “Old Town Road (Remix) for a group performance that marked their debut on the Grammy stage — a symbolic moment of global recognition."
  },
  {
    id: 16,
    img: "/images/festa-2020/awards1.jpg",
    description: "1 – MTV Video Music Awards (August 26, 2019) : BTS won Best K-Pop, Best Group, and Best Choreography (Boy With Luv), marking their first-ever wins at the VMAs."
  },
  {
    id: 17,
    img: "/images/festa-2020/awards2.webp",
    description: "2 – Billboard Music Awards (May 1, 2019) : Although just before your timeframe, it influenced the year: BTS won Top Duo/Group and Top Social Artist, breaking records for K-pop presence in Western awards."
  },
  {
    id: 18,
    img: "/images/festa-2020/awards3.jpg",
    description: "3 – American Music Awards (November 24, 2019) : BTS took home Favorite Duo or Group – Pop/Rock, Favorite Social Artist, and Tour of the Year, showing their massive global impact."
  },
  {
    id: 19,
    img: "/images/festa-2020/awards4.jpg",
    description: "4 – Guinness World Records (2019–2020) : They earned several titles, including : Most Twitter engagements for a music group , Fastest time to reach 1 million followers on TikTok , Most-viewed YouTube music video in 24 hours for “Boy With Luv” (later surpassed)."
  },
  {
    id: 20,
    img: "/images/festa-2020/awards5.jpg",
    description: "5 – TIME Magazine – “100 Most Influential People” (2019) : BTS was included in TIME’s annual list for the second time, recognizing their global cultural influence."
  },
  {
    id: 21,
    img: "/images/festa-2020/awards6.jpg",
    description: "6 – Forbes Korea Power Celebrity #1 (2020) : For the third consecutive year, BTS ranked first, reflecting their dominance in music, influence, and brand power in Korea."
  },
  {
    id: 22,
    img: "/images/festa-2020/awards7.webp",
    description: "7 – South Korean Cultural Merit Order – Ongoing Recognition : Their influence continued to boost Korean culture abroad, and they remained ambassadors of Korean culture and language globally."
  },
  {
    id: 23,
    img: "/images/festa-2020/awards8.jpg",
    description: "8 – Gaon & Hanteo Chart Achievements - Map of the Soul: Persona and Map of the Soul: 7 sold millions, setting records for the highest-selling albums in Korean history up to that point . MOTS:7 reached over 4 million sales, becoming Korea's best-selling album ever by June 2020."
  },
  {
    id: 24,
    img: "/images/festa-2020/awards9.png",
    description: "9 – IFPI Global Album Sales 2019 : BTS ranked #2 globally, only behind Taylor Swift, marking their place in the international recording industry."
  },
];

export default function Festa2020Page() {
   useEffect(() => {
      document.title = "Festa-2020";
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
            src="/images/festa-2020/banner.jpg"
            alt="FESTA Banner"
            className="festa-banner"
          />
          <div className="activities-list">
            <h2>2020 FESTA Schedule</h2>
            <ul>
              {activities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
  
        {/* Section 2: Festa Moments Slider */}
        <section className="festa-moments section">
          <h2>BTS Moments 2019-2020</h2>
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
  
  