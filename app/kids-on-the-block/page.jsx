import "./styles.css";
import Image from "next/image";
import { EmblaCarouselDouble } from "../components/EmblaCarouselDouble";
import { EmblaCarousel } from "../components/EmblaCarousel";

import kotbHeader from "../_assets/imgs-kotb/header/laptop-mockup.png";

import bestFeature01 from "../_assets/imgs-kotb/best-features-01.png";
import bestFeature02 from "../_assets/imgs-kotb/best-features-02.png";
import bestFeature03 from "../_assets/imgs-kotb/best-features-03.png";

import moodboard01 from "../_assets/imgs-kotb/moodboard/moodboard-01.jpg";
import moodboard02 from "../_assets/imgs-kotb/moodboard/moodboard-02.jpg";
import moodboard03 from "../_assets/imgs-kotb/moodboard/moodboard-03.jpg";
import moodboard04 from "../_assets/imgs-kotb/moodboard/moodboard-04.jpg";
import moodboard05 from "../_assets/imgs-kotb/moodboard/moodboard-05.jpg";
import moodboard06 from "../_assets/imgs-kotb/moodboard/moodboard-06.jpg";
import moodboard07 from "../_assets/imgs-kotb/moodboard/moodboard-07.jpg";
import moodboard08 from "../_assets/imgs-kotb/moodboard/moodboard-08.jpg";
import moodboard09 from "../_assets/imgs-kotb/moodboard/moodboard-09.jpg";
import moodboard10 from "../_assets/imgs-kotb/moodboard/moodboard-10.jpg";

import colorFont01 from "../_assets/imgs-kotb/color-font-01.jpg";
import colorFont02 from "../_assets/imgs-kotb/color-font-02.jpg";

import photoshoot01 from "../_assets/imgs-kotb/pictures/brenda_anna_2.jpg";

import logoKOTB from "../_assets/imgs-kotb/logo-01.jpg";

import informationHierarchy01 from "../_assets/imgs-kotb/information-hierarchy-01.jpg";
import informationHierarchy02 from "../_assets/imgs-kotb/information-hierarchy-02.jpg";

import graphic01 from "../_assets/imgs-kotb/doodles/graphic-01.jpg";
import graphic02 from "../_assets/imgs-kotb/doodles/graphic-02.jpg";
import graphic03 from "../_assets/imgs-kotb/doodles/graphic-03.jpg";
import graphic04 from "../_assets/imgs-kotb/doodles/graphic-04.jpg";
import graphic05 from "../_assets/imgs-kotb/doodles/graphic-05.jpg";
import graphic06 from "../_assets/imgs-kotb/doodles/graphic-06.jpg";
import graphic07 from "../_assets/imgs-kotb/doodles/graphic-07.jpg";
import graphic08 from "../_assets/imgs-kotb/doodles/graphic-08.jpg";
import graphic09 from "../_assets/imgs-kotb/doodles/graphic-09.jpg";
import graphic10 from "../_assets/imgs-kotb/doodles/graphic-10.jpg";
import graphic11 from "../_assets/imgs-kotb/doodles/graphic-11.jpg";
import graphic12 from "../_assets/imgs-kotb/doodles/graphic-12.jpg";
import graphic13 from "../_assets/imgs-kotb/doodles/graphic-13.jpg";

import sketches01 from "../_assets/imgs-kotb/sketches-01.jpg";
import sketches02 from "../_assets/imgs-kotb/sketches-02.jpg";

import wireframeBw01 from "../_assets/imgs-kotb/wireframes/wireframes-bw-01.jpg";
import wireframeBw02 from "../_assets/imgs-kotb/wireframes/wireframes-bw-02.jpg";
import wireframeBw03 from "../_assets/imgs-kotb/wireframes/wireframes-bw-03.jpg";
import wireframeBw04 from "../_assets/imgs-kotb/wireframes/wireframes-bw-04.jpg";
import wireframeColor01 from "../_assets/imgs-kotb/wireframes/wireframes-color-01.jpg";
import wireframeColor02 from "../_assets/imgs-kotb/wireframes/wireframes-color-02.jpg";
import wireframeColor03 from "../_assets/imgs-kotb/wireframes/wireframes-color-03.jpg";
import wireframeColor04 from "../_assets/imgs-kotb/wireframes/wireframes-color-04.jpg";

