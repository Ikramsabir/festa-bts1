import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Festa2021.css";

const activities = [
  "June 2 – OPENING Ceremony: Photos & Teaser Photos",
  "June 3 – BTS Profile (2021 Ver.)",
  "June 4 – Choreography Videos 1, 2, & 3",
  "June 5 – Mission! BTS 4 Cuts: Full Video, Teaser, and Photo Studio",
  "June 7 – 'Bicycle' by RM",
  "June 8 – BTS Photo Collection ‘20/’21",
  "June 9 – 2021 ARMY Profile",
  "June 10 – 2021 FESTA Examination: Video, Exam, and Answers & Results",
  "June 11 – BTS ROOM LIVE: Video & Preview Cuts",
  "June 12 – BTS Stage Clip (Let Us Shine Once Again)",
  "June 13 – ARMY Corner Store & CLOSING Ceremony & BTS MUSTER, Sowoozoo Day 1",
  "June 14 – BTS MUSTER, Sowoozoo Day 2 – World Tour Version",
];

const festaMomentsImages = [
  "/images/festa-2021/slider1.jpg",
  "/images/festa-2021/slider2.jpg",
  "/images/festa-2021/slider3.jpg",
  "/images/festa-2021/slider4.jpg",
  "/images/festa-2021/slider5.jpg",
  "/images/festa-2021/slider6.jpg",
  "/images/festa-2021/slider7.jpg",
  "/images/festa-2021/slider8.jpg",
  "/images/festa-2021/slider9.jpg",
  "/images/festa-2021/slider10.jpg",
  "/images/festa-2021/slider11.jpg",
  "/images/festa-2021/slider12.jpg",
  "/images/festa-2021/slider13.jpg",
  "/images/festa-2021/slider14.jpg",
  "/images/festa-2021/slider15.jpg",
  "/images/festa-2021/slider16.jpg",
  "/images/festa-2021/slider17.jpg",
  "/images/festa-2021/slider18.jpg",
  "/images/festa-2021/slider19.jpg",
  "/images/festa-2021/slider20.jpg",
  "/images/festa-2021/slider21.jpg",
  "/images/festa-2021/slider22.jpg",
  "/images/festa-2021/slider23.jpg",
  "/images/festa-2021/slider24.jpg",
  "/images/festa-2021/slider25.jpg",
  "/images/festa-2021/slider26.jpg",
  "/images/festa-2021/slider27.jpg",
  "/images/festa-2021/slider28.jpg",
  "/images/festa-2021/slider29.jpg",
  "/images/festa-2021/slider30.jpg",
  "/images/festa-2021/slider31.jpg",
];

