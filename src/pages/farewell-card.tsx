import React from "react";
import type { FarewellCardProps } from "../types";

export const FarewellCard: React.FC<FarewellCardProps> = ({
  media,
  message,
  signature,
  backgroundColor = "bg-[#f9f6f2]",
  mediaPosition = "top",
  imageSize = "medium",
}) => {
  const getSizeClasses = () => {
    switch (imageSize) {
      case "small":
        return "w-32 h-32";
      case "medium":
        return "w-48 h-36";
      case "large":
        return "w-64 h-48";
      case "full":
        return "w-full h-auto";
      default:
        return "w-48 h-36";
    }
  };

  const renderMedia = () => {
    if (!media) return null;

    const sizeClass = getSizeClasses();

    switch (media.type) {
      case "video":
        return (
          <video
            className={`${
              imageSize === "full" ? "w-full" : sizeClass
            } rounded-xl shadow-md object-cover`}
            controls
            autoPlay={media.autoplay}
            muted={media.muted}
            playsInline
          >
            <source src={media.src} type="video/mp4" />
            <source
              src={media.src.replace(".mp4", ".webm")}
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
        );

      case "audio":
        return (
          <div className="w-full max-w-xs bg-white/80 p-4 rounded-xl shadow-md">
            <audio className="w-full" controls preload="metadata">
              <source src={media.src} type="audio/mpeg" />
              <source
                src={media.src.replace(".mp3", ".ogg")}
                type="audio/ogg"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
        );

      case "image":
      case "gif":
        return (
          <img
            src={media.src}
            alt={media.alt || "Card media"}
            className={`${
              imageSize === "full" ? "w-full h-auto" : sizeClass
            } rounded-xl shadow-md object-cover`}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`w-full h-full ${backgroundColor} overflow-y-scroll p-4 lg:p-8 flex flex-col justify-between overflow-y-auto`}
    >
      <div className="flex flex-col items-center space-y-6">
        {mediaPosition === "top" && media && (
          <div className="flex justify-center">{renderMedia()}</div>
        )}

        <div className="text-center space-y-4 flex-grow flex flex-col justify-center">
          <div className="text-lg leading-relaxed">
            {typeof message === "string"
              ? message.split("\n").map((line, index) => (
                  <p key={index} className="mb-2">
                    {line}
                  </p>
                ))
              : message}
          </div>
        </div>

        {mediaPosition === "bottom" && media && (
          <div className="flex justify-center">{renderMedia()}</div>
        )}
      </div>

      <div className="text-right mt-6">
        <p className="text-md font-semibold italic">{signature}</p>
      </div>
    </div>
  );
};
