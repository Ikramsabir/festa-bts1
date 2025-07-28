import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Festa2014.css";

const activities = [
  "June 2 – 1st Anniversary Celebrations ‘BTS FESTA’",
  "June 3 – Photo Album #1 (2013) & Special Magazine",
  "June 4 – Photo Album #2 (Growth) & Prologue '365 Days'",
  "June 5 – Choreo Stage: Adult Child + ‘BTS Lounge’",
  "June 6 – Choreo Stage: Beautiful",
  "June 7 – 2nd ‘Keyword Talk’",
  "June 8 – Bonus Ep: 'Couldn’t Protect BTS'",
  "June 9 – Self-Written Profiles",
  "June 10 – Radio Teaser & ‘1 Year Ago Today’",
  "June 11 – Commemorative Photo",
  "June 12 – Jin Chef’s Birthday",
  "June 13 – BTS KKUL FM & Message to ARMY",
  "June 13 – [EPISODE] BTS 1st Anniversary – So 4 More",
];

const festaMomentsImages = [
  "/images/festa-2014/slider1.jpg",
  "/images/festa-2014/slider2.jpg",
  "/images/festa-2014/slider3.jpg",
  "/images/festa-2014/slider4.jpg",
  "/images/festa-2014/slider5.jpg",
  "/images/festa-2014/slider6.jpg",
  "/images/festa-2014/slider7.jpg",
  "/images/festa-2014/slider8.jpg",
  "/images/festa-2014/slider9.jpg",
  "/images/festa-2014/slider10.jpg",
  "/images/festa-2014/slider11.jpg",
  "/images/festa-2014/slider12.jpg",
  "/images/festa-2014/slider13.jpg",
  "/images/festa-2014/slider14.jpg",
  "/images/festa-2014/slider15.jpg",
  "/images/festa-2014/slider16.jpg",
];

