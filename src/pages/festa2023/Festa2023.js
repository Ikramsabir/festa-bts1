import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Festa2023.css"; 

const activities = [
  "May 31 – 'Take Two' Digital Single Announcement",
  "June 2 – BTS ‘아포방포10 (Apobangpo 10)’ Project: Family Portrait",
  "June 3 – 방.방.콘 (BANGBANGCON) & BTS Practice Records",
  "June 7 – 지민 (Jimin) '편지 (Dear. ARMY)' Live Clip",
  "June 8 – BTS ‘아포방포10 (Apobangpo 10)’ Project: Photos & Video",
  "June 9 – 'Take Two' Release & June 13 Teaser Announcement",
  "June 10 – 슈취타 (Suchwita) Ep. 12: SUGA with 진 (Jin)",
  "June 11 – BTS Exhibition ‘오, 늘’ Film Camera Photos (B side version)",
  "June 12 – 'Arson (Rock ver.)' by j-hope",
  "June 13 – 'Take Two' Live Clip",
  "June 14 – 'Take Two' Live Clip Photo Sketch",
  "June 16 – 'Le Jazz de V' Live Clip",
  "June 17 – BTS 10th Anniversary @ 여의도 (Yeouido) & RM Live Stream & Fireworks Show Live Stream & R고 10은 쪽지시험"
];


const festaMomentsImages = [
  "/images/festa-2023/slider1.jpeg",
  "/images/festa-2023/slider2.jpeg",
  "/images/festa-2023/slider3.jpeg",
  "/images/festa-2023/slider4.jpeg",
  "/images/festa-2023/slider5.jpeg",
  "/images/festa-2023/slider6.jpeg",
  "/images/festa-2023/slider7.jpeg",
  "/images/festa-2023/slider8.jpeg",
  "/images/festa-2023/slider9.jpeg",
  "/images/festa-2023/slider10.jpeg",
  "/images/festa-2023/slider11.jpeg",
  "/images/festa-2023/slider12.jpeg",
  "/images/festa-2023/slider13.jpeg",
  "/images/festa-2023/slider14.jpeg",
  "/images/festa-2023/slider15.jpeg",
  "/images/festa-2023/slider16.jpeg",
  "/images/festa-2023/slider17.jpeg",
  "/images/festa-2023/slider18.jpeg",
  "/images/festa-2023/slider19.jpeg",
  "/images/festa-2023/slider20.jpeg",
  "/images/festa-2023/slider21.jpeg",
  "/images/festa-2023/slider22.jpeg",
  "/images/festa-2023/slider23.jpeg",
  "/images/festa-2023/slider24.jpeg",
  "/images/festa-2023/slider25.jpeg",
  "/images/festa-2023/slider26.jpeg",
  "/images/festa-2023/slider27.jpeg",
  "/images/festa-2023/slider28.jpeg",
  "/images/festa-2023/slider29.jpeg",
  "/images/festa-2023/slider30.jpeg",
  "/images/festa-2023/slider31.jpeg",
  "/images/festa-2023/slider32.jpeg",
  "/images/festa-2023/slider33.jpeg",
  "/images/festa-2023/slider34.jpeg",
  "/images/festa-2023/slider35.jpeg",
  "/images/festa-2023/slider36.jpeg",
  "/images/festa-2023/slider37.jpeg",
  "/images/festa-2023/slider38.jpeg",
  "/images/festa-2023/slider39.jpeg",
  "/images/festa-2023/slider40.jpeg",
  "/images/festa-2023/slider41.jpeg",
  "/images/festa-2023/slider42.jpeg",
  "/images/festa-2023/slider43.jpeg",
  "/images/festa-2023/slider44.jpeg",
  "/images/festa-2023/slider45.jpeg",
  "/images/festa-2023/slider46.jpeg",
  "/images/festa-2023/slider47.jpeg",
  "/images/festa-2023/slider48.jpeg",
  "/images/festa-2023/slider49.jpeg",
  "/images/festa-2023/slider50.jpeg",
];

