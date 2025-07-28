import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Festa2018.css";

const activities = [
  "June 4 – Opening Ceremony: Spring Day (Brit Rock Remix)",
  "June 5 – BTS Photo Collection & BTS NEWS",
  "June 6 – Golden Disk Awards Dance Practice (2018)",
  "June 7 – 5th Anniversary Family Portrait Pt. 1 & Pt. 2 + Our Written Profile",
  "June 8 – Interlude Ceremony: In Front of the Post Office in Autumn – JIN COVER",
  "June 9 – BTS Manual Guide",
  "June 10 – Rehearsal Stage CAM: Best of Me",
  "June 11 – DD Ceremony: Ddaeng <<RM, SUGA, J-HOPE>>",
  "June 12 – BTS Dinner Party",
  "June 13 – BTS Happiness List & 2018 PROM PARTY Unit Stages (Video Playlist)",
  "June 29 – 2018 PROM PARTY: RE;VIEW & PRE;VIEW",
];


const festaMomentsImages = [
  "/images/festa-2018/slider1.jpg",
  "/images/festa-2018/slider2.jpg",
  "/images/festa-2018/slider3.jpg",
  "/images/festa-2018/slider4.jpg",
  "/images/festa-2018/slider5.jpg",
  "/images/festa-2018/slider6.jpg",
  "/images/festa-2018/slider7.jpg",
  "/images/festa-2018/slider8.jpg",
  "/images/festa-2018/slider9.jpg",
  "/images/festa-2018/slider10.jpg",
  "/images/festa-2018/slider11.jpg",
  "/images/festa-2018/slider12.jpg",
  "/images/festa-2018/slider13.jpg",
  "/images/festa-2018/slider14.jpg",
  "/images/festa-2018/slider15.jpg",
  "/images/festa-2018/slider16.jpg",
  "/images/festa-2018/slider17.jpg",
  "/images/festa-2018/slider18.jpg",
  "/images/festa-2018/slider19.jpg",
  "/images/festa-2018/slider20.jpg",
  "/images/festa-2018/slider21.jpg",
];

