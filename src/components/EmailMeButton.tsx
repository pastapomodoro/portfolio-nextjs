import { CONTACT_MAILTO } from "@/lib/site-contact";
import { cn } from "@/lib/utils";

type EmailMeButtonProps = {
  variant?: "default" | "large";
  className?: string;
  label?: string;
};

export function EmailMeButton({
  variant = "default",
  className,
  label = "Email me",
}: EmailMeButtonProps) {
  return (
    <a
      href={CONTACT_MAILTO}
      className={cn(
        "inline-flex items-center justify-center border border-brand bg-brand font-medium text-brand-foreground transition-[background-color,transform] duration-200 hover:bg-brand-bright active:scale-[0.99]",
        variant === "large" ? "px-6 py-3 text-base" : "px-4 py-2.5 text-sm",
        className,
      )}
    >
      {label}
    </a>
  );
}
