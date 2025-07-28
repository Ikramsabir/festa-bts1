import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Festa2019.css";

const activities = [
  "June 3 – Opening Ceremony: Family Portrait #1",
  "June 4 – BTS Photo Collection 2018/2019 & ANPANMAN (Performance Video)",
  "June 5 – This Night – JIN (Solo Release)",
  "June 7 – Choreography Video #1",
  "June 8 – Bangtan News",
  "June 9 – Choreography Video #2",
  "June 10 – Family Portrait #2",
  "June 11 – Euphoria (Piano Version)",
  "June 12 – BTS Profile 2019",
  "June 13 – Bangtan Attic & Family Portrait Special",
];


const festaMomentsImages = [
  "/images/festa-2019/slider1.jpg",
  "/images/festa-2019/slider2.jpg",
  "/images/festa-2019/slider3.jpg",
  "/images/festa-2019/slider4.jpg",
  "/images/festa-2019/slider5.jpg",
  "/images/festa-2019/slider6.jpg",
  "/images/festa-2019/slider7.jpg",
  "/images/festa-2019/slider8.jpg",
  "/images/festa-2019/slider9.jpg",
  "/images/festa-2019/slider10.jpg",
  "/images/festa-2019/slider11.jpg",
  "/images/festa-2019/slider12.jpg",
  "/images/festa-2019/slider13.jpg",
  "/images/festa-2019/slider14.jpg",
  "/images/festa-2019/slider15.jpg",
  "/images/festa-2019/slider16.jpg",
  "/images/festa-2019/slider17.jpg",
  "/images/festa-2019/slider18.jpg",
  "/images/festa-2019/slider19.jpg",
  "/images/festa-2019/slider20.jpg",
  "/images/festa-2019/slider21.jpg",
  "/images/festa-2019/slider22.jpg",
  "/images/festa-2019/slider23.jpg",
  "/images/festa-2019/slider24.jpg",
  "/images/festa-2019/slider25.jpg",
  "/images/festa-2019/slider26.jpg",
  "/images/festa-2019/slider27.jpg",
  "/images/festa-2019/slider28.jpg",
  "/images/festa-2019/slider29.jpg",
];

