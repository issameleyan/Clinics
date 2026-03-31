import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

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
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-lg hover:border-primary/30 cursor-default"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-border">
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {stat.title}
              </span>
              <span
                className={cn(
                  "inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-medium transition-colors",
                  stat.positive
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
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

            {/* Content */}
            <div className="grow p-5">
              <span className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                {stat.format
                  ? stat.format(stat.value)
                  : (stat.prefix || "") + formatNumber(stat.value) + (stat.suffix || "")}
              </span>
              <p className="mt-2 text-xs text-muted-foreground">
                Vs last month:{" "}
                <span className="font-medium text-foreground">
                  {stat.lastFormat
                    ? stat.lastFormat(stat.lastMonth)
                    : (stat.prefix || "") + formatNumber(stat.lastMonth) + (stat.suffix || "")}
                </span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default StatisticsCards;
