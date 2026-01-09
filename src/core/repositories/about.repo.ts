import { AboutModel } from "../entities/about/about_model";

export const AboutRepository = {
  getAbout: (): AboutModel => {
    return {
      hero: {
        title: "Lorem ipsum dolor <span class='text-[#7efc62]'>sit</span> amet",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat.",
      },
      story: {
        title: "Lorem ipsum dolor",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium. \n Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis.",
      },
      value: {
        title: "Lorem ipsum dolor sit",
        value: [
          {
            label: "Lorem Ipsum",
            description:
              "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
          },
          {
            label: "Lorem Ipsum",
            description:
              "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
          },
          {
            label: "Lorem Ipsum",
            description:
              "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
          },
        ],
      },
      teams: {
        title: "Lorem ipsum dolor sit",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        team: [
          {
            name: "Jhon Doe One",
            role: "Lorem ipsum dolor",
          },
          {
            name: "Jhon Doe Two",
            role: "Lorem ipsum dolor",
          },
          {
            name: "Jhon Doe Three",
            role: "Lorem ipsum dolor",
          },
          {
            name: "Jhon Doe Four",
            role: "Lorem ipsum dolor",
          },
        ],
      },
      join: {
        label: "Lorem ipsum dolor sit",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.",
      },
    };
  },
};
