"use client";

import { Features } from "../features";
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "../icons/features";

import { Button, Highlight } from "../button";
import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";

export const EnjoyIssueTracking = () => {
  return (
    <Features color="194,97,254" colorDark="53,42,79">
      <Features.Main
        title={
          <>
            Careers
            <br />& Culture
          </>
        }
        image="/career.jpg"
        text="Connect with us for Career Opportunities"
      />

      <div className="mb-11 flex items-center justify-center">
        <Button
          className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
          href="/"
          variant="primary"
          size="large"
        >
          <span>Go to Careers Page</span>
          <br />
          <br />
          <Highlight>
            <ChevronIcon />
          </Highlight>
        </Button>
      </div>

      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "Carrers.",
            text: "Career Related",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "Culture.",
            text: "Career Related",
          },
          {
            icon: WorkflowsIcon,
            title: "About.",
            text: "Career Related",
          },
        ]}
      />
      <Features.Cards
        features={[
          {
            image: "/card-board.webp",
            imageClassName: "top-[55%] md:top-[40%] w-[200%]",
            title: "Featured Blog 1",
            text: "Investing in Path-to-Purchase Research to Maintain Loyal Customers During Inflationary Times",
          },
          {
            image: "/card-views.webp",
            imageClassName:
              "top-[45%] left-[12px] md:top-[34%] md:left-[24px] w-[110%]",
            title: "Featured Blog 2",
            text: "How Macroeconomic Disruption Has Upended the Customer Journey in Financial Services",
          },
        ]}
      />
    </Features>
  );
};
