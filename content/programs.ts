/**
 * content/programs.ts
 *
 * Detailed content configurations for individual programs.
 * Drives both the /programs grid and /programs/[slug] dynamic detail pages.
 */
import type { ProgramItem } from "@/types";

export interface ProgramDetailConfig {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  tags: string[];
  featured: boolean;
  overview: string[];
  objectives: string[];
  stats: {
    theme: "primary" | "dark" | "secondary";
    items: Array<{
      id: string;
      value: number;
      suffix?: string;
      prefix?: string;
      label: string;
      description: string;
      icon: string;
    }>;
  };
  gallery: {
    items: Array<{
      id: string;
      type: "image";
      media: {
        src: string;
        alt: string;
        width: number;
        height: number;
      };
      caption: string;
      category: string;
    }>;
  };
  testimonials: {
    items: Array<{
      id: string;
      quote: string;
      authorName: string;
      authorRole: string;
      authorOrg: string;
      authorImage?: {
        src: string;
        alt: string;
        width: number;
        height: number;
      };
      rating?: number;
    }>;
  };
  cta: {
    theme: "primary" | "secondary" | "dark" | "image";
    badge?: string;
    headline: string;
    subheadline: string;
    primaryCta: {
      label: string;
      href: string;
      variant?: "primary" | "secondary" | "ghost" | "donate" | "link";
    };
  };
}

