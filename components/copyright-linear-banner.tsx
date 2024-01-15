"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Button } from "./button";

const cookieBannerName = "copyright-banner-dismissed";

export const CopyrightLinearBanner = () => {
  const [isCookieBannerVisible, setIsCookieBannerVisible] = useState(false);

  useEffect(() => {
    const isCookieBannerDismissed = Cookies.get(cookieBannerName);
    if (!isCookieBannerDismissed) {
      setIsCookieBannerVisible(true);
    }
  });

  const dismissCookie = () => {
    setIsCookieBannerVisible(false);
    Cookies.set(cookieBannerName, "true", { expires: 365 });
  };

  if (!isCookieBannerVisible) return null;

  return (
    <div className="fixed right-[4rem] bottom-[4rem] flex w-[65rem] max-w-[95%] items-start rounded-md border border-transparent-white p-8 text-[2rem] backdrop-blur-[12px]">
      <div className="space-y-3">
        <p>
          <strong>⚠️ NOTE:</strong>This is a Demo Website created for Kuldeep as
          a sample for project on Fiverr. This is not complete work. The images
          are 'random demo' images I've just used as placeholders from one of my
          other projects. Good Luck! 👍
        </p>
        <p>
          <Button href="tel:+919264104251" size="large" target="_blank">
            Call me to connect!
          </Button>
        </p>
      </div>
      <button className="ml-8" onClick={dismissCookie}>
        ✕ <span className="sr-only">Dimiss copyright banner</span>
      </button>
    </div>
  );
};
