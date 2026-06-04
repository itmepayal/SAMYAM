type VideoCategory =
  | "Testimonials"
  | "Kashi Knowledge Portal"
  | "Kashi Knowledge Portal • Quick Bits";

interface Video {
  title: string;
  description: string;
  category: VideoCategory;
  youtubeLink: string;
  thumbnailImage: string;
  featured: boolean;
  isPublished: boolean;
}
export const videos: Video[] = [
  {
    title: "Introduction to Kashi Knowledge Portal",
    description:
      "A complete overview of what the Kashi Knowledge Portal offers to students and educators.",
    category: "Kashi Knowledge Portal",
    youtubeLink: "https://www.youtube.com/results?search_query=Kashi+Knowledge",
    thumbnailImage:
      "https://i.ytimg.com/vi/H5ZSGRpzmgc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAWwzKctsoP9CPBoShh_xmeFXkEDw",
    featured: true,
    isPublished: true,
  },
  {
    title: "Understanding the Power of Ganga Aarti",
    description:
      "Learn about the spiritual significance of the mesmerizing Ganga Aarti performed daily on the banks of the sacred River Ganga.",
    category: "Kashi Knowledge Portal",
    youtubeLink:
      "https://www.youtube.com/watch?v=vtifY1PyoWI&list=RDvtifY1PyoWI&start_radio=1",
    thumbnailImage:
      "https://i.ytimg.com/vi/vtifY1PyoWI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAXQNKBqmj_tkgaDhlicxmxuN4rcg",
    featured: true,
    isPublished: true,
  },
  {
    title: "The Journey of Char Dham Yatra",
    description:
      "Discover the spiritual importance of the Char Dham pilgrimage and how it guides devotees toward self-realization and devotion.",
    category: "Testimonials",
    youtubeLink: "https://www.youtube.com/watch?v=i9kbBSlGP04",
    thumbnailImage:
      "https://i.ytimg.com/vi/i9kbBSlGP04/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBDvWy776B8Fjqhuwl2F9uenNKT6w",
    featured: true,
    isPublished: true,
  },
];
