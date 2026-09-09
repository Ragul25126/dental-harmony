export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortCopy: string;
  fullDescription: string;
  image: string;
  remoteImage?: string;
  category: "Cosmetic" | "Restorative" | "Orthodontics" | "Preventive" | "Surgical" | "Specialized";
  benefits: string[];
  procedureSteps: string[];
  faqs: { question: string; answer: string }[];
  href: string;
}

export interface DoctorProfile {
  id: string;
  name: string;
  title: string;
  designation: string;
  qualifications: string[];
  specialties: string[];
  bio: string;
  image: string;
  experienceYears: number;
  href: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  image: string;
  summary: string;
  content: string[];
  href: string;
}

export interface TestimonialItem {
  id: string;
  patientName: string;
  location: string;
  quote: string;
  treatment: string;
  rating: number;
  image?: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  highlight: string;
}

export interface CredentialItem {
  id: string;
  title: string;
  year: string;
  organization: string;
  description: string;
  image: string;
}

export const ZENITH_CONTACT = {
  clinicName: "Zenith Dentistry",
  tagline: "Care for people, not just teeth.",
  addressLine1: "#55, Hospital Road",
  addressLine2: "Dehiwala, Sri Lanka.",
  phones: ["+94112727477", "+94114902655"],
  displayPhones: ["011 272 7477", "011 490 2655"],
  whatsapp: "+94705068621",
  displayWhatsapp: "+94 70 506 8621",
  email: "info@zenithdentistry.lk",
  hours: [
    { days: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
    { days: "Sunday", time: "By Special Appointment" },
  ],
  socials: {
    instagram: "https://www.instagram.com/zenithdentistry.lk/",
    facebook: "https://www.facebook.com/Zenith-Implant-Centre-985902528143607/",
    youtube: "https://www.youtube.com/@zenithdentistry",
    whatsapp: "https://wa.me/94705068621",
  },
  credentials: [
    { label: "16", description: "Years of compassionate care" },
    { label: "ISO", description: "9001:2015 certified clinic" },
  ],
};

export const CLINIC_STATISTICS = [
  { value: "16", label: "Years of compassionate care", description: "Serving Sri Lanka & international patients" },
  { value: "ISO", label: "9001:2015 certified clinic", description: "Hospital-grade safety and quality management" },
  { value: "Full Service", label: "In-house dental X-rays", description: "OPG X-Ray & intraoral digital scanning" },
  { value: "Dehiwala", label: "Spa-like clinic environment", description: "Designed for calm and anxiety-free dentistry" },
];

export const CREDENTIALS_DATA: CredentialItem[] = [
  {
    id: "aaid-2018",
    title: "AAID Convocation 2018",
    year: "2018",
    organization: "American Academy of Implant Dentistry",
    description: "AAID Convocation 2018 recognition for advanced clinical implantology.",
    image: "about.webp",
  },
  {
    id: "wcli-2023",
    title: "WCLI Associate Fellowship - 2023 Bengaluru",
    year: "2023",
    organization: "World Clinical Laser Institute",
    description: "WCLI Associate Fellowship - 2023 Bengaluru certification in advanced laser dentistry.",
    image: "doctor.webp",
  },
];

export const HERO_FEATURED_TREATMENTS = [
  {
    id: "dental-implants",
    slug: "dental-implants",
    title: "Dental implants",
    description: "Restore confidence with long-lasting, natural-looking tooth replacement.",
    image: "implant.webp",
    href: "/our-service/dental-implants/",
  },
  {
    id: "invisalign",
    slug: "invisalign",
    title: "Invisalign",
    description: "A discreet, comfortable route to a beautifully aligned smile.",
    image: "align.webp",
    href: "/our-service/invisalign/",
  },
  {
    id: "dental-veneers",
    slug: "dental-veneers",
    title: "Dental veneers",
    description: "Carefully crafted laminates that refine the shape and colour of your smile.",
    image: "veneers.webp",
    href: "/our-service/dental-veneers/",
  },
];

export const ZENITH_HOMEPAGE_SERVICES: ServiceItem[] = [
  {
    id: "teeth-whitening",
    slug: "teeth-whitening",
    title: "Teeth whitening",
    shortCopy: "Teeth whitening is a process of removing stains that stick on to the enamel, it is bleaching..",
    fullDescription: "Teeth whitening is a process of removing stains that stick on to the enamel, it is bleaching..",
    image: "teeth-whitening.webp",
    remoteImage: "https://www.zenithdentistry.lk/wp-content/uploads/2023/10/teeth-whitening.webp",
    category: "Cosmetic",
    benefits: ["Removes enamel stains", "Professional bleaching", "Radiant smile"],
    procedureSteps: ["Cleaning", "Bleaching gel application"],
    faqs: [],
    href: "/our-service/teeth-whitening/",
  },
  {
    id: "invisalign",
    slug: "invisalign",
    title: "Invisalign",
    shortCopy: "Clear aligners have proven to be one of the most preferred orthodontic treatments for...",
    fullDescription: "Clear aligners have proven to be one of the most preferred orthodontic treatments for...",
    image: "align.webp",
    remoteImage: "https://www.zenithdentistry.lk/wp-content/uploads/2023/10/align.webp",
    category: "Orthodontics",
    benefits: ["Discreet alignment", "Removable trays"],
    procedureSteps: ["3D Scan", "Aligner delivery"],
    faqs: [],
    href: "/our-service/invisalign/",
  },
  {
    id: "dental-implant",
    slug: "dental-implants",
    title: "Dental Implant",
    shortCopy: "Dental implants have long been recognized by dental experts as the most effective dental..",
    fullDescription: "Dental implants have long been recognized by dental experts as the most effective dental..",
    image: "implant.webp",
    remoteImage: "https://www.zenithdentistry.lk/wp-content/uploads/2023/10/dental-implant.webp",
    category: "Restorative",
    benefits: ["Permanent tooth replacement", "Natural root function"],
    procedureSteps: ["Evaluation", "Implant placement"],
    faqs: [],
    href: "/our-service/dental-implants/",
  },
  {
    id: "orthodontics",
    slug: "orthodontics",
    title: "Orthodontics",
    shortCopy: "It is a specialized branch of dentistry that focuses on prevention as well as treatment..",
    fullDescription: "It is a specialized branch of dentistry that focuses on prevention as well as treatment..",
    image: "align.webp",
    remoteImage: "https://www.zenithdentistry.lk/wp-content/uploads/2023/10/orthodontics.webp",
    category: "Orthodontics",
    benefits: ["Bite correction", "Structural alignment"],
    procedureSteps: ["Evaluation", "Braces fitting"],
    faqs: [],
    href: "/our-service/orthodontics/",
  },
  {
    id: "dental-veneers",
    slug: "dental-veneers",
    title: "Dental veneers",
    shortCopy: "Veneers are laminates made up of ceramic, porcelain, composite bonding materials..",
    fullDescription: "Veneers are laminates made up of ceramic, porcelain, composite bonding materials..",
    image: "veneers.webp",
    remoteImage: "https://www.zenithdentistry.lk/wp-content/uploads/2023/10/dental-veneers.webp",
    category: "Cosmetic",
    benefits: ["Custom ceramic shells", "Discoloration correction"],
    procedureSteps: ["Smile design", "Veneer bonding"],
    faqs: [],
    href: "/our-service/dental-veneers/",
  },
  {
    id: "root-canal-treatment",
    slug: "root-canal-treatment",
    title: "Root canal treatment",
    shortCopy: "Root canal treatment saves your tooth from decay and disease and prevents your tooth from being extracted.",
    fullDescription: "Root canal treatment saves your tooth from decay and disease and prevents your tooth from being extracted.",
    image: "root-canal.webp",
    remoteImage: "https://www.zenithdentistry.lk/wp-content/uploads/2023/10/root-canel.webp",
    category: "Restorative",
    benefits: ["Saves natural tooth", "Relieves pain"],
    procedureSteps: ["Cleaning canals", "Crown fitting"],
    faqs: [],
    href: "/our-service/root-canal-treatment/",
  },
  {
    id: "pediatric",
    slug: "pediatric-dentistry",
    title: "Pediatric",
    shortCopy: "Our clinic was specifically designed to help children adapt to the area and eliminate the fear that often...",
    fullDescription: "Our clinic was specifically designed to help children adapt to the area and eliminate the fear that often...",
    image: "blog-brushing.webp",
    remoteImage: "https://www.zenithdentistry.lk/wp-content/uploads/2023/10/pediatric.webp",
    category: "Preventive",
    benefits: ["Anxiety-free care", "Child-friendly clinic"],
    procedureSteps: ["Gentle exam", "Plaque cleanup"],
    faqs: [],
    href: "/our-service/pediatric-dentistry/",
  },
  {
    id: "smile-makeover",
    slug: "smile-makeover",
    title: "Smile make over",
    shortCopy: "A smile makeover is a cosmetic procedure that improves the appearance of your teeth and gums...",
    fullDescription: "A smile makeover is a cosmetic procedure that improves the appearance of your teeth and gums...",
    image: "veneers.webp",
    remoteImage: "https://www.zenithdentistry.lk/wp-content/uploads/2023/10/smile-makeover.webp",
    category: "Cosmetic",
    benefits: ["Full smile enhancement", "Cosmetic symmetry"],
    procedureSteps: ["Digital design", "Restoration"],
    faqs: [],
    href: "/our-service/smile-makeover/",
  },
];

export const SERVICES_DATA: ServiceItem[] = ZENITH_HOMEPAGE_SERVICES;

export const DOCTORS_DATA = [
  {
    id: "dr-ahamed-fouzan",
    name: "Dr. Ahamed Fouzan",
    title: "Founder",
    designation: "Founder",
    qualifications: [
      "B.D.S. (Sri Lanka)",
      "Post Graduate Specialist in Implantology",
      "Member of International Team for Implantology (ITI)",
      "AAID Convocation 2018",
      "WCLI Associate Fellowship - 2023 Bengaluru",
    ],
    specialties: ["Dental Implants", "Laser Dentistry", "Cosmetic Dentistry", "Restorative Dentistry"],
    bio: "Dr. Fouzan began his dental career at Faculty Of Dental Sciences,University of Peradeniya, Kandy in 1997 earning his BDS (Bachelor in Dental Surgery) there in 2002. Spending five years of intense training in Peradeniya Dental Hospital and Kandy General hospital during his university career he chose to practice as full time private General Dental Practitioner, He became a dentist to help patients restore their smile and tooth function, because he feels it is a very gratifying goal to achieve.",
    image: "doctor.webp",
    remoteImage: "https://www.zenithdentistry.lk/wp-content/uploads/2023/10/our-doctor.webp",
    experienceYears: 16,
    href: "/dr-ahamed-fouzan/",
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "uta-boehlandt",
    patientName: "Uta Boehlandt",
    location: "Germany",
    quote: "I’ve been looking for a dentist for a long time. Nobody is as good as in this clinic. Clean, safe, with no waiting. Very professional. Without pain.",
    treatment: "Dental Care",
    rating: 5,
  },
  {
    id: "phyllis-swaris",
    patientName: "Phyllis Swaris",
    location: "Sri Lanka",
    quote: "Excellent treatment and care. Dr. Fouzan and his staff make you feel extremely comfortable. High hygiene standards.",
    treatment: "Cosmetic Restoration",
    rating: 5,
  },
  {
    id: "mariyam-wussa",
    patientName: "Mariyam Wussa",
    location: "Maldives",
    quote: "Wonderful experience at Zenith Dentistry! Pain-free root canal treatment and friendly staff.",
    treatment: "Root Canal Care",
    rating: 5,
  },
  {
    id: "tomoyo-li",
    patientName: "ToMoYo Li",
    location: "Japan",
    quote: "Clean, peaceful clinic with digital technology. Very smooth treatment. Thank you Dr. Fouzan!",
    treatment: "General Care",
    rating: 5,
  },
  {
    id: "shawn-angel",
    patientName: "Shawn Angel",
    location: "Australia",
    quote: "Got my teeth whitened and a crown fitted. Outstanding quality and professional service.",
    treatment: "Teeth Whitening",
    rating: 5,
  },
  {
    id: "roy-lumb",
    patientName: "Roy Lumb",
    location: "United Kingdom",
    quote: "Very impressed with the implant procedure. Professional staff, modern equipment, and no pain.",
    treatment: "Dental Implants",
    rating: 5,
  },
  {
    id: "julie-lee",
    patientName: "Julie Lee",
    location: "Singapore",
    quote: "The spa-like atmosphere really helped ease my dental anxiety. Best dental clinic!",
    treatment: "Invisalign",
    rating: 5,
  },
  {
    id: "isthuthi",
    patientName: "Isthuthi",
    location: "Sri Lanka",
    quote: "Friendly doctors, gentle treatment, zero waiting time, and clear explanations throughout my visit.",
    treatment: "Preventive Care",
    rating: 5,
  },
];

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: "digital-scanning",
    title: "Intraoral Digital Scan",
    description: "In-house digital 3D intraoral scanning for high precision diagnosis and clear aligner planning.",
    image: "clinic-3.jpg",
    highlight: "Digital Diagnostics",
  },
  {
    id: "inhouse-xray",
    title: "In-House Dental X-Rays",
    description: "In-house dental radiography providing instant imaging for accurate treatment planning.",
    image: "clinic-2.jpg",
    highlight: "OPG X-Ray",
  },
  {
    id: "spa-environment",
    title: "Designed for Calm",
    description: "Our unique space is designed to feel unlike a dental office. Every detail helps patients—young and old—feel at ease.",
    image: "clinic.jpg",
    highlight: "Spa-like Ambiance",
  },
  {
    id: "iso-sterilization",
    title: "ISO 9001:2015 Certified Clinic",
    description: "Strict ISO 9001:2015 quality management and sterilization standards.",
    image: "about.webp",
    highlight: "ISO Standard",
  },
];

