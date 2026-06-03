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
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailImage: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    featured: true,
    isPublished: true,
  },
  {
    title: "How to Navigate the Dashboard",
    description: "Quick walkthrough on using the Kashi dashboard effectively.",
    category: "Kashi Knowledge Portal • Quick Bits",
    youtubeLink: "https://www.youtube.com/watch?v=abc1234567",
    thumbnailImage: "https://img.youtube.com/vi/abc1234567/hqdefault.jpg",
    featured: false,
    isPublished: true,
  },
  {
    title: "Student Success Story – Priya Sharma",
    description: "Priya shares how the portal helped her ace her board exams.",
    category: "Testimonials",
    youtubeLink: "https://www.youtube.com/watch?v=bcd2345678",
    thumbnailImage: "https://img.youtube.com/vi/bcd2345678/hqdefault.jpg",
    featured: true,
    isPublished: true,
  },
  {
    title: "Understanding Course Modules",
    description:
      "A deep dive into how course modules are structured on the platform.",
    category: "Kashi Knowledge Portal",
    youtubeLink: "https://www.youtube.com/watch?v=cde3456789",
    thumbnailImage: "https://img.youtube.com/vi/cde3456789/hqdefault.jpg",
    featured: false,
    isPublished: true,
  },
  {
    title: "5-Minute Guide to Quizzes",
    description:
      "Everything you need to know about the quiz feature in under 5 minutes.",
    category: "Kashi Knowledge Portal • Quick Bits",
    youtubeLink: "https://www.youtube.com/watch?v=def4567890",
    thumbnailImage: "https://img.youtube.com/vi/def4567890/hqdefault.jpg",
    featured: false,
    isPublished: true,
  },
  {
    title: "Teacher Testimonial – Rahul Verma",
    description:
      "Rahul explains how Kashi transformed his classroom experience.",
    category: "Testimonials",
    youtubeLink: "https://www.youtube.com/watch?v=efg5678901",
    thumbnailImage: "https://img.youtube.com/vi/efg5678901/hqdefault.jpg",
    featured: true,
    isPublished: true,
  },
  {
    title: "Advanced Learning Paths Explained",
    description: "Learn how to set up and follow personalized learning paths.",
    category: "Kashi Knowledge Portal",
    youtubeLink: "https://www.youtube.com/watch?v=fgh6789012",
    thumbnailImage: "https://img.youtube.com/vi/fgh6789012/hqdefault.jpg",
    featured: false,
    isPublished: false,
  },
  {
    title: "Setting Up Your Profile in 2 Minutes",
    description:
      "A quick guide to completing your Kashi profile for the best experience.",
    category: "Kashi Knowledge Portal • Quick Bits",
    youtubeLink: "https://www.youtube.com/watch?v=ghi7890123",
    thumbnailImage: "https://img.youtube.com/vi/ghi7890123/hqdefault.jpg",
    featured: false,
    isPublished: true,
  },
  {
    title: "Parent Testimonial – Sunita Mehta",
    description:
      "Sunita talks about the visible improvement in her child's performance.",
    category: "Testimonials",
    youtubeLink: "https://www.youtube.com/watch?v=hij8901234",
    thumbnailImage: "https://img.youtube.com/vi/hij8901234/hqdefault.jpg",
    featured: false,
    isPublished: true,
  },
  {
    title: "Live Classes & Scheduling",
    description:
      "How to join, schedule, and manage live classes on the portal.",
    category: "Kashi Knowledge Portal",
    youtubeLink: "https://www.youtube.com/watch?v=ijk9012345",
    thumbnailImage: "https://img.youtube.com/vi/ijk9012345/hqdefault.jpg",
    featured: true,
    isPublished: true,
  },
  {
    title: "Downloading Resources Offline",
    description: "A quick tip on saving study materials for offline access.",
    category: "Kashi Knowledge Portal • Quick Bits",
    youtubeLink: "https://www.youtube.com/watch?v=jkl0123456",
    thumbnailImage: "https://img.youtube.com/vi/jkl0123456/hqdefault.jpg",
    featured: false,
    isPublished: true,
  },
  {
    title: "Institution Testimonial – Delhi Public School",
    description:
      "How DPS integrated Kashi into their curriculum with great results.",
    category: "Testimonials",
    youtubeLink: "https://www.youtube.com/watch?v=klm1234567",
    thumbnailImage: "https://img.youtube.com/vi/klm1234567/hqdefault.jpg",
    featured: true,
    isPublished: true,
  },
];
