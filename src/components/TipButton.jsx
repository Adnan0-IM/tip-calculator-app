import { useState } from "react";
const TipButton = ({ setTipPercentage, tipPercentage }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (percentage) => {
    setTipPercentage(Number(percentage));
    setActiveButton(percentage);
  };
  const handleInput = (percentage) => {
    setTipPercentage(Number(percentage));
    setActiveButton(0);
  };

  const percentage = [5, 10, 15, 25, 50];

  return (
    <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {percentage.map((percent) => {
        return (
          <button
            key={crypto.randomUUID()}
            onClick={() => handleButtonClick(percent)}
            className={`${activeButton === percent && "bg-primary-strong-cyan text-neutral-very-dark-cyan"} hover:bg-primary-hover focus:bg-primary-hover focus:text-neutral-very-dark-cyan hover:text-neutral-very-dark-cyan text-neutral-White bg-neutral-very-dark-cyan cursor-pointer rounded-md p-2 text-2xl font-semibold sm:px-4 sm:py-2 sm:font-bold`}
          >
            {percent}%
          </button>
        );
      })}
      <input
        type="number"
        placeholder="Custom"
        className={`bg-neutral-Very-light-grayish-cyan text-neutral-very-dark-cyan focus:border-primary-strong-cyan cursor-pointer [appearance:textfield] rounded-lg px-2 text-right text-2xl font-bold placeholder:text-center focus:border-2 focus:border-solid focus:outline-hidden [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
        value={activeButton ? "" : tipPercentage}
        onChange={(e) => handleInput(Number(e.target.value))}
      />
    </div>
  );
};

export default TipButton;
