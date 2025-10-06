import { useState, useCallback } from "react";
import type { UseFlipBookReturn } from "../types";

export const useFlipBook = (totalPapers: number = 3): UseFlipBookReturn => {
  const [currentLocation, setCurrentLocation] = useState<number>(1);
  const maxLocation: number = totalPapers + 1;

  const goNextPage = useCallback((): void => {
    setCurrentLocation((prev) => {
      if (prev < maxLocation) {
        return prev + 1;
      }
      return prev;
    });
  }, [maxLocation]);

  const goPrevPage = useCallback((): void => {
    setCurrentLocation((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  }, []);

  const isFlipped = (paperNumber: number): boolean => {
    return currentLocation > paperNumber;
  };

  const getZIndex = (paperNumber: number): number => {
    if (isFlipped(paperNumber)) {
      return paperNumber;
    }
    return totalPapers - paperNumber + totalPapers;
  };

  const getBookTransform = (): string => {
    if (currentLocation === 1) return "translateX(0%)";
    if (currentLocation === maxLocation) return "translateX(100%)";
    return "translateX(50%)";
  };

  // const getButtonTransform = (type: "prev" | "next"): string => {
  //   if (currentLocation === 1 || currentLocation === maxLocation) {
  //     return "translateX(0px)";
  //   }
  //   return type === "prev" ? "translateX(-180px)" : "translateX(180px)";
  // };

  return {
    currentLocation,
    goNextPage,
    goPrevPage,
    isFlipped,
    getZIndex,
    getBookTransform,
    maxLocation,
  };
};
