import type { JSX } from "react";
import BackPage from "../pages/back-page";
import FrontPage from "../pages/front-page";
import SecondPage from "../pages/second-page";
import ThirdPage from "../pages/third-page";
import { FarewellCard } from "../pages/farewell-card";

export interface PaperConfig {
  id: number;
  front?: JSX.Element;
  back?: JSX.Element;
}

export const paperData: PaperConfig[] = [
  {
    id: 1,
    front: <FrontPage />,
    back: <SecondPage />,
  },
  {
    id: 2,
    front: (
      <FarewellCard
        media={{
          type: "gif",
          src: "https://res.cloudinary.com/olubebe/image/upload/v1759696794/peppa_pig_dancing_GIF_by_eOneFilms_wy0s6d.gif",
          alt: "Peppa Pig waving",
        }}
        imageSize="medium"
        message={`Dear Sarah, can't believe you're going, but I know adventure calls you! Enjoy backpacking for a while before starting your new job!\n\nHit me up if you're back though to catch up and show off you tan :) xxxxx`}
        signature="Chandra"
        backgroundColor="bg-[#f9f6f2]"
      />
    ),
    back: (
      <FarewellCard
        media={{
          type: "image",
          src: "https://res.cloudinary.com/olubebe/image/upload/v1759696794/Seal_With_It_GIF_zdlcz6.gif",
          alt: "Smiling seal",
        }}
        imageSize="large"
        message="Sorry you're leaving Sarah, all the best for the future. Take care."
        signature="Gabe"
        backgroundColor="bg-white"
      />
    ),
  },
  {
    id: 3,
    front: (
      <FarewellCard
        media={{
          type: "video",
          src: "https://www.youtube.com/shorts/Iy6MA463bL4?feature=share",
          autoplay: false,
          muted: false,
        }}
        imageSize="large"
        message="testing testing"
        signature="Bob"
        backgroundColor="bg-[#f9f6f2]"
      />
    ),
    back: (
      <FarewellCard
        media={{
          type: "gif",
          src: "https://res.cloudinary.com/olubebe/image/upload/v1759696794/Spongebob_Squarepants_Good_Luck_GIF_c5uwqj.gif",
          alt: "Woody waving",
        }}
        imageSize="medium"
        mediaPosition="top"
        message="Sarah, you have always been such a pleasure to work with, so sweet, kind and funny. I'll really miss working with you and wish you all the best for your new adventures! Take care xx"
        signature="Gina Jones"
        backgroundColor="bg-white"
      />
    ),
  },
  {
    id: 4,
    front: (
      <FarewellCard
        media={{
          type: "audio",
          src: "https://example.com/audio-message.mp3",
        }}
        mediaPosition="top"
        message="Sorry you're leaving, Sarah! Take care and best of luck for the future."
        signature="Tsvetелina"
        backgroundColor="bg-[#f9f6f2]"
      />
    ),
    back: (
      <FarewellCard
        message={
          <div>
            <p className="mb-4">Dear Sarah,</p>
            <p className="mb-4">
              Wishing you all the best in your new adventure! You'll be missed.
            </p>
            <p>Stay in touch!</p>
          </div>
        }
        signature="The Team"
        backgroundColor="bg-white"
      />
    ),
  },
  {
    id: 5,
    front: <ThirdPage />,
    back: <BackPage />,
  },
];