const albums = [
  {
    id: 1,
    img: "/images/festa-2019/album1.jpg",
    description: "1 – Love Yourself - Answer (August 24, 2018) : A repackaged album completing the Love Yourself trilogy. It includes past hits from Her and Tear, plus new tracks like “Euphoria,” “Epiphany,” and the powerful anthem “IDOL.” It debuted at #1 on Billboard 200, making BTS the first Korean act to top the chart twice in one year. It was certified Platinum by the RIAA in the US and achieved million-seller status in Korea."
  },
  {
    id: 2,
    img: "/images/festa-2019/album2.jpg",
    description: "2 – Map of the Soul: Persona (April 12, 2019) : An introspective mini-album exploring identity and love, featuring the chart-topping single “Boy With Luv” (feat. Halsey). It debuted at #1 on Billboard 200, UK Albums Chart, and Gaon, breaking several global records. This release made BTS the first group since The Beatles to earn three #1 albums on Billboard 200 in under one year."
  },
  {
    id: 3,
    img: "/images/festa-2019/album3.jpg",
    description: "3 – “Ddaeng” (June 13, 2018) : A special trap track by BTS’s rap line—RM, Suga, and J‑Hope—released for their 5th anniversary.Mixing traditional Korean sounds with bold beats, it features sharp wordplay and confident rap flows. Though unofficial and not tied to any album, it became a viral fan favorite, celebrated for its style and message."
  },
  {
    id: 4,
    img: "/images/festa-2019/album4.jpg",
    description: "1 – “Waste It on Me” by Steve Aoki ft. BTS (October 25, 2018) : A fully English EDM-dance track featuring vocals from RM and Jungkook. Unveiled as part of Aoki’s Neon Future III, the song marked BTS’s first full English single and became popular in Western markets."
  },
  {
    id: 5,
    img: "/images/festa-2019/album5.jpg",
    description: "2 – “Dream Glow” by Jin, Jimin & Jungkook ft. Charli XCX (June 7, 2019) : A soft pop single from the BTS World mobile game soundtrack, blending soothing vocals with Charli XCX's charm. Released just before the game launch, it highlighted BTS's first trio collaboration outside the group format. "
  },
  {
    id: 6,
    img: "/images/festa-2019/album6.jpg",
    description: "3 – “A Brand New Day” by J‑Hope & V ft. Zara Larsson (June 14, 2019) : A bright, upbeat song featuring Zara Larsson, serving as the second single from the BTS World OST. It showcased a strong international sound and was well-received for its feel-good energy."
  },
  {
    id: 7,
    img: "/images/festa-2019/album7.jpg",
    description: "4 – “All Night” by RM & Suga ft. Juice Wrld (June 21, 2019) : A rap-heavy collaboration released as the third single from the BTS World OST. RM and Suga teamed up with Juice Wrld over moody beats, delivering an intense mix of Korean and American rap styles."
  },
  {
    id: 8,
    img: "/images/festa-2019/concert1.jpg",
    description: "1 – BTS World Tour: Love Yourself (Aug 25, 2018 – Apr 7, 2019) : A global arena tour supporting the Love Yourself series, with 42 shows across Asia, North America, and Europe. BTS became the first Korean act to headline a U.S. stadium (Citi Field)."
  },
  {
    id: 9,
    img: "/images/festa-2019/concert2.jpg",
    description: "2 – Love Yourself: Speak Yourself (Stadium Extension) (May 4 – June 13, 2019) : An iconic stadium leg of the tour, including sold-out shows at Wembley Stadium, Rose Bowl, and Stade de France—solidifying BTS’s global headliner status."
  },
  {
    id: 10,
    img: "/images/festa-2019/festival1.jpg",
    description: "1 – December 25, 2018 – SBS Gayo Daejun (Seoul) : BTS delivered a festive set at this major year-end music festival, blending holiday classics with their own hits like “Dionysus.” The stage design was star-studded, reinforcing their powerful presence in K-pop’s biggest celebrations."
  },
  {
    id: 11,
    img: "/images/festa-2019/festival2.jpg",
    description: "2 – December 28, 2018 – KBS Song Festival : Jin co-hosted alongside artists from EXO and Twice, while BTS also performed their setlist within the massive, fantasy-themed “idol party”—leaving fans stunned with their polished vocals and dynamic group chemistry ."
  },
  {
    id: 12,
    img: "/images/festa-2019/festival3.jpg",
    description: "3 – December 31, 2018 – MBC Gayo Daejejeon : As part of the -Live- theme, BTS performed at this televised New Year’s Eve special alongside many top-tier acts. Their performance was seen as one of the highlights of the night, showcasing their stage mastery."
  },
  {
    id: 13,
    img: "/images/festa-2019/festival4.webp",
    description: "4 – May 20, 2018 – Billboard Music Awards (BBMAs) – Las Vegas : BTS finally took the stage at the BBMAs, performing “Fake Love” live for the first time at a major US awards show. The performance resonated globally, and BTS also brought home the Top Social Artist award again."
  },
  {
    id: 14,
    img: "/images/festa-2019/festival5.jpeg",
    description: "5 – May 15, 2019 – Good Morning America Summer Concert Series – New York : In Central Park, BTS performed “Boy With Luv” and “Fire” on Good Morning America, drawing thousands of fans and causing a social media trend with hashtags like #BTSonGMA. It marked a major media moment for their US promotional campaign."
  },
  {
    id: 15,
    img: "/images/festa-2019/awards1.jpg",
    description: "1 – Billboard Music Awards (May 20, 2018) : BTS won Top Social Artist for the second consecutive year and made history as the first Korean act to perform live at the BBMAs, debuting “Fake Love” on the American stage."
  },
  {
    id: 16,
    img: "/images/festa-2019/awards2.jpg",
    description: "2 – Korean Popular Culture & Arts Awards (Oct 24, 2018) : The group received the Order of Cultural Merit (Hwagwan), becoming the youngest-ever recipients of this prestigious Korean honor for spreading Korean culture globally."
  },
  {
    id: 17,
    img: "/images/festa-2019/awards3.jpg",
    description: "3 – Mnet Asian Music Awards (MAMA) (Dec 2018) : BTS dominated with Artist of the Year, Album of the Year (Tear), Worldwide Icon of the Year, and Best Music Video for “IDOL,” solidifying their status as global leaders in K-pop."
  },
  {
    id: 18,
    img: "/images/festa-2019/awards4.jpg",
    description: "4 – Grammy Awards (Feb 10, 2019) : Though not nominated, BTS made headlines by becoming the first K-pop group to present an award on stage at the Grammys, a major step into the US music scene."
  },
  {
    id: 19,
    img: "/images/festa-2019/awards5.jpg",
    description: "5 – iHeartRadio Music Awards (Mar 14, 2019) : They won Best Fan Army and Best Boy Band, showing their unrivaled international fan support and popularity."
  },
  {
    id: 20,
    img: "/images/festa-2019/awards6.webp",
    description: "6 – TIME 100 (April 2019) : BTS was listed among TIME’s 100 Most Influential People, praised for their cultural impact, philanthropic work, and authenticity."
  },
  {
    id: 21,
    img: "/images/festa-2019/awards7.webp",
    description: "7 – Love Yourself: Answer (RIAA & Gaon Certifications) : The album became the first Korean album to be certified Platinum by the RIAA in the US and reached over 2 million sales in Korea, a rare achievement for any artist."
  },
  {
    id: 22,
    img: "/images/festa-2019/awards8.webp",
    description: "8 – Map of the Soul: Persona (April 12, 2019) : The album debuted at #1 on the Billboard 200, giving BTS their third #1 album in less than a year. It became the best-selling album in Korean history at the time."
  },
];

export default function Festa2019Page() {
   useEffect(() => {
      document.title = "Festa-2019";
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
            src="/images/festa-2019/banner.jpg"
            alt="FESTA Banner"
            className="festa-banner"
          />
          <div className="activities-list">
            <h2>2019 FESTA Schedule</h2>
            <ul>
              {activities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
  
        {/* Section 2: Festa Moments Slider */}
        <section className="festa-moments section">
          <h2>BTS Moments 2018-2019</h2>
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
  
  