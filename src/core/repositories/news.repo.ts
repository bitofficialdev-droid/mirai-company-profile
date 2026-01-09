import { NewsModel } from "../entities/news/news_model";

export const NewsRepository = {
  getNews: (): NewsModel => {
    return {
      hero: {
        title:
          "Lorem <span class='text-[#0451bf]'>ipsum</span> dolor <span class='text-[#0451bf]'>sit</span>",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien.",
      },
      featured: {
        id: "1",
        category: "Lorem",
        title: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat.",
        date: "Oct 24, 2025",
      },
      categories: ["All", "Lorem", "Ipsum", "Dolor", "Sit"],
      posts: [
        {
          id: "2",
          category: "Lorem",
          title:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat.",
          date: "Oct 24, 2025",
        },
        {
          id: "3",
          category: "Lorem",
          title:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat.",
          date: "Oct 24, 2025",
        },
        {
          id: "4",
          category: "Ipsum",
          title:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat.",
          date: "Oct 24, 2025",
        },
        {
          id: "5",
          category: "Ipsum",
          title:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat.",
          date: "Oct 24, 2025",
        },
        {
          id: "6",
          category: "Dolor",
          title:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat.",
          date: "Oct 24, 2025",
        },
        {
          id: "7",
          category: "Dolor",
          title:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat.",
          date: "Oct 24, 2025",
        },
        {
          id: "8",
          category: "Sit",
          title:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat.",
          date: "Oct 24, 2025",
        },
        {
          id: "91",
          category: "Sit",
          title:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat.",
          date: "Oct 24, 2025",
        },
      ],
    };
  },
};