import screenshot01 from "../_assets/imgs-kotb/final-screens/screenshot-01.png";
import screenshot02 from "../_assets/imgs-kotb/final-screens/screenshot-02.png";
import screenshot03 from "../_assets/imgs-kotb/final-screens/screenshot-03.png";
import screenshot04 from "../_assets/imgs-kotb/final-screens/screenshot-04.png";
import screenshot05 from "../_assets/imgs-kotb/final-screens/screenshot-05.png";
import screenshot06 from "../_assets/imgs-kotb/final-screens/screenshot-06.png";
import screenshot07 from "../_assets/imgs-kotb/final-screens/screenshot-07.png";
import screenshot08 from "../_assets/imgs-kotb/final-screens/screenshot-08.png";
import screenshot09 from "../_assets/imgs-kotb/final-screens/screenshot-09.png";
import screenshot10 from "../_assets/imgs-kotb/final-screens/screenshot-10.png";
import screenshot11 from "../_assets/imgs-kotb/final-screens/screenshot-11.png";

import aprilOnThumb from "../_assets/imgs-april-on/thumbnail.jpg";

export default function KidsOnTheBlockPage() {
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const wireframesSlides = [
    {
      imageLeft: {
        src: wireframeBw01,
        alt: "wireframeBw01",
      },
      imageRight: {
        src: wireframeColor01,
        alt: "wireframeColor01",
      },
    },
    {
      imageLeft: {
        src: wireframeBw02,
        alt: "wireframeBw02",
      },
      imageRight: {
        src: wireframeColor02,
        alt: "wireframeColor02",
      },
    },
    {
      imageLeft: {
        src: wireframeBw03,
        alt: "wireframeBw03",
      },
      imageRight: {
        src: wireframeColor03,
        alt: "wireframeColor03",
      },
    },
    {
      imageLeft: {
        src: wireframeBw04,
        alt: "wireframeBw04",
      },
      imageRight: {
        src: wireframeColor04,
        alt: "wireframeColor04",
      },
    },
  ];

  const finalScreensSlides = [
    {
      image: {
        src: screenshot01,
        alt: "screenshot01",
      },
    },
    {
      image: {
        src: screenshot02,
        alt: "screenshot02",
      },
    },
    {
      image: {
        src: screenshot03,
        alt: "screenshot03",
      },
    },
    {
      image: {
        src: screenshot04,
        alt: "screenshot04",
      },
    },
    {
      image: {
        src: screenshot05,
        alt: "screenshot05",
      },
    },
    {
      image: {
        src: screenshot06,
        alt: "screenshot06",
      },
    },
    {
      image: {
        src: screenshot07,
        alt: "screenshot07",
      },
    },
    {
      image: {
        src: screenshot08,
        alt: "screenshot08",
      },
    },
    {
      image: {
        src: screenshot09,
        alt: "screenshot09",
      },
    },
    {
      image: {
        src: screenshot10,
        alt: "screenshot10",
      },
    },
    {
      image: {
        src: screenshot11,
        alt: "screenshot11",
      },
    },
  ];

  return (
    <div className="page-container">
      <header className="header">
        <h1>Back online with a strong brand identity</h1>
        {/* TODO: */}
        {/* <Image
          className="header__img--big"
          src={headerAssetsBig}
          alt="header__img--big"
          quality={100}
        />
        <Image
          className="header__img--small"
          src={headerAssetsSmall}
          width={1200}
          alt="header__img--small"
          quality={100}
        /> */}
        <Image src={kotbHeader} width={800} alt="kotb-header" quality={100} />
      </header>

      <main>
        {/* ====== KEY INFORMATION ====== */}
        <aside className="overview">
          <div className="overview__item">
            <span className="overview__label">Role</span>
            <span>UX and UI Designer, Photographer</span>
          </div>
          <div className="overview__item">
            <span className="overview__label">Process</span>
            <span>
              Brand identity design, Solutions and tools research and
              comparison, Photoshoot, Sketching, wireframing
            </span>
          </div>
          <div className="overview__item">
            <span className="overview__label">Timeline</span>
            <span>1 month</span>
          </div>
          <div className="overview__item">
            <span className="overview__label">Team</span>
            <span className="overview__info">Sally Olsen (coordinator)</span>
          </div>
          <div className="overview__item">
            <span className="overview__label">Tools</span>
            <span>Figma, Squarespace</span>
          </div>
        </aside>

        {/* ====== TL;DR ====== */}
        <div>
          <h2>TL;DR</h2>
          <p>
            During my one month project with Kids on the Block, I lead a
            successful rebranding initiative. In collaboration with association
            members, I developed a new brand identity and revamped a website
            through a process of wireframing and prototyping.
          </p>

          <div className="tldr flex-col">
            <h3>Final website</h3>
            <div className="flex flex-row gap-x-4">
              <div className="tldr__vs">
                <p>
                  Several sections to introduce the concepts, gain the user’s
                  trust with testimonies and redirect them to the most relevant
                  pages.
                </p>
                <Image
                  className="image"
                  src={bestFeature01}
                  alt={"bestFeature01"}
                  quality={100}
                />
              </div>
              <div className="tldr__vs">
                <p>
                  A photo album like page to introduce the characters of the
                  show. Each puppet has its details page with a unique
                  illustration, a quote and their story.
                </p>
                <Image
                  className="image"
                  src={bestFeature02}
                  alt={"bestFeature02"}
                  quality={100}
                />
              </div>

              <div className="tldr__vs">
                <p>
                  No need to go back and forth between two pages to volunteer:
                  the role description and the form are on one page.
                </p>
                <Image
                  className="image"
                  src={bestFeature03}
                  alt={"bestFeature03"}
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ====== PROCESS ====== */}
        <div>
          <h2>Process</h2>
          <div className="text-block">
            <h3>About the organization and stakeholders</h3>
            <p>
              Kids on the Block is a non-profit organization that uses puppet
              shows to raise awareness about mental and physical disabilities
              among children from Kindergarten to grade 6. The primary
              recipients of their communication efforts are teachers, who
              usually take the initiative of booking the shows for their school,
              individuals interested in volunteering, and potential donors.
            </p>
          </div>

          <div className="text-block">
            <h3>Situation</h3>
            <p>
              The existing website lacks user-friendliness and appears outdated.
              There's a pressing need for the organization to establish a strong
              online presence and have a platform to effectively communicate
              with their stakeholders.
            </p>
          </div>

          <div className="text-block">
            <h3>Brand identity</h3>
            <p>
              Before designing the website, our initial focus was on defining
              the brand identity of Kids on the Block. Our aim was to create a
              visual language that creates a deep connection with users while
              capturing the aesthetic of puppet shows.
              <br />
              This involves evoking feelings of nostalgia, creativity, and joy,
              embracing an arts-and-crafts aesthetic that aligns with the
              organization specificity. The design strives to convey
              authenticity and relatability, and to cultivate a genuine
              connection with the audience.
            </p>
          </div>

          <div className="text-block">
            <h4>Moodboard</h4>
            <p>
              I started by collecting picture and drawings that matched the
              aesthetic I was looking for.
            </p>

            <div className="moodboard-grid">
              <div className="grid-item mood-01">
                <Image
                  className="grid-img"
                  src={moodboard01}
                  alt={"moodboard01"}
                  quality={100}
                />
              </div>
              <div className="grid-item mood-02">
                <Image
                  className="grid-img"
                  src={moodboard02}
                  alt={"moodboard02"}
                  quality={100}
                />
              </div>
              <div className="grid-item mood-03">
                <Image
                  className="grid-img"
                  src={moodboard03}
                  alt={"moodboard03"}
                  quality={100}
                />
              </div>
              <div className="grid-item mood-04">
                <Image
                  className="grid-img"
                  src={moodboard04}
                  alt={"moodboard04"}
                  quality={100}
                />
              </div>
              <div className="grid-item mood-05">
                <Image
                  className="grid-img"
                  src={moodboard05}
                  alt={"moodboard05"}
                  quality={100}
                />
              </div>
              <div className="grid-item mood-06">
                <Image
                  className="grid-img"
                  src={moodboard06}
                  alt={"moodboard06"}
                  quality={100}
                />
              </div>
              <div className="grid-item mood-07">
                <Image
                  className="grid-img"
                  src={moodboard07}
                  alt={"moodboard07"}
                  quality={100}
                />
              </div>
              <div className="grid-item mood-08">
                <Image
                  className="grid-img"
                  src={moodboard08}
                  alt={"moodboard08"}
                  quality={100}
                />
              </div>
              <div className="grid-item mood-09">
                <Image
                  className="grid-img"
                  src={moodboard09}
                  alt={"moodboard09"}
                  quality={100}
                />
              </div>
              <div className="grid-item mood-10">
                <Image
                  className="grid-img"
                  src={moodboard10}
                  alt={"moodboard10"}
                  quality={100}
                />
              </div>
            </div>

            <div className="text-block">
              <h4>Color palette and fonts</h4>
              <p>
                Going along with the idea of a childhood-evoking palette, I
                revisited the existing color scheme of the old website, red,
                blue, yellow, and green. I opted for a more modern touch, by
                selecting a less saturated version of these colors, integrating
                them sparingly with white and a dark brown as the main body
                colors.
                <br /> I chose the reddish-orange as the main accent color as a
                memory of the first puppet of the non-profit, Mark Riley, that
                has orange hair.
              </p>
              <p>
                I chose a brush-like typeface to enhance the handmade aesthetic
                of the brand identity for titles, paired with a rounded
                sans-serif font for the body text. This adds a playful touch
                while maintaining simplicity and readability.{" "}
              </p>

              <Image
                className="image"
                src={colorFont01}
                alt={"colorFont01"}
                quality={100}
              />
            </div>

            <div className="duplex">
              <div className="duplex__text-block">
                <div className="duplex__title">
                  <h4>Sketches and </h4>
                  <h3>New logo</h3>
                </div>

                <p>
                  To match the website aesthetic, I decided to go for a
                  hand-drawn logo and use the main accent color. I suggested
                  several directions and ideas that matched the themes of the
                  non-profit through my sketches and presented them to the team.{" "}
                  <br />
                  After reviewing the sketches, I refined and implemented the
                  final the logo by incorporating the chosen fonts and declined
                  it in both a primary and secondary versions.
                </p>
              </div>

              <Image
                className="duplex__image image"
                src={colorFont02}
                alt={"colorFont02"}
                quality={100}
              />
            </div>

            <div className="duplex">
              <Image
                className="duplex__image image"
                src={photoshoot01}
                alt={"photoshoot01"}
                quality={100}
              />
              <div className="duplex__text-block">
                <div className="duplex__title">
                  <h4>More visual assets</h4>
                  <h3>Photoshoot</h3>
                </div>

                <p>
                  The old website was lacking quality visual material,
                  especially pictures. Recognizing the necessity of suitable
                  pictures, I took the initiative to organize a dedicated
                  photoshoot in collaboration with the association members.{" "}
                  <br />
                  We took pictures of most puppets for the kids page, as well as
                  scenes with several puppets interacting to show skits look. I
                  then used Photoshop to refine the quality of the photographs
                  and enhance the overall visual appeal.
                </p>
              </div>
            </div>

            <div className="text-block">
              <h4>Graphic assets</h4>
              <p>
                To achieve a handmade, traditional feel, I utilized a
                crayon-textured brush in designing graphics. I also incorporated
                patterns and clusters of small assets to accommodate web design
                limitations.
                <br />
                By including school and art supplies, the visuals evoke a
                familiar school environment that teachers and young pupils can
                connect with. Additionally, I integrated details related to
                kids' disabilities and backstories, such as Renaldo’s cane,
                Mark’s chair, Jennifer’s red ring, and Ellen’s pet snake, to add
                depth and relevance to the imagery.
              </p>

              <div className="graphics-grid">
                <div className="grid-item graph-01">
                  <Image
                    className="grid-img-graph"
                    src={graphic01}
                    alt={"graphic01"}
                    quality={100}
                  />
                </div>
                <div className="grid-item graph-02">
                  <Image
                    className="grid-img-graph"
                    src={graphic02}
                    alt={"graphic02"}
                    quality={100}
                  />
                </div>
                <div className="grid-item graph-03">
                  <Image
                    className="grid-img-graph"
                    src={graphic03}
                    alt={"graphic03"}
                    quality={100}
                  />
                </div>
                <div className="grid-item graph-04">
                  <Image
                    className="grid-img-graph"
                    src={graphic04}
                    alt={"graphic04"}
                    quality={100}
                  />
                </div>
                <div className="grid-item graph-05">
                  <Image
                    className="grid-img-graph"
                    src={graphic05}
                    alt={"graphic05"}
                    quality={100}
                  />
                </div>
                <div className="grid-item graph-06">
                  <Image
                    className="grid-img-graph"
                    src={graphic06}
                    alt={"graphic06"}
                    quality={100}
                  />
                </div>
                <div className="grid-item graph-07">
                  <Image
                    className="grid-img-graph"
                    src={graphic07}
                    alt={"graphic07"}
                    quality={100}
                  />
                </div>
                <div className="grid-item graph-08">
                  <Image
                    className="grid-img-graph"
                    src={graphic08}
                    alt={"graphic08"}
                    quality={100}
                  />
                </div>
                <div className="grid-item graph-09">
                  <Image
                    className="grid-img-graph"
                    src={graphic09}
                    alt={"graphic09"}
                    quality={100}
                  />
                </div>
                <div className="grid-item graph-10">
                  <Image
                    className="grid-img-graph"
                    src={graphic10}
                    alt={"graphic10"}
                    quality={100}
                  />
                </div>
                <div className="grid-item graph-11">
                  <Image
                    className="grid-img-graph"
                    src={graphic11}
                    alt={"graphic11"}
                    quality={100}
                  />
                </div>
                <div className="grid-item graph-12">
                  <Image
                    className="grid-img-graph"
                    src={graphic12}
                    alt={"graphic12"}
                    quality={100}
                  />
                </div>
                <div className="grid-item graph-13">
                  <Image
                    className="grid-img-graph"
                    src={graphic13}
                    alt={"graphic13"}
                    quality={100}
                  />
                </div>
              </div>
            </div>

            <div className="text-block">
              <h3>Information hierarchy</h3>
              <p>
                Inventory of all the pages of the old website revealed several
                shortcomings:
              </p>
              <ul>
                <li>Underutilized homepage</li>
                <li>Redundant titles and links</li>
                <li>Inefficient page structures</li>
                <li>
                  Absence of essential contact and volunteering application
                  forms
                </li>
                <br />
              </ul>

              <Image
                className="image"
                src={informationHierarchy01}
                alt={"informationHierarchy01"}
                quality={100}
              />

              <p>
                New organization plan to reduce confusion and optimize the
                overall usability:
              </p>
              <ul>
                <li>
                  Streamlined homepage with no sidebar to guide users to
                  sections
                </li>
                <li>
                  "Get Involved" menu item to bring all volunteering and
                  donation-related items together
                </li>
                <li>Less important information in the footer</li>
                <br />
              </ul>

              <Image
                className="image"
                src={informationHierarchy02}
                alt={"informationHierarchy02"}
                quality={100}
              />
            </div>

            <div className="text-block">
              <h3>Ideation and sketches</h3>
              <p>
                The homepage has been revamped to be more colorful and engaging,
                guiding users seamlessly to their desired sections.
              </p>

              <div className="flex">
                <Image
                  className="image w-1/2"
                  src={sketches01}
                  alt={"sketches01"}
                  quality={100}
                />
                <Image
                  className="image w-1/2"
                  src={sketches02}
                  alt={"sketches02"}
                  quality={100}
                />
              </div>
            </div>

            <div className="text-block">
              <h3>Mid-fidelity wireframes and colors</h3>
              <p>
                The homepage has been revamped to be more colorful and engaging,
                guiding users seamlessly to their desired sections.
              </p>

              <EmblaCarouselDouble slides={wireframesSlides} />
            </div>
          </div>
        </div>

        <div>
          <h2>Final designs</h2>
          <div className="flex flex-col items-center my-12">
            <h3>All screens</h3>

            <EmblaCarousel slides={finalScreensSlides} />
          </div>

          <div>
            <div className="flex flex-col bg-kotb-yellow">
              <h3>Best features</h3>
              <div className="flex flex-row gap-x-4 items-baseline">
                <div className="flex flex-col gap-6">
                  <Image
                    className="image"
                    src={bestFeature01}
                    alt={"bestFeature01"}
                    quality={100}
                  />
                  <h4>Homepage</h4>
                  <p>
                    A vibrant and playful brand identity, created with
                    hand-drawn elements, that evokes a sense of warmth to
                    effectively communicate the values of childhood, empathy,
                    and acceptance for the non-profit organization
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <Image
                    className="image"
                    src={bestFeature02}
                    alt={"bestFeature02"}
                    quality={100}
                  />
                  <h4>Photo album Kids page</h4>
                  <p>
                    Booking a show and communicating with the association is
                    made easy and straightforward for teachers
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <Image
                    className="image"
                    src={bestFeature03}
                    alt={"bestFeature03"}
                    quality={100}
                  />
                  <h4>Descriptions and forms on same page</h4>
                  <p>
                    Users can easily access detailed information about each skit
                    and puppet, allowing them to make confident decisions that
                    best suit the needs and preferences of their class and
                    students
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-block">
          <h3>Project impact and feedback</h3>
          <p>
            The new website allowed the non-profit to kickstart their activity
            for 2023 by recruiting more volunteers and getting donations. They
            also received several bookings through the forms.
          </p>
          <blockquote>
            <h4>
              We were very impressed with her patience and diligence in setting
              everything up for us in such a short time.
            </h4>
            <p className="self-end">- Sally Olsen</p>
          </blockquote>
        </div>

        <div className="mb-56">
          <h2>Learning</h2>

          <div className="text-block">
            <h3>Next steps</h3>
            <p>
              The website will be maintained by the non-profit members and will
              serve as their primary contact platform.
            </p>
          </div>

          <div className="text-block">
            <h3>What I learned</h3>
            <p>
              Taking initiative and ownership makes the project better and the
              execution faster
            </p>
          </div>

          <div className="text-block">
            <h3>What would I have done differently?</h3>
            <ul>
              <li>More UX research and user testing</li>
              <li>A more rigorous method for brand identity building</li>
              <li>Better written content</li>
              <li>Avoid simple UI mistakes</li>
            </ul>
          </div>
        </div>

        <div>
          <h2>Thanks for reading</h2>

          <div className="flex flex-col justify-start items-center">
            <h3>Visit one of my other projects if you feel like it</h3>

            <div className="flex flex-col justify-start items-center max-w-xl">
              <Image
                className="image"
                src={aprilOnThumb}
                alt={"aprilOnThumb"}
                quality={100}
              />
              <h4>APRIL ON:</h4>
              <h4>Redesigning the status system for clarity</h4>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
