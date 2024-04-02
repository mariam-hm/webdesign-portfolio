import "./styles.css";
import Image from "next/image";

import aprilOnLogo from "../_assets/imgs-april-on/header/april-on-logo-bubble.png";
import headerMockup from "../_assets/imgs-april-on/header/header-mockup.png";
import headerAssetsSmall from "../_assets/imgs-april-on/header/header-assets-small.png";
import headerAssetsBig from "../_assets/imgs-april-on/header/header-assets-big.png";

// Normal screens
import quoteDetailsBefore from "../_assets/imgs-april-on/quote-details-before.jpg";
import quoteDetailsAfter from "../_assets/imgs-april-on/quote-details-after.jpg";

import userFlow from "../_assets/imgs-april-on/user-flow.jpg";

// import quoteListBefore from "../_assets/imgs-april-on/quote-list-before.jpg";
// import quoteListAfter from "../_assets/imgs-april-on/quote-list-after.jpg";

// import statusLabelsBefore from "../_assets/imgs-april-on/status-labels-before.jpg";
// import statusLabelsAfter from "../_assets/imgs-april-on/status-labels-after.jpg";

// Annotated screens
import quoteDetailsBeforeAnnotated from "../_assets/imgs-april-on/annotated-screens/quote-details-before-annotated.jpg";
import quoteDetailsAfterAnnotated from "../_assets/imgs-april-on/annotated-screens/quote-details-after-annotated.jpg";

import quoteListBeforeAnnotated from "../_assets/imgs-april-on/annotated-screens/quote-list-before-annotated.jpg";
import quoteListAfterAnnotated from "../_assets/imgs-april-on/annotated-screens/quote-list-after-annotated.jpg";

import statusLabelsBeforeAnnotated from "../_assets/imgs-april-on/annotated-screens/status-labels-before-annotated.jpg";
import statusLabelsAfterAnnotated from "../_assets/imgs-april-on/annotated-screens/status-labels-after-annotated.jpg";

