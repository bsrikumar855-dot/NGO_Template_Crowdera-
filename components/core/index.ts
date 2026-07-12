/**
 * components/core/index.ts
 * Barrel export for all foundation components.
 */
export { Button, buttonVariants } from "./Button";
export type { ButtonProps } from "./Button";

export { Badge, badgeVariants } from "./Badge";
export type { BadgeProps } from "./Badge";

export {
  Card,
  CardImage,
  CardHeader,
  CardBody,
  CardTitle,
  CardDescription,
  CardFooter,
} from "./Card";
export type { CardProps, CardImageProps } from "./Card";

export { Container } from "./Container";
export type { ContainerProps } from "./Container";

export { Section } from "./Section";
export type { SectionProps } from "./Section";

export { Heading } from "./Heading";
export type { HeadingProps } from "./Heading";

export { Text } from "./Text";
export type { TextProps } from "./Text";

export { Divider } from "./Divider";
export type { DividerProps } from "./Divider";

export { Input, Label, FieldError, FieldHint } from "./Input";
export type { InputProps, LabelProps } from "./Input";

export { Textarea } from "./Textarea";
export type { TextareaProps } from "./Textarea";

export {
  Select,
  SelectRoot,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from "./Select";
export type { SelectProps, SelectOption } from "./Select";

export { Skeleton, CardSkeleton, HeroSkeleton } from "./Skeleton";
export type { SkeletonProps } from "./Skeleton";

export { Spinner, PageSpinner } from "./Spinner";
export type { SpinnerProps } from "./Spinner";

export { ThemeProvider } from "./ThemeProvider";
export { Breadcrumb } from "./Breadcrumb";
export type { BreadcrumbProps, BreadcrumbItem } from "./Breadcrumb";
