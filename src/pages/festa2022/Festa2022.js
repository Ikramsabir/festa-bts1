import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Festa2022.css";

const activities = [
  "June 3 – OPENING Ceremony: Family Portrait Pt.1 & BTS Practice Record: 2013",
  "June 4 – BTS Practice Records: 2014, 2015 & 2016",
  "June 5 – BTS Selfie Collection ‘21/‘22 & BTS Practice Record: 2017",
  "June 7 – BTS Practice Records: 2018 & 2019",
  "June 9 – Family Portrait Pt. 2, Family Portrait Pt. 3 & 2022 FESTA Family Portrait Shoot",
  "June 11 – BTS Practice Records: 2020, 2021 & 2022",
  "June 13 – Song for ARMY: 'My You' by Jungkook & BTS 'PROOF' Live",
  "June 14 – 2022 The REAL Bangtan Dinner (찐 방탄회식)",
];


const festaMomentsImages = [
  "/images/festa-2022/slider1.jpg",
  "/images/festa-2022/slider2.jpg",
  "/images/festa-2022/slider3.jpg",
  "/images/festa-2022/slider4.jpg",
  "/images/festa-2022/slider5.jpg",
  "/images/festa-2022/slider6.jpg",
  "/images/festa-2022/slider7.jpg",
  "/images/festa-2022/slider8.jpg",
  "/images/festa-2022/slider9.jpg",
  "/images/festa-2022/slider10.jpg",
  "/images/festa-2022/slider11.jpg",
  "/images/festa-2022/slider12.jpg",
  "/images/festa-2022/slider13.jpg",
  "/images/festa-2022/slider14.jpg",
  "/images/festa-2022/slider15.jpg",
  "/images/festa-2022/slider16.jpg",
  "/images/festa-2022/slider17.jpg",
  "/images/festa-2022/slider18.jpg",
  "/images/festa-2022/slider19.jpg",
  "/images/festa-2022/slider20.jpg",
  "/images/festa-2022/slider21.jpg",
  "/images/festa-2022/slider22.jpg",
  "/images/festa-2022/slider23.jpg",
  "/images/festa-2022/slider24.jpg",
  "/images/festa-2022/slider25.jpg",
  "/images/festa-2022/slider26.jpg",
  "/images/festa-2022/slider27.jpg",
  "/images/festa-2022/slider28.jpg",
  "/images/festa-2022/slider29.jpg",
  "/images/festa-2022/slider30.jpg",
];

