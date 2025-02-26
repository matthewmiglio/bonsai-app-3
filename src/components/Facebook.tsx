import { Button } from "@/components/ui/button";
import { Facebook } from "lucide-react";
import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    FB: any;
  }
}

const FacebookFeed: React.FC = () => {
  const fbPageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!document.getElementById("fb-root")) {
      const fbRoot = document.createElement("div");
      fbRoot.id = "fb-root";
      document.body.appendChild(fbRoot);
    }

    if (!window.FB) {
      console.log("Loading Facebook SDK...");
      const script = document.createElement("script");
      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0&appId=1980405622369674";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.onload = () => {
        console.log("Facebook SDK loaded");
        if (window.FB) {
          window.FB.XFBML.parse();
        }
      };
      document.body.appendChild(script);
    } else {
      console.log("Re-parsing Facebook widgets");
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
      <div className="p-6 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <Facebook className="mr-2" />
          Branch Out on Facebook!
        </h2>
        <p className="text-sm opacity-90">
          Root for our latest updates and leaf through our bonsai adventures!
        </p>
      </div>

      <div className="p-4">
        <div id="fb-root"></div>
        <div
          ref={fbPageRef}
          className="fb-page"
          data-href="https://www.facebook.com/West.Michigan.Bonsai.Club/"
          data-tabs="timeline"
          data-width="500"
          data-height="500"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/West.Michigan.Bonsai.Club/"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/West.Michigan.Bonsai.Club/">
              Loading Facebook feed...
            </a>
          </blockquote>
        </div>
      </div>

      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <Button
          variant="default"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() =>
            window.open(
              "https://www.facebook.com/West.Michigan.Bonsai.Club/",
              "_blank"
            )
          }
        >
          <Facebook className="mr-2 h-4 w-4" /> Visit Our Facebook Page
        </Button>
      </div>
    </div>
  );
};

export default FacebookFeed;