const albums = [
  {
    id: 1,
    img: "/images/festa-2014/album1.jpg",
    description: "1 - Cool 4 Skool (June 2013) : BTS’s debut single album that introduces their raw and energetic hip-hop style. Features tracks like “No More Dream” and “We Are Bulletproof Pt.2,” showcasing their youthful rebellion and passion."
  },
  {
    id: 2,
    img: "/images/festa-2014/album2.jpg",
    description: "2 - O!RUL8,2? (September 2013) : Their first mini-album with a more aggressive sound and meaningful lyrics.Highlights include “N.O” and “We On,”expressing the struggles and hopes of youth striving for dreams.",
  },
  {
    id: 3,
    img: "/images/festa-2014/album3.jpg",
    description: "3 - Skool Luv Affair (February 2014) : A blend of school life and young love themes with catchy beats.Notable tracks like “Boy In Luv” and “Just One Day” explore emotions of adolescence and relationships.",
  },
  {
    id: 4,
    img: "/images/festa-2014/album4.jpg",
    description: "4 - Skool Luv Affair Special Edition (May 2014) : The repackage edition adding fresh songs like “Miss Right” and a remix of “I Like It,” giving fans more insight into BTS’s evolving musical style and charm.",
  },
   {
    id: 5,
    img: "/images/festa-2014/poster1.jpg",
    description: "1 - Debut Showcase (June 2013) : BTS’s very first official stage, introducing their raw and energetic hip-hop style with performances from their debut single No More Dream.  A milestone marking the beginning of their journey.",
  },
   {
    id: 6,
    img: "/images/festa-2014/poster2.png",
    description: "2 - 2013 Mnet 20’s Choice Awards (August 2013) : BTS appeared as promising rookies, gaining early recognition in the Korean music scene, showcasing their potential among other young talents.",
  },
   {
    id: 7,
    img: "/images/festa-2014/poster3.jpg",
    description: "3 - 2013 Melon Music Awards (November 2013) : Their first appearance at a major Korean music awards show, marking an important step in gaining mainstream exposure.",
  },
  {
    id: 8,
    img: "/images/festa-2014/poster4.jpg",
    description: "4 - 2013 SBS Gayo Daejeon (December 2013) : Participated in one of Korea’s biggest year-end music festivals, performing alongside established artists and increasing their visibility.",
  },
  {
    id: 9,
    img: "/images/festa-2014/poster5.jpg",
    description: "5 - 2014 Seoul Music Awards (January 2014) : BTS took part in this prestigious awards ceremony, continuing to build their reputation within the industry.",
  },
  {
    id: 10,
    img: "/images/festa-2014/poster6.jpg",
    description: "6 - 2014 Golden Disc Awards (January 2014) : Recognized as rising stars, BTS received nominations and awards, highlighting their growing influence in Korean pop music.",
  },
  {
    id: 11,
    img: "/images/festa-2014/awards1.jpg",
    description: "1 - Melon Music Awards – Rookie of the Year (November 14, 2013) : BTS received the -Rookie of the Year- award at the 2013 Melon Music Awards, recognizing their impactful debut and rising popularity in the K-pop industry. ",
  },
  {
    id: 12,
    img: "/images/festa-2014/awards2.jpg",
    description: "2 - So-Loved Awards 2013 – Best Debut Male & Best Single Album : Acknowledged for their debut album -2 Cool 4 Skool-, BTS won Best Debut Male and Best Single Album at the So-Loved Awards, highlighting their strong entrance into the music scene. ",
  },
  {
    id: 13,
    img: "/images/festa-2014/awards3.webp",
    description: "3 - 5th KPOP Convention (Philippine KPOP Awards) – Rookie of the Year : BTS was honored as Rookie of the Year at the 5th KPOP Convention, reflecting their growing international fanbase and appeal.",
  },
  {
    id: 14,
    img: "/images/festa-2014/awards4.jpg",
    description: "4 - 28th Golden Disk Awards – New Rising Star (January 16, 2014) : At the prestigious Golden Disk Awards, BTS received the New Rising Star award, marking their emergence as a prominent new act in the Korean music industry.",
  },
  {
    id: 15,
    img: "/images/festa-2014/awards5.webp",
    description: "5 - 23rd Seoul Music Awards – Newcomer Artist (January 23, 2014) : BTS was recognized as the Newcomer Artist at the Seoul Music Awards, celebrating their successful debut year and musical contributions.",
  },
  {
    id: 16,
    img: "/images/festa-2014/awards6.webp",
    description: "6 - 3rd Gaon Chart K-pop Awards – New Male Group Artist of the Year : The Gaon Chart K-pop Awards honored BTS as the New Male Group Artist of the Year, acknowledging their impressive sales and popularity metrics.",
  },
  {
    id: 17,
    img: "/images/festa-2014/awards7.jpeg",
    description: "7 - Soompi Awards 2013 – Best Rookie of the Year : International fans voted BTS as the Best Rookie of the Year in the Soompi Awards, reflecting their global reach and fan engagement.",
  },
  {
    id: 18,
    img: "/images/festa-2014/awards8.webp",
    description: "8 - 2nd V Chart Awards (YinYueTai) – Top New Artist 2014 (Beijing, China) : BTS's popularity extended to China, where they were awarded Top New Artist at the YinYueTai V Chart Awards, showcasing their expanding international presence.",
  },
  {
    id: 19,
    img: "/images/festa-2014/awards9.webp",
    description: "9 - So-Loved Awards 2014 – Best Mini Album, Best Song, Best Choreography Male, Best Hip Hop/R&B : BTS's mini-album - Skool Luv Affair - and its lead single - Boy in Luv - earned multiple accolades at the So-Loved Awards, highlighting their musical versatility and performance skills.",
  },
  {
    id: 20,
    img: "/images/festa-2014/awards10.jpg",
    description: "10 - Arirang Pops In Seoul – Rising Star 2014 : Recognized as the Rising Star of 2014 by Arirang's Pops In Seoul, BTS's growing influence and popularity were celebrated on an international platform.",
  },
];

export default function Festa2014Page() {
  useEffect(() => {
    document.title = "Festa-2014";
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
          src="/images/festa-2014/banner.png"
          alt="FESTA Banner"
          className="festa-banner"
        />
        <div className="activities-list">
          <h2>2014 FESTA Schedule</h2>
          <ul>
            {activities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 2: Festa Moments Slider */}
      <section className="festa-moments section">
        <h2>BTS Moments 2013-2014</h2>
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