export const GALLERY_IMAGES = [
  { url: "clinic.jpg", title: "Zenith Reception & Consultation Lounge", category: "Clinic Interior" },
  { url: "clinic-2.jpg", title: "State-of-the-Art Treatment Suite", category: "Clinic Interior" },
  { url: "clinic-3.jpg", title: "Intraoral Digital Scanning Suite", category: "Technology" },
  { url: "about.webp", title: "Spa-Like Patient Environment", category: "Clinic Interior" },
  { url: "hero.webp", title: "Patient-Centered Clinical Care", category: "Clinical" },
  { url: "implant.webp", title: "Dental Implants", category: "Treatments" },
  { url: "align.webp", title: "Invisalign Aligners", category: "Treatments" },
  { url: "veneers.webp", title: "Dental Veneers", category: "Treatments" },
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "brushing-techniques",
    slug: "brushing-techniques",
    title: "Brushing techniques",
    date: "01.10.24",
    author: "Zenith Clinical Team",
    category: "Hygiene",
    image: "blog-brushing.webp",
    summary: "Brushing techniques and oral hygiene advice from our clinical team.",
    content: [
      "Place your toothbrush at a 45-degree angle to your gums. Move the brush gently back and forth in short, circular strokes covering outer, inner, and chewing surfaces.",
      "Spend at least two full minutes brushing twice daily.",
    ],
    href: "/blog/brushing-techniques/",
  },
  {
    id: "bleeding-gums-causes",
    slug: "what-are-the-most-common-causes-of-bleeding-in-the-gums",
    title: "What causes bleeding gums?",
    date: "21.10.23",
    author: "Dr. Ahamed Fouzan",
    category: "Periodontics",
    image: "blog-gums.jpg",
    summary: "What are the most common causes of bleeding in the gums?",
    content: [
      "Healthy gums should not bleed during routine brushing or flossing. The most common cause of bleeding gums is plaque buildup along the gumline leading to gingivitis.",
    ],
    href: "/blog/what-are-the-most-common-causes-of-bleeding-in-the-gums/",
  },
  {
    id: "misaligned-teeth-solutions",
    slug: "how-do-you-deal-with-the-difficulties-of-misaligned-teeth",
    title: "Living with misaligned teeth",
    date: "16.10.23",
    author: "Zenith Orthodontics",
    category: "Orthodontics",
    image: "blog-align.jpg",
    summary: "How do you deal with the difficulties of misaligned teeth?",
    content: [
      "Crooked or misaligned teeth make effective cleaning difficult. Modern aligner systems like Invisalign allow gentle realignment.",
    ],
    href: "/blog/how-do-you-deal-with-the-difficulties-of-misaligned-teeth/",
  },
];
