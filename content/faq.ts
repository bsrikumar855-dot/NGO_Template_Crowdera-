/**
 * content/faq.ts
 *
 * Reusable FAQ items for donate and information pages.
 */

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "faq-80g",
    question: "Is my donation tax-exempt?",
    answer: "Yes, all donations made to Crowdera are eligible for a 50% tax exemption under Section 80G of the Indian Income Tax Act. A tax receipt will be emailed to you immediately after payment is confirmed.",
  },
  {
    id: "faq-international",
    question: "Do you accept international donations?",
    answer: "Currently, we only accept INR donations through local payment channels (UPI, local cards, Net Banking) in compliance with local FCRA regulations. We are working on adding FCRA-compliant international card gateways soon.",
  },
  {
    id: "faq-recurrence",
    question: "Can I set up a monthly recurring sponsorship?",
    answer: "Yes, our production checkout allows you to toggle recurring monthly billing. This mock checkout demonstrates single payments, but real campaigns support monthly auto-debit via UPI autopay and card mandates.",
  },
  {
    id: "faq-tracking",
    question: "How can I track the impact of my donation?",
    answer: "Every donor is assigned an Impact Account. You will receive quarterly updates containing student report cards, learning hub newsletters, and photos from the digital classroom setups you funded.",
  },
  {
    id: "faq-admin-costs",
    question: "What percentage of my donation goes to administrative costs?",
    answer: "Only 8% of all funds raised goes toward administrative operations, licensing, and fundraising campaigns combined. The remaining 92% is deployed directly on the ground for programs and children.",
  },
];
