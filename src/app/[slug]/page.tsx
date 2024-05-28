import { fetchPage } from "../../contentful/getPageData";
import { componentMap } from "../componentMap";

export default async function Page() {
  const page = await fetchPage("april-on-status-system");

  const RenderComponent = ({ component }: any) => {
    const Component = componentMap[component._type];

    if (!Component) {
      return null;
    }

    return <Component {...component} />;
  };

  const pageData = {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: "Link",
          linkType: "Space",
          id: "zir79y5zbvz3",
        },
      },
      id: "47sVDmLClGlpv3hBqUcU4U",
      type: "Entry",
      createdAt: "2024-05-24T23:32:49.728Z",
      updatedAt: "2024-05-26T22:01:24.582Z",
      environment: {
        sys: {
          id: "master",
          type: "Link",
          linkType: "Environment",
        },
      },
      revision: 5,
      contentType: {
        sys: {
          type: "Link",
          linkType: "ContentType",
          id: "page",
        },
      },
      locale: "en-CA",
    },
    fields: {
      title: "April ON - Status System",
      slug: "april-on-status-system",
      content: [
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: "Link",
                linkType: "Space",
                id: "zir79y5zbvz3",
              },
            },
            id: "4u7Tow6K71ssTnz4NUVO0r",
            type: "Entry",
            createdAt: "2024-05-24T23:27:38.456Z",
            updatedAt: "2024-05-26T21:19:31.487Z",
            environment: {
              sys: {
                id: "master",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 2,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "heroSection",
              },
            },
            locale: "en-CA",
          },
          fields: {
            mainHeading: "Redesigning the status system for clarity",
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: "Link",
                linkType: "Space",
                id: "zir79y5zbvz3",
              },
            },
            id: "19WNKXsXKMGVadEzZhPpUs",
            type: "Entry",
            createdAt: "2024-05-24T23:31:03.996Z",
            updatedAt: "2024-05-24T23:31:03.996Z",
            environment: {
              sys: {
                id: "master",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 1,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "projectInfo",
              },
            },
            locale: "en-CA",
          },
          fields: {
            details: [
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: "Link",
                      linkType: "Space",
                      id: "zir79y5zbvz3",
                    },
                  },
                  id: "5kytiupwufzZTBvPSiNKMh",
                  type: "Entry",
                  createdAt: "2024-05-24T23:28:31.030Z",
                  updatedAt: "2024-05-26T21:20:45.420Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "labelValuePair",
                    },
                  },
                  locale: "en-CA",
                },
                fields: {
                  label: "Role",
                  value: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: "UX Designer, Front-End Developer",
                            nodeType: "text",
                          },
                        ],
                        nodeType: "paragraph",
                      },
                    ],
                    nodeType: "document",
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: "Link",
                      linkType: "Space",
                      id: "zir79y5zbvz3",
                    },
                  },
                  id: "1JJbNvDJAMuo07k4PAVvI5",
                  type: "Entry",
                  createdAt: "2024-05-24T23:28:49.389Z",
                  updatedAt: "2024-05-26T21:21:02.763Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "labelValuePair",
                    },
                  },
                  locale: "en-CA",
                },
                fields: {
                  label: "Process",
                  value: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "Problem solving, UI Design, Wireframing, Programming ",
                            nodeType: "text",
                          },
                        ],
                        nodeType: "paragraph",
                      },
                    ],
                    nodeType: "document",
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: "Link",
                      linkType: "Space",
                      id: "zir79y5zbvz3",
                    },
                  },
                  id: "XN1SrNkUccJw825xr7Mq4",
                  type: "Entry",
                  createdAt: "2024-05-24T23:29:16.472Z",
                  updatedAt: "2024-05-26T21:21:24.633Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "labelValuePair",
                    },
                  },
                  locale: "en-CA",
                },
                fields: {
                  label: "Timeline",
                  value: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: "4 months",
                            nodeType: "text",
                          },
                        ],
                        nodeType: "paragraph",
                      },
                    ],
                    nodeType: "document",
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: "Link",
                      linkType: "Space",
                      id: "zir79y5zbvz3",
                    },
                  },
                  id: "1kHYlITRCo4MzuEFlQQTuR",
                  type: "Entry",
                  createdAt: "2024-05-24T23:29:38.971Z",
                  updatedAt: "2024-05-26T21:22:36.699Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "labelValuePair",
                    },
                  },
                  locale: "en-CA",
                },
                fields: {
                  label: "Team",
                  value: {
                    nodeType: "document",
                    data: {},
                    content: [
                      {
                        nodeType: "paragraph",
                        data: {},
                        content: [
                          {
                            nodeType: "text",
                            value: "Samira Durand ",
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: "text",
                            value:
                              "(Manager of the Digital and Marketing team)",
                            marks: [
                              {
                                type: "italic",
                              },
                            ],
                            data: {},
                          },
                          {
                            nodeType: "text",
                            value: ", Michael Babin ",
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: "text",
                            value: "(Lead programmer)",
                            marks: [
                              {
                                type: "italic",
                              },
                            ],
                            data: {},
                          },
                          {
                            nodeType: "text",
                            value: ", Tristan Viens ",
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: "text",
                            value: "(Back-End Programmer)",
                            marks: [
                              {
                                type: "italic",
                              },
                            ],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: "Link",
                      linkType: "Space",
                      id: "zir79y5zbvz3",
                    },
                  },
                  id: "2hJV6ZbJDCtTzyQXHZkweS",
                  type: "Entry",
                  createdAt: "2024-05-24T23:30:01.116Z",
                  updatedAt: "2024-05-26T21:22:52.065Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "labelValuePair",
                    },
                  },
                  locale: "en-CA",
                },
                fields: {
                  label: "Tools",
                  value: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: "Figma, VSCode",
                            nodeType: "text",
                          },
                        ],
                        nodeType: "paragraph",
                      },
                    ],
                    nodeType: "document",
                  },
                },
              },
            ],
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: "Link",
                linkType: "Space",
                id: "zir79y5zbvz3",
              },
            },
            id: "3AEhASYX3FHiwhIFJsrfBM",
            type: "Entry",
            createdAt: "2024-05-24T23:31:31.496Z",
            updatedAt: "2024-05-26T21:23:30.636Z",
            environment: {
              sys: {
                id: "master",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 2,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "sectionTitle",
              },
            },
            locale: "en-CA",
          },
          fields: {
            heading: "TL;DR",
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: "Link",
                linkType: "Space",
                id: "zir79y5zbvz3",
              },
            },
            id: "6Tk6l6NTX1Celwz7hGb7Is",
            type: "Entry",
            createdAt: "2024-05-24T23:32:29.954Z",
            updatedAt: "2024-05-26T21:25:42.038Z",
            environment: {
              sys: {
                id: "master",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 3,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "textBlock",
              },
            },
            locale: "en-CA",
          },
          fields: {
            textContent: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: "As a ",
                      nodeType: "text",
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: "bold",
                        },
                      ],
                      value: "UX designer",
                      nodeType: "text",
                    },
                    {
                      data: {},
                      marks: [],
                      value: ", I was tasked with ",
                      nodeType: "text",
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: "bold",
                        },
                      ],
                      value:
                        "leading the redesign and implementation of the status system in APRIL ON",
                      nodeType: "text",
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ", an online platform for insurance brokers. This project aimed to ",
                      nodeType: "text",
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: "bold",
                        },
                      ],
                      value: "improve user understanding",
                      nodeType: "text",
                    },
                    {
                      data: {},
                      marks: [],
                      value: " of the process throughout the application, and ",
                      nodeType: "text",
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: "bold",
                        },
                      ],
                      value: "reduce delays ",
                      nodeType: "text",
                    },
                    {
                      data: {},
                      marks: [],
                      value: "caused by confusion. I successfully ",
                      nodeType: "text",
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: "bold",
                        },
                      ],
                      value: "redesigned and clarified the status system",
                      nodeType: "text",
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ", enhancing user understanding and streamlining user workflows. ",
                      nodeType: "text",
                    },
                  ],
                  nodeType: "paragraph",
                },
              ],
              nodeType: "document",
            },
            internalName: "Intro",
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: "Link",
                linkType: "Space",
                id: "zir79y5zbvz3",
              },
            },
            id: "1xb4V1NRgZcgE8jQ2q0nuE",
            type: "Entry",
            createdAt: "2024-05-24T23:39:38.695Z",
            updatedAt: "2024-05-26T22:01:19.866Z",
            environment: {
              sys: {
                id: "master",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 2,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "duplexComponent",
              },
            },
            locale: "en-CA",
          },
          fields: {
            heading: "Before and After",
            componentLeft: {
              metadata: {
                tags: [],
              },
              sys: {
                space: {
                  sys: {
                    type: "Link",
                    linkType: "Space",
                    id: "zir79y5zbvz3",
                  },
                },
                id: "75DLlgeJeccrXubGYjAfLx",
                type: "Entry",
                createdAt: "2024-05-24T23:38:13.318Z",
                updatedAt: "2024-05-26T21:27:43.289Z",
                environment: {
                  sys: {
                    id: "master",
                    type: "Link",
                    linkType: "Environment",
                  },
                },
                revision: 3,
                contentType: {
                  sys: {
                    type: "Link",
                    linkType: "ContentType",
                    id: "textBlock",
                  },
                },
                locale: "en-CA",
              },
              fields: {
                heading: "Before",
                textContent: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value:
                                    "Unclear labels and confusion with the actions",
                                  nodeType: "text",
                                },
                              ],
                              nodeType: "paragraph",
                            },
                          ],
                          nodeType: "list-item",
                        },
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value:
                                    "Lack of guidance on the quote details screen",
                                  nodeType: "text",
                                },
                              ],
                              nodeType: "paragraph",
                            },
                          ],
                          nodeType: "list-item",
                        },
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value:
                                    "Difficulty identifying the files needing an action in the list screen",
                                  nodeType: "text",
                                },
                              ],
                              nodeType: "paragraph",
                            },
                          ],
                          nodeType: "list-item",
                        },
                      ],
                      nodeType: "unordered-list",
                    },
                    {
                      data: {
                        target: {
                          metadata: {
                            tags: [],
                          },
                          sys: {
                            space: {
                              sys: {
                                type: "Link",
                                linkType: "Space",
                                id: "zir79y5zbvz3",
                              },
                            },
                            id: "3w4gViUv4C0oLxaWhulG1v",
                            type: "Asset",
                            createdAt: "2024-05-19T14:06:12.111Z",
                            updatedAt: "2024-05-26T21:59:02.211Z",
                            environment: {
                              sys: {
                                id: "master",
                                type: "Link",
                                linkType: "Environment",
                              },
                            },
                            revision: 3,
                            locale: "en-CA",
                          },
                          fields: {
                            title: "User flow",
                            description:
                              "A typical user flow on APRIL On. Under each screen are the business goals and the user goals.",
                            file: {
                              url: "//images.ctfassets.net/zir79y5zbvz3/3w4gViUv4C0oLxaWhulG1v/64c6cdd5c0ba6a2b5cb6f6d4a34a42ea/User_flow.jpg",
                              details: {
                                size: 1352208,
                                image: {
                                  width: 3022,
                                  height: 2166,
                                },
                              },
                              fileName: "User flow.jpg",
                              contentType: "image/jpeg",
                            },
                          },
                        },
                      },
                      content: [],
                      nodeType: "embedded-asset-block",
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: "",
                          nodeType: "text",
                        },
                      ],
                      nodeType: "paragraph",
                    },
                  ],
                  nodeType: "document",
                },
                internalName: "Before",
              },
            },
            componentRight: {
              metadata: {
                tags: [],
              },
              sys: {
                space: {
                  sys: {
                    type: "Link",
                    linkType: "Space",
                    id: "zir79y5zbvz3",
                  },
                },
                id: "4ACeu1a8ueWit12z2pA2v7",
                type: "Entry",
                createdAt: "2024-05-24T23:39:33.939Z",
                updatedAt: "2024-05-26T21:28:33.691Z",
                environment: {
                  sys: {
                    id: "master",
                    type: "Link",
                    linkType: "Environment",
                  },
                },
                revision: 2,
                contentType: {
                  sys: {
                    type: "Link",
                    linkType: "ContentType",
                    id: "textBlock",
                  },
                },
                locale: "en-CA",
              },
              fields: {
                heading: "After",
                textContent: {
                  nodeType: "document",
                  data: {},
                  content: [
                    {
                      nodeType: "unordered-list",
                      data: {},
                      content: [
                        {
                          nodeType: "list-item",
                          data: {},
                          content: [
                            {
                              nodeType: "paragraph",
                              data: {},
                              content: [
                                {
                                  nodeType: "text",
                                  value:
                                    "Better labels for statuses and actions",
                                  marks: [],
                                  data: {},
                                },
                              ],
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          data: {},
                          content: [
                            {
                              nodeType: "paragraph",
                              data: {},
                              content: [
                                {
                                  nodeType: "text",
                                  value:
                                    "Clearer process to the user for better understanding",
                                  marks: [],
                                  data: {},
                                },
                              ],
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          data: {},
                          content: [
                            {
                              nodeType: "paragraph",
                              data: {},
                              content: [
                                {
                                  nodeType: "text",
                                  value: "Intuitive and accessible next step",
                                  marks: [],
                                  data: {},
                                },
                              ],
                            },
                          ],
                        },
                        {
                          nodeType: "list-item",
                          data: {},
                          content: [
                            {
                              nodeType: "paragraph",
                              data: {},
                              content: [
                                {
                                  nodeType: "text",
                                  value:
                                    "Guide users towards items that need actions",
                                  marks: [],
                                  data: {},
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      nodeType: "embedded-asset-block",
                      data: {
                        target: {
                          metadata: {
                            tags: [],
                          },
                          sys: {
                            space: {
                              sys: {
                                type: "Link",
                                linkType: "Space",
                                id: "zir79y5zbvz3",
                              },
                            },
                            id: "5GRATVLE5VeayesMzTGeFi",
                            type: "Asset",
                            createdAt: "2024-05-19T16:27:30.867Z",
                            updatedAt: "2024-05-19T16:27:30.867Z",
                            environment: {
                              sys: {
                                id: "master",
                                type: "Link",
                                linkType: "Environment",
                              },
                            },
                            revision: 1,
                            locale: "en-CA",
                          },
                          fields: {
                            title: "Status tracker adapting",
                            description: "Underwriting process with statuses.",
                            file: {
                              url: "//images.ctfassets.net/zir79y5zbvz3/5GRATVLE5VeayesMzTGeFi/49d2faa422c69b84c5c8493065248c06/Status_tracker_adapting.jpg",
                              details: {
                                size: 521945,
                                image: {
                                  width: 2952,
                                  height: 764,
                                },
                              },
                              fileName: "Status tracker adapting.jpg",
                              contentType: "image/jpeg",
                            },
                          },
                        },
                      },
                      content: [],
                    },
                    {
                      nodeType: "paragraph",
                      data: {},
                      content: [
                        {
                          nodeType: "text",
                          value: "",
                          marks: [],
                          data: {},
                        },
                      ],
                    },
                  ],
                },
                internalName: "After",
              },
            },
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: "Link",
                linkType: "Space",
                id: "zir79y5zbvz3",
              },
            },
            id: "4mw2W69uCKP1CfC3mEkjfS",
            type: "Entry",
            createdAt: "2024-05-24T23:40:00.323Z",
            updatedAt: "2024-05-26T21:29:11.068Z",
            environment: {
              sys: {
                id: "master",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 2,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "sectionTitle",
              },
            },
            locale: "en-CA",
          },
          fields: {
            heading: "Process",
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: "Link",
                linkType: "Space",
                id: "zir79y5zbvz3",
              },
            },
            id: "73Ig5VS5iU9NuNIjxHQXpk",
            type: "Entry",
            createdAt: "2024-05-24T23:41:25.930Z",
            updatedAt: "2024-05-26T21:30:36.083Z",
            environment: {
              sys: {
                id: "master",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 2,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "textBlock",
              },
            },
            locale: "en-CA",
          },
          fields: {
            heading: "About the company and the product",
            textContent: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        "APRIL is an international insurance company operating as a ",
                      nodeType: "text",
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: "bold",
                        },
                      ],
                      value: "Managing General Agent (MGA)",
                      nodeType: "text",
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ", bridging insurance companies and brokers. It serves individuals and businesses with various insurance lines like car and property insurance. In response to industry digitalization, APRIL launched its online platform, APRIL ON, in 2020.\n\nAPRIL ON is a ",
                      nodeType: "text",
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: "bold",
                        },
                      ],
                      value: "Business-to-Business (B2B) web application",
                      nodeType: "text",
                    },
                    {
                      data: {},
                      marks: [],
                      value: " designed for ",
                      nodeType: "text",
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: "bold",
                        },
                      ],
                      value: "insurance brokers",
                      nodeType: "text",
                    },
                    {
                      data: {},
                      marks: [],
                      value: " and their firms to ",
                      nodeType: "text",
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: "bold",
                        },
                      ],
                      value: "purchase insurance products",
                      nodeType: "text",
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        " on behalf of their clients. It aims to simplify insurance, reflecting the company's dedication to leveraging technology for streamlined processes. ",
                      nodeType: "text",
                    },
                  ],
                  nodeType: "paragraph",
                },
              ],
              nodeType: "document",
            },
            internalName: "About the company and the product",
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: "Link",
                linkType: "Space",
                id: "zir79y5zbvz3",
              },
            },
            id: "6eiLqQ8TyWLePViVuTpTP1",
            type: "Entry",
            createdAt: "2024-05-24T23:41:55.516Z",
            updatedAt: "2024-05-26T21:30:56.455Z",
            environment: {
              sys: {
                id: "master",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 2,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "callout",
              },
            },
            locale: "en-CA",
          },
          fields: {
            heading: "Situation",
            textContent: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        "APRIL On is the primary platform through which users purchase APRIL’s insurance products. However, they reported encountering difficulties in understanding the status of their files and the whole underlying process, to the point where they sometimes needed a document to help them interpret the situation. This lack of clarity frequently leads to delays, particularly when users are uncertain about the next steps or their required actions. ",
                      nodeType: "text",
                    },
                  ],
                  nodeType: "paragraph",
                },
              ],
              nodeType: "document",
            },
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: "Link",
                linkType: "Space",
                id: "zir79y5zbvz3",
              },
            },
            id: "4fT8XLXMmFlZ8TUzMdnnzf",
            type: "Entry",
            createdAt: "2024-05-24T23:42:25.636Z",
            updatedAt: "2024-05-26T21:31:16.561Z",
            environment: {
              sys: {
                id: "master",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 2,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "textBlock",
              },
            },
            locale: "en-CA",
          },
          fields: {
            heading: "About the user",
            textContent: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        "The jobs of insurance brokers can be stressful. They are tasked with juggling various responsibilities, like managing client relationships, researching insurance products, and negotiating deals. Additionally, they frequently use multiple online platforms like APRIL ON from different insurance providers to buy products for clients. Therefore, these platforms must be user-friendly, efficient, and comprehensive to meet brokers' needs effectively.",
                      nodeType: "text",
                    },
                  ],
                  nodeType: "paragraph",
                },
              ],
              nodeType: "document",
            },
            internalName: "About the user",
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: "Link",
                linkType: "Space",
                id: "zir79y5zbvz3",
              },
            },
            id: "15kKNRJcfGsdgIDVAOAuet",
            type: "Entry",
            createdAt: "2024-05-24T23:44:01.998Z",
            updatedAt: "2024-05-26T21:32:29.504Z",
            environment: {
              sys: {
                id: "master",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 2,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "textBlock",
              },
            },
            locale: "en-CA",
          },
          fields: {
            heading: "User flow",
            textContent: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        "The status system is present in most of the part of the app ",
                      nodeType: "text",
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: "bold",
                        },
                      ],
                      value:
                        "where the user works on the files they already created",
                      nodeType: "text",
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ". We identified that most of the confusion occurs on the ",
                      nodeType: "text",
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: "bold",
                        },
                      ],
                      value: "Quote list screen",
                      nodeType: "text",
                    },
                    {
                      data: {},
                      marks: [],
                      value: " and on the ",
                      nodeType: "text",
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: "bold",
                        },
                      ],
                      value: "Quote details screen",
                      nodeType: "text",
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ". The latter one is central in the process, as it is the where the user will be able to do all the actions that move their file forward.",
                      nodeType: "text",
                    },
                  ],
                  nodeType: "paragraph",
                },
              ],
              nodeType: "document",
            },
            internalName: "User flow",
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: "Link",
                linkType: "Space",
                id: "zir79y5zbvz3",
              },
            },
            id: "ddbQA7DKMKRnAnLmoBuo0",
            type: "Entry",
            createdAt: "2024-05-24T23:44:59.119Z",
            updatedAt: "2024-05-24T23:44:59.119Z",
            environment: {
              sys: {
                id: "master",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 1,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "image",
              },
            },
            locale: "en-CA",
          },
          fields: {
            mainImage: {
              metadata: {
                tags: [],
              },
              sys: {
                space: {
                  sys: {
                    type: "Link",
                    linkType: "Space",
                    id: "zir79y5zbvz3",
                  },
                },
                id: "3w4gViUv4C0oLxaWhulG1v",
                type: "Asset",
                createdAt: "2024-05-19T14:06:12.111Z",
                updatedAt: "2024-05-26T21:59:02.211Z",
                environment: {
                  sys: {
                    id: "master",
                    type: "Link",
                    linkType: "Environment",
                  },
                },
                revision: 3,
                locale: "en-CA",
              },
              fields: {
                title: "User flow",
                description:
                  "A typical user flow on APRIL On. Under each screen are the business goals and the user goals.",
                file: {
                  url: "//images.ctfassets.net/zir79y5zbvz3/3w4gViUv4C0oLxaWhulG1v/64c6cdd5c0ba6a2b5cb6f6d4a34a42ea/User_flow.jpg",
                  details: {
                    size: 1352208,
                    image: {
                      width: 3022,
                      height: 2166,
                    },
                  },
                  fileName: "User flow.jpg",
                  contentType: "image/jpeg",
                },
              },
            },
            description: "User flow",
            imageGroup: [
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: "Link",
                      linkType: "Space",
                      id: "zir79y5zbvz3",
                    },
                  },
                  id: "5GRATVLE5VeayesMzTGeFi",
                  type: "Asset",
                  createdAt: "2024-05-19T16:27:30.867Z",
                  updatedAt: "2024-05-19T16:27:30.867Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 1,
                  locale: "en-CA",
                },
                fields: {
                  title: "Status tracker adapting",
                  description: "Underwriting process with statuses.",
                  file: {
                    url: "//images.ctfassets.net/zir79y5zbvz3/5GRATVLE5VeayesMzTGeFi/49d2faa422c69b84c5c8493065248c06/Status_tracker_adapting.jpg",
                    details: {
                      size: 521945,
                      image: {
                        width: 2952,
                        height: 764,
                      },
                    },
                    fileName: "Status tracker adapting.jpg",
                    contentType: "image/jpeg",
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: "Link",
                      linkType: "Space",
                      id: "zir79y5zbvz3",
                    },
                  },
                  id: "3w4gViUv4C0oLxaWhulG1v",
                  type: "Asset",
                  createdAt: "2024-05-19T14:06:12.111Z",
                  updatedAt: "2024-05-26T21:59:02.211Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 3,
                  locale: "en-CA",
                },
                fields: {
                  title: "User flow",
                  description:
                    "A typical user flow on APRIL On. Under each screen are the business goals and the user goals.",
                  file: {
                    url: "//images.ctfassets.net/zir79y5zbvz3/3w4gViUv4C0oLxaWhulG1v/64c6cdd5c0ba6a2b5cb6f6d4a34a42ea/User_flow.jpg",
                    details: {
                      size: 1352208,
                      image: {
                        width: 3022,
                        height: 2166,
                      },
                    },
                    fileName: "User flow.jpg",
                    contentType: "image/jpeg",
                  },
                },
              },
            ],
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: "Link",
                linkType: "Space",
                id: "zir79y5zbvz3",
              },
            },
            id: "70pFw5u7FRBggo9osDR94y",
            type: "Entry",
            createdAt: "2024-05-26T21:33:50.547Z",
            updatedAt: "2024-05-26T21:33:50.547Z",
            environment: {
              sys: {
                id: "master",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 1,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "sectionTitle",
              },
            },
            locale: "en-CA",
          },
          fields: {
            heading: "Research",
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: "Link",
                linkType: "Space",
                id: "zir79y5zbvz3",
              },
            },
            id: "1IWfBytJ4UgOR5zBstdtis",
            type: "Entry",
            createdAt: "2024-05-26T21:33:32.719Z",
            updatedAt: "2024-05-26T21:33:32.719Z",
            environment: {
              sys: {
                id: "master",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 1,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "textBlock",
              },
            },
            locale: "en-CA",
          },
          fields: {
            heading: "Research",
            textContent: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        "During the research phase, we gathered valuable insights from various sources. Feedback from business developers provided qualitative inputs, while data on delays and drop-off rates offered quantitative insights into user behavior. These inputs led to significant outcomes.\n\nWe identified issues such as unclear labels and confusion with actions, a lack of guidance on the quote details screen, and difficulty in identifying files needing attention on the list screen. These findings guided our efforts to address user experience challenges comprehensively. ",
                      nodeType: "text",
                    },
                  ],
                  nodeType: "paragraph",
                },
              ],
              nodeType: "document",
            },
            internalName: "Research",
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: "Link",
                linkType: "Space",
                id: "zir79y5zbvz3",
              },
            },
            id: "OJUrEBx6HBjPOOP1h5pnt",
            type: "Entry",
            createdAt: "2024-05-26T22:01:05.510Z",
            updatedAt: "2024-05-26T22:01:05.510Z",
            environment: {
              sys: {
                id: "master",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 1,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "duplexComponent",
              },
            },
            locale: "en-CA",
          },
          fields: {
            componentLeft: {
              metadata: {
                tags: [],
              },
              sys: {
                space: {
                  sys: {
                    type: "Link",
                    linkType: "Space",
                    id: "zir79y5zbvz3",
                  },
                },
                id: "Q1XnnLbOQ6ymrxkag3fd7",
                type: "Entry",
                createdAt: "2024-05-26T21:35:22.707Z",
                updatedAt: "2024-05-26T21:35:41.678Z",
                environment: {
                  sys: {
                    id: "master",
                    type: "Link",
                    linkType: "Environment",
                  },
                },
                revision: 2,
                contentType: {
                  sys: {
                    type: "Link",
                    linkType: "ContentType",
                    id: "textBlock",
                  },
                },
                locale: "en-CA",
              },
              fields: {
                heading: "Unclear labels for statuses and actions",
                subheading: "Pain point #1",
                textContent: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value:
                                    'Some status labels don\'t match the corresponding actions. For instance, transitioning from "Not sent" to "Sent" requires actions like Edit and Confirm, rather than Send. Certain statuses like "Sent" lack clear guidance on the next steps or actions required.',
                                  nodeType: "text",
                                },
                              ],
                              nodeType: "paragraph",
                            },
                          ],
                          nodeType: "list-item",
                        },
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value:
                                    'Certain statuses like "Sent" lack clear guidance on the next steps or actions required.',
                                  nodeType: "text",
                                },
                              ],
                              nodeType: "paragraph",
                            },
                          ],
                          nodeType: "list-item",
                        },
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value:
                                    "Statuses primarily indicate past actions rather than guiding users towards the next steps in the process.",
                                  nodeType: "text",
                                },
                              ],
                              nodeType: "paragraph",
                            },
                          ],
                          nodeType: "list-item",
                        },
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value:
                                    "The choice of colors for statuses lacks consistency and meaningful differentiation, which may add confusion.",
                                  nodeType: "text",
                                },
                              ],
                              nodeType: "paragraph",
                            },
                          ],
                          nodeType: "list-item",
                        },
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value:
                                    "Action buttons lack uniformity across the application, leading to inconsistency in user interactions.",
                                  nodeType: "text",
                                },
                              ],
                              nodeType: "paragraph",
                            },
                          ],
                          nodeType: "list-item",
                        },
                      ],
                      nodeType: "unordered-list",
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: "",
                          nodeType: "text",
                        },
                      ],
                      nodeType: "paragraph",
                    },
                  ],
                  nodeType: "document",
                },
                internalName: "Unclear labels for statuses and actions",
              },
            },
            componentRight: {
              metadata: {
                tags: [],
              },
              sys: {
                space: {
                  sys: {
                    type: "Link",
                    linkType: "Space",
                    id: "zir79y5zbvz3",
                  },
                },
                id: "13bGSxx6m0TMNQf84IS1rt",
                type: "Entry",
                createdAt: "2024-05-26T21:36:10.452Z",
                updatedAt: "2024-05-26T21:55:08.304Z",
                environment: {
                  sys: {
                    id: "master",
                    type: "Link",
                    linkType: "Environment",
                  },
                },
                revision: 2,
                contentType: {
                  sys: {
                    type: "Link",
                    linkType: "ContentType",
                    id: "image",
                  },
                },
                locale: "en-CA",
              },
              fields: {
                mainImage: {
                  metadata: {
                    tags: [],
                  },
                  sys: {
                    space: {
                      sys: {
                        type: "Link",
                        linkType: "Space",
                        id: "zir79y5zbvz3",
                      },
                    },
                    id: "6lpzHKF7hA1atUPUPP18Qj",
                    type: "Asset",
                    createdAt: "2024-05-26T21:55:36.900Z",
                    updatedAt: "2024-05-26T21:55:36.900Z",
                    environment: {
                      sys: {
                        id: "master",
                        type: "Link",
                        linkType: "Environment",
                      },
                    },
                    revision: 1,
                    locale: "en-CA",
                  },
                  fields: {
                    title: "Status labels before",
                    file: {
                      url: "//images.ctfassets.net/zir79y5zbvz3/6lpzHKF7hA1atUPUPP18Qj/9f200924fd84dcabf382b3c17fddaf1e/Status_labels_before.jpg",
                      details: {
                        size: 755405,
                        image: {
                          width: 2590,
                          height: 2097,
                        },
                      },
                      fileName: "Status labels before.jpg",
                      contentType: "image/jpeg",
                    },
                  },
                },
                description: "Status labels before the project",
              },
            },
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: "Link",
                linkType: "Space",
                id: "zir79y5zbvz3",
              },
            },
            id: "1Mw763KUpnSdv6SLTIu1kJ",
            type: "Entry",
            createdAt: "2024-05-26T22:01:10.960Z",
            updatedAt: "2024-05-26T22:01:10.960Z",
            environment: {
              sys: {
                id: "master",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 1,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "duplexComponent",
              },
            },
            locale: "en-CA",
          },
          fields: {
            componentLeft: {
              metadata: {
                tags: [],
              },
              sys: {
                space: {
                  sys: {
                    type: "Link",
                    linkType: "Space",
                    id: "zir79y5zbvz3",
                  },
                },
                id: "4hMcWq6NwRkAAzmUgoqul9",
                type: "Entry",
                createdAt: "2024-05-26T21:41:07.422Z",
                updatedAt: "2024-05-26T21:41:07.422Z",
                environment: {
                  sys: {
                    id: "master",
                    type: "Link",
                    linkType: "Environment",
                  },
                },
                revision: 1,
                contentType: {
                  sys: {
                    type: "Link",
                    linkType: "ContentType",
                    id: "textBlock",
                  },
                },
                locale: "en-CA",
              },
              fields: {
                heading: "Lack of guidance on quote details",
                subheading: "Pain point #2",
                textContent: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value:
                            "General lack of guidance towards the next action:",
                          nodeType: "text",
                        },
                      ],
                      nodeType: "paragraph",
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value:
                                    "A lack of button hierarchy makes it challenging to identify the primary action clearly",
                                  nodeType: "text",
                                },
                              ],
                              nodeType: "paragraph",
                            },
                          ],
                          nodeType: "list-item",
                        },
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value:
                                    "The absence of past status history or a preview of next steps fails to provide an overview of the entire process",
                                  nodeType: "text",
                                },
                              ],
                              nodeType: "paragraph",
                            },
                          ],
                          nodeType: "list-item",
                        },
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value:
                                    "Grouping document download and upload buttons with the recap section is not logical as they serve different functions and relate to distinct topics",
                                  nodeType: "text",
                                },
                              ],
                              nodeType: "paragraph",
                            },
                          ],
                          nodeType: "list-item",
                        },
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value:
                                    "The grey area wastes space and lacks aesthetic appeal",
                                  nodeType: "text",
                                },
                              ],
                              nodeType: "paragraph",
                            },
                          ],
                          nodeType: "list-item",
                        },
                      ],
                      nodeType: "unordered-list",
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: "",
                          nodeType: "text",
                        },
                      ],
                      nodeType: "paragraph",
                    },
                  ],
                  nodeType: "document",
                },
                internalName: "Lack of guidance on quote details",
              },
            },
            componentRight: {
              metadata: {
                tags: [],
              },
              sys: {
                space: {
                  sys: {
                    type: "Link",
                    linkType: "Space",
                    id: "zir79y5zbvz3",
                  },
                },
                id: "5zVFz9JDKJyRLcvVW7HASd",
                type: "Entry",
                createdAt: "2024-05-26T21:57:46.921Z",
                updatedAt: "2024-05-26T21:57:46.921Z",
                environment: {
                  sys: {
                    id: "master",
                    type: "Link",
                    linkType: "Environment",
                  },
                },
                revision: 1,
                contentType: {
                  sys: {
                    type: "Link",
                    linkType: "ContentType",
                    id: "image",
                  },
                },
                locale: "en-CA",
              },
              fields: {
                mainImage: {
                  metadata: {
                    tags: [],
                  },
                  sys: {
                    space: {
                      sys: {
                        type: "Link",
                        linkType: "Space",
                        id: "zir79y5zbvz3",
                      },
                    },
                    id: "f28jI5PcxxclQ7TGYWefa",
                    type: "Asset",
                    createdAt: "2024-05-26T21:59:47.207Z",
                    updatedAt: "2024-05-26T21:59:58.742Z",
                    environment: {
                      sys: {
                        id: "master",
                        type: "Link",
                        linkType: "Environment",
                      },
                    },
                    revision: 2,
                    locale: "en-CA",
                  },
                  fields: {
                    title: "Quote details before",
                    file: {
                      url: "//images.ctfassets.net/zir79y5zbvz3/f28jI5PcxxclQ7TGYWefa/fbce84dcb75182d749d969b993f2b741/Quote_details_before.jpg",
                      details: {
                        size: 595922,
                        image: {
                          width: 2590,
                          height: 2097,
                        },
                      },
                      fileName: "Quote details before.jpg",
                      contentType: "image/jpeg",
                    },
                  },
                },
                description: "Quote Details screen before",
              },
            },
          },
        },
      ],
    },
  };

  return (
    <div>
      {page &&
        page.content.map((component, index) => (
          <RenderComponent key={index} component={component} />
        ))}
    </div>
  );
}
