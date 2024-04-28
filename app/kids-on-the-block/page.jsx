import "./styles.css";
import Image from "next/image";
import Link from "next/link";
import { EmblaCarouselDouble } from "../components/EmblaCarouselDouble";
import { EmblaCarousel } from "../components/EmblaCarousel";
import { ImageDialog } from "../components/ImageDialog";

import kotbHeader from "../_assets/imgs-kotb/header/laptop-mockup.png";

import finalSolutions01 from "../_assets/imgs-kotb/final-solutions-01.jpg";
import finalSolutions02 from "../_assets/imgs-kotb/final-solutions-02.jpg";
import finalSolutions03 from "../_assets/imgs-kotb/final-solutions-03.png";

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
        <h1 className="text-zinc-700">
          Back online with a strong brand identity
        </h1>
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
            <div className="flex flex-row gap-x-4">
              <div className="tldr__vs">
                <h3>Easy booking</h3>
                <ul>
                  <li>
                    Booking a show and communicating with the association is
                    made easy and straightforward for teachers.
                  </li>
                </ul>
                <ImageDialog
                  image={finalSolutions01}
                  caption="finalSolutions01"
                />
              </div>
              <div className="tldr__vs">
                <h3>New brand identity</h3>
                <ul>
                  <li>Vibrant, warm and playful brand identity</li>
                  <li>Hand-drawn graphic assets</li>
                  <li>
                    Communicates values of childhood, empathy, and acceptance
                  </li>
                </ul>
                <ImageDialog
                  image={finalSolutions02}
                  caption="finalSolutions02"
                />
              </div>

              <div className="tldr__vs">
                <h3>Engaging introductions</h3>
                <ul>
                  <li>
                    Detailed and easily accessible information for each skit and
                    puppet
                  </li>
                  <li>Facilitates confident decision-making</li>
                  <li>
                    Helps teachers tailor their choices to their class
                    preferences
                  </li>
                </ul>
                <ImageDialog
                  image={finalSolutions03}
                  caption="finalSolutions03"
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
              There&apos;s a pressing need for the organization to establish a
              strong online presence and have a platform to effectively
              communicate with their stakeholders.
            </p>
          </div>

          <div className="text-block">
            <h3>Designing a Brand identity</h3>
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
            <h3>Moodboard</h3>
            <p>
              I started by collecting picture and drawings that matched the
              aesthetic I was looking for.
            </p>

            <div className="moodboard-grid">
              <div className="grid-item mood-01">
                <ImageDialog
                  className="grid-img"
                  image={moodboard01}
                  caption="moodboard01"
                />
              </div>
              <div className="grid-item mood-02">
                <ImageDialog
                  className="grid-img"
                  image={moodboard02}
                  caption="moodboard02"
                />
              </div>
              <div className="grid-item mood-03">
                <ImageDialog
                  className="grid-img"
                  image={moodboard03}
                  caption="moodboard03"
                />
              </div>
              <div className="grid-item mood-04">
                <ImageDialog
                  className="grid-img"
                  image={moodboard04}
                  caption="moodboard04"
                />
              </div>
              <div className="grid-item mood-05">
                <ImageDialog
                  className="grid-img"
                  image={moodboard05}
                  caption="moodboard05"
                />
              </div>
              <div className="grid-item mood-06">
                <ImageDialog
                  className="grid-img"
                  image={moodboard06}
                  caption="moodboard06"
                />
              </div>
              <div className="grid-item mood-07">
                <ImageDialog
                  className="grid-img"
                  image={moodboard07}
                  caption="moodboard07"
                />
              </div>
              <div className="grid-item mood-08">
                <ImageDialog
                  className="grid-img"
                  image={moodboard08}
                  caption="moodboard08"
                />
              </div>
              <div className="grid-item mood-09">
                <ImageDialog
                  className="grid-img"
                  image={moodboard09}
                  caption="moodboard09"
                />
              </div>
              <div className="grid-item mood-10">
                <ImageDialog
                  className="grid-img"
                  image={moodboard10}
                  caption="moodboard10"
                />
              </div>
            </div>
          </div>

          <div className="text-block">
            <h3>Color palette and fonts</h3>
            <p>
              Going along with the idea of a childhood-evoking palette, I
              revisited the existing color scheme of the old website, red, blue,
              yellow, and green. I opted for a more modern touch, by selecting a
              less saturated version of these colors, integrating them sparingly
              with white and a dark brown as the main body colors.
              <br /> I chose the reddish-orange as the main accent color as a
              memory of the first puppet of the non-profit, Mark Riley, that has
              orange hair.
            </p>
            <p>
              I chose a brush-like typeface to enhance the handmade aesthetic of
              the brand identity for titles, paired with a rounded sans-serif
              font for the body text. This adds a playful touch while
              maintaining simplicity and readability.{" "}
            </p>

            <ImageDialog image={colorFont01} caption="colorFont01" />
          </div>

          <div className="duplex">
            <div className="duplex__text-block">
              <div className="duplex__title">
                <h4>Research and Final</h4>
                <h3>Designing a new logo</h3>
              </div>

              <p>
                To match the website aesthetic, I decided to go for a hand-drawn
                logo and use the main accent color. I suggested several
                directions and ideas that matched the themes of the non-profit
                through my sketches and presented them to the team. <br />
                <br />
                After reviewing the sketches, I refined and implemented the
                final the logo by incorporating the chosen fonts and declined it
                in both a primary and secondary versions.
              </p>
            </div>

            <div className="duplex__image">
              <ImageDialog image={colorFont02} caption="colorFont02" />
            </div>
          </div>

          <div className="duplex">
            <div className="duplex__image">
              <ImageDialog image={photoshoot01} caption="photoshoot01" />
            </div>
            <div className="duplex__text-block">
              <div className="duplex__title">
                <h4>Better visual assets</h4>
                <h3>Organizing a photoshoot</h3>
              </div>

              <p>
                The old website was lacking quality visual material, especially
                pictures. Recognizing the necessity of suitable pictures, I took
                the initiative to organize a dedicated photoshoot in
                collaboration with the association members. <br />
                <br />
                We took pictures of most puppets for the kids page, as well as
                scenes with several puppets interacting to show skits look. I
                then used Photoshop to refine the quality of the photographs and
                enhance the overall visual appeal.
              </p>
            </div>
          </div>

          <div className="text-block">
            <h3>Graphic assets</h3>
            <p>
              To achieve a handmade, traditional feel, I utilized a
              crayon-textured brush in designing graphics. I also incorporated
              patterns and clusters of small assets to accommodate web design
              limitations.
              <br />
              <br />
              By including school and art supplies, the visuals evoke a familiar
              school environment that teachers and young pupils can connect
              with. Additionally, I integrated details related to kids&apos;
              disabilities and backstories, such as Renaldo&apos;s cane,
              Mark&apos;s chair, Jennifer&apos;s red ring, and Ellen&apos;s pet
              snake, to add depth and relevance to the imagery.
            </p>

            <div className="graphics-grid">
              <div className="grid-item graph-01">
                <ImageDialog
                  className="grid-img-graph"
                  image={graphic01}
                  caption="graphic01"
                />
              </div>
              <div className="grid-item graph-02">
                <ImageDialog
                  className="grid-img-graph"
                  image={graphic02}
                  caption="graphic02"
                />
              </div>
              <div className="grid-item graph-03">
                <ImageDialog
                  className="grid-img-graph"
                  image={graphic03}
                  caption="graphic03"
                />
              </div>
              <div className="grid-item graph-04">
                <ImageDialog
                  className="grid-img-graph"
                  image={graphic04}
                  caption="graphic04"
                />
              </div>
              <div className="grid-item graph-05">
                <ImageDialog
                  className="grid-img-graph"
                  image={graphic05}
                  caption="graphic05"
                />
              </div>
              <div className="grid-item graph-06">
                <ImageDialog
                  className="grid-img-graph"
                  image={graphic06}
                  caption="graphic06"
                />
              </div>
              <div className="grid-item graph-07">
                <ImageDialog
                  className="grid-img-graph"
                  image={graphic07}
                  caption="graphic07"
                />
              </div>
              <div className="grid-item graph-08">
                <ImageDialog
                  className="grid-img-graph"
                  image={graphic08}
                  caption="graphic08"
                />
              </div>
              <div className="grid-item graph-09">
                <ImageDialog
                  className="grid-img-graph"
                  image={graphic09}
                  caption="graphic09"
                />
              </div>
              <div className="grid-item graph-10">
                <ImageDialog
                  className="grid-img-graph"
                  image={graphic10}
                  caption="graphic10"
                />
              </div>
              <div className="grid-item graph-11">
                <ImageDialog
                  className="grid-img-graph"
                  image={graphic11}
                  caption="graphic11"
                />
              </div>
              <div className="grid-item graph-12">
                <ImageDialog
                  className="grid-img-graph"
                  image={graphic12}
                  caption="graphic12"
                />
              </div>
              <div className="grid-item graph-13">
                <ImageDialog
                  className="grid-img-graph"
                  image={graphic13}
                  caption="graphic13"
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
                Absence of essential contact and volunteering application forms
              </li>
              <br />
            </ul>

            <ImageDialog
              image={informationHierarchy01}
              caption="informationHierarchy01"
            />

            <p>
              New organization plan to reduce confusion and optimize the overall
              usability:
            </p>
            <ul>
              <li>
                Streamlined homepage with no sidebar to guide users to sections
              </li>
              <li>
                &quot;Get Involved&quot; menu item to bring all volunteering and
                donation-related items together
              </li>
              <li>Less important information in the footer</li>
              <br />
            </ul>

            <ImageDialog
              image={informationHierarchy02}
              caption="informationHierarchy02"
            />
          </div>

          <div className="text-block">
            <h3>Ideation and sketches</h3>
            <p>For the homepage, our objectives were to:</p>
            <ul>
              <li>Make the design more lively and engaging with colors</li>
              <li>
                Provide a clear and brief overview of the non-profit&apos;s
                activities
              </li>
              <li>Build trust with visitors</li>
              <li>
                Clearly guide users towards key actions such as booking a show,
                making donations, or volunteering
              </li>
            </ul>

            <div className="flex">
              <div className="w-1/2">
                <ImageDialog image={sketches01} caption="sketches01" />
              </div>
              <div className="w-1/2">
                <ImageDialog image={sketches02} caption="sketches02" />
              </div>
            </div>
          </div>

          <div className="text-block">
            <h3>Mid-fidelity wireframes and colors</h3>
            <p>
              In creating the wireframes, our primary challenge lay in selecting
              and employing colors across the website:
            </p>
            <ul>
              <li>
                We opted for a reddish-orange accent color due to its high
                saturation, ensuring visual impact
              </li>
              <li>
                Yellow was chosen as a secondary color to maintain a lively and
                colorful atmosphere without overwhelming the user with crowded
                pages
              </li>
              <li>
                Dark blue was utilized to emphasize specific sections, providing
                clarity within the design
              </li>
            </ul>

            <EmblaCarouselDouble slides={wireframesSlides} />
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
                  <ImageDialog image={bestFeature01} caption="bestFeature01" />
                  <h4>Homepage</h4>
                  <p>
                    Several sections to introduce the concepts, gain the user’s
                    trust with testimonies and redirect them to the most
                    relevant pages.
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <ImageDialog image={bestFeature02} caption="bestFeature02" />
                  <h4>Photo album Kids page</h4>
                  <p>
                    A photo album like page to introduce the characters of the
                    show. Each puppet has its details page with a unique
                    illustration, a quote and their story.
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <ImageDialog image={bestFeature03} caption="bestFeature03" />
                  <h4>Descriptions and forms on same page</h4>
                  <p>
                    No need to go back and forth between two pages to volunteer:
                    the role description and the form are on one page.
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
            <h3>Challenges and lessons</h3>
            <p>
              Taking initiative and ownership not only improves the project but
              also speeds up its completion, motivating the team to be more
              involved. This way, I can access more resources than expected and
              develop things further.
            </p>
          </div>

          <div className="text-block">
            <h3>What would I have done differently?</h3>
            <p>
              Reflecting on my experience, I&apos;ve identified several areas
              for improvement:
            </p>
            <ul>
              <li>
                Better UX research and testing: Due to limited resources, we
                missed out on valuable user insights, which could have improved
                the website&apos;s usability
              </li>
              <li>
                Improved brand identity development: A more comprehensive
                approach to creating the brand&apos;s visual identity, including
                a look and feel board, a thorough logo design process and
                expansion to other media platforms, would have been beneficial
              </li>
              <li>
                Enhanced written content: Despite constraints, revising certain
                pages and forms for clarity and conciseness could have improved
                user engagement
              </li>
              <li>
                Prevention of UI mistakes: Redundant hero sections on the
                homepage indicate the need for better design management and
                research to prevent such errors in the future
              </li>
            </ul>
          </div>

          <div className="text-block">
            <h3>Next steps</h3>
            <p>
              The website will be maintained by the non-profit members and will
              serve as their primary contact platform.
            </p>
          </div>
        </div>

        <div>
          <h2>Thanks for reading</h2>

          <div className="flex flex-col justify-start items-center">
            <h4 className="mb-8">
              Visit one of my other projects if you feel like it
            </h4>

            <Link href="/april-on">
              <div className="flex flex-col justify-start items-center max-w-lg">
                <Image
                  className="shadow-sm rounded-md mb-6 hover:shadow-md"
                  src={aprilOnThumb}
                  alt={"aprilOnThumb"}
                  quality={100}
                />
                <h4>APRIL ON:</h4>
                <h3 className="text-center">
                  Redesigning the status system for clarity
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
