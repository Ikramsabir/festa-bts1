import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Festa2025.css"; 

const festaMomentsImages = [
  "/images/festa-2025/slider1.jpeg",
  "/images/festa-2025/slider2.jpeg",
  "/images/festa-2025/slider3.jpeg",
  "/images/festa-2025/slider4.jpeg",
  "/images/festa-2025/slider5.jpeg",
  "/images/festa-2025/slider6.jpeg",
  "/images/festa-2025/slider7.jpeg",
  "/images/festa-2025/slider8.jpeg",
  "/images/festa-2025/slider9.jpeg",
  "/images/festa-2025/slider10.jpeg",
  "/images/festa-2025/slider11.jpeg",
  "/images/festa-2025/slider12.jpeg",
  "/images/festa-2025/slider13.jpeg",
  "/images/festa-2025/slider14.jpeg",
  "/images/festa-2025/slider15.jpeg",
  "/images/festa-2025/slider16.jpeg",
  "/images/festa-2025/slider17.jpeg",
  "/images/festa-2025/slider18.jpeg",
  "/images/festa-2025/slider19.jpeg",
  "/images/festa-2025/slider20.jpeg",
  "/images/festa-2025/slider21.jpeg",
  "/images/festa-2025/slider22.jpeg",
  "/images/festa-2025/slider23.jpeg",
  "/images/festa-2025/slider24.jpeg",
  "/images/festa-2025/slider25.jpeg",
  "/images/festa-2025/slider26.jpeg",
  "/images/festa-2025/slider27.jpeg",
  "/images/festa-2025/slider28.jpeg",
  "/images/festa-2025/slider29.jpeg",
  "/images/festa-2025/slider30.jpeg",
  "/images/festa-2025/slider31.jpeg",
  "/images/festa-2025/slider32.jpeg",
  "/images/festa-2025/slider33.jpeg",
  "/images/festa-2025/slider34.jpeg",
  "/images/festa-2025/slider35.jpeg",
  "/images/festa-2025/slider36.jpeg",
  "/images/festa-2025/slider37.jpeg",
  "/images/festa-2025/slider38.jpeg",
  "/images/festa-2025/slider39.jpeg",
  "/images/festa-2025/slider40.jpeg",
  "/images/festa-2025/slider41.jpeg",
  "/images/festa-2025/slider42.jpeg",
  "/images/festa-2025/slider43.jpeg",
  "/images/festa-2025/slider44.jpeg",
  "/images/festa-2025/slider45.jpeg",
  "/images/festa-2025/slider46.jpeg",
  "/images/festa-2025/slider47.jpeg",
  "/images/festa-2025/slider48.jpeg",
  "/images/festa-2025/slider49.jpeg",
  "/images/festa-2025/slider50.jpeg",
  "/images/festa-2025/slider51.jpeg",
  "/images/festa-2025/slider52.jpeg",
  "/images/festa-2025/slider53.jpeg",
  "/images/festa-2025/slider54.jpeg",
  "/images/festa-2025/slider55.jpeg",
  "/images/festa-2025/slider56.jpeg",
  "/images/festa-2025/slider57.jpeg",
  "/images/festa-2025/slider58.jpeg",
  "/images/festa-2025/slider59.jpeg",
  "/images/festa-2025/slider60.jpeg",
  "/images/festa-2025/slider61.jpeg",
  "/images/festa-2025/slider62.jpeg",
  "/images/festa-2025/slider63.jpeg",
  "/images/festa-2025/slider64.jpeg",
  "/images/festa-2025/slider65.jpeg",
  "/images/festa-2025/slider66.jpeg",
  "/images/festa-2025/slider67.jpeg",
  "/images/festa-2025/slider68.jpeg",
  "/images/festa-2025/slider69.jpeg",
]

