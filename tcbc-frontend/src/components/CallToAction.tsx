"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-satoshi mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f2a54]">
          Ready to Join The Chosen Bible Church?
        </h2>
        <p className="font-aeonik mx-auto max-w-2xl text-lg sm:text-xl text-gray-600 mb-8">
          Experience authentic worship, meaningful fellowship, and spiritual growth at The Chosen Bible Church. We'd love to see you this Sunday!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/events">
            <Button className="bg-[#11336e] text-white font-semibold hover:bg-[#0f2a54] rounded-full px-8 py-3 text-base sm:text-lg flex items-center gap-2">
              Visit Us
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-transparent border-2 border-[#11336e] text-[#11336e] font-semibold hover:bg-[#11336e]/5 rounded-full px-8 py-3 text-base sm:text-lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
