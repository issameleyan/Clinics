import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp, MoreHorizontal, Settings, Pin, Share2, Trash, TriangleAlert } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface StatItem {
  title: string;
  value: number;
  delta: number;
  lastMonth: number;
  positive: boolean;
  prefix?: string;
  suffix?: string;
  format?: (v: number) => string;
  lastFormat?: (v: number) => string;
}

interface StatisticsCardsProps {
  stats: StatItem[];
  className?: string;
}

function formatNumber(n: number) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return n.toLocaleString();
  return n.toString();
}

export function StatisticsCards({ stats, className }: StatisticsCardsProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <span className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-44">
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <TriangleAlert className="mr-2 h-4 w-4" />
                    Add Alert
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Pin className="mr-2 h-4 w-4" />
                    Pin to Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    <Trash className="mr-2 h-4 w-4" />
                    Remove
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Content */}
            <div className="grow p-5">
              <div className="flex items-end justify-between gap-2">
                <span className="text-2xl font-bold text-foreground">
                  {stat.format
                    ? stat.format(stat.value)
                    : (stat.prefix || "") + formatNumber(stat.value) + (stat.suffix || "")}
                </span>
                <span
                  className={cn(
                    "inline-flex items-center gap-0.5 rounded-md px-2 py-0.5 text-xs font-medium",
                    stat.positive
                      ? "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400"
                      : "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-400"
                  )}
                >
                  {stat.delta > 0 ? (
                    <ArrowUp className="h-3 w-3" />
                  ) : (
                    <ArrowDown className="h-3 w-3" />
                  )}
                  {Math.abs(stat.delta)}%
                </span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Vs last month:{" "}
                <span className="font-medium text-foreground">
                  {stat.lastFormat
                    ? stat.lastFormat(stat.lastMonth)
                    : (stat.prefix || "") + formatNumber(stat.lastMonth) + (stat.suffix || "")}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatisticsCards;
