import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Festa2024.css"; 

const activities = [
  "May 31 – 2024 FESTA Timeline Announcement",
  "June 2 – 'Never Let Go' Digital Single Announcement",
  "June 4 – 2013–2023 Photo Collection",
  "June 7 – 'Never Let Go' Digital Single Release",
  "June 8 – 방.방.콘 (BANGBANGCON) + Performance Videos + 'Dear ARMY, From BTS'",
  "June 11 – Apobangpo (아포방포) Sign",
  "June 12 – BTS MV Replay: Timeline & Thanks ARMY Poster",
  "June 13 – In-person Event @ Seoul Sports Complex & Jin's Greetings & Message From Jin (Photos & Videos)"
];


const festaMomentsImages = [
  "/images/festa-2024/slider1.jpeg",
  "/images/festa-2024/slider2.jpeg",
  "/images/festa-2024/slider3.jpeg",
  "/images/festa-2024/slider4.jpeg",
  "/images/festa-2024/slider5.jpeg",
  "/images/festa-2024/slider6.jpeg",
  "/images/festa-2024/slider7.jpeg",
  "/images/festa-2024/slider8.jpeg",
  "/images/festa-2024/slider9.jpeg",
  "/images/festa-2024/slider10.jpeg",
  "/images/festa-2024/slider11.jpeg",
  "/images/festa-2024/slider12.jpeg",
  "/images/festa-2024/slider13.jpeg",
  "/images/festa-2024/slider14.jpeg",
  "/images/festa-2024/slider15.jpeg",
  "/images/festa-2024/slider16.jpeg",
  "/images/festa-2024/slider17.jpeg",
  "/images/festa-2024/slider18.jpeg",
  "/images/festa-2024/slider19.jpeg",
  "/images/festa-2024/slider20.jpeg",
  "/images/festa-2024/slider21.jpeg",
  "/images/festa-2024/slider22.jpeg",
  "/images/festa-2024/slider23.jpeg",
  "/images/festa-2024/slider24.jpeg",
  "/images/festa-2024/slider25.jpg",
  "/images/festa-2024/slider26.jpg",
  "/images/festa-2024/slider27.jpg",
  "/images/festa-2024/slider28.jpg",
  "/images/festa-2024/slider29.jpg",
  "/images/festa-2024/slide30.jpg",
];

