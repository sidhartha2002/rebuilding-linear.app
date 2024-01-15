"use client";

import Link from "next/link";
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

export const BuildMomentum = () => {
  return (
    <Features color="40,87,255" colorDark="48,58,117">
      <Features.Main
        title={
          <>
            Subscribe to
            <br />
            Our Newsletter
          </>
        }
        image="/cycles.webp"
        imageSize="large"
        text="Keep me informed. I’d like to receive occasional newsletters, event notifications, and thought leadership materials."
      />

      <div className="mb-11 flex items-center justify-center">
        <Button
          className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
          href="/"
          variant="primary"
          size="large"
        >
          <span>Subscribe Newsletter</span>
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
            title: "Blogs.",
            text: "Any started issues are added to the current cycle.",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "News.",
            text: "Unfinished work rolls over to the next cycle automatically.",
          },
          {
            icon: WorkflowsIcon,
            title: "Events.",
            text: "Define start date, end date, duration, and more.",
          },
        ]}
      />
    </Features>
  );
};
