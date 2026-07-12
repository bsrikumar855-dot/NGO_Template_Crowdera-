/**
 * app/programs/page.tsx
 *
 * Programs Landing Page.
 * Features search, category filtering, grid/list layout toggle,
 * simulated loading states, and responsive cards.
 */
"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Grid, List, SlidersHorizontal, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/core/Container";
import { Section } from "@/components/core/Section";
import { Heading } from "@/components/core/Heading";
import { Text } from "@/components/core/Text";
import { Badge } from "@/components/core/Badge";
import { Button } from "@/components/core/Button";
import { Input } from "@/components/core/Input";
import { Card, CardImage, CardBody, CardTitle, CardDescription, CardFooter } from "@/components/core/Card";
import { CardSkeleton } from "@/components/core/Skeleton";
import { Breadcrumb } from "@/components/core/Breadcrumb";
import { programsList } from "@/content/programs";

export default function ProgramsPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid");
  const [isLoading, setIsLoading] = React.useState(true);

  // Simulated loading sequence
  React.useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [searchQuery, selectedCategory]);

  const categories = ["All", "Education", "Technology", "Mentorship", "Vocational"];

  const filteredPrograms = programsList.filter((prog) => {
    const matchesCategory = selectedCategory === "All" || prog.category === selectedCategory;
    const matchesSearch =
      prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.overview.some((desc) => desc.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <Section padding="xl" surface="default" className="pt-24 min-h-screen">
      <Container>
        {/* Breadcrumbs */}
        <Breadcrumb items={[{ label: "Our Programs", href: "/programs" }]} className="mb-6" />

        {/* Header Title */}
        <div className="max-w-3xl mb-12">
          <Badge variant="primary" size="md" className="mb-3">Our Work</Badge>
          <Heading as="h1" size="3xl" className="tracking-tight">
            Programs Driving Real, Measurable Change
          </Heading>
          <Text className="text-muted-foreground mt-4 text-base sm:text-lg">
            We identify high-impact interventions, rigorously measure outcomes, and deploy resources transparently on the ground.
          </Text>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-border pb-6 mb-8">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by category">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={isActive}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-base",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-elevation-1"
                      : "bg-surface border border-border text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search and Layout Toggles */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" />
              <input
                type="text"
                placeholder="Search programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={cn(
                  "w-full pl-10 pr-4 py-2 rounded-xl text-sm",
                  "bg-surface border border-border text-foreground",
                  "placeholder-muted-foreground/50",
                  "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary",
                  "transition-all duration-base"
                )}
                aria-label="Search programs"
              />
            </div>

            {/* Grid/List Toggle */}
            <div className="flex items-center bg-surface border border-border p-1 rounded-xl shadow-elevation-1 w-full sm:w-auto justify-between sm:justify-start">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  viewMode === "grid"
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-label="Grid View"
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  viewMode === "list"
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-label="List View"
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className={cn(
            "grid gap-8",
            viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
          )}>
            {[1, 2, 3].map((n) => (
              <CardSkeleton key={n} />
            ))}
          </div>
        ) : filteredPrograms.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-surface border border-border border-dashed rounded-3xl">
            <SlidersHorizontal className="h-10 w-10 text-muted-foreground/50 mb-4 animate-bounce" />
            <Heading as="h3" size="lg">No programs found</Heading>
            <Text className="text-muted-foreground mt-2 max-w-sm">
              We couldn't find any programs matching "{searchQuery}" in category "{selectedCategory}".
            </Text>
            <Button
              variant="outline"
              size="sm"
              onClick={resetFilters}
              className="mt-6"
              leadingIcon={<RefreshCw className="h-4 w-4" />}
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          /* Programs List/Grid */
          <div className={cn(
            "grid gap-8 transition-all duration-500",
            viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
          )}>
            {filteredPrograms.map((prog) => {
              const detailUrl = `/programs/${prog.slug}`;

              if (viewMode === "list") {
                return (
                  <Card
                    key={prog.id}
                    variant={prog.featured ? "elevated" : "default"}
                    className="flex flex-col md:flex-row overflow-hidden border border-border"
                  >
                    {/* List Image */}
                    <div className="relative w-full md:w-80 h-48 md:h-auto min-h-[200px] flex-shrink-0">
                      <Image
                        src={prog.image.src}
                        alt={prog.image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 320px"
                      />
                      {prog.featured && (
                        <Badge
                          variant="secondary"
                          size="sm"
                          className="absolute top-4 left-4 shadow-elevation-1"
                        >
                          Featured
                        </Badge>
                      )}
                    </div>

                    {/* List Content */}
                    <CardBody className="flex flex-col justify-between p-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-bold text-primary tracking-wider uppercase">
                            {prog.category}
                          </span>
                        </div>
                        <CardTitle className="text-xl mb-2">{prog.title}</CardTitle>
                        <CardDescription className="line-clamp-2 sm:line-clamp-3 mb-4">
                          {prog.subtitle}
                        </CardDescription>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {prog.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-md font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <CardFooter className="p-0 border-t-0 flex items-center justify-between">
                        <Link href={detailUrl}>
                          <Button variant="link" size="sm" className="px-0">
                            Learn More
                          </Button>
                        </Link>
                        <Link href={`/donate?tier=${prog.slug}`}>
                          <Button variant="donate" size="sm">
                            Sponsor Program
                          </Button>
                        </Link>
                      </CardFooter>
                    </CardBody>
                  </Card>
                );
              }

              /* Grid View Card */
              return (
                <Card
                  key={prog.id}
                  variant={prog.featured ? "elevated" : "default"}
                  className="flex flex-col h-full border border-border"
                >
                  {/* Grid Image */}
                  <CardImage aspectRatio="video" className="relative">
                    <Image
                      src={prog.image.src}
                      alt={prog.image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {prog.featured && (
                      <Badge
                        variant="secondary"
                        size="sm"
                        className="absolute top-4 left-4 shadow-elevation-1"
                      >
                        Featured
                      </Badge>
                    )}
                  </CardImage>

                  {/* Grid Body */}
                  <CardBody className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-primary tracking-wider uppercase">
                          {prog.category}
                        </span>
                      </div>
                      <CardTitle className="text-lg mb-2">{prog.title}</CardTitle>
                      <CardDescription className="line-clamp-3 mb-4">
                        {prog.subtitle}
                      </CardDescription>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {prog.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-md font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <CardFooter className="p-0 border-t-0 flex items-center justify-between mt-auto">
                      <Link href={detailUrl}>
                        <Button variant="link" size="sm" className="px-0">
                          Learn More
                        </Button>
                      </Link>
                      <Link href={`/donate?tier=${prog.slug}`}>
                        <Button variant="donate" size="sm">
                          Sponsor Program
                        </Button>
                      </Link>
                    </CardFooter>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        )}
      </Container>
    </Section>
  );
}
