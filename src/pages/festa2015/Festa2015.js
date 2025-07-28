import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Festa2015.css";

const activities = [
  "June 1 – Opening Ceremony: Hug Me (Studio Ver. by V & J-Hope)",
  "June 3 – 2nd Anniversary Photo Album: Sophomore",
  "June 5 – Choreo Stage #1: War of Hormone (Real WAR Ver.)",
  "June 6 – Choreo Stage #2: Hide and Seek",
  "June 8 – Self-Written Profiles: BTS Ver. 2",
  "June 9 – We Are Bulletproof Pt.1…..?!",
  "June 10 – Family Picture: BTS Chronicle",
  "June 11 – Special Stage: Tomorrow",
  "June 10 – Radio Teaser & ‘1 Year Ago Today’",
  "June 13 – ❌ Cancelled: 2nd Muster – ZIP CODE: 17520",
];

const festaMomentsImages = [
  "/images/festa-2015/slider1.jpg",
  "/images/festa-2015/slider2.jpg",
  "/images/festa-2015/slider3.jpg",
  "/images/festa-2015/slider4.jpg",
  "/images/festa-2015/slider5.jpg",
  "/images/festa-2015/slider6.jpg",
  "/images/festa-2015/slider7.jpg",
  "/images/festa-2015/slider8.jpg",
  "/images/festa-2015/slider9.jpg",
  "/images/festa-2015/slider10.jpg",
  "/images/festa-2015/slider11.jpg",
  "/images/festa-2015/slider12.jpg",
  "/images/festa-2015/slider13.jpg",
  "/images/festa-2015/slider14.jpg",
  "/images/festa-2015/slider15.jpg",
  "/images/festa-2015/slider16.jpg",
];

