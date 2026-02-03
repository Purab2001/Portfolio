import { ArrowUp } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-card">
      <footer className="py-12 container mx-auto max-w-7xl relative mt-12 pt-8 flex flex-wrap justify-between items-center">
        {" "}
        <p className="text-sm text-muted-foreground">
          {" "}
          &copy; 2025 A.S.Purab. All rights reserved.
        </p>
        <Link
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </Link>
      </footer>
    </div>
  );
};
