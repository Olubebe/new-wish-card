import { Button } from "../common/Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface NavigationButtonProps {
  goPrevPage: () => void;
  goNextPage: () => void;
  currentLocation: number;
  maxLocation: number;
}

function NavigationButton({
  goPrevPage,
  goNextPage,
  currentLocation,
  maxLocation,
}: NavigationButtonProps) {
  return (
    <div className="flex gap-4">
      <Button
        onClick={goPrevPage}
        disabled={currentLocation === 1}
        ariaLabel="Previous page"
        className="flex gap-2 items-center"
      >
        <FaArrowLeft className="h-5 w-5" /> Prev
      </Button>

      <Button
        onClick={goNextPage}
        disabled={currentLocation === maxLocation}
        ariaLabel="Next page"
        className="flex gap-2 items-center"
      >
        Next
        <FaArrowRight className="w-5 h-5" />
      </Button>
    </div>
  );
}

export default NavigationButton;
