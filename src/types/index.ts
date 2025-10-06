export interface PaperProps {
  id: number;
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  isFlipped: boolean;
  zIndex: number;
}

export interface UseFlipBookReturn {
  currentLocation: number;
  goNextPage: () => void;
  goPrevPage: () => void;
  isFlipped: (paperNumber: number) => boolean;
  getZIndex: (paperNumber: number) => number;
  getBookTransform: () => string;
  maxLocation: number;
}

export interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}
export type MediaItem =
  | { type: "video"; src: string; autoplay?: boolean; muted?: boolean }
  | { type: "audio"; src: string }
  | {
      type: "image";
      src: string;
      alt?: string;
      width?: string;
      height?: string;
    }
  | { type: "gif"; src: string; alt?: string; width?: string; height?: string };

export interface FarewellCardProps {
  media?: MediaItem;
  message: string | React.ReactNode;
  signature: string;
  backgroundColor?: string;
  mediaPosition?: "top" | "bottom";
  imageSize?: "small" | "medium" | "large" | "full";
}
