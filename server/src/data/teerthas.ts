import { CreateTeerthaPayload } from "../modules/teerthas/teerthas.service";

export const teerthas: CreateTeerthaPayload[] = [
  {
    slug: "kedarnath",
    name: "Kedarnath Divine Pilgrimage",
    description:
      "Experience the divine Himalayan energy of Kedarnath and connect with one of the holiest Jyotirlingas in India.",
    thumbnailImage:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80",
      "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=1200&q=80",
    ],
    region: "Uttarakhand",
    significance: "One of the twelve Jyotirlingas; highest Himalayan shrine",
    duration: "6 Days / 5 Nights",
    tagline: "Har Har Mahadev",
    slogan: "Har Har Mahadev",
    date: "15 May 2027",
    desc: "Experience the divine Himalayan energy of Kedarnath and connect with one of the holiest Jyotirlingas in India.",
    triplePrice: "₹34,999",
    doublePrice: "₹39,999",
    highlights: [
      "Darshan at Kedarnath Jyotirlinga",
      "Himalayan Trek Experience",
      "Morning Puja & Meditation",
      "Visit to Guptkashi & Rudraprayag",
    ],
    inclusions: [
      "Accommodation",
      "Meals",
      "Transportation",
      "Trek Support",
      "Temple Assistance",
    ],
    itinerary: [
      {
        day: "Day 1",
        points: ["Arrival at Haridwar", "Orientation", "Transfer"],
      },
      { day: "Day 2", points: ["Drive to Guptkashi", "Temple Visits"] },
      {
        day: "Day 3",
        points: ["Trek to Kedarnath", "Evening Darshan"],
      },
      {
        day: "Day 4",
        points: ["Morning Puja", "Meditation", "Exploration"],
      },
      { day: "Day 5", points: ["Return Trek", "Rest"] },
      { day: "Day 6", points: ["Departure"] },
    ],
    staysHeading: "Mountain Spiritual Retreat",
    staysDesc:
      "Comfortable accommodations amidst the majestic Himalayan landscape.",
    darshans: [
      {
        title: "Sacred Temples",
        items: ["Kedarnath Temple", "Bhairavnath Temple", "Omkareshwar Temple"],
      },
      {
        title: "Sacred Locations",
        items: ["Mandakini River", "Guptkashi", "Rudraprayag"],
      },
      {
        title: "Experiences",
        items: ["Mountain Meditation", "Morning Aarti", "Spiritual Trek"],
      },
    ],
    isPublished: true,
  },

  {
    slug: "rameshwaram",
    name: "Rameshwaram Jyotirlinga Yatra",
    description:
      "Visit the sacred island of Rameshwaram and experience one of the most revered Jyotirlingas associated with Lord Rama.",
    thumbnailImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80",
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80",
    ],
    region: "Tamil Nadu",
    significance: "One of the twelve Jyotirlingas; sacred Char Dham site",
    duration: "5 Days / 4 Nights",
    tagline: "Om Namah Shivaya",
    slogan: "Om Namah Shivaya",
    date: "20 Jan 2027",
    desc: "Visit the sacred island of Rameshwaram and experience one of the most revered Jyotirlingas associated with Lord Rama.",
    triplePrice: "₹22,999",
    doublePrice: "₹27,999",
    highlights: [
      "Darshan at Ramanathaswamy Temple",
      "Holy Bath at 22 Sacred Wells",
      "Dhanushkodi Excursion",
      "Sea Ritual Bath at Agni Theertham",
    ],
    inclusions: [
      "Accommodation",
      "Meals",
      "Temple Assistance",
      "Local Transport",
      "Guide Services",
    ],
    itinerary: [
      { day: "Day 1", points: ["Arrival", "Temple Visit", "Orientation"] },
      { day: "Day 2", points: ["Holy Bath Rituals", "Temple Darshan"] },
      { day: "Day 3", points: ["Dhanushkodi Excursion", "Meditation"] },
      { day: "Day 4", points: ["Special Puja", "Spiritual Sessions"] },
      { day: "Day 5", points: ["Departure"] },
    ],
    staysHeading: "Coastal Spiritual Comfort",
    staysDesc: "Relaxing accommodations close to the sacred temple complex.",
    darshans: [
      {
        title: "Temple Circuit",
        items: [
          "Ramanathaswamy Temple",
          "Parvathavardhini Temple",
          "Lakshmana Theertham",
        ],
      },
      {
        title: "Sacred Waters",
        items: ["Agni Theertham", "22 Wells", "Sea Ritual Bath"],
      },
      {
        title: "Spiritual Sites",
        items: [
          "Dhanushkodi",
          "Gandhamadhana Parvatham",
          "Panchmukhi Hanuman Temple",
        ],
      },
    ],
    isPublished: true,
  },

  {
    slug: "tirupati",
    name: "Tirumala Tirupati Devasthanam Yatra",
    description:
      "Seek the divine blessings of Lord Venkateswara at Tirumala, one of the most visited religious sites in the world, perched atop the sacred Seshachalam hills.",
    thumbnailImage:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
    img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1590577976322-3d2d6a2130f5?w=1200&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80",
    ],
    region: "Andhra Pradesh",
    significance: "Most visited religious site in the world; Vaishnavite Dham",
    duration: "4 Days / 3 Nights",
    tagline: "Om Namo Venkatesaya",
    slogan: "Om Namo Venkatesaya",
    date: "8 Feb 2027",
    desc: "Seek the divine blessings of Lord Venkateswara at Tirumala, one of the most visited religious sites in the world, perched atop the sacred Seshachalam hills.",
    triplePrice: "₹18,999",
    doublePrice: "₹23,999",
    highlights: [
      "VIP Darshan at Tirumala Temple",
      "Suprabhatam Seva",
      "Kapila Theertham Visit",
      "Padmavathi Devi Temple Darshan",
    ],
    inclusions: [
      "TTD Approved Accommodation",
      "Meals",
      "Darshan Booking Assistance",
      "Local Transfers",
      "Guide Services",
    ],
    itinerary: [
      {
        day: "Day 1",
        points: ["Arrival in Tirupati", "Check-In", "Govindaraja Swamy Temple"],
      },
      {
        day: "Day 2",
        points: ["Ascent to Tirumala", "VIP Darshan", "Kapila Theertham"],
      },
      {
        day: "Day 3",
        points: ["Morning Darshan", "Akasha Ganga Visit", "Prasadam"],
      },
      { day: "Day 4", points: ["Descent", "Breakfast", "Departure"] },
    ],
    staysHeading: "TTD Guest House Stay",
    staysDesc:
      "Comfortable TTD-approved accommodations on the sacred Tirumala hills.",
    darshans: [
      {
        title: "Main Temple",
        items: [
          "Tirumala Venkateswara",
          "Govindaraja Swamy",
          "Padmavathi Devi",
        ],
      },
      {
        title: "Sacred Sites",
        items: ["Kapila Theertham", "Akasha Ganga", "Silathoranam"],
      },
      {
        title: "Spiritual Experiences",
        items: ["VIP Darshan", "Suprabhatam Seva", "Kalyanam"],
      },
    ],
    isPublished: true,
  },

  {
    slug: "shirdi",
    name: "Shirdi Sai Baba Yatra",
    description:
      "Experience the divine love and miracles of Sai Baba at Shirdi, the holy town that draws millions of devotees seeking blessings of faith, patience and charity.",
    thumbnailImage:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
    img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1561361058-c24e8c4f4802?w=1200&q=80",
      "https://images.unsplash.com/photo-1609766857901-6d2c8a7c8e1e?w=1200&q=80",
    ],
    region: "Maharashtra",
    significance: "Shrine of Sai Baba; major pilgrimage for all faiths",
    duration: "3 Days / 2 Nights",
    tagline: "Om Sai Ram",
    slogan: "Om Sai Ram",
    date: "1 Mar 2027",
    desc: "Experience the divine love and miracles of Sai Baba at Shirdi, the holy town that draws millions of devotees seeking blessings of faith, patience and charity.",
    triplePrice: "₹14,999",
    doublePrice: "₹18,999",
    highlights: [
      "Samadhi Mandir Darshan",
      "Kakad Aarti at Dawn",
      "Dwarkamai & Chavadi Visit",
      "Lendi Baug Tour",
    ],
    inclusions: [
      "Accommodation",
      "Daily Meals",
      "Temple Assistance",
      "Local Transfers",
      "Guide Services",
    ],
    itinerary: [
      {
        day: "Day 1",
        points: [
          "Arrival in Shirdi",
          "Check-In",
          "Evening Aarti at Samadhi Mandir",
        ],
      },
      {
        day: "Day 2",
        points: ["Morning Kakad Aarti", "Dwarkamai Visit", "Lendi Baug Tour"],
      },
      {
        day: "Day 3",
        points: ["Morning Darshan", "Chavadi Visit", "Departure"],
      },
    ],
    staysHeading: "Peaceful Ashram-Style Stay",
    staysDesc:
      "Comfortable accommodations within walking distance of the Sai Baba temple.",
    darshans: [
      {
        title: "Sacred Shrines",
        items: ["Samadhi Mandir", "Dwarkamai", "Chavadi"],
      },
      {
        title: "Holy Spots",
        items: ["Lendi Baug", "Gurusthan", "Neem Tree Shrine"],
      },
      {
        title: "Spiritual Experiences",
        items: ["Kakad Aarti", "Dhoop Aarti", "Shej Aarti"],
      },
    ],
    isPublished: true,
  },

  {
    slug: "dwarka",
    name: "Dwarkadhish Jyotirlinga Yatra",
    description:
      "Visit Dwarka, one of the four sacred Dhams and the ancient kingdom of Lord Krishna, where the spiritual and historical converge on the shores of the Arabian Sea.",
    thumbnailImage:
      "https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=800&q=80",
    img: "https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80",
      "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?w=1200&q=80",
    ],
    region: "Gujarat",
    significance: "One of the four Char Dhams; ancient kingdom of Lord Krishna",
    duration: "5 Days / 4 Nights",
    tagline: "Jai Dwarkadhish",
    slogan: "Jai Dwarkadhish",
    date: "12 Apr 2027",
    desc: "Visit Dwarka, one of the four sacred Dhams and the ancient kingdom of Lord Krishna, where the spiritual and historical converge on the shores of the Arabian Sea.",
    triplePrice: "₹23,999",
    doublePrice: "₹28,999",
    highlights: [
      "Dwarkadhish Temple Darshan",
      "Nageshwar Jyotirlinga Visit",
      "Boat Journey to Bet Dwarka",
      "Sunset Aarti at Gomti Ghat",
    ],
    inclusions: [
      "Accommodation",
      "Daily Meals",
      "Boat to Bet Dwarka",
      "Temple Assistance",
      "Guide Services",
    ],
    itinerary: [
      {
        day: "Day 1",
        points: ["Arrival in Dwarka", "Check-In", "Gomti Ghat Aarti"],
      },
      {
        day: "Day 2",
        points: [
          "Dwarkadhish Temple Darshan",
          "Rukmini Devi Temple",
          "Nageshwar Jyotirlinga",
        ],
      },
      { day: "Day 3", points: ["Boat to Bet Dwarka", "Darshan", "Return"] },
      {
        day: "Day 4",
        points: ["Gopi Talav", "Meditation Session", "Sunset Aarti"],
      },
      { day: "Day 5", points: ["Morning Darshan", "Breakfast", "Departure"] },
    ],
    staysHeading: "Seaside Spiritual Retreat",
    staysDesc:
      "Serene accommodations near the Dwarkadhish temple with sea views.",
    darshans: [
      {
        title: "Main Temples",
        items: [
          "Dwarkadhish Temple",
          "Rukmini Devi Temple",
          "Nageshwar Jyotirlinga",
        ],
      },
      {
        title: "Sacred Sites",
        items: ["Bet Dwarka", "Gomti Ghat", "Gopi Talav"],
      },
      {
        title: "Spiritual Experiences",
        items: ["Sunset Aarti", "Morning Abhishek", "Boat Puja"],
      },
    ],
    isPublished: true,
  },

  {
    slug: "mathura-vrindavan",
    name: "Mathura Vrindavan Krishna Yatra",
    description:
      "Relive the divine leelas of Lord Krishna in Mathura and Vrindavan, the twin sacred cities where every stone, river and forest resonates with the vibration of Krishna consciousness.",
    thumbnailImage:
      "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?w=800&q=80",
    img: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=1200&q=80",
      "https://images.unsplash.com/photo-1561361058-c24e8c4f4802?w=1200&q=80",
    ],
    region: "Uttar Pradesh",
    significance: "Birthplace of Lord Krishna; sacred Braj pilgrimage circuit",
    duration: "4 Days / 3 Nights",
    tagline: "Radhe Radhe",
    slogan: "Radhe Radhe",
    date: "20 Mar 2027",
    desc: "Relive the divine leelas of Lord Krishna in Mathura and Vrindavan, the twin sacred cities where every stone, river and forest resonates with the vibration of Krishna consciousness.",
    triplePrice: "₹17,999",
    doublePrice: "₹22,999",
    highlights: [
      "Krishna Janmabhoomi Darshan",
      "Banke Bihari Temple Visit",
      "Govardhan Parikrama",
      "Yamuna Aarti at Vrindavan",
    ],
    inclusions: [
      "Accommodation",
      "Daily Meals",
      "Temple Assistance",
      "Local Transfers",
      "Guide Services",
    ],
    itinerary: [
      {
        day: "Day 1",
        points: [
          "Arrival in Mathura",
          "Check-In",
          "Krishna Janmabhoomi Darshan",
        ],
      },
      {
        day: "Day 2",
        points: ["Vrindavan Temple Circuit", "Banke Bihari", "ISKCON Temple"],
      },
      {
        day: "Day 3",
        points: ["Govardhan Parikrama", "Barsana Visit", "Yamuna Aarti"],
      },
      { day: "Day 4", points: ["Morning Darshan", "Breakfast", "Departure"] },
    ],
    staysHeading: "Devotional Heritage Stay",
    staysDesc:
      "Comfortable ashram-style stays in the heart of the Braj pilgrimage circuit.",
    darshans: [
      {
        title: "Main Temples",
        items: ["Krishna Janmabhoomi", "Banke Bihari", "Radha Raman"],
      },
      {
        title: "Sacred Spots",
        items: ["Govardhan Hill", "Barsana", "Nandgaon"],
      },
      {
        title: "Spiritual Experiences",
        items: ["Yamuna Aarti", "Ras Lila", "Parikrama"],
      },
    ],
    isPublished: true,
  },

  {
    slug: "badrinath",
    name: "Badrinath Dham Yatra",
    description:
      "Embark on the sacred Char Dham Yatra to Badrinath, the abode of Lord Vishnu nestled between the Nar and Narayan mountain ranges at an altitude of 3,133 metres.",
    thumbnailImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80",
    ],
    region: "Uttarakhand",
    significance: "One of the four Char Dhams; abode of Lord Vishnu at 3133m",
    duration: "7 Days / 6 Nights",
    tagline: "Jai Badri Vishal",
    slogan: "Jai Badri Vishal",
    date: "10 Jun 2027",
    desc: "Embark on the sacred Char Dham Yatra to Badrinath, the abode of Lord Vishnu nestled between the Nar and Narayan mountain ranges at an altitude of 3,133 metres.",
    triplePrice: "₹36,999",
    doublePrice: "₹42,999",
    highlights: [
      "Badrinath Temple Darshan",
      "Holy Dip at Tapt Kund",
      "Brahma Kapal Puja",
      "Visit to Mana Village & Vyas Gufa",
    ],
    inclusions: [
      "Accommodation",
      "Meals",
      "Transportation",
      "Trek Support",
      "Temple Assistance",
    ],
    itinerary: [
      {
        day: "Day 1",
        points: ["Arrival at Haridwar", "Orientation", "Transfer to Rishikesh"],
      },
      { day: "Day 2", points: ["Drive to Joshimath", "Temple Visits"] },
      { day: "Day 3", points: ["Drive to Badrinath", "Evening Darshan"] },
      {
        day: "Day 4",
        points: ["Morning Abhishek", "Tapt Kund Bath", "Mana Village"],
      },
      {
        day: "Day 5",
        points: ["Brahma Kapal Puja", "Vyas Gufa", "Meditation"],
      },
      { day: "Day 6", points: ["Return to Joshimath", "Narsingh Temple"] },
      { day: "Day 7", points: ["Return Drive", "Departure"] },
    ],
    staysHeading: "High Altitude Himalayan Lodge",
    staysDesc:
      "Warm and comfortable lodges at the gateway to this high Himalayan shrine.",
    darshans: [
      {
        title: "Sacred Temples",
        items: ["Badrinath Temple", "Mana Temple", "Narsingh Temple"],
      },
      {
        title: "Holy Sites",
        items: ["Tapt Kund", "Brahma Kapal", "Vyas Gufa"],
      },
      {
        title: "Experiences",
        items: ["Sunrise Darshan", "Holy Dip", "Mountain Meditation"],
      },
    ],
    isPublished: true,
  },

  {
    slug: "somnath",
    name: "Somnath Jyotirlinga Yatra",
    description:
      "Visit the eternal Somnath temple, the first of the twelve Jyotirlingas, standing proudly on the shores of the Arabian Sea and bearing witness to centuries of devotion and resilience.",
    thumbnailImage:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80",
    img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=1200&q=80",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=80",
    ],
    region: "Gujarat",
    significance: "First of the twelve Jyotirlingas; eternal seaside shrine",
    duration: "4 Days / 3 Nights",
    tagline: "Om Namo Shivaya",
    slogan: "Om Namo Shivaya",
    date: "15 Oct 2026",
    desc: "Visit the eternal Somnath temple, the first of the twelve Jyotirlingas, standing proudly on the shores of the Arabian Sea and bearing witness to centuries of devotion and resilience.",
    triplePrice: "₹16,999",
    doublePrice: "₹21,999",
    highlights: [
      "Somnath Temple Darshan",
      "Sound & Light Show",
      "Triveni Sangam Visit",
      "Bhalka Tirth Pilgrimage",
    ],
    inclusions: [
      "Accommodation",
      "Daily Meals",
      "Temple Assistance",
      "Local Transport",
      "Guide Services",
    ],
    itinerary: [
      {
        day: "Day 1",
        points: ["Arrival in Somnath", "Check-In", "Sunset Aarti"],
      },
      {
        day: "Day 2",
        points: ["Morning Darshan", "Triveni Sangam", "Sound & Light Show"],
      },
      {
        day: "Day 3",
        points: ["Bhalka Tirth", "Prabhas Patan Museum", "Meditation"],
      },
      {
        day: "Day 4",
        points: ["Morning Abhishek", "Breakfast", "Departure"],
      },
    ],
    staysHeading: "Seaside Temple Retreat",
    staysDesc:
      "Peaceful accommodations steps away from the sacred Somnath shoreline.",
    darshans: [
      {
        title: "Sacred Sites",
        items: ["Somnath Temple", "Bhalka Tirth", "Prabhas Patan"],
      },
      {
        title: "Holy Waters",
        items: ["Triveni Sangam", "Arabian Sea Bath", "Saraswati Ghat"],
      },
      {
        title: "Experiences",
        items: ["Sound & Light Show", "Sunset Aarti", "Morning Abhishek"],
      },
    ],
    isPublished: true,
  },
];