const albums = [
  {
    id: 1,
    img: "/images/festa-2021/album1.jpg",
    description: "– “BE” (Deluxe Edition) – BTS (November 20, 2020) : A heartfelt album created during the COVID-19 pandemic, offering comfort and connection. Features hit singles like “Life Goes On” (the first Korean song to top Billboard Hot 100) and “Dynamite.” The album debuted at #1 on Billboard 200 and was praised for its sincerity and self-production by the members."
  },
  {
    id: 2,
    img: "/images/festa-2021/album2.jpg",
    description: "1 – “Still With You” by Jungkook (June 5, 2020) : An unofficial solo release shared on SoundCloud during BTS Festa 2020 as a heartfelt gift to fans . A smooth, jazzy ballad that highlights Jungkook’s rich vocals and emotional depth. Though not part of any album, it became a fan favorite for its sincerity and musicality."
  },
  {
    id: 3,
    img: "/images/festa-2021/album3.jpeg",
    description: "2 – “Butter” (May 21, 2021) : A catchy English single by BTS that debuted at #1 on Billboard Hot 100. It became a global summer hit with smooth pop-dance vibes and strong vocals. The song stayed at the top for weeks and boosted BTS’s international fame."
  },
  {
    id: 4,
    img: "/images/festa-2021/album4.jpg",
    description: "1 – Suga (Agust D) × IU – “Eight” (May 6, 2020) : A collaboration with Korean singer IU, where Suga co-produced and featured as a rapper in this emotional and upbeat track. It topped Korean charts and received critical acclaim."
  },
   {
    id: 5,
    img: "/images/festa-2021/album5.jpg",
    description: "2 – Jawsh 685 × Jason Derulo × BTS – “Savage Love (BTS Remix)” (October 2, 2020) : A remix of the viral hit by New Zealand producer Jawsh 685 and American singer Jason Derulo, featuring BTS members Jungkook and Suga. The remix included new Korean verses and helped push the song to No. 1 on the Billboard Hot 100. This marked another major international collaboration and showcased BTS's global impact."
  },
  {
    id: 6,
    img: "/images/festa-2021/album6.webp",
    description: "3 – J-Hope × Becky G – “Chicken Noodle Soup” Remix (June 2021) : A refreshed version of their 2019 hit, this remix added new verses and highlighted the cultural blend between Korean and Latin music styles."
  },
  {
    id: 7,
    img: "/images/festa-2021/concert.webp",
    description: "– Map of the Soul ON:E – Virtual Concert (October 10–11, 2020) : In place of the canceled tour, BTS hosted a two-day global livestream event viewed by nearly 1 million fans from 191 countries. It featured full concert staging, interactive camera angles, and extensive virtual set design."
  },
  {
    id: 8,
    img: "/images/festa-2021/festival1.webp",
    description: "1 - June 14, 2020 – Bang Bang Con: The Live (Virtual Concert) : BTS hosted their first full-scale online concert to celebrate FESTA 2020, drawing 756,600 global viewers across 107 countries. They performed 14 songs—including live renditions of “Just One Day,” “Blue & Grey,” “Spring Day”—and included fun elements like ASMR moments and sub-unit stages."
  },
  {
    id: 9,
    img: "/images/festa-2021/festival2.jpeg",
    description: "2 - September 14, 2020 – MTV Video Music Awards (VMAs) : BTS performed “Dynamite” on a virtual stage set in the US—backdropped by a skyline of New York City. They also won three VMA awards: Best Pop, Best K-Pop, and Best Group."
  },
  {
    id: 10,
    img: "/images/festa-2021/festival3.webp",
    description: "3 - October 14, 2020 – Billboard Music Awards (BBMAs) : BTS performed “Dynamite” during the remote BBMAs, and took home four awards: Top Social Media Artist, Top Selling Song Artist, Top Duo/Group, and Top Song Sales Artist."
  },
  {
    id: 11,
    img: "/images/festa-2021/festival4.webp",
    description: "4 - December 31, 2020 – Dick Clark’s New Year’s Rockin’ Eve : BTS appeared in Times Square, New York, performing a medley including “ON,” “Life Goes On,” and “Dynamite” to ring in 2021."
  },
  {
    id: 12,
    img: "/images/festa-2021/festival5.jpg",
    description: "5 - January 31, 2021 – Grammy Awards Performance : Though not in person, BTS performed “Dynamite” live—broadcast from Seoul—making history as the first Korean group to perform their own song at the Grammys."
  },
  {
    id: 13,
    img: "/images/festa-2021/festival6.webp",
    description: "6 - May 23, 2021 – Billboard Music Awards (BBMAs) : BTS performed “Butter” and won four BBMAs: Top Duo/Group, Top Social Artist, Top Selling Song Artist, and Top Song Sales Artist—dominating the awards."
  },
  {
    id: 14,
    img: "/images/festa-2021/awards1.png",
    description: "1 – “Dynamite” Billboard Hot 100 No.1 (August 31, 2020) : BTS became the first South Korean act to top the Billboard Hot 100 with their all-English single “Dynamite,” marking a historic milestone in global pop music."
  },
  {
    id: 15,
    img: "/images/festa-2021/awards2.jpg",
    description: "2 – Grammy Awards Nomination – “Dynamite” (March 14, 2021) : BTS received their first Grammy nomination for Best Pop Duo/Group Performance for “Dynamite,” becoming the first Korean group to be nominated in a major Grammy category."
  },
  {
    id: 16,
    img: "/images/festa-2021/awards3.jpg",
    description: "3 – IFPI Global Recording Artist of the Year (February 2021) : BTS were named the No.1 best-selling musical act worldwide for 2020 by the International Federation of the Phonographic Industry (IFPI), a first for an Asian act."
  },
  {
    id: 17,
    img: "/images/festa-2021/awards4.jpg",
    description: "4 – Billboard Music Awards 2021 (May 23, 2021) : BTS won Top Selling Song for “Dynamite,” Top Duo/Group, and Top Social Artist, continuing their dominance in both sales and fan engagement."
  },
  {
    id: 18,
    img: "/images/festa-2021/awards5.jpg",
    description: "5 – American Music Awards 2020 (November 22, 2020) : BTS won multiple awards including Artist of the Year, Favorite Duo or Group – Pop/Rock, and Favorite Social Artist, showing their broad appeal in the US."
  },
  {
    id: 19,
    img: "/images/festa-2021/awards6.jpg",
    description: "6 – MTV Video Music Awards 2020 (August 30, 2020) : They won four categories: Best Group, Best K-pop for “ON,” Best Choreography for “ON,” and Best Pop for “Dynamite.”"
  },
  {
    id: 20,
    img: "/images/festa-2021/awards7.jpg",
    description: "7 – Mnet Asian Music Awards 2020 (December 6, 2020) : BTS swept the major awards including Artist of the Year, Album of the Year (Map of the Soul: 7), Song of the Year (Dynamite), and Worldwide Icon of the Year."
  },
  {
    id: 21,
    img: "/images/festa-2021/awards8.jpg",
    description: "8 – Melon Music Awards 2020 (December 5, 2020) : They won Artist of the Year, Album of the Year, Song of the Year, and Best Dance – Male, solidifying their place in Korean music history."
  },
  {
    id: 22,
    img: "/images/festa-2021/awards9.jpg",
    description: "9 – “Savage Love (Remix)” with Jawsh 685 & Jason Derulo (October 2020) : The remix featuring BTS reached No.1 on the Billboard Hot 100, marking another global hit with their participation in a viral collaboration."
  },
  {
    id: 23,
    img: "/images/festa-2021/awards10.jpg",
    description: "10 – iHeartRadio Music Awards 2021 (May 27, 2021) : BTS won Best Fan Army, Best Music Video for “Dynamite”, and Best Collaboration for “Savage Love (Remix)”."
  },
];

export default function Festa2021Page() {
   useEffect(() => {
      document.title = "Festa-2021";
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
            src="/images/festa-2021/banner.jpg"
            alt="FESTA Banner"
            className="festa-banner"
          />
          <div className="activities-list">
            <h2>2021 FESTA Schedule</h2>
            <ul>
              {activities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
  
        {/* Section 2: Festa Moments Slider */}
        <section className="festa-moments section">
          <h2>BTS Moments 2020-2021</h2>
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
  
  