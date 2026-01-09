import { HomeModel } from "../entities/home/home_model";

export const HomeRepository = {
  getHome: (): HomeModel => {
    return {
      hero: {
        title: "Lorem <span class='text-[#7efc62]'>ipsum dolor</span> sit amet",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id.",
      },
      trusted: [
        {
          label: "Bonecom Tricom",
          image:
            "https://miraisoftnet.com/dev/wp-content/uploads/2025/11/cust_bt@4x-8.png",
        },
        {
          label: "Toyota Boshoku",
          image:
            "https://miraisoftnet.com/dev/wp-content/uploads/2025/11/cust_tbina@4x-8.png",
        },
        {
          label: "Rajawali Mitra Pratama",
          image:
            "https://miraisoftnet.com/dev/wp-content/uploads/2025/11/cust_rmp@4x-8.png",
        },
        {
          label: "Rajawali Inti Mandiri",
          image:
            "https://miraisoftnet.com/dev/wp-content/uploads/2025/11/cust_rim@4x-8.png",
        },
        {
          label: "Bonecom Tricom Paintech",
          image:
            "https://miraisoftnet.com/dev/wp-content/uploads/2025/11/cust_btp@4x-8.png",
        },
        {
          label: "Bonecom Tricom Paintech",
          image:
            "https://miraisoftnet.com/dev/wp-content/uploads/2025/11/cust_btp@4x-8.png",
        },
      ],
      service: {
        title: "Lorem ipsum dolor",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem.",
        services: [
          {
            title: "Lorem ipsum dolor",
            description:
              "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu.",
            url: "#",
          },
          {
            title: "Lorem ipsum dolor",
            description:
              "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu.",
            url: "#",
          },
          {
            title: "Lorem ipsum dolor",
            description:
              "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu.",
            url: "#",
          },
        ],
      },
      partner: {
        title: "Lorem ipsum dolor sit?",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus.",
        sections: [
          "Lorem ipsum dolor sit.",
          "Lorem ipsum dolor sit.",
          "Lorem ipsum dolor.",
        ],
      },
      stats: [
        {
          label: "Lorem Ipsum",
          value: "500+",
        },
        {
          label: "Lorem Ipsum",
          value: "120+",
        },
        {
          label: "Lorem Ipsum",
          value: "10+",
        },
        {
          label: "Lorem Ipsum",
          value: "50+",
        },
      ],
      portfolio: {
        title: "Lorem ipsum dolor",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.",
        portfolios: [
          {
            id: "1",
            title: "Lorem ipsum",
            description: "Lorem ipsum dolor sit amet consectetur",
          },
          {
            id: "2",
            title: "Lorem ipsum",
            description: "Lorem ipsum dolor sit amet consectetur",
          },
        ],
      },
      review: {
        title: "Lorem ipsum dolor",
        comments: [
          {
            id: "1",
            name: "Lorem ipsum",
            job: "Lorem",
            company: "Lorem ipsum dolor",
            comment:
              "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem",
          },
          {
            id: "2",
            name: "Lorem ipsum",
            job: "Lorem",
            company: "Lorem ipsum dolor",
            comment:
              "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem",
          },
          {
            id: "3",
            name: "Lorem ipsum",
            job: "Lorem",
            company: "Lorem ipsum dolor",
            comment:
              "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem",
          },
        ],
      },
      contact: {
        title: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem.",
      },
    };
  },
};