const albums = [
  {
    id: 1,
    img: "/images/festa-2024/album1.jpg",
    description: "1 – V – “Layover” (September 8, 2023) : V’s debut solo studio album, Layover blends pop, R&B, and jazz with soulful vocals and sophisticated production. It set new records—selling over 1.67 million copies on its first day, debuting at #2 on the Billboard 200, and becoming one of the highest-charting solo albums by a Korean artist ."
  },
  {
    id: 2,
    img: "/images/festa-2024/album2.jpg",
    description: "2 – Jung Kook – “Golden” (November 3, 2023) : Jungkook’s first full-length solo album, Golden is entirely in English and features appearances from Jack Harlow, Major Lazer, Latto, and DJ Snake. It was supported by singles such as “Seven” and “3D” and received positive critical reception upon release."
  },
  {
    id: 3,
    img: "/images/festa-2024/album3.jpg",
    description: "3 – RM – “Right Place, Wrong Person” (May 24, 2024) : RM’s second solo album features 11 tracks with collaborations including Little Simz, Domi & JD Beck, and Moses Sumney. The album combines rich alternative soundscapes with introspective lyrics, marking his return before mandatory military service."
  },
  {
    id: 4,
    img: "/images/festa-2024/album4.jpg",
    description: "4 – J-Hope – “Hope on the Street Vol. 1” (March 29, 2024) : Ce mini-album sert également de bande-son au documentaire « Hope on the Street ». Il comprend 6 titres (dont une collaboration avec Jungkook) et a été bien accueilli, culminant à la 5ᵉ place du Billboard 200."
  },
  {
    id: 5,
    img: "/images/festa-2024/album5.jpg",
    description: "2 – “Never Let Go” – Jungkook (June 7, 2024) : A heartfelt tribute to ARMYs released for BTS Festa 2024, expressing gratitude and connection. A standalone single not tied to any album."
  },
  {
    id: 6,
    img: "/images/festa-2024/album6.jpg",
    description: "2 – “Never Let Go” – Jungkook (June 7, 2024) : A heartfelt tribute to ARMYs released for BTS Festa 2024, expressing gratitude and connection. A standalone single not tied to any album."
  },
  {
    id: 7,
    img: "/images/festa-2024/collabe.jpg",
    description: " – Jungkook – “Too Much” (with The Kid LAROI & Central Cee) : An energizing single with the Kid LAROI and Central Cee, released on October 20, 2023. It became a top‑10 hit in multiple countries and continued Jungkook’s solo momentum."
  },
  {
    id: 8,
    img: "/images/festa-2024/festival1.jpg",
    description: "1 – VICNIC Fan‑Meeting (October 14, 2023 – Gyeonggi, South Korea) : V’s first solo fan‑meeting, styled as a “picnic” event with ~1,400 fans at Kyung Hee University campus."
  },
  {
    id: 9,
    img: "/images/festa-2024/festival2.jpg",
    description: "2 – Global Citizen Festival NYC (September 23, 2023 – Central Park, NYC) : Jungkook co‑headlined alongside global artists, performing his solo single “Seven”."
  },
  {
    id: 10,
    img: "/images/festa-2024/festival3.jpg",
    description: "3 – “Golden” Promotion Live Appearances (Nov 3–9, 2023 – U.S.): • Album release performances including Standing Next to You video premiere (Nov 3)."
  },
  {
    id: 11,
    img: "/images/festa-2024/festival4.webp",
    description: "4 – “Golden” Promotion Live Appearances (Nov 3–9, 2023 – U.S.): • First live TV performance on The Tonight Show Starring Jimmy Fallon (Nov 7)."
  },
  {
    id: 12,
    img: "/images/festa-2024/festival5.jpg",
    description: "5 – “Golden” Promotion Live Appearances (Nov 3–9, 2023 – U.S.) : • Performance on Today Show Citi Concert Series."
  },
  {
    id: 13,
    img: "/images/festa-2024/festival6.jpg",
    description: "6 – “Golden” Promotion Live Appearances (Nov 3–9, 2023 – U.S.) : • Surprise mini‑concert at Times Square ."
  },
   {
    id: 14,
    img: "/images/festa-2024/festival7.webp",
    description: "7 – RM documentary announcement (May 24, 2024 – Busan Intl Film Festival) : The film 'RM: Right People, Wrong Place   premiered during the festival’s “Open Cinema” section."
  },
  {
    id: 15,
    img: "/images/festa-2024/awards1.jpg",
    description: "1 – 2024 Seoul Music Awards (33rd SMA) : World Trend Artist – BTS."
  },
  {
    id: 16,
    img: "/images/festa-2024/awards2.jpg",
    description: "2 – 2024 Seoul Music Awards (33rd SMA) : Main Prize (Bonsang) – Jungkook."
  },
  {
    id: 17,
    img: "/images/festa-2024/awards3.jpeg",
    description: "3 – 2024 Golden Disc Awards (38th) : Album Division Bonsang – Golden - Digital Song Bonsang – “Seven (feat. Latto)”."
  },
  {
    id: 18,
    img: "/images/festa-2024/awards4.webp",
    description: "4 – 2023 Billboard Music Awards : Top Global K‑Pop Song – “Seven (feat. Latto)”."
  },
  {
    id: 19,
    img: "/images/festa-2024/awards5.webp",
    description: "5 – 2023 MTV Europe Music Awards (EMA) : Best Song – “Seven (feat. Latto)” - Best K‑Pop – Jungkook."
  },
  {
    id: 20,
    img: "/images/festa-2024/awards6.png",
    description: "6 – M Countdown & Melon Shows Achievements for “Standing Next to You” : Triple crowns on M Countdown, Inkigayo, Music Core plus four consecutive Melon Popularity Awards."
  },
  {
    id: 21,
    img: "/images/festa-2024/awards7.jpg",
    description: "7 – 2024 Seoul Music Awards (33rd SMA) : Main Prize (Bonsang) – Jimin and V - Fan Choice of the Year – V."
  },
];

export default function Festa2024Page() {
   useEffect(() => {
      document.title = "Festa-2024";
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
            src="/images/festa-2024/banner.jpeg"
            alt="FESTA Banner"
            className="festa-banner"
          />
          <div className="activities-list">
            <h2>2024 FESTA Schedule</h2>
            <ul>
              {activities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
  
        {/* Section 2: Festa Moments Slider */}
        <section className="festa-moments section">
          <h2>BTS Moments 2023-2024</h2>
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
  
  