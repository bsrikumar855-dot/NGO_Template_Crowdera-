/**
 * app/volunteer/VolunteerContent.tsx
 *
 * Client content component for the Volunteer signup page.
 * Implements clean glassmorphic dark style, form fields, and success state.
 */
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, BookOpen, Compass, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/core/Container";
import { Section } from "@/components/core/Section";
import { Heading } from "@/components/core/Heading";
import { Text } from "@/components/core/Text";
import { Badge } from "@/components/core/Badge";
import { Button } from "@/components/core/Button";
import { Breadcrumb } from "@/components/core/Breadcrumb";
import { organization } from "@/content/organization";

export default function VolunteerContent() {
  // Form Fields
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [interest, setInterest] = React.useState("teaching");
  const [message, setMessage] = React.useState("");
  
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = "Full name is required.";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Please enter a valid email address.";
    if (!phone.trim() || phone.length < 10) newErrors.phone = "Please enter a valid phone number.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  return (
    <Section padding="xl" className="pt-24 min-h-screen bg-[hsl(240_20%_4%)]">
      <Container size="lg">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: "Volunteer", href: "/volunteer" }]} className="mb-6" />

        {isSubmitted ? (
          /* SUCCESS STATE */
          <div className="max-w-2xl mx-auto bg-[hsl(240_16%_8%)] border border-[hsl(240_12%_18%)] rounded-3xl p-8 text-center shadow-elevation-4 animate-fade-in">
            <div className="h-16 w-16 bg-[hsl(38_95%_54%)]/10 text-[hsl(38_95%_54%)] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <Heading as="h1" size="2xl" className="mb-3 text-white">
              Application Submitted!
            </Heading>
            <Text className="text-neutral-400 max-w-md mx-auto mb-8">
              Thank you for choosing to volunteer with {organization.name}. Our coordination team will review your application and reach out to you at {email} within 2-3 business days.
            </Text>

            {/* Application Summary */}
            <div className="bg-[hsl(240_14%_11%)] rounded-2xl p-6 text-left border border-[hsl(240_12%_18%)] mb-8">
              <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                Application Details
              </span>
              <div className="mt-3 flex flex-col gap-2.5 text-sm">
                <div className="flex justify-between border-b border-[hsl(240_12%_18%)]/60 pb-2">
                  <span className="text-neutral-400">Applicant Name</span>
                  <span className="font-semibold text-white">{name}</span>
                </div>
                <div className="flex justify-between border-b border-[hsl(240_12%_18%)]/60 pb-2">
                  <span className="text-neutral-400">Email Address</span>
                  <span className="font-semibold text-white">{email}</span>
                </div>
                <div className="flex justify-between border-b border-[hsl(240_12%_18%)]/60 pb-2">
                  <span className="text-neutral-400">Phone Number</span>
                  <span className="font-semibold text-white">{phone}</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-neutral-400">Area of Interest</span>
                  <span className="font-semibold text-[hsl(38_95%_54%)] capitalize">
                    {interest}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="primary">Return to Homepage</Button>
              </Link>
              <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                Submit Another Application
              </Button>
            </div>
          </div>
        ) : (
          /* FORM FLOW */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Input Selection Column (Span 7) */}
            <div className="lg:col-span-7 flex flex-col gap-8 bg-[hsl(240_16%_8%/0.60)] border border-[hsl(240_12%_18%)] backdrop-blur-md rounded-3xl p-8 shadow-elevation-3">
              <div>
                <Badge variant="secondary" size="sm" className="mb-2">Join Our Team</Badge>
                <Heading as="h1" size="2xl" className="text-white">
                  Become a Volunteer
                </Heading>
                <Text className="text-neutral-400 mt-2">
                  Give your time, skills, and heart. Help us bridge the educational gap and guide the next generation of rural scholars.
                </Text>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="vol-name" className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    id="vol-name"
                    type="text"
                    placeholder="e.g. Aisha Patel"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={cn(
                      "w-full px-4 py-2.5 rounded-xl text-sm border bg-[hsl(240_14%_11%)] text-white focus:outline-none focus:ring-2",
                      errors.name ? "border-red-500 focus:ring-red-500/20" : "border-[hsl(240_12%_18%)] focus:ring-[hsl(38_95%_54%)]/20 focus:border-[hsl(38_95%_54%)]"
                    )}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="vol-email" className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      id="vol-email"
                      type="email"
                      placeholder="e.g. aisha@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={cn(
                        "w-full px-4 py-2.5 rounded-xl text-sm border bg-[hsl(240_14%_11%)] text-white focus:outline-none focus:ring-2",
                        errors.email ? "border-red-500 focus:ring-red-500/20" : "border-[hsl(240_12%_18%)] focus:ring-[hsl(38_95%_54%)]/20 focus:border-[hsl(38_95%_54%)]"
                      )}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="vol-phone" className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="vol-phone"
                      type="tel"
                      placeholder="e.g. 8122456608"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={cn(
                        "w-full px-4 py-2.5 rounded-xl text-sm border bg-[hsl(240_14%_11%)] text-white focus:outline-none focus:ring-2",
                        errors.phone ? "border-red-500 focus:ring-red-500/20" : "border-[hsl(240_12%_18%)] focus:ring-[hsl(38_95%_54%)]/20 focus:border-[hsl(38_95%_54%)]"
                      )}
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="vol-interest" className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    Primary Area of Interest *
                  </label>
                  <select
                    id="vol-interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl text-sm border border-[hsl(240_12%_18%)] bg-[hsl(240_14%_11%)] text-white focus:outline-none focus:ring-2 focus:ring-[hsl(38_95%_54%)]/20 focus:border-[hsl(38_95%_54%)]"
                  >
                    <option value="teaching">Teaching & Digital Literacy Support</option>
                    <option value="mentoring">One-on-One Student Mentoring</option>
                    <option value="events">Event Coordination & Campaigns</option>
                    <option value="admin">Operations & Administrative Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="vol-message" className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    Why do you want to join us? (Optional)
                  </label>
                  <textarea
                    id="vol-message"
                    rows={4}
                    placeholder="Tell us a bit about yourself and your motivations..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl text-sm border border-[hsl(240_12%_18%)] bg-[hsl(240_14%_11%)] text-white focus:outline-none focus:ring-2 focus:ring-[hsl(38_95%_54%)]/20 focus:border-[hsl(38_95%_54%)]"
                  />
                </div>

                <Button variant="primary" size="xl" fullWidth type="submit">
                  Submit Volunteer Application
                </Button>
              </form>
            </div>

            {/* Right: Info Sidebar (Span 5) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Image box */}
              <div className="relative rounded-3xl overflow-hidden border border-[hsl(240_12%_18%)] aspect-[4/3] w-full">
                <Image
                  src="/images/generated/about.png"
                  alt="Young Indian volunteers reading storybooks with children in a community classroom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Roles Description */}
              <div className="bg-[hsl(240_16%_8%)] border border-[hsl(240_12%_18%)] rounded-3xl p-6 flex flex-col gap-6">
                <Heading as="h3" size="sm" className="text-white">
                  How You Can Make an Impact
                </Heading>

                <div className="flex flex-col gap-4">
                  <div className="flex gap-3">
                    <BookOpen className="h-5 w-5 text-[hsl(38_95%_54%)] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Teach & Inspire</h4>
                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                        Conduct weekly subject tutoring or guide children in using learning tablets at our regional learning centres.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Compass className="h-5 w-5 text-[hsl(38_95%_54%)] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Career Guidance</h4>
                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                        Mentor high school scholars, assisting them in mapping out college entries, tech tracks, or competitive exams.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Users className="h-5 w-5 text-[hsl(38_95%_54%)] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Community Outreach</h4>
                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                        Help organize solar classroom inaugurations, regional health check-ups, and student sports campaigns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
