import * as React from "react";
import Image from "next/image";
import { Button } from "components/ui/button";

export function JoinCommunity() {

  return (
    <section className="relative">
      <div className="container py-32 text-center">
        <h2 className="heading">
            Join Our Community of over <br />
            2,00,000 users
        </h2>
        <Button>Create Your Resume</Button>
        <Image src="/images/community.png" alt="Community" width={1260} height={362} className="" />
        <Image src="/images/line2.svg" alt="" width={62} height={139} className="absolute top-32 left-0" />
        <Image src="/images/arc.svg" alt="" width={91} height={134} className="absolute right-0 top-32" />
      </div>
    </section>
  );
}
