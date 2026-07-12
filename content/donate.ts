/**
 * content/donate.ts
 *
 * Content configurations for the /donate flow page.
 * Drives donation tiers, fund allocation, and messaging.
 */

export interface DonationTier {
  id: string;
  amount: number;
  label: string;
  description: string;
  impactLabel: string;
  suggested?: boolean;
}

export interface FundAllocationItem {
  id: string;
  label: string;
  percentage: number;
  color: string;
  description: string;
}

export interface DonateConfig {
  seo: {
    title: string;
    description: string;
  };
  missionSummary: {
    headline: string;
    description: string;
    taxExemptNote: string;
  };
  donationTiers: DonationTier[];
  allocationTitle: string;
  allocationSubtitle: string;
  allocations: FundAllocationItem[];
  paymentMocks: {
    methods: Array<{ id: string; label: string; icon: string }>;
    successMessage: string;
  };
}

export const donateConfig: DonateConfig = {
  seo: {
    title: "Support Our Mission — Donate to Crowdera",
    description: "Every contribution directly funds scholarships, books, and digital tools for children from underprivileged households.",
  },
  missionSummary: {
    headline: "Your Gift Transforms Lives Through Education",
    description: "We are committed to radical financial transparency. 92% of your donation is deployed directly to classroom programs, scholarship funds, and solar-power setups in regional schools.",
    taxExemptNote: "All donations are eligible for 50% Tax Deduction under Section 80G of the Income Tax Act.",
  },
  donationTiers: [
    {
      id: "tier-meal",
      amount: 500,
      label: "Nutritious Meals",
      description: "Provides daily mid-day meals for one child for an entire month, ensuring health and school attendance.",
      impactLabel: "1 month of meals",
    },
    {
      id: "tier-kit",
      amount: 1500,
      label: "Schooling Kit",
      description: "Funds educational learning materials including text-books, stationary, uniforms, and shoes for a student.",
      impactLabel: "Complete learning kit",
      suggested: true,
    },
    {
      id: "tier-scholarship",
      amount: 5000,
      label: "Term Scholarship",
      description: "Covers tuition fees, personal mentorship, and local school transport costs for an entire school term.",
      impactLabel: "1 term scholarship",
    },
    {
      id: "tier-digital",
      amount: 15000,
      label: "Classroom Tablet Kit",
      description: "Sponsors three high-performance tablets loaded with offline learning materials for a rural solar classroom.",
      impactLabel: "3 educational tablets",
    },
  ],
  allocationTitle: "Where Your Money Goes",
  allocationSubtitle: "Radical transparency is our core promise. Here is how your donation is allocated.",
  allocations: [
    {
      id: "alloc-prog",
      label: "Direct Educational Programs",
      percentage: 92,
      color: "bg-primary",
      description: "Scholarships, school materials, digital centers, teacher training, and meals.",
    },
    {
      id: "alloc-admin",
      label: "Administration & Auditing",
      percentage: 5,
      color: "bg-neutral-500",
      description: "Operational costs, regional coordination, annual audits, and program monitoring.",
    },
    {
      id: "alloc-fund",
      label: "Fundraising Support",
      percentage: 3,
      color: "bg-secondary",
      description: "Platform maintenance, outreach campaigns, and secure payment processing.",
    },
  ],
  paymentMocks: {
    methods: [
      { id: "upi", label: "UPI / QR Code", icon: "Smartphone" },
      { id: "card", label: "Credit & Debit Cards", icon: "CreditCard" },
      { id: "net", label: "Net Banking", icon: "Building" },
    ],
    successMessage: "Thank you for your generous support! Your mock donation has been successfully processed.",
  },
};
