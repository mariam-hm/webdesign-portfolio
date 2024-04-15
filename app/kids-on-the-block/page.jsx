import "./styles.css";
import Image from "next/image";

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
import colorFont03 from "../_assets/imgs-kotb/color-font-03.jpg";

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

export default function KidsOnTheBlockPage() {
  return (
    <div className="page-container">
      <header className="header">
        <Image src={logoKOTB} width={200} alt="april-on-logo" quality={100} />
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

          <div className="tldr">
            <div className="tldr__vs">
              <h3>Final website</h3>
              <ul>
                <li>
                  A vibrant and playful brand identity, created with hand-drawn
                  elements, that evokes a sense of warmth to effectively
                  communicate the values of childhood, empathy, and acceptance
                  for the non-profit organizatio
                </li>
                <li>
                  Booking a show and communicating with the association is made
                  easy and straightforward for teachers
                </li>
                <li>
                  Users can easily access detailed information about each skit
                  and puppet, allowing them to make confident decisions that
                  best suit the needs and preferences of their class and
                  students
                </li>
                <br />
              </ul>

              <Image
                className="image"
                src={bestFeature01}
                alt={"bestFeature01"}
                quality={100}
              />
              <Image
                className="image"
                src={bestFeature02}
                alt={"bestFeature02"}
                quality={100}
              />
              <Image
                className="image"
                src={bestFeature03}
                alt={"bestFeature03"}
                quality={100}
              />
            </div>
          </div>
        </div>

        {/* ====== PROCESS ====== */}
        <div>
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

          <div>
            <h4>Moodboard</h4>
            <p>
              I started by collecting picture and drawings that matched the
              aesthetic I was looking for.
            </p>

            <div>
              <Image
                className="image"
                src={moodboard01}
                alt={"moodboard01"}
                quality={100}
              />
              <Image
                className="image"
                src={moodboard02}
                alt={"moodboard02"}
                quality={100}
              />
              <Image
                className="image"
                src={moodboard03}
                alt={"moodboard03"}
                quality={100}
              />
              <Image
                className="image"
                src={moodboard04}
                alt={"moodboard04"}
                quality={100}
              />
              <Image
                className="image"
                src={moodboard05}
                alt={"moodboard05"}
                quality={100}
              />
              <Image
                className="image"
                src={moodboard06}
                alt={"moodboard06"}
                quality={100}
              />
              <Image
                className="image"
                src={moodboard07}
                alt={"moodboard07"}
                quality={100}
              />
              <Image
                className="image"
                src={moodboard08}
                alt={"moodboard08"}
                quality={100}
              />
              <Image
                className="image"
                src={moodboard09}
                alt={"moodboard09"}
                quality={100}
              />
              <Image
                className="image"
                src={moodboard10}
                alt={"moodboard10"}
                quality={100}
              />
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

              <div>
                <Image
                  className="image"
                  src={colorFont01}
                  alt={"colorFont01"}
                  quality={100}
                />
                <Image
                  className="image"
                  src={colorFont02}
                  alt={"colorFont02"}
                  quality={100}
                />
              </div>

              <p>
                I chose a brush-like typeface to enhance the handmade aesthetic
                of the brand identity for titles, paired with a rounded
                sans-serif font for the body text. This adds a playful touch
                while maintaining simplicity and readability.{" "}
              </p>

              <Image
                className="image"
                src={colorFont03}
                alt={"colorFont03"}
                quality={100}
              />
            </div>

            <div className="text-block">
              <h4>Logo</h4>
              <p>
                To match the website aesthetic, I decided to go for a hand-drawn
                logo and use the main accent color. I suggested several
                directions and ideas that matched the themes of the non-profit
                through my sketches and presented them to the team. <br />
                After reviewing the sketches, I refined and implemented the
                final the logo by incorporating the chosen fonts and declined it
                in both a primary and secondary versions.
              </p>

              <Image
                className="image"
                src={logoKOTB}
                alt={"logoKOTB"}
                quality={100}
              />
            </div>

            <div className="text-block">
              <h4>Photoshoot</h4>
              <p>
                The old website was lacking quality visual material, especially
                pictures. Recognizing the necessity of suitable pictures, I took
                the initiative to organize a dedicated photoshoot in
                collaboration with the association members. <br />
                We took pictures of most puppets for the kids page, as well as
                scenes with several puppets interacting to show skits look. I
                then used Photoshop to refine the quality of the photographs and
                enhance the overall visual appeal.
              </p>

              <Image
                className="image"
                src={logoKOTB}
                alt={"logoKOTB"}
                quality={100}
              />
            </div>

            <div className="text-block">
              <h4>Graphic sssets</h4>
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

              <div>
                <Image
                  className="image"
                  src={graphic01}
                  alt={"graphic01"}
                  quality={100}
                />
                <Image
                  className="image"
                  src={graphic02}
                  alt={"graphic02"}
                  quality={100}
                />
                <Image
                  className="image"
                  src={graphic03}
                  alt={"graphic03"}
                  quality={100}
                />
                <Image
                  className="image"
                  src={graphic04}
                  alt={"graphic04"}
                  quality={100}
                />
                <Image
                  className="image"
                  src={graphic05}
                  alt={"graphic05"}
                  quality={100}
                />
                <Image
                  className="image"
                  src={graphic06}
                  alt={"graphic06"}
                  quality={100}
                />
                <Image
                  className="image"
                  src={graphic07}
                  alt={"graphic07"}
                  quality={100}
                />
                <Image
                  className="image"
                  src={graphic08}
                  alt={"graphic08"}
                  quality={100}
                />
                <Image
                  className="image"
                  src={graphic09}
                  alt={"graphic09"}
                  quality={100}
                />
                <Image
                  className="image"
                  src={graphic10}
                  alt={"graphic10"}
                  quality={100}
                />
                <Image
                  className="image"
                  src={graphic11}
                  alt={"graphic11"}
                  quality={100}
                />
                <Image
                  className="image"
                  src={graphic12}
                  alt={"graphic12"}
                  quality={100}
                />
                <Image
                  className="image"
                  src={graphic13}
                  alt={"graphic13"}
                  quality={100}
                />
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
              <h3>Sketches and mid fidelity wireframes</h3>
              <p>
                The homepage has been revamped to be more colorful and engaging,
                guiding users seamlessly to their desired sections.
              </p>

              <Image
                className="image"
                src={wireframeBw01}
                alt={"wireframeBw01"}
                quality={100}
              />

              <Image
                className="image"
                src={wireframeColor01}
                alt={"wireframeColor01"}
                quality={100}
              />

              <Image
                className="image"
                src={wireframeBw02}
                alt={"wireframeBw02"}
                quality={100}
              />

              <Image
                className="image"
                src={wireframeColor02}
                alt={"wireframeColor02"}
                quality={100}
              />

              <Image
                className="image"
                src={wireframeBw03}
                alt={"wireframeBw03"}
                quality={100}
              />

              <Image
                className="image"
                src={wireframeColor03}
                alt={"wireframeColor03"}
                quality={100}
              />

              <Image
                className="image"
                src={wireframeBw04}
                alt={"wireframeBw04"}
                quality={100}
              />

              <Image
                className="image"
                src={wireframeColor04}
                alt={"wireframeColor04"}
                quality={100}
              />
            </div>
          </div>
        </div>

        <div>
          <h2>Final designs</h2>
          <h3>All screens</h3>

          <h3>Before VS After</h3>
          {/* CAROUSEL */}
        </div>
      </main>
    </div>
  );
}