const albums = [
  {
    id: 1,
    img: "/images/festa-2022/album1.jpg",
    description: "1 – Butter (CD Single) – July 9, 2021 : A special CD single featuring two main tracks : “Butter” (originally released digitally on May 21, 2021) “Permission to Dance” (first released with this CD) Also includes instrumental versions of both songs.The single continued BTS’s global chart domination and marked another milestone in their international success."
  },
  {
    id: 2,
    img: "/images/festa-2022/album2.jpg",
    description: "2 – Proof (Anthology Album) – June 10, 2022 : An anthology album celebrating BTS’s 9th anniversary. It includes: Their biggest title tracks Three new songs: “Yet To Come (The Most Beautiful Moment)”  “Run BTS” “For Youth” Previously unreleased demos and deep cuts This album reflects on BTS’s journey and serves as a closing chapter before entering a new phase with more solo projects."
  },
  {
    id: 3,
    img: "/images/festa-2022/album3.jpeg",
    description: "1 – RM × eAeon – “Don’t” (April 30, 2021) : RM is featured on “Don’t,” the title track from Korean artist eAeon’s second studio album Fragile. He contributed emotionally-charged Korean rap and helped co-write the song."
  },
  {
    id: 4,
    img: "/images/festa-2022/album4.webp",
    description: "2 – Suga (as producer) – “Over the Horizon 2021” (August 11, 2021) : Suga reimagined and produced Samsung’s signature digital theme “Over the Horizon” for 2021. This instrumental collaboration highlights his production skills."
  },
  {
    id: 5,
    img: "/images/festa-2022/album5.jpeg",
    description: "3 – BTS ft. Coldplay – “My Universe” (September 24, 2021) : A full-group global collaboration, “My Universe” was released as a joint single with Coldplay. Sung in both English and Korean, it soared to #1 on the Billboard Hot 100."
  },
  {
    id: 6,
    img: "/images/festa-2022/album6.jpg",
    description: "4 – Jin – “Yours” (November 7, 2021) : Jin performed “Yours,” a solo track from the Jirisan drama OST. This was his first official solo collaboration outside the group project ."
  },
  {
    id: 7,
    img: "/images/festa-2022/album7.jpg",
    description: "5 – Jin – “Super Tuna” (December 4, 2021) : Jin released “Super Tuna” as a special birthday gift video on BANGTANTV’s YouTube channel. This trot-style, playful solo track quickly went viral among fans despite not being officially available on music streaming platforms."
  },
  {
    id: 8,
    img: "/images/festa-2022/concert1.jpeg",
    description: "1 -  Virtual Concert: 2021 Muster “Sowoozoo” - Dates: June 13–14, 2021 A two-day online fan meeting celebrating BTS's 8th anniversary, drawing approximately 1.33 million viewers from over 195 countries."
  },
  {
    id: 9,
    img: "/images/festa-2022/concert2.jpg",
    description: "2 -  Permission to Dance on Stage (Online & In-Person) - Online: October 24, 2021 – BTS performed at a virtual concert from Jamsil Olympic Stadium, featuring energetic sets including “ON”, “Blue & Grey”, and “Black Swan”."
  },
  {
    id: 10,
    img: "/images/festa-2022/concert3.jpg",
    description: "3 - Permission to Dance on Stage (Online & In-Person) In-Person: November – December 2021 – Marked their return to live stadium concerts in the US at SoFi Stadium in Los Angeles (Nov 27–28, Dec 1–2, 2021)"
  },
  {
    id: 11,
    img: "/images/festa-2022/festival1.jpg",
    description: "1 – The Tonight Show Starring Jimmy Fallon (July 13–14, 2021): BTS performed “Permission to Dance” and “Butter” with high-energy visuals and participated in interview segments with Jimmy Fallon."
  },
  {
    id: 12,
    img: "/images/festa-2022/festival2.png",
    description: "2 – FNS Summer Song Festival (Japan) (July 14, 2021): BTS appeared virtually and performed “Butter” for the Japanese audience on Fuji TV."
  },
  {
    id: 13,
    img: "/images/festa-2022/festival3.jpg",
    description: "3 – UN SDG Moment at the United Nations Headquarters (September 20, 2021): As Special Presidential Envoys, BTS addressed the UN, speaking about youth empowerment and performing “Permission to Dance” in a pre-recorded segment."
  },
  {
    id: 14,
    img: "/images/festa-2022/festival4.jpg",
    description: "4 – Global Citizen Live – Seoul (September 25, 2021): BTS contributed to the global 24-hour concert aimed at climate change and vaccine equity, performing “Permission to Dance” and “Butter.”"
  },
  {
    id: 15,
    img: "/images/festa-2022/festival5.webp",
    description: "5 – The Fact Music Awards 2021 (October 2, 2021): BTS performed virtually and won multiple awards, including Daesang (Grand Prize)."
  },
  {
    id: 16,
    img: "/images/festa-2022/festival6.jpg",
    description: "6 – 2021 American Music Awards (AMAs) (November 21, 2021): BTS performed “My Universe” with Coldplay and “Butter.” They also won Artist of the Year, making history as the first Asian act to do so."
  },
  {
    id: 17,
    img: "/images/festa-2022/festival7.webp",
    description: "7 – iHeartRadio Jingle Ball Tour – Los Angeles (December 3, 2021): BTS performed “Dynamite” and “Butter” live in front of an American audience as part of the holiday music tour."
  },
  {
    id: 18,
    img: "/images/festa-2022/festival8.jpg",
    description: "8 – 2022 Grammy Awards (64th Annual GRAMMYs) (April 3, 2022): BTS performed a spy-themed version of “Butter” and were nominated for Best Pop Duo/Group Performance."
  },
  {
    id: 19,
    img: "/images/festa-2022/festival9.jpg",
    description: "9 – White House Visit with President Joe Biden (May 31, 2022): BTS visited the White House to speak out against anti-Asian hate crimes and promote inclusivity and diversity."
  },
  {
    id: 20,
    img: "/images/festa-2022/awards1.jpg",
    description: "1 – MTV Video Music Awards (VMAs) 2021 (September 12, 2021): Group of the Year ,Best K-Pop – “Butter” ,Song of Summer – “Butter”."
  },
  {
    id: 21,
    img: "/images/festa-2022/awards2.jpg",
    description: "2 – Asia Artist Awards 2021 (December 2, 2021): Artist of the Year (Daesang) ,U+ Idol Live Popularity Award."
  },
  {
    id: 22,
    img: "/images/festa-2022/awards3.jpg",
    description: "3  – The Fact Music Awards 2021 (October 2, 2021): Daesang (Grand Prize) ,Listener’s Choice ,Artist of the Year ,Fan N Star Most Voted (Singer Category)."
  },
  {
    id: 23,
    img: "/images/festa-2022/awards4.jpg",
    description: "4 – American Music Awards 2021 (AMAs) (November 21, 2021): Artist of the Year ,Favorite Pop Duo or Group ,Favorite Pop Song – “Butter”."
  },
  {
    id: 24,
    img: "/images/festa-2022/awards5.webp",
    description: "5 – People’s Choice Awards 2021 (December 7, 2021): The Group of 2021 ,The Song of 2021 – “Butter” ,The Music Video of 2021 – “Butter” ,The Concert Tour of 2021 – Permission to Dance On Stage."
  },
  {
    id: 25,
    img: "/images/festa-2022/awards6.jpg",
    description: "6 – Golden Disc Awards 2022 (January 8, 2022): Digital Song Bonsang – “Butter” ,Album Bonsang – “BE” ,Seezn Golden Disc Popularity Award."
  },
  {
    id: 26,
    img: "/images/festa-2022/awards7.webp",
    description: "7 – Seoul Music Awards 2022 (January 23, 2022): Main Award (Bonsang) ,Best Album – “BE” ,WhosFandom Award"
  },
  {
    id: 27,
    img: "/images/festa-2022/awards8.jpg",
    description: "8 – Korea First Brand Awards 2022 (January 13, 2022): Male Idol of the Year ,Artist of the Year (Japan)."
  },
  {
    id: 28,
    img: "/images/festa-2022/awards9.jpg",
    description: "9 – iHeartRadio Music Awards 2022 (March 22, 2022): Best Fan Army – ARMY ,Best Music Video – “Butter”."
  },
  {
    id: 29,
    img: "/images/festa-2022/awards10.webp",
    description: "10 – Nickelodeon Kids’ Choice Awards 2022 (April 9, 2022): Favorite Music Group."
  },
  {
    id: 30,
    img: "/images/festa-2022/awards11.jpg",
    description: "11 - Mnet Asian Music Awards (MAMA) 2021 (December 11, 2021): One of Asia’s most prestigious music award shows, MAMA 2021 honored BTS with nine awards, including Artist of the Year, Song of the Year (“Butter”), Album of the Year (BE), and Worldwide Icon of the Year. BTS also delivered a strong presence despite their performance being virtual, showcasing their continued dominance in the K-pop scene and global music industry."
  },
];

export default function Festa2022Page() {
   useEffect(() => {
      document.title = "Festa-2022";
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
            src="/images/festa-2022/banner.jpg"
            alt="FESTA Banner"
            className="festa-banner"
          />
          <div className="activities-list">
            <h2>2022 FESTA Schedule</h2>
            <ul>
              {activities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
  
        {/* Section 2: Festa Moments Slider */}
        <section className="festa-moments section">
          <h2>BTS Moments 2021-2022</h2>
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
  
  