const albums = [
  {
    id: 1,
    img: "/images/festa-2025/album1.jpg",
    description: "1 – Jimin – “Muse” (July 19, 2024) : Jimin’s second studio album, in Korean and English, composed of 7 tracks including the singles “Smeraldo Garden Marching Band” (pre-release) and “Who”. It reached No. 2 in Korea and No. 3 in Japan."
  },
  {
    id: 2,
    img: "/images/festa-2025/album2.jpg",
    description: "2 – Jin – “Happy” (November 15, 2024) : Jin’s first solo EP, featuring 6 songs (including “Running Wild”) and collaborations with Gary Barlow, Wendy (Red Velvet), and Taka (One OK Rock)."
  },
  {
    id: 3,
    img: "/images/festa-2025/album3.jpg",
    description: "3 – Jin – “Echo” (May 16, 2025) : Jin’s second EP, with 7 tracks including the single “Don’t Say You Love Me”. It features a collaboration with Yena and marks his return after the Happy EP."
  },
  {
    id: 4,
    img: "/images/festa-2025/album4.jpg",
    description: "1 – Jin – “Super Tuna (2024 Version)” (April 10, 2024) : Jin released a refreshed version of “Super Tuna” with updated sounds and energy. The catchy single kept its fun vibe and gained popularity again on social media, especially TikTok. This version highlights Jin’s charm as a solo artist outside BTS."
  },
  {
    id: 5,
    img: "/images/festa-2025/album5.jpg",
    description: "2 – V – “Winter Ahead” (November 29, 2024) : A jazzy, emotional winter duet with Park Hyo Shin, this standalone single expresses the longing and warmth of the season. It was released in multiple versions including a “Silent Carol” and a trio jazz rendition."
  },
  {
    id: 6,
    img: "/images/festa-2025/album6.jpg",
    description: "3 – J-Hope – “Sweet Dreams” (March 7, 2025) : J-Hope’s first post-military release, this smooth R&B single featuring Miguel blends Korean and English lyrics with a dreamy vibe. The single gained attention for its international collaboration and mellow energy."
  },
  {
    id: 7,
    img: "/images/festa-2025/album7.jpg",
    description: "4 – J-Hope – “Mona Lisa” (March 21, 2025) : A bold and stylish hip-hop/R&B track, independently released following a surprise stage performance in New York. The song was praised for its artistic music video and introspective lyrics."
  },
  {
    id: 8,
    img: "/images/festa-2025/album8.jpg",
    description: "5 – J-Hope – “Killin’ It Girl” (June 13, 2025) : A high-energy collaboration with rapper GloRilla, this track kicks off his upcoming album Charm of HOPE. The single debuted on Billboard Hot 100 and Global 200, earning widespread acclaim for its charisma and beat."
  },
   {
    id: 9,
    img: "/images/festa-2025/collabe1.jpg",
    description: "1 – Megan Thee Stallion feat. RM – “Neva Play” (September 6, 2024) : A high-energy collaboration between Megan Thee Stallion and RM of BTS, blending hip-hop and K-rap elements. The song was released as the lead single from Megan's deluxe album Megan: Act II. It also serves as the official theme song for WWE SmackDown on USA Network. The track debuted at No. 36 on the Billboard Hot 100, marking RM's second solo entry on the chart. "
  },
   {
    id: 10,
    img: "/images/festa-2025/collabe2.jpg",
    description: "2 - V – “White Christmas” (with Bing Crosby) (December 6, 2024) : A unique, era-bridging collaboration where BTS’s V joins legendary singer Bing Crosby’s classic vocals in a reimagined version of the timeless holiday song “White Christmas.” Released as a standalone single with physical editions on CD and vinyl, this track blends nostalgic charm with modern warmth, connecting generations through music."
  },
   {
    id: 11,
    img: "/images/festa-2025/collabe3.jpg",
    description: "3 – Don Toliver & Speedy (feat. j‑hope & Pharrell Williams) – “LV Bag” (February 21, 2025) : A luxury-themed standalone single credited to Don Toliver and Speedy (his LV bag), featuring Pharrell Williams and j‑hope. It debuted during Louis Vuitton's Paris Fashion Week Fall/Winter 2025 show and was officially released on February 21, 2025 at 2 p.m. KST. The track blends melodic trap with fashion-inspired lyrics and international flair ."
  },
   {
    id: 12,
    img: "/images/festa-2025/collabe4.jpg",
    description: "4 – RM x Tablo – “Stop the Rain” (May 2, 2025) : A profound digital collaboration between RM and Epik High’s Tablo, released as a standalone hip-hop single. The lyrics explore grief, trauma, and emotional healing, symbolizing the journey of youth surviving storms of life. Released globally at 1 p.m. KST (May 1 at 9 p.m. PT) ."
  },
  {
    id: 13,
    img: "/images/festa-2025/concert.jpg",
    description: "- Hope on the Stage Tour was the first worldwide concert tour by South Korean rapper J-Hope, supporting his debut studio album Jack in the Box and extended play Hope on the Street Vol. 1. The tour began on February 28, 2025, in Seoul, and ended on June 14, 2025, in Goyang."
  },
  {
    id: 14,
    img: "/images/festa-2025/festival1.webp",
    description: "1 – Documentary Release: Happy (EP) (November 15, 2024) : Jin released his debut solo EP Happy, accompanied by a documentary that chronicles his journey leading up to the album, highlighting behind-the-scenes, creative process, and personal reflections."
  },
  {
    id: 15,
    img: "/images/festa-2025/festival2.jpg",
    description: "2 – Netflix Variety Show: Kian’s Bizarre B&B (April 2025) : Jin appeared in multiple episodes of this Netflix variety show alongside comedian Kian84, showing his playful side and daily life moments ."
  },
  {
    id: 16,
    img: "/images/festa-2025/festival3.webp",
    description: "3 – The Tonight Show Starring Jimmy Fallon – Guest Appearance (May 21, 2025) : Jin made his first solo U.S. TV appearance, performing 'Don’t Say You Love Me' and participating in a playful interview, even turning the tables by interviewing Jimmy Fallon himself."
  },
  {
    id: 17,
    img: "/images/festa-2025/festival4.jpg",
    description: "4 – Documentary & Soundtrack: Hope on the Street Vol. 1 (March 28–29, 2024) : J-Hope released a six-part docuseries and companion EP that explore his origins as a dancer and personal artistry. Though slightly before June 2024, it remains relevant to his solo trajectory in the period that followed ."
  },
  {
    id: 18,
    img: "/images/festa-2025/festival5.webp",
    description: "5 – Radio Interview: Apple Music 1 with Zane Lowe (Early 2025):J‑Hope discussed his solo journey, new music, and first-ever solo world tour “Hope on the Stage” in depth during this high-profile interview  BTS Bangtan Archive +2."
  },
  {
    id: 19,
    img: "/images/festa-2025/festival6.webp",
    description: "6 – Television Guest Appearance: Close Friends with Lee Hyun (November 25, 2024) : J-Hope appeared on MBC FM4U’s radio-variety show as a special guest, sharing personal stories and engaging in interactive segments ."
  },
  {
    id: 20,
    img: "/images/festa-2025/festival7.jpg",
    description: "7 – The Tonight Show Starring Jimmy Fallon – Performance & Interview (March 11, 2025) : J‑Hope performed “Sweet Dreams” featuring Miguel and invited the audience into his new sonic era during his U.S. TV appearance."
  },
  {
    id: 21,
    img: "/images/festa-2025/festival8.png",
    description: "8 - Documentary Premiere: I Am Still (September 18, 2024) : Jungkook’s personal documentary was released in theaters across 120 territories, chronicling his evolving identity as a solo artist under the name Golden ."
  },
  {
    id: 22,
    img: "/images/festa-2025/awards1.jpeg",
    description: "1 – RM – Best Solo Artist – American Music Awards (AMA) 2025 : RM was honored as Best Solo Artist, marking a major milestone in his individual career and recognition on the global stage."
  },
  {
    id: 23,
    img: "/images/festa-2025/awards2.jpg",
    description: "2 – Jimin – Best Male Artist – MAMA 2024 (December 2024) : Jimin took home the Best Male Artist award, celebrated for his vocal and performance skills."
  },
  {
    id: 24,
    img: "/images/festa-2025/awards3.jpeg",
    description: "3 – Jimin – Artist of the Year – DABEME Music Awards 2025 : Jimin received the top honor of Artist of the Year, solidifying his position as one of the most influential K-pop soloists globally."
  },
  {
    id: 25,
    img: "/images/festa-2025/awards4.jpg",
    description: "4 – Jungkook – Most Tweeted Soloist – Twitter Trends Awards 2025 : Jungkook was named the Most Tweeted Soloist, reflecting his incredible global popularity and fan engagement across social media."
  },
  {
    id: 26,
    img: "/images/festa-2025/awards5.webp",
    description: "5 – Jin – Best Solo Comeback – K-STAR Awards 2025 : Jin was awarded for his emotional and impactful return as a soloist after his military service, touching fans around the world."
  },
  {
    id: 27,
    img: "/images/festa-2025/awards6.jpeg",
    description: "6  – Jimin – Album of the Year (Muse) – Mubeat Awards 2024 : Jimin’s album Muse was celebrated as Album of the Year, showcasing his artistic depth and vocal excellence."
  },
  {
    id: 28,
    img: "/images/festa-2025/awards7.jpg",
    description: "7 – Jimin – K-Pop Song of the Year ('Who') – iHeartRadio Music Awards 2025 : Jimin’s hit track 'Who' was recognized as K-Pop Song of the Year, underlining his solo success beyond Korea."
  },
  {
    id: 29,
    img: "/images/festa-2025/awards8.jpeg",
    description: "8 – V – Best Idol Actor – Pop-K Awards 2025 : V was honored as Best Idol Actor, acknowledging his outstanding performances in acting alongside his music career."
  },
  {
    id: 30,
    img: "/images/festa-2025/awards9.webp",
    description: "9 – RM – Best Music Video ('LOST!') – British Arrows Awards 2025 : RM won Best Music Video for LOST!, praised for its creative direction and impactful visuals."
  },
  {
    id: 31,
    img: "/images/festa-2025/awards10.jpg",
    description: "10 – Jimin – Best K-Pop Dancer – Shining Awards 2025 : Jimin received the award for Best K-Pop Dancer, reinforcing his title as the king of stage presence and movement."
  },
  {
    id: 32,
    img: "/images/festa-2025/awards11.jpg",
    description: "11 – J-Hope – Best Performance – Fact Music Awards (Spring) 2025 : J-Hope earned Best Performance for his solo stage, proving his mastery in live dance and music delivery."
  },
];


