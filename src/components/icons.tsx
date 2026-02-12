import { cn } from "@/lib/utils";

export function Logo({ className, ...props }: React.ComponentProps<'svg'>) {
    return (
        <svg
            width="200"
            height="40"
            viewBox="0 0 200 40"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("text-foreground", className)}
            {...props}
        >
            <title>Legacy Leather</title>
            <text
                x="0"
                y="28"
                fontFamily="Literata, serif"
                fontSize="24"
                fontWeight="600"
                letterSpacing="0.5"
            >
                Legacy Leather
            </text>
        </svg>
    );
}