export const programsList: ProgramDetailConfig[] = [
  {
    id: "program-scholarships",
    slug: "scholarships",
    title: "Merit & Need Scholarships",
    subtitle: "Opening doors to higher education for bright minds from underserved backgrounds.",
    category: "Education",
    image: {
      src: "/images/programs/scholarships.jpg",
      alt: "Students studying in a classroom",
      width: 800,
      height: 500,
    },
    tags: ["Scholarships", "BPL Families", "K-12 Support"],
    featured: true,
    overview: [
      "Our Merit & Need Scholarships are designed to support children from families below the poverty line (BPL). We cover tuition fees, uniforms, text-books, transport, and a daily nutritious mid-day meal.",
      "The program selects candidates based on a combined index of financial necessity and academic engagement. Each child is paired with a coordinator to monitor progress and support them personally throughout the school term."
    ],
    objectives: [
      "Reduce school dropout rates by 80% among BPL families.",
      "Support students through pre-university and university-level courses.",
      "Equip students with mentorship networks to transition to careers."
    ],
    stats: {
      theme: "primary",
      items: [
        {
          id: "ps-1",
          value: 3200,
          suffix: "+",
          label: "Scholarships Active",
          description: "Currently funded across 6 states",
          icon: "GraduationCap"
        },
        {
          id: "ps-2",
          value: 94,
          suffix: "%",
          label: "Retention Rate",
          description: "Of enrolled students finishing secondary school",
          icon: "TrendingUp"
        }
      ]
    },
    gallery: {
      items: [
        {
          id: "psg-1",
          type: "image",
          media: { src: "/images/gallery/classroom-1.jpg", alt: "Classroom Study", width: 800, height: 600 },
          caption: "Students studying together in our central learning center.",
          category: "Classroom"
        },
        {
          id: "psg-2",
          type: "image",
          media: { src: "/images/gallery/children-1.jpg", alt: "Happy Graduates", width: 800, height: 600 },
          caption: "Scholarship graduates at their graduation ceremony.",
          category: "Graduation"
        }
      ]
    },
    testimonials: {
      items: [
        {
          id: "pst-1",
          quote: "Vidyalaya gave me not just a scholarship, but a belief that my dreams are valid and achievable.",
          authorName: "Priya Sharma",
          authorRole: "Scholarship Recipient",
          authorOrg: "Now studying Computer Science at IIT Bombay",
          authorImage: { src: "/images/testimonials/priya.jpg", alt: "Priya Sharma", width: 80, height: 80 },
          rating: 5
        }
      ]
    },
    cta: {
      theme: "primary",
      badge: "Sponsor a Scholar",
      headline: "Sponsor a Student's Education Today",
      subheadline: "For just ₹1,500/month, you can fund a child's complete schooling fees, books, and nutrition.",
      primaryCta: {
        label: "Sponsor Now",
        href: "/donate?tier=student",
        variant: "donate"
      }
    }
  },
  {
    id: "program-digital",
    slug: "digital",
    title: "Digital Classroom Initiative",
    subtitle: "Bridging the digital divide by building high-tech, solar-powered learning centers in rural schools.",
    category: "Technology",
    image: {
      src: "/images/programs/digital-classrooms.jpg",
      alt: "Students using tablets in a classroom",
      width: 800,
      height: 500,
    },
    tags: ["EdTech", "Rural Schools", "Digital Equity"],
    featured: true,
    overview: [
      "Access to computers and the internet is no longer a luxury; it is a fundamental tool for modern learning. Yet, thousands of rural government schools in India lack both stable power and digital infrastructure.",
      "The Digital Classroom Initiative installs solar panels, offline server libraries, projector setups, and 30 learning tablets per school. We train existing teachers to integrate interactive digital media into their daily curricula."
    ],
    objectives: [
      "Equip rural government schools with stable clean solar power.",
      "Provide offline educational content matching state board syllabi.",
      "Conduct weekly computer literacy sessions for student cohorts."
    ],
    stats: {
      theme: "secondary",
      items: [
        {
          id: "pd-1",
          value: 47,
          label: "Digital Hubs Built",
          description: "Fully active solar learning centers",
          icon: "Cpu"
        },
        {
          id: "pd-2",
          value: 5800,
          suffix: "+",
          label: "Digital Students",
          description: "Using tablets weekly in rural areas",
          icon: "Laptop"
        }
      ]
    },
    gallery: {
      items: [
        {
          id: "pdg-1",
          type: "image",
          media: { src: "/images/gallery/classroom-2.jpg", alt: "Tablet Use", width: 800, height: 600 },
          caption: "Students exploring science concepts on interactive learning tablets.",
          category: "Technology"
        }
      ]
    },
    testimonials: {
      items: [
        {
          id: "pdt-1",
          quote: "Using the tablet helped me understand biology through videos. It was much easier than memorizing text.",
          authorName: "Amit Kadam",
          authorRole: "Class IX Student",
          authorOrg: "Zilla Parishad School, Amravati",
          rating: 5
        }
      ]
    },
    cta: {
      theme: "dark",
      badge: "Fund a Server",
      headline: "Bring Digital Education to Rural India",
      subheadline: "Help us fund digital kits, solar setups, or offline servers for rural schools.",
      primaryCta: {
        label: "Fund a Classroom",
        href: "/donate?tier=classroom",
        variant: "donate"
      }
    }
  },
  {
    id: "program-mentorship",
    slug: "mentorship",
    title: "Career Mentorship Program",
    subtitle: "Guiding high schoolers to professional careers through weekly mentorship with industry experts.",
    category: "Mentorship",
    image: {
      src: "/images/programs/mentorship.jpg",
      alt: "A mentor advising a student",
      width: 800,
      height: 500,
    },
    tags: ["Career Planning", "Youth Development", "Mentorship"],
    featured: true,
    overview: [
      "Academic support alone is not enough to secure white-collar employment. Students from underprivileged backgrounds lack access to career role models and professional soft-skills guidance.",
      "This program pairs high school students (grades 9-12) with corporate and professional mentors. Over a one-year period, they work together on goal-setting, English speaking, resume building, and college admissions preparation."
    ],
    objectives: [
      "Pair 1,000+ students with professional mentors every year.",
      "Build confidence, digital presentation, and soft skills.",
      "Assist students in college applications and choosing vocational paths."
    ],
    stats: {
      theme: "primary",
      items: [
        {
          id: "pm-1",
          value: 1200,
          suffix: "+",
          label: "Active Mentors",
          description: "From top global tech and services firms",
          icon: "Handshake"
        },
        {
          id: "pm-2",
          value: 88,
          suffix: "%",
          label: "College Transitions",
          description: "Of mentored students entering higher education",
          icon: "GraduationCap"
        }
      ]
    },
    gallery: {
      items: [
        {
          id: "pmg-1",
          type: "image",
          media: { src: "/images/gallery/volunteers-1.jpg", alt: "Mentor Session", width: 800, height: 600 },
          caption: "Weekend mentorship roundtable discussion.",
          category: "Sessions"
        }
      ]
    },
    testimonials: {
      items: [
        {
          id: "pmt-1",
          quote: "Watching a first-generation learner code their first web app was the most rewarding experience of my career.",
          authorName: "Rajan Mehta",
          authorRole: "Corporate Mentor",
          authorOrg: "Senior Staff Engineer, Tech Services",
          authorImage: { src: "/images/testimonials/rajan.jpg", alt: "Rajan Mehta", width: 80, height: 80 },
          rating: 5
        }
      ]
    },
    cta: {
      theme: "secondary",
      badge: "Join as Mentor",
      headline: "Volunteering is Just as Valuable",
      subheadline: "Spare 2 hours a week to change a high schooler's professional trajectory.",
      primaryCta: {
        label: "Become a Mentor",
        href: "/volunteer",
        variant: "primary"
      }
    }
  },
  {
    id: "program-skills",
    slug: "skills",
    title: "Skill Development Labs",
    subtitle: "Vocational training courses to secure immediate, high-growth employment for dropouts.",
    category: "Vocational",
    image: {
      src: "/images/programs/skills.jpg",
      alt: "Youth studying in a vocational lab",
      width: 800,
      height: 500,
    },
    tags: ["Vocational training", "Dropouts Support", "Employment Labs"],
    featured: false,
    overview: [
      "For school dropouts and youth unable to proceed to university, acquiring vocational skills is the fastest path to financial independence and lifting their families out of poverty.",
      "Vidyalaya operates skill labs specializing in entry-level coding, digital design, tailoring, hardware repair, and hospitality basics. All labs are aligned with national industry certifications."
    ],
    objectives: [
      "Provide 6-month vocational certificates to regional youth.",
      "Ensure 80% direct placement rate through partnerships.",
      "Encourage micro-entrepreneurship for tailored trade graduates."
    ],
    stats: {
      theme: "dark",
      items: [
        {
          id: "psl-1",
          value: 1500,
          suffix: "+",
          label: "Graduates Placed",
          description: "With verified monthly entry salaries",
          icon: "Briefcase"
        },
        {
          id: "psl-2",
          value: 82,
          suffix: "%",
          label: "Placement Rate",
          description: "Within 3 months of graduation",
          icon: "ShieldCheck"
        }
      ]
    },
    gallery: {
      items: [
        {
          id: "pslg-1",
          type: "image",
          media: { src: "/images/gallery/event-2.jpg", alt: "Skill Lab graduation", width: 800, height: 600 },
          caption: "Youth receiving certificate at vocational graduation.",
          category: "Graduation"
        }
      ]
    },
    testimonials: {
      items: [
        {
          id: "pslt-1",
          quote: "The 6-month hardware repair course got me a job at a local service center. I now support my mother and siblings.",
          authorName: "Ramesh Pawar",
          authorRole: "Lab Graduate",
          authorOrg: "Technician, Service Corp",
          rating: 4
        }
      ]
    },
    cta: {
      theme: "primary",
      badge: "Fund a Lab",
      headline: "Equip Youth with Job-Ready Skills",
      subheadline: "Support raw material supply, computers, or sewing machines for our vocational hubs.",
      primaryCta: {
        label: "Support a Lab",
        href: "/donate?tier=lab",
        variant: "donate"
      }
    }
  }
];