export default function Festa2025Page() {
  useEffect(() => {
    document.title = "Festa-2025";
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
           {/* Section 1: Banner and Title */}
      <section className="festa-activities section">
        <img
          src="/images/festa-2025/banner.jpeg"
          alt="FESTA 2025 Banner"
          className="festa-banner"
        />
        <h2>Welcome Back BTS – FESTA 2025</h2>
        <p className="intro-text">
          After years of anticipation, the 2025 FESTA marks a monumental return of BTS as a full group. Let’s celebrate their reunion and honor the journey!
        </p>
      </section>

     {/* Section 2: Festa Activities */}
<section className="festa-activities section">
  <h3>2025 FESTA Schedule</h3>
  <ul>
    <li>Jun 1 – 방탄늬우스 (BTS News) & 2025 FESTA Timeline Announcement</li>
    <li>Jun 2 – 호석진 (HoSeokJin) Photo (Concept Switch ver.)</li>
    <li>Jun 5 – 호석진 (HoSeokJin) Photo (Classic ver.) & 호석진 (HoSeokJin) Photo Behind</li>
    <li>Jun 7 – 앵커 쟁탈전 (Anchor Battle) & 오늘의 아미 (Today’s ARMY) ★613 Teaser</li>
    <li>Jun 8 – 오늘의 아미 (Today’s ARMY) ★613 (For ARMY) + ★613 (With ARMY) + Behind</li>
    <li>Jun 12 – 호석진의 (HoSeokJin’s) 12:00 (Twelve O’Clock)</li>
    <li>Jun 13 – 20130613 Congratulations BTS 🎉</li>
    <li>Jun 13-14 – 2025 BTS FESTA In-person Event</li>
  </ul>
</section>

  

      {/* Section 3: Special Section – BTS Military Return */}
      <section className="section military-return">
        <h3>Back from Military – Messages from BTS</h3>
        <div className="return-messages">
          <div className="message">
            <p><strong>Jimin (June 11, 2025):</strong> “First of all, to our ARMYs – from the pandemic to our military enlistment – it's been quite a long time. Thank you so much for waiting for us. Now that we're back, we'll continue working on the big picture.”</p>
          </div>
          <div className="message">
            <p><strong>Jungkook:</strong> “Yes, and to the sunbae soldiers who came before us … I just want to say thank you for taking such good care of us.”</p>
          </div>
          <div className="message">
            <p><strong>RM & V (June 10, 2025):</strong> RM: “I am eager to work on an album and perform on stage again.” V: “Serving reset me physically and mentally—wait a bit longer for the full reunion.”</p>
          </div>
        </div>
      </section>

     {/* Section 4: Fan Voice */}
<section className="section fan-voices">
  <h3>Voices of ARMY – You Kept Us Going</h3>
  <div className="fan-messages-grid">
    <blockquote>
      "I waited for you every day, and now I’m crying from joy. Welcome back, kings! 💜"
    </blockquote>
    <blockquote>
      "It’s been a long journey, but it feels like home again. OT7 forever."
    </blockquote>
    <blockquote>
      "Even in silence, you were with us. Now let’s be loud together!"
    </blockquote>
    <blockquote>
      "Our patience was hard but worth it. Seeing all seven of you again is a dream come true."
    </blockquote>
    <blockquote>
      "Thank you for the strength and hope during tough times. Your return is a new beginning for all of us."
    </blockquote>
    <blockquote>
      "The world missed your music and light. Now it’s time to shine brighter than ever!"
    </blockquote>
    <blockquote>
      "No matter how far you were, we always felt your love. Welcome back to where you belong."
    </blockquote>
    <blockquote>
      "To the boys who gave us everything – your ARMY stood by you, always and forever."
    </blockquote>
  </div>
</section>


      {/* Section 5: Global Projects */}
      <section className="section global-projects">
        <h3>Global ARMY Projects Celebrating the Return</h3>
        <ul className="project-list">
          <li>🐾 <strong>Taehyung's Discharge – Global Donations:</strong> Fans donated to Pride Month shelters, animal rescues, and children's charities in Bangladesh.</li>
          <li>❤️ <strong>One In An ARMY – "#ReuniteWithBTS" Campaign:</strong> Funded programs supporting Korean adoptees and underprivileged communities.</li>
          <li>🎨 <strong>"Presence in Absence" Art Exhibition:</strong> Featuring 20 artists from 13 countries expressing ARMY’s emotions during BTS's service.</li>
          <li>🎵 <strong>Global ARMY Song Project+</strong> invited fans to submit creative works for the reunion celebration.</li>
          <li>📍 <strong>South Korea:</strong> Seoul landmarks lit up in purple and digital boards welcomed BTS back home.</li>
          <li>📍 <strong>Philippines & Indonesia:</strong> Community events and billboard campaigns by local ARMY.</li>
          <li>🔔 <strong>Monday Muster Events:</strong> ARMY Project 529 hosted global online/offline fan meetups celebrating their return weekly.</li>
        </ul>
      </section>
       {/* Section 6: Festa Moments Slider */}
              <section className="festa-moments section">
                <h2>BTS Moments 2024-2025</h2>
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
        
              {/* Section 7: Albums Slider - 3D Carousel */}
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
