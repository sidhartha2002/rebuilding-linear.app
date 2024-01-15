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

export const SetDirection = () => {
  return (
    <Features color="0,225,244" colorDark="31,49,64">
      <Features.Main
        title={
          <>
            Choose Your
            <br />
            Industry
          </>
        }
        image="/roadmap.webp"
        imageSize="large"
        text="Choose whatever Industry interests you anad we have it for you! (demo text & image)"
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "Automotive and Mobility.",
            text: "Collaborate across Automobiles.",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "Consumer Goods and Retails.",
            text: "About Consumer Goods and Retails.",
          },
          {
            icon: WorkflowsIcon,
            title: "Energy Industry.",
            text: "Organize Energy & other use cases.",
          },
          {
            icon: CustomViewsIcon,
            title: "Financial Services.",
            text: "Visualize the finance journey ahead.",
          },
          {
            icon: DiscussionIcon,
            title: "Health insights.",
            text: "Track health and progress over time.",
          },
          {
            icon: IssuesIcon,
            title: "Technology.",
            text: "Stay in the loop on Tech activity and updates.",
          },
        ]}
      />
      <Features.Cards
        features={[
          {
            image: "/card-updates.webp",
            imageClassName: "top-[55%] md:top-[40%] w-full left-[7%]",
            title: "Featured Paper 1",
            text: "A Better Customer Growth Strategy is Within Reach. Download the Guide to Our Award-Winning Path-to-Purchase Research",
          },
          {
            image: "/card-roadmaps.webp",
            imageClassName: "top-[55%] md:top-[40%] w-full left-[2%]",
            title: "Featured Paper 2",
            text: "How Macroeconomic Disruption Has Upended the Customer Journey in Financial Services",
          },
        ]}
      />
    </Features>
  );
};