const albums = [
  {
    id: 1,
    img: "/images/festa-2023/album1.jpg",
    description: "1 – “Jack In The Box” (July 15, 2022) : A solo album by j-hope. It explores deep themes like ambition, identity, and personal growth through tracks like “MORE” and “Arson,” marking a darker and more experimental sound."
  },
  {
    id: 2,
    img: "/images/festa-2023/album2.jpg",
    description: "2 – “Indigo” (December 2, 2022) : RM’s first official solo album. A personal, reflective work blending hip-hop, R&B, and indie influences. It features collaborations with artists like Erykah Badu and Anderson .Paak."
  },
  {
    id: 3,
    img: "/images/festa-2023/album3.jpg",
    description: "3 – “FACE” (March 24, 2023) : Jimin’s debut solo album. It explores themes of vulnerability and self-discovery. Its lead single “Like Crazy” made history as the first No.1 on Billboard Hot 100 by a Korean soloist."
  },
  {
    id: 4,
    img: "/images/festa-2023/album4.jpg",
    description: "4 – “D-DAY” (April 21, 2023) : SUGA’s (under the name Agust D) full-length solo album. A raw, philosophical album that wraps up his Agust D trilogy, featuring tracks like “Haegeum” and collaborations with IU and the late Ryuichi Sakamoto."
  },
  {
    id: 5,
    img: "/images/festa-2023/album5.jpg",
    description: "1 – “The Astronaut” (October 28, 2022) : Jin’s first solo single, released as a farewell gift to fans before his military enlistment. Co-written with Coldplay’s Chris Martin, the song conveys warmth, gratitude, and emotional depth."
    
  },
  {
    id: 6,
    img: "/images/festa-2023/album6.jpg",
    description: "2 – “Dreamers” (November 20, 2022) : Jungkook’s inspirational anthem for the 2022 FIFA World Cup in Qatar. Performed at the opening ceremony, it celebrates hope and unity on a global stage."
  },
   {
    id: 7,
    img: "/images/festa-2023/album7.jpg",
    description: "3 – “Take Two” – BTS (June 9, 2023): A celebratory digital single released for BTS’s 10th anniversary (FESTA), loaded with heartfelt gratitude and memories crafted for ARMY."
  },
  {
    id: 8,
    img: "/images/festa-2023/collabe1.jpg",
    description: "1 - “Left and Right” – Charlie Puth ft. Jungkook (June 24, 2022) : A catchy pop duet where Jungkook showcases his vocals alongside Charlie Puth, expressing lingering thoughts about a past lover."
  },
  {
    id: 9,
    img: "/images/festa-2023/collabe2.webp",
    description: "2 – ““Bad Decisions” – Benny Blanco, BTS, Snoop Dogg (August 5, 2022) : A fun and upbeat collaboration where BTS vocal line joins the pop producer and rapper for a playful track about making impulsive romantic choices."
  },
  {
    id: 10,
    img: "/images/festa-2023/collabe3.jpg",
    description: "3 – “Rush Hour” – Crush ft. J-Hope (September 22, 2022) : A funky, groove-filled track where J-Hope adds a rap verse that blends seamlessly with Crush's R&B style."
  },
  {
    id: 11,
    img: "/images/festa-2023/collabe4.jpg",
    description: "4 – “That That” – PSY ft. SUGA (April 29, 2022 but still actively promoted in mid-2022) : A vibrant and comedic song co-produced by SUGA, who also appears in the MV and delivers a memorable rap part."
  },
  {
    id: 12,
    img: "/images/festa-2023/collabe5.jpg",
    description: "5 – “VIBE” – Taeyang ft. Jimin (January 13, 2023) : A smooth and sultry R&B track where Jimin harmonizes beautifully with BIGBANG’s Taeyang, blending their distinct vocal colors."
  },
  {
    id: 13,
    img: "/images/festa-2023/collabe6.webp",
    description: "6 – “Smoke Sprite” – So!YoON! ft. RM (March 14, 2023) : An atmospheric rock/alternative track where RM contributes emotional and poetic verses."
  },
  {
    id: 14,
    img: "/images/festa-2023/collabe7.jpg",
    description: "7 - “SEXY NUKIM” – Balming Tiger ft. RM (September 1, 2022) : An experimental hip-hop track where RM features with a confident and quirky rap performance."
  },
  {
    id: 15,
    img: "/images/festa-2023/collabe8.webp",
    description: "8 - “SUGA’s collab with Halsey – Lilith (Diablo IV Anthem)” (June 5, 2023) : A dark and cinematic remix where SUGA adds a powerful rap verse to Halsey’s original song for the game “Diablo IV.”"
  },
  {
    id: 16,
    img: "/images/festa-2023/concert1.webp",
    description: "1 – “Yet To Come in Busan” (October 15, 2022) : A large-scale free concert by BTS in Busan, South Korea, held to support the city’s bid for World Expo 2030. It marked the group’s final full-member performance before entering their Chapter 2 phase and military enlistments."
  },
  {
    id: 17,
    img: "/images/festa-2023/concert2.jpg",
    description: "2 – “Lollapalooza” – j-hope (July 31, 2022) : j-hope became the first Korean artist to headline the main stage of the iconic Lollapalooza festival in Chicago. Performing tracks from Jack In The Box, he delivered a powerful solo set that earned the nickname “Hobipalooza” from fans."
  },
  {
    id: 18,
    img: "/images/festa-2023/concert3.jpg",
    description: "3 – “SUGA | Agust D – D-DAY Tour” (Starting April 26, 2023) : SUGA embarked on his first solo world tour under his Agust D persona, promoting the D-DAY album. The tour covered major cities across the U.S. and Asia, showcasing an intimate yet intense performance style unlike BTS’s group shows."
  },
   {
    id: 19,
    img: "/images/festa-2023/festival1.jpg",
    description: "1 – “The Astronaut Live with Coldplay” – Jin (October 28, 2022) : Jin performed his debut solo single live with Coldplay in Argentina, delivering an emotional farewell before enlistment. The performance was part of Coldplay’s world tour."
  },
   {
    id: 20,
    img: "/images/festa-2023/festival2.webp",
    description: "2  – “FIFA World Cup Opening Ceremony” – Jungkook (November 20, 2022) : Jungkook performed Dreamers live at the opening of the 2022 World Cup in Qatar, becoming the first Korean artist to appear at such a global event."
  },
   {
    id: 21,
    img: "/images/festa-2023/festival3.webp",
    description: "3 – “MAMA Awards 2022” – j-hope solo appearance (November 29, 2022): Representing BTS, j-hope attended the Mnet Asian Music Awards solo to accept major awards and deliver a heartfelt message on behalf of the group."
  },
   {
    id: 22,
    img: "/images/festa-2023/festival4.jpeg",
    description: "4 – “New Year’s Rockin’ Eve” – j-hope (December 31, 2022): j-hope appeared on the American TV special with pre-recorded performances of = (Equal Sign) and Chicken Noodle Soup, celebrating New Year with global fans."
  },
   {
    id: 23,
    img: "/images/festa-2023/festival5.jpg",
    description: "5 – “Indigo Listening Party – RM” (December 2, 2022): RM hosted an intimate listening party in Seoul to celebrate the release of his debut solo album Indigo. The event gathered fellow artists, media, and friends, offering a personal insight into the themes and inspirations behind the album."
  },
   {
    id: 24,
    img: "/images/festa-2023/festival6.webp",
    description: "6 – “FACE Promotion – Jimin on The Tonight Show” (March 2023): Jimin performed Like Crazy on The Tonight Show Starring Jimmy Fallon, marking his solo debut on American TV and promoting his album FACE."
  },
  {
    id: 25,
    img: "/images/festa-2023/festival7.jpg",
    description: "7 – “The Tonight Show Starring Jimmy Fallon” (May 1, 2023) : SUGA made his solo debut on American late-night television, performing “Haegeum” and participating in interviews and comedy segments. This appearance expanded his global solo presence significantly."
  },
  {
    id: 26,
    img: "/images/festa-2023/awards1.webp",
    description: "1 – “MAMA Awards 2022” – BTS (November 29–30, 2022) : BTS won six awards, including the Platinum Award and the Four Daesangs: Artist of the Year, Album of the Year, Song of the Year, and Worldwide Icon of the Year."
  },
  {
    id: 27,
    img: "/images/festa-2023/awards2.jpeg",
    description: "2 – “iHeartRadio Music Awards” – BTS (March 2023) : BTS won Best Music Video for “Yet To Come” and Best Fan Army."
  },
  {
    id: 28,
    img: "/images/festa-2023/awards3.png",
    description: "3 – “Circle Chart Music Awards” – BTS (February 18, 2023) : BTS won five awards, including Global Digital Music – June for 'Yet To Come' and Physical Album – 3Q for Proof."
  },
  {
    id: 29,
    img: "/images/festa-2023/awards4.jpg",
    description: "4 – “Japan Gold Disc Awards” – BTS (2023 Ceremony) : BTS won Best Artist in Asia, Best 3 Albums (Asia) for Proof, and Song of the Year by Download (Asia) for 'Yet To Come'."
  },
  {
    id: 30,
    img: "/images/festa-2023/awards5.png",
    description: "5 – “Melon Music Awards 2022” – BTS (November 26, 2022) : BTS won Top 10 Artists Bonsang, Best Male Group, KakaoBank Album of the Year, and Record of the Year for Proof."
  },
  {
    id: 31,
    img: "/images/festa-2023/awards6.jpg",
    description: "1 – RM – “Indigo” (Album) • Best Musician – Korean Hip-hop Awards 2023 • Best Collaboration (“Closer” ft. Paul Blanco, Mahalia) – Circle Chart Music Awards / 2 – J-Hope – “Jack In The Box” (Album) • Bonsang – Golden Disc Awards 2023 • Best Male Artist – Korean Hip-hop Awards (Nominated) • Most Anticipated Artist – The Fact Music Awards"
  },
  {
    id: 32,
    img: "/images/festa-2023/awards7.png",
    description: "3 – “The Astronaut Single Awards” Top Solo Artist – Circle Chart Music Awards Best Vocal Solo – (Nominated)"
  },
  {
    id: 33,
    img: "/images/festa-2023/awards8.jpg",
    description: "4 – “Left and Right (with Charlie Puth)” Awards Collaboration of the Year – MAMA 2022 Best Music Video – (Nominated)"
  },
  {
    id: 34,
    img: "/images/festa-2023/awards9.jpg",
    description: "5 – “Christmas Tree OST” Awards Best OST – Asian Artist Awards 2022"
  },
  {
    id: 35,
    img: "/images/festa-2023/awards10.jpeg",
    description: "6 – SUGA (Agust D) Awards Best Producer – MMA 2022 Artist of the Year (Solo) – Genie Music Awards (Nominated)"
  },
  {
    id: 36,
    img: "/images/festa-2023/awards11.jpg",
    description: "7 – “FACE Album Awards” Best Solo Artist – Circle Chart Awards Song of the Year – March (“Like Crazy”) Fan Favorite Award"
  },
];

export default function Festa2023Page() {
   useEffect(() => {
      document.title = "Festa-2023";
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
        <img src="/images/festa-2023/10th.jpg"
        alt="FESTA 10th"
        className="festa-10th"/>
        {/* Section 1: Activities */}
        <section className="festa-activities section">
          <img
            src="/images/festa-2023/banner.jpg"
            alt="FESTA Banner"
            className="festa-banner"
          />
          <div className="activities-list">
            <h2>2023 FESTA Schedule</h2>
            <ul>
              {activities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
  
        {/* Section 2: Festa Moments Slider */}
        <section className="festa-moments section">
          <h2>BTS Moments 2022-2023</h2>
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
  
  