export default function AprilOnPage() {
  return (
    <div className="page-container">
      {/* ====== HEADER ====== */}
      <header className="header">
        <Image
          src={aprilOnLogo}
          width={200}
          alt="april-on-logo"
          quality={100}
        />
        <h1>Redesigning the status system for clarity</h1>
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
        <Image
          src={headerMockup}
          width={800}
          alt="header-mockup"
          quality={100}
        />
      </header>

      <main>
        {/* ====== KEY INFORMATION ====== */}
        <aside className="overview">
          <div className="overview__item">
            <span className="overview__label">Role</span>
            <span>UX Designer</span>
          </div>
          <div className="overview__item">
            <span className="overview__label">Process</span>
            <span>Problem solving, UI Design, Wireframing, Programmingr</span>
          </div>
          <div className="overview__item">
            <span className="overview__label">Timeline</span>
            <span>4 months</span>
          </div>
          <div className="overview__item">
            <span className="overview__label">Team</span>
            <span className="overview__info">
              Samira Durand (Manager of the Digital and Marketing team), Michael
              Babin (Lead programmer), Tristan Viens (Back-End Programmer)
            </span>
          </div>
          <div className="overview__item">
            <span className="overview__label">Tools</span>
            <span>Figma, VSCode</span>
          </div>
        </aside>
        {/* ====== TL;DR ====== */}
        <div>
          <h2>TL;DR</h2>
          <p>
            As a UX designer, I was tasked with leading the redesign and
            implementation of the status system in APRIL ON, an online platform
            for insurance brokers. This project aimed to improve user
            understanding of the process throughout the application, and reduce
            delays caused by confusion. I successfully redesigned and clarified
            the status system in APRIL ON platform, enhancing user understanding
            and streamlining user workflows.
          </p>

          <div className="tldr">
            <div className="tldr__vs">
              <h3>Before</h3>
              <ul>
                <li>Unclear labels and confusion with the actions</li>
                <li>Lack of guidance on the quote details screen</li>
                <li>
                  Difficulty identifying the files needing attention in the list
                  screen
                </li>
                <br />
              </ul>

              <Image
                className="image"
                src={quoteDetailsBefore}
                alt={"quote-details-before"}
                quality={100}
              />
            </div>

            <div className="tldr__vs">
              <h3>After</h3>
              <ul>
                <li>Better labels for statuses and actions</li>
                <li>Clearer process to the user for better understanding</li>
                <li>Intuitive and accessible next step</li>
                <li>Guide users towards items tha need attention</li>
              </ul>

              <Image
                className="image"
                src={quoteDetailsAfter}
                alt={"quote-details-after"}
                quality={100}
              />
            </div>
          </div>
        </div>
        {/* ====== PROCESS ====== */}
        <div>
          <h2>Process</h2>
          <div className="text-block">
            <h3>About the company and the product</h3>
            <p>
              APRIL is an international insurance company operating as a
              Managing General Agent (MGA), bridging insurance companies and
              brokers. It serves individuals and businesses with various
              insurance lines like car and property insurance. In response to
              industry digitalization, APRIL launched its online platform, APRIL
              ON, in 2020.
              <br />
              APRIL ON is a Business-to-Business (B2B) web application designed
              for insurance brokers and their firms to purchase insurance
              products on behalf of their clients. It aims to simplify
              insurance, reflecting the company's dedication to leveraging
              technology for streamlined processes.
            </p>
          </div>

          <div className="text-block">
            <h3>Situation</h3>
            <p>
              APRIL On is the primary platform through which users purchase
              APRIL’s insurance products. However, they reported encountering
              difficulties in understanding the status of their files and the
              whole underlying process, to the point where they sometimes needed
              a document to help them interpret the situation. This lack of
              clarity frequently leads to delays, particularly when users are
              uncertain about the next steps or their required actions.
            </p>
          </div>

          <div className="text-block">
            <h3>About the user</h3>
            <p>
              The jobs of insurance brokers can be stressful. They are tasked
              with juggling various responsibilities, like managing client
              relationships, researching insurance products, and negotiating
              deals. Additionally, they frequently use multiple online platforms
              like APRIL ON from different insurance providers to buy products
              for clients. Therefore, these platforms must be user-friendly,
              efficient, and comprehensive to meet brokers' needs effectively.
            </p>
          </div>

          <div className="text-block">
            <h3>User flow</h3>
            <p>
              The status system is present in most of the part of the app where
              the user works on the files they already created. We identified
              that most of the confusion occurs on the Quote list screen and on
              the quote details screen. The latter one is central in the
              process, as it is the where the user will be able to do all the
              actions that move their file forward.
            </p>
            <Image
              className="image"
              src={userFlow}
              alt={"user-flow"}
              quality={100}
            />
          </div>

          <div className="text-block">
            <h3>Research</h3>
            <p>
              During the research phase, we gathered valuable insights from
              various sources. Feedback from business developers provided
              qualitative inputs, while data on delays and drop-off rates
              offered quantitative insights into user behavior. These inputs led
              to significant outcomes.
              <br />
              We identified issues such as unclear labels and confusion with
              actions, a lack of guidance on the quote details screen, and
              difficulty in identifying files needing attention on the list
              screen. These findings guided our efforts to address user
              experience challenges comprehensively.
            </p>
          </div>

          <div className="duplex">
            <div className="duplex__text-block">
              <div className="duplex__title">
                <h4>Pain point #1</h4>
                <h3>Unclear labels for statuses and actions</h3>
              </div>

              <ul>
                <li>
                  Some status labels don't match the corresponding actions. For
                  instance, transitioning from "Not sent" to "Sent" requires
                  actions like Edit and Confirm, rather than Send. Certain
                  statuses like "Sent" lack clear guidance on the next steps or
                  actions required.
                </li>
                <li>
                  Certain statuses like "Sent" lack clear guidance on the next
                  steps or actions required.
                </li>
                <li>
                  Statuses primarily indicate past actions rather than guiding
                  users towards the next steps in the process.
                </li>
                <li>
                  The choice of colors for statuses lacks consistency and
                  meaningful differentiation, which may add confusion.
                </li>
                <li>
                  Action buttons lack uniformity across the application, leading
                  to inconsistency in user interactions.
                </li>
              </ul>
            </div>

            <Image
              className="duplex__image image"
              src={statusLabelsBeforeAnnotated}
              alt={"status-labels-before-annotated"}
              quality={100}
            />
          </div>

          <div className="duplex">
            <div className="duplex__text-block">
              <div className="duplex__title">
                <h4>Pain point #2</h4>
                <h3>Lack of guidance on quote details</h3>
              </div>

              <p>General lack of guidance towards the next action:</p>
              <ul>
                <li>
                  A lack of button hierarchy makes it challenging to identify
                  the primary action clearly
                </li>
                <li>
                  The absence of past status history or a preview of next steps
                  fails to provide an overview of the entire process
                </li>
                <li>
                  Grouping document download and upload buttons with the recap
                  section is not logical as they serve different functions and
                  relate to distinct topics
                </li>
                <li>The grey area wastes space and lacks aesthetic appeal</li>
              </ul>
            </div>

            <Image
              className="duplex__image image"
              src={quoteDetailsBeforeAnnotated}
              alt={"quote-details-before-annotated"}
              quality={100}
            />
          </div>

          <div className="duplex">
            <div className="duplex__text-block">
              <div className="duplex__title">
                <h4>Pain point #3</h4>
                <h3>
                  Difficulty identifying the files needing attention on list
                  screen
                </h3>
              </div>

              <p>General lack of guidance towards the next action:</p>
              <ul>
                <li>
                  User attention isn't directed to relevant quotes, as they all
                  appear equal, making it difficult to distinguish which quote
                  requires specific actions or attention
                </li>
                <li>Frequently used filters aren't prominently displayed</li>
                <li>
                  Inconsistency in filter presentation: some are within a white
                  container while others are not, leading to confusion regarding
                  their function and organization
                </li>
              </ul>
            </div>

            <Image
              className="duplex__image image"
              src={quoteListBeforeAnnotated}
              alt={"quote-list-before-annotated"}
              quality={100}
            />
          </div>

          <div className="text-block">
            <h3>Design goal</h3>
            <p>
              Our biggest (and most interesting) challenge lies in solving the
              issue at its core, and implementing solutions that reach every
              corner of the app, from its origin to its diverse functionalities.
              We need to make the whole process simple and clear for the user
              and make the next step obvious, intuitive and accessible.
            </p>
          </div>

          <div className="duplex">
            <Image
              className="duplex__image image"
              src={statusLabelsAfterAnnotated}
              alt={"status-labels-after-annotated"}
              quality={100}
            />
            <div className="duplex__text-block">
              <div className="duplex__title">
                <h4>Solution #1</h4>
                <h3>Better labels for more clarity</h3>
              </div>

              <ul>
                <li>
                  Status and action labels are now aligned: for instance,
                  transitioning from "Not completed" to "Quote Pending" involves
                  actions like "Complete my quote" followed by "Get my quote."
                </li>
                <li>
                  Introduced a temporary status, "Information Required," to
                  prompt user action rather than leaving them in uncertainty.
                </li>
                <li>
                  The user is now required to upload the necessary documents
                  before requesting to bind, which will make the processing of
                  the file faster.
                </li>
                <li>
                  The user is now required to upload the necessary documents
                  before requesting to bind, which will make the processing of
                  the file faster.
                </li>
                <li>
                  Implemented a more meaningful color scheme: yellow for actions
                  needed, blue for waiting, red for negative outcomes, and green
                  for positive outcomes/done.
                </li>
                <li>
                  Action buttons redesigned as clear CTAs for enhanced user
                  interaction.
                </li>
              </ul>
            </div>
          </div>

          <div className="duplex">
            <Image
              className="duplex__image image"
              src={quoteDetailsAfterAnnotated}
              alt={"quote-details-after-annotated"}
              quality={100}
            />
            <div className="duplex__text-block">
              <div className="duplex__title">
                <h4>Solution #2</h4>
                <h3>Show process and next step in quote details screen</h3>
              </div>

              <ul>
                <li>
                  Introduction of an info box to clarify the next action and
                  guide the user towards it.
                </li>
                <li>
                  Clear button hierarchy: The primary action button stands out
                  with a strong and catchy design, distinguishing it from
                  secondary actions.
                </li>
                <li>
                  Introduction of a status tracker to provide users with an
                  overview of the process, maintain a history, and inform them
                  about upcoming steps.
                </li>
                <li>
                  Redesigned and reorganized recap zone for improved information
                  hierarchy, arranging information by relevance from left to
                  right.
                </li>
                <li>
                  Dedicated zones for downloads and uploads to separate
                  functions, enhancing clarity and organization on the page.
                </li>
              </ul>
            </div>
          </div>

          <div className="duplex">
            <Image
              className="duplex__image image"
              src={quoteListAfterAnnotated}
              alt={"quote-list-after-annotated"}
              quality={100}
            />
            <div className="duplex__text-block">
              <div className="duplex__title">
                <h4>Solution #3</h4>
                <h3>
                  Highlight items that need attention in quote list screen
                </h3>
              </div>

              <ul>
                <li>
                  Implementation of two distinct notification types: one for
                  quotes requiring user action and another for simple updates
                  that do not necessitate action
                </li>
                <li>
                  Addition of a recap zone positioned at the top of the screen,
                  offering an overview of the total number of quotes requiring
                  attention
                </li>
                <li>
                  Integration of matching notification icons at the start of
                  each line, effectively directing the user's attention to the
                  relevant quotes
                </li>
                <li>
                  Adoption of a new status badge design to replace the previous
                  pill-shaped ones, enhancing clarity and visual consistency
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PROCESS END DIV */}

        <div>
          <h2>Final designs</h2>
          <h3>All screens</h3>
          <div>
            <Image
              src={quoteListAfterAnnotated}
              alt={"quote-list-after-annotated"}
              quality={100}
            />
          </div>

          <h3>Before VS After</h3>
          {/* CAROUSEL */}
        </div>

        <div>
          <h2>Learning</h2>

          <div>
            <h3>Challenges and lessons</h3>
            <ul>
              <li>
                Our initial problem statement, “users don’t know how to perform
                the next action”, lacked depth. To address this, I researched
                and explored to finally reach the heart of the problem. This
                experience taught me the importance of always verifying that
                we're working on the correct problem first.
              </li>
              <li>
                Managing changes, ideas, and functionalities across multiple
                screens proved challenging, leading to difficulty in tracking
                progress. I made sure I clarified the why of each idea to the
                team, and validated each feature individually. I learned to keep
                notes on the history and reasoning behind each decision.
              </li>
              <li>
                Reaching a balance between functionality and aesthetics was hard
                given the constraints of tight deadlines and the sole use of
                high-fidelity wireframes. Going forward, I plan to prioritize
                functionality by utilizing medium-fidelity wireframes whenever I
                can.
              </li>
            </ul>
          </div>

          <div>
            <h3>Challenges and lessons</h3>
            <ul>
              <li>
                Define clearer success metrics: although we received a lot of
                positive feedback from the user, it would have been better to
                formally measure this feedback in a more formal way
              </li>
              <li>Implement some User Testing along with the team reviews</li>
            </ul>
          </div>

          <div>
            <h3>Next steps</h3>
            <p>The implementation of the design was split in 4 parts: </p>
            <ul>
              <li>1: The quote details page</li>
              <li>2: The quote list page</li>
              <li>3: The status tracker</li>
              <li>4: The upload document feature (on details screen)</li>
            </ul>
            <p>
              My responsibility included the front-end development of the first
              three parts, which were executed successfully. The document upload
              required more coordination from other department teams and is on
              its way to be implemented. Additionally, we are in the process of
              reviewing the entire user journey to ensure simplicity and
              efficiency for both brokers and underwriters.
            </p>
          </div>
        </div>

        <div>
          <h2>Thanks for reading</h2>
          <h3>Visit one of my other projects if you feel like it</h3>
        </div>
      </main>
    </div>
  );
}