const albums = [
  {
    id: 1,
    img: "/images/festa-2018/album1.jpg",
    description: "1 – Face Yourself (April 4, 2018) : BTS’s third Japanese studio album, featuring Japanese versions of hit Korean songs from Wings and Love Yourself: Her, plus three original tracks—“Don’t Leave Me,” “Let Go,” and “Crystal Snow.” It debuted at #43 on the Billboard 200, making it one of the highest-charting Japanese albums by a Korean group in the U.S."
  },
  {
    id: 2,
    img: "/images/festa-2018/album2.jpg",
    description: "2 – Love Yourself: Tear (May 18, 2018) : A pivotal BTS album that explores the pain of love and separation. With its lead single “Fake Love,” it debuted at #1 on the U.S. Billboard 200—making BTS the first Korean group to top that chart. It topped the World Albums chart and became a million‑seller in Korea."
  },
  {
    id: 3,
    img: "/images/festa-2018/album3.jpg",
    description: "3 - Hope World (March 2, 2018) : J‑Hope’s debut solo mixtape—a vibrant mix of self-reflection and energetic sounds. Featuring lead singles “Daydream” and “Airplane,” it debuted at #38 on the Billboard 200, marking the highest chart entry ever by a Korean solo artist at the time. "
  },
  {
    id: 4,
    img: "/images/festa-2018/album4.jpeg",
    description: "4 – “Champion (Remix)” by Fall Out Boy feat. RM (December 15, 2017) : A high-energy rock-meets-hip-hop mash-up where RM delivers a sharp, meaningful rap verse that elevates Fall Out Boy’s anthem. It blends pop-punk energy with introspective rap, marking a memorable bridge between Western rock and Korean hip-hop."
  },
  {
    id: 5,
    img: "/images/festa-2018/concert.jpg",
    description: "– BTS World Tour: Love Yourself (May 25, 2018 – Opening Concert) : BTS launched their most ambitious world tour to date at Seoul Olympic Stadium. With elaborate production, a new setlist centered around the Love Yourself album era, and record-breaking ticket sales, this tour began their full leap into global superstardom."
  },
  {
    id: 6,
    img: "/images/festa-2018/festival1.webp",
    description: "1 – November 19, 2017 – American Music Awards (AMA), USA : BTS made their US awards show debut, performing “DNA” live on national television. This milestone performance marked their formal introduction to the American audience and earned widespread acclaim for their stage presence and energy."
  },
  {
    id: 7,
    img: "/images/festa-2018/festival2.webp",
    description: "2 – November 21–30, 2017 – US TV Debut Appearances : They appeared on major US talk shows including The Ellen DeGeneres Show, Jimmy Kimmel Live!, and The Late Late Show with James Corden. Their performances of “DNA” and “MIC Drop” introduced their charisma and style to a new global fanbase."
  },
  {
    id: 8,
    img: "/images/festa-2018/festival3.jpg",
    description: "3 – December 1, 2017 – Mnet Asian Music Awards (MAMA), Hong Kong : BTS performed an emotional set including “Spring Day,” “Not Today,” and “DNA.” The group also took home major awards, reinforcing their influence across Asia."
  },
  {
    id: 9,
    img: "/images/festa-2018/festival4.png",
    description: "4 – December 2, 2017 – Melon Music Awards, Korea : Delivering a memorable stage of “DNA” and a heartfelt performance of “Spring Day,” BTS received accolades including the prestigious “Artist of the Year.”"
  },
  {
    id: 10,
    img: "/images/festa-2018/festival5.webp",
    description: "5 – December 25–31, 2017 – Year-End Korean Broadcast Shows : They closed out 2017 with multiple performances at SBS Gayo Daejeon (Dec 25), KBS Song Festival (Dec 29), and MBC Gayo Daejejeon (Dec 31), with dynamic medleys like “MIC Drop,” “Go Go,” and “Not Today.”"
  },
  {
    id: 11,
    img: "/images/festa-2018/festival6.jpg",
    description: "6 –  February 22, 2018 – Gaon Chart Music Awards : BTS performed iconic songs like “Save Me” and “Blood Sweat & Tears” while earning several awards, recognizing their chart-topping success."
  },
  {
    id: 12,
    img: "/images/festa-2018/festival7.avif",
    description: "7 – May 20, 2018 – Billboard Music Awards (BBMAs), USA : They returned to the Billboard stage, premiering “Fake Love” live for the first time. Their performance went viral and cemented their impact on Western music platforms."
  },
  {
    id: 13,
    img: "/images/festa-2018/festival8.jpg",
    description: "8 – May 25 & June 12, 2018 – Second US TV Tour : They returned to Ellen and James Corden, performing “Fake Love” and “Airplane Pt. 2.” Their continued appearances helped grow their Western fanbase and media presence."
  },
  {
    id: 14,
    img: "/images/festa-2018/festival9.jpg",
    description: "9 – June 22, 2018 – Lotte Duty Free Family Concert, Korea : As part of a major K-pop concert event in Seoul, BTS performed “Fake Love,” “Spring Day,” and “Airplane Pt. 2” to thousands of fans, celebrating their recent comeback."
  },
   {
    id: 15,
    img: "/images/festa-2018/awards1.avif",
    description: "1 – 2017 Mnet Asian Music Awards (MAMA) : BTS swept the stage in Hong Kong, winning high-profile awards such as Artist of the Year and Best Dance Performance – Male Group. Their electrifying stage and emotional connection with fans marked a high point in their Asian success."
  },
   {
    id: 16,
    img: "/images/festa-2018/awards2.png",
    description: "2 – 2017 Melon Music Awards : They earned the Album of the Year – Daesang for The Most Beautiful Moment in Life: Young Forever, cementing the album’s impact and critical acclaim."
  },
   {
    id: 17,
    img: "/images/festa-2018/awards3.jpeg",
    description: "3 – 2018 Gaon Chart Music Awards : They were awarded Album of the Year – Q4 for Wings, demonstrating consistent performance and influence across the final quarter ."
  },
   {
    id: 18,
    img: "/images/festa-2018/awards4.webp",
    description: "4 –  2017 Billboard Music Awards (BBMAs) : For the first time, BTS won the Top Social Artist award, marking their global fanbase’s power and opening a new chapter in their international acclaim."
  },
   {
    id: 19,
    img: "/images/festa-2018/awards5.webp",
    description: "5 –  2017 American Music Awards (AMA) : BTS received the Top Social Artist award, showcasing their growing influence in mainstream American music circles. "
  },
];

export default function Festa2018Page() {
   useEffect(() => {
      document.title = "Festa-2018";
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
            src="/images/festa-2018/banner.jpg"
            alt="FESTA Banner"
            className="festa-banner"
          />
          <div className="activities-list">
            <h2>2018 FESTA Schedule</h2>
            <ul>
              {activities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
  
        {/* Section 2: Festa Moments Slider */}
        <section className="festa-moments section">
          <h2>BTS Moments 2017-2018</h2>
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
  
  