/**
 * app/donate/page.tsx
 *
 * Config-driven donation checkout flow.
 * Fully interactive frontend simulation showing tiers, custom amounts,
 * fund allocation graphs, payment options, FAQ list, and success cards.
 */
"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import {
  Heart,
  CheckCircle2,
  Smartphone,
  CreditCard,
  Building,
  HelpCircle,
  TrendingUp,
  Award,
  ArrowRight,
  ChevronDown,
  Gift,
} from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";
import { Container } from "@/components/core/Container";
import { Section } from "@/components/core/Section";
import { Heading } from "@/components/core/Heading";
import { Text } from "@/components/core/Text";
import { Badge } from "@/components/core/Badge";
import { Button } from "@/components/core/Button";
import { Input } from "@/components/core/Input";
import { Breadcrumb } from "@/components/core/Breadcrumb";
import { donateConfig, DonationTier } from "@/content/donate";
import { faqItems } from "@/content/faq";

export default function DonatePage() {
  const searchParams = useSearchParams();
  const preselectedTier = searchParams.get("tier");

  // Determine starting amount based on preselected tier
  const getInitialAmount = () => {
    if (preselectedTier) {
      const match = donateConfig.donationTiers.find((t) => t.id.includes(preselectedTier));
      if (match) return match.amount;
    }
    const defaultSuggested = donateConfig.donationTiers.find((t) => t.suggested);
    return defaultSuggested ? defaultSuggested.amount : 1500;
  };

  const [selectedAmount, setSelectedAmount] = React.useState<number>(getInitialAmount());
  const [customAmount, setCustomAmount] = React.useState<string>("");
  const [isCustom, setIsCustom] = React.useState<boolean>(false);

  // Form Fields
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pan, setPan] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState("upi");
  const [isRecurring, setIsRecurring] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  // Checkout State
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [activeFaq, setActiveFaq] = React.useState<string | null>(null);

  // Sync preselected query parameter
  React.useEffect(() => {
    if (preselectedTier) {
      const match = donateConfig.donationTiers.find((t) => t.id.includes(preselectedTier));
      if (match) {
        setSelectedAmount(match.amount);
        setIsCustom(false);
      }
    }
  }, [preselectedTier]);

  const activeAmount = isCustom ? Number(customAmount) || 0 : selectedAmount;

  // Compute dynamic impact text
  const getImpactPreviewText = (amount: number) => {
    if (amount <= 0) return "Please enter a donation amount.";
    if (amount < 500) {
      return `Your gift of ${formatCurrency(amount)} will contribute to our general learning kit fund.`;
    }
    if (amount >= 500 && amount < 1500) {
      const meals = Math.floor(amount / 500);
      return `Your gift of ${formatCurrency(amount)} will provide daily nutritious mid-day meals to ${meals} child${meals > 1 ? "ren" : ""} for a full month.`;
    }
    if (amount >= 1500 && amount < 5000) {
      const kits = Math.floor(amount / 1500);
      return `Your gift of ${formatCurrency(amount)} will distribute ${kits} complete school kit${kits > 1 ? "s" : ""} (uniform, shoes, text-books, bag) to children in need.`;
    }
    if (amount >= 5000 && amount < 15000) {
      const terms = Math.floor(amount / 5000);
      return `Your gift of ${formatCurrency(amount)} will fund ${terms} full term scholarship${terms > 1 ? "s" : ""} covering tuition and mentorship.`;
    }
    const tablets = Math.floor(amount / 5000);
    return `Your gift of ${formatCurrency(amount)} will purchase ${tablets} digital learning tablets, accelerating literacy inside rural schools.`;
  };

  const handleSelectTier = (tier: DonationTier) => {
    setSelectedAmount(tier.amount);
    setIsCustom(false);
  };

  const handleCustomAmountChange = (val: string) => {
    // Only allow numbers
    const clean = val.replace(/[^0-9]/g, "");
    setCustomAmount(clean);
    setIsCustom(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Please enter a valid email address.";
    if (activeAmount <= 0) newErrors.amount = "Donation amount must be greater than zero.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  const getPaymentIcon = (methodId: string) => {
    if (methodId === "upi") return <Smartphone className="h-5 w-5" />;
    if (methodId === "card") return <CreditCard className="h-5 w-5" />;
    return <Building className="h-5 w-5" />;
  };

  return (
    <Section padding="xl" surface="default" className="pt-24 min-h-screen">
      <Container size="lg">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: "Donate", href: "/donate" }]} className="mb-6" />

        {/* Dynamic content rendering */}
        {isSubmitted ? (
          /* SUCCESS STATE */
          <div className="max-w-2xl mx-auto bg-surface border border-border rounded-3xl p-8 text-center shadow-elevation-4 animate-fade-in">
            <div className="h-16 w-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <Heading as="h1" size="2xl" className="mb-3">
              Donation Successful!
            </Heading>
            <Text className="text-muted-foreground max-w-md mx-auto mb-8">
              {donateConfig.paymentMocks.successMessage}
            </Text>

            {/* Receipt Summary */}
            <div className="bg-muted/40 rounded-2xl p-6 text-left border border-border mb-8">
              <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                Receipt Summary
              </span>
              <div className="mt-3 flex flex-col gap-2.5 text-sm">
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span className="text-muted-foreground">Donor Name</span>
                  <span className="font-semibold text-foreground">{name}</span>
                </div>
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span className="text-muted-foreground">Email Address</span>
                  <span className="font-semibold text-foreground">{email}</span>
                </div>
                {pan && (
                  <div className="flex justify-between border-b border-border/60 pb-2">
                    <span className="text-muted-foreground">PAN Card Number</span>
                    <span className="font-semibold text-foreground uppercase">{pan}</span>
                  </div>
                )}
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span className="text-muted-foreground">Gift Frequency</span>
                  <span className="font-semibold text-foreground">
                    {isRecurring ? "Monthly Recurring" : "One-Time"}
                  </span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-muted-foreground font-semibold">Total Amount</span>
                  <span className="font-bold text-primary text-lg">
                    {formatCurrency(activeAmount)}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="primary">Return to Homepage</Button>
              </Link>
              <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                Make Another Gift
              </Button>
            </div>
          </div>
        ) : (
          /* CHECKOUT FLOW FORM */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Input Selection Column (Span 2) */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {/* Mission Promise Card */}
              <div className="bg-primary/5 border border-primary/20 rounded-3xl p-6 flex gap-4">
                <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <Heading as="h2" size="sm" className="text-primary font-bold">
                    {donateConfig.missionSummary.headline}
                  </Heading>
                  <Text size="sm" className="text-muted-foreground mt-2 leading-relaxed">
                    {donateConfig.missionSummary.description}
                  </Text>
                  <span className="block mt-3 text-[10px] text-primary/80 font-semibold bg-primary/10 px-2.5 py-1 rounded-md self-start w-fit">
                    {donateConfig.missionSummary.taxExemptNote}
                  </span>
                </div>
              </div>

              {/* Amount Selection Block */}
              <div className="flex flex-col gap-6">
                <Heading as="h3" size="md">
                  1. Select Donation Amount
                </Heading>

                {/* Grid of Tiers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {donateConfig.donationTiers.map((tier) => {
                    const isSelected = !isCustom && selectedAmount === tier.amount;
                    return (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => handleSelectTier(tier)}
                        className={cn(
                          "p-5 rounded-2xl text-left border flex flex-col justify-between transition-all duration-base",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                          isSelected
                            ? "border-primary bg-primary/5 ring-2 ring-primary/30"
                            : "border-border bg-surface hover:bg-muted/40"
                        )}
                      >
                        <div className="flex justify-between items-start w-full mb-1">
                          <span className="font-bold text-xl text-foreground">
                            {formatCurrency(tier.amount)}
                          </span>
                          {tier.suggested && (
                            <Badge variant="secondary" size="sm">
                              Suggested
                            </Badge>
                          )}
                        </div>
                        <p className="font-semibold text-xs text-primary mb-2">
                          {tier.label}
                        </p>
                        <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">
                          {tier.description}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Custom Amount Field */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-muted-foreground">
                    ₹
                  </div>
                  <input
                    type="text"
                    placeholder="Enter custom amount"
                    value={isCustom ? customAmount : ""}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    className={cn(
                      "w-full pl-8 pr-4 py-3.5 rounded-2xl text-sm border font-semibold",
                      isCustom ? "border-primary ring-2 ring-primary/20 bg-primary/5" : "border-border bg-surface",
                      "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    )}
                    aria-label="Enter custom donation amount"
                  />
                  {isCustom && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-primary">
                      Custom Active
                    </span>
                  )}
                </div>
                {errors.amount && (
                  <p className="text-xs text-red-500 font-semibold">{errors.amount}</p>
                )}
              </div>

              {/* Donor Form Details */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <Heading as="h3" size="md">
                  2. Enter Your Details
                </Heading>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Aisha Patel"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={cn(
                        "w-full px-4 py-2.5 rounded-xl text-sm border bg-surface",
                        errors.name ? "border-red-500 focus:ring-red-500/20" : "border-border focus:ring-primary/20 focus:border-primary",
                        "focus:outline-none focus:ring-2"
                      )}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. aisha@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={cn(
                        "w-full px-4 py-2.5 rounded-xl text-sm border bg-surface",
                        errors.email ? "border-red-500 focus:ring-red-500/20" : "border-border focus:ring-primary/20 focus:border-primary",
                        "focus:outline-none focus:ring-2"
                      )}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      PAN Card Number (Optional)
                    </label>
                    <span className="text-[10px] text-muted-foreground">Required for 80G tax receipt</span>
                  </div>
                  <input
                    type="text"
                    placeholder="ABCDE1234F"
                    value={pan}
                    onChange={(e) => setPan(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl text-sm border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary uppercase"
                  />
                </div>

                {/* Recurrence Toggle */}
                <div className="flex items-center gap-3 p-4 bg-muted/40 rounded-2xl border border-border/80">
                  <input
                    type="checkbox"
                    id="recurring"
                    checked={isRecurring}
                    onChange={(e) => setIsRecurring(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="recurring" className="text-xs sm:text-sm text-foreground font-semibold cursor-pointer">
                    Make this a recurring monthly donation
                  </label>
                </div>

                {/* Payment Options Selector */}
                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                    3. Select Payment Method
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    {donateConfig.paymentMocks.methods.map((method) => {
                      const isSelected = paymentMethod === method.id;
                      return (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setPaymentMethod(method.id)}
                          className={cn(
                            "flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border text-sm font-semibold transition-all",
                            isSelected
                              ? "border-primary bg-primary text-primary-foreground shadow"
                              : "border-border bg-surface text-muted-foreground hover:bg-muted"
                          )}
                        >
                          {getPaymentIcon(method.id)}
                          <span>{method.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit Checkout Button */}
                <Button variant="donate" size="xl" fullWidth type="submit">
                  Proceed to Donation of {formatCurrency(activeAmount)}
                </Button>
              </form>
            </div>

            {/* Right: Allocation Sidebar (Span 1) */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              {/* Impact Preview Card */}
              <div className="bg-surface border border-border rounded-3xl p-6 shadow-elevation-1">
                <div className="flex items-center gap-2 mb-3">
                  <Gift className="h-5 w-5 text-primary" />
                  <span className="text-xs font-bold text-foreground uppercase">Your Impact</span>
                </div>
                <div className="p-4 bg-muted/50 rounded-2xl border border-border/60">
                  <p className="text-sm font-semibold text-foreground leading-relaxed">
                    {getImpactPreviewText(activeAmount)}
                  </p>
                </div>
              </div>

              {/* Fund Allocation breakdown */}
              <div className="bg-surface border border-border rounded-3xl p-6 shadow-elevation-1 flex flex-col gap-4">
                <div>
                  <Heading as="h4" size="xs">
                    {donateConfig.allocationTitle}
                  </Heading>
                  <Text size="xs" className="text-muted-foreground mt-1">
                    {donateConfig.allocationSubtitle}
                  </Text>
                </div>

                {/* Bar Graph Visualizer */}
                <div className="flex h-5 rounded-full overflow-hidden w-full bg-muted mt-2">
                  {donateConfig.allocations.map((alloc) => (
                    <div
                      key={alloc.id}
                      className={cn(alloc.color, "h-full")}
                      style={{ width: `${alloc.percentage}%` }}
                      title={`${alloc.label}: ${alloc.percentage}%`}
                    />
                  ))}
                </div>

                {/* Legends */}
                <div className="flex flex-col gap-3 text-xs mt-2">
                  {donateConfig.allocations.map((alloc) => (
                    <div key={alloc.id} className="flex gap-2.5 items-start">
                      <span className={cn("h-3.5 w-3.5 rounded-md flex-shrink-0 mt-0.5", alloc.color)} />
                      <div>
                        <div className="flex justify-between font-semibold text-foreground">
                          <span>{alloc.label}</span>
                          <span>{alloc.percentage}%</span>
                        </div>
                        <p className="text-[10px] text-muted-foreground mt-0.5 leading-relaxed">
                          {alloc.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── FAQ Section at bottom ────────────────────────────────── */}
        <div className="mt-20 border-t border-border pt-16 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <Badge variant="primary" size="sm" className="mb-2">FAQ</Badge>
            <Heading as="h2" size="2xl">Common Questions</Heading>
            <Text className="text-muted-foreground mt-2">Everything you need to know about sponsoring or tax receipts.</Text>
          </div>

          <div className="flex flex-col gap-4">
            {faqItems.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-surface border border-border rounded-2xl overflow-hidden transition-all duration-base"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left font-semibold text-foreground text-sm sm:text-base hover:bg-muted/40 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-base", isOpen && "rotate-180")} />
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 border-t border-border/40 text-xs sm:text-sm text-muted-foreground leading-relaxed animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