const albums = [
  {
    id: 1,
    img: "/images/festa-2015/album1.jpg",
    description: "1 - Aug 20, 2014 – Dark & Wild : BTS’s first full-length album showing a darker, more intense side. It talks about love, frustration, and emotional conflict. Title track: Danger – a fierce warning about one-sided love."
  },
  {
    id: 2,
    img: "/images/festa-2015/album2.jpg",
    description: "2 -The Most Beautiful Moment in Life, Pt. 1 (April 29, 2015) : A turning point album introducing more melodic, introspective songs reflecting the beauty and pain of youth."
  },
   {
    id: 3,
    img: "/images/festa-2015/album3.jpg",
    description: "3 - Mar 20, 2015 – RM Mixtape : RM’s first solo mixtape showcasing his raw identity as a rapper. Notable tracks: Do You, Awakening, Joke, Voice, God Rap Themes include freedom, self-expression, and personal struggle."
  },
  {
    id: 4,
    img: "/images/festa-2015/album4.jpg",
    description: "1 -Mar 2015 – *Bucku Bucku* with Yankie : RM collaborates with Korean rap legends in a confident, bass-heavy track."
  },
  {
    id: 5,
    img: "/images/festa-2015/album5.webp",
    description: "2 - -U- by Primary ft. Iron & RM (April 2015) : A smooth and romantic hip-hop track with a chill atmosphere. RM's verse adds depth to the song, blending well with Primary’s mellow production. Though less mainstream, it resonated with fans for its laid-back vibe."
  },
   {
    id: 6,
    img: "/images/festa-2015/album6.jpg",
    description: "3 - -P.D.D (Please Don’t Die)- by RM × Warren G (March 2015) : A cross-genre collaboration that bridges Korean and American hip-hop. With Warren G’s signature West Coast sound and RM’s heartfelt lyrics, the track stood out for its raw emotion and global appeal. An official MV accompanied its release."
  },
  {
    id: 7,
    img: "/images/festa-2015/concert1.webp",
    description: "1 – BTS 2014 Show & Prove Concert (July 14, 2014 – LA, USA) : An intimate showcase held in West Hollywood with around 250 fans, marking BTS’s first live performance in the U.S. It served as an early step into the Western market, introducing their sound to an American audience."
  },
  {
    id: 8,
    img: "/images/festa-2015/concert2.jpg",
    description: "2 – BTS Global Official Fanclub A.R.M.Y 1st Muster (March 29, 2014 – Seoul, KOR) : The group’s first official fan meeting at Olympic Hall (capacity: 3,000), featuring live performances and interactions, solidifying their bond with early fans and establishing their fanclub identity."
  },
  {
    id: 9,
    img: "/images/festa-2015/concert3.webp",
    description: "3 – Fan Meeting Europe & South America (RWeL8?) (July 27 – August 1, 2014) : A promotional fan meeting tour that took BTS to Berlin, Stockholm, and São Paulo. These intimate gatherings helped expand their international fanbase and showcased their global ambition early on."
  },
  {
    id: 10,
    img: "/images/festa-2015/concert4.webp",
    description: "4 – The Red Bullet Tour – Episode II (October 17, 2014 – March 8, 2015 + Global leg from June 6, 2015) : The second episode of BTS’s “Live Trilogy” marked their first major Asian tour. It began in Seoul and continued to Tokyo, Manila, Singapore, Bangkok, and Taipei. A global extension followed starting June 6, with stops in Malaysia, Australia, North and South America."
  },
  {
    id: 11,
    img: "/images/festa-2015/concert5.jpg",
    description: "5 – Japan Tour “Wake Up: Open Your Eyes” (February 10–19, 2015 – Tokyo, Osaka, Nagoya, Fukuoka) : BTS’s first official solo tour in Japan following their growing popularity there. The tour attracted over 25,000 fans and included songs from their Japanese discography."
  },
  {
    id: 12,
    img: "/images/festa-2015/concert6.webp",
    description: "6 – BTS Begins Concert – Episode I (March 28–29, 2015 – Seoul, KOR) : The beginning of their concert trilogy, held at the Olympic Hall with a capacity of 6,500. The concert offered fans a close-up look at BTS’s journey, personal stories, and powerful performances."
  },
  {
    id: 13,
    img: "/images/festa-2015/festival1.jpg",
    description: "1 – Korea–China Song Festival (December 16, 2014 – Yeouido KBS Hall) : BTS performed at this international festival celebrating musical ties between Korea and China. Their participation helped increase their visibility across broader Asian markets."
  },
  {
    id: 14,
    img: "/images/festa-2015/festival2.jpg",
    description: "2 – SBS Gayo Daejejun (December 23, 2014) : A year-end Korean music festival where BTS showcased a dynamic stage performance among other top K-pop acts, gaining attention for their synchronized choreography and growing popularity."
  },
  {
    id: 15,
    img: "/images/festa-2015/festival3.jpg",
    description: "3 – M Countdown Christmas Special (December 25, 2014) : A festive special broadcast where BTS brought holiday energy to the stage, charming fans with themed performances and joyful presence."
  },
  {
    id: 16,
    img: "/images/festa-2015/festival4.jpg",
    description: "4 – KBS Gayo Daejejun (December 26, 2014) : Part of the major year-end music celebrations, BTS performed alongside prominent artists, marking their steady rise in the K-pop scene."
  },
  {
    id: 17,
    img: "/images/festa-2015/festival5.jpg",
    description: "5 – Seoul Countdown & MBC Gayo Daejejun (December 31, 2014) : To ring in the New Year, BTS appeared on both Seoul Countdown and MBC’s year-end show, ending 2014 with powerful stages and welcoming 2015 with growing recognition."
  },
  {
    id: 18,
    img: "/images/festa-2015/awards1.jpg",
    description: "1 – 4th Gaon Chart Music Awards – World Rookie Award (January 2015) : BTS were honored with the World Rookie Award, highlighting their early global impact and rising popularity across Asia and beyond. This marked a significant step in their international recognition."
  },
  {
    id: 19,
    img: "/images/festa-2015/awards2.jpg",
    description: "2 – 29th Golden Disc Awards – Bonsang for -Dark & Wild- (January 2015) : Their first full studio album Dark & Wild earned BTS a Bonsang (Main Prize), reflecting both critical acclaim and strong sales. It cemented their place as a serious act in the Korean music industry."
  },
  {
    id: 20,
    img: "/images/festa-2015/awards3.webp",
    description: "3 – 24th Seoul Music Awards – Bonsang (January 2015) : Continuing their momentum, BTS received another Bonsang at the prestigious Seoul Music Awards, proving their consistent growth and support from both fans and industry professionals."
  },
];

export default function Festa2015Page() {
   useEffect(() => {
      document.title = "Festa-2015";
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
            src="/images/festa-2015/banner.jpg"
            alt="FESTA Banner"
            className="festa-banner"
          />
          <div className="activities-list">
            <h2>2015 FESTA Schedule</h2>
            <ul>
              {activities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
  
        {/* Section 2: Festa Moments Slider */}
        <section className="festa-moments section">
          <h2>BTS Moments 2014-2015</h2>
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
  
  