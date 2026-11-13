import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';
import useInView from '../hooks/useInView.js';

const WHATSAPP_URL = 'https://wa.me/6281914173914';

const About = () => {
  const [globeRef, globeInView] = useInView();

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/abdullah.png"
              alt="Abdullah Haris"
              className="w-full sm:h-[276px] h-fit object-cover object-top rounded-lg"
            />

            <div>
              <p className="grid-headtext">Hi, I’m Abdullah Haris</p>
              <p className="grid-subtext">
                I’m a full-stack developer who ships products end to end — from Go/Node APIs to React CMS, mobile apps
                and executive dashboards for field-sales and FMCG operations.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I work across the stack — Go, Node.js, React, React Native / Expo, PostgreSQL and Tailwind / Ant Design —
                to build robust, scalable multi-tenant products.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div
              ref={globeRef}
              className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              {globeInView && (
                <Globe
                  height={326}
                  width={326}
                  backgroundColor="rgba(0, 0, 0, 0)"
                  backgroundImageOpacity={0.5}
                  showAtmosphere
                  showGraticules
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  labelsData={[{ lat: -6.2, lng: 106.8, text: 'Indonesia', color: 'white', size: 15 }]}
                />
              )}
            </div>
            <div>
              <p className="grid-headtext">I’m flexible with time-zone communication & locations</p>
              <p className="grid-subtext">I&apos;m based in Indonesia and open to remote work worldwide.</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <a
                href="mailto:abdharis1411@gmail.com"
                aria-label="Email me"
                className="copy-container justify-center">
                <img src="/assets/mail.svg" alt="email" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
