import { BsCurrencyDollar } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import TipButton from "./TipButton";
const Values = ({bill, handleBill, tipPercentage, setTipPercentage, noOfPeople, handleNoOfPeople}) => {
  return (
    <div className="p-6 sm:p-12 sm:pr-4">
    <div className="flex flex-col">
      <label
        className="text-neutral-Dark-grayish-cyan text-base"
        htmlFor="bill"
      >
        Bill
      </label>
      <div className="relative">
        <input
          className="bg-neutral-Very-light-grayish-cyan text-neutral-very-dark-cyan focus:border-primary-strong-cyan mt-1 w-full cursor-pointer [appearance:textfield] rounded-lg px-3 py-2 pl-10 text-right text-2xl font-bold placeholder:text-right focus:border-2 focus:border-solid focus:outline-hidden sm:mt-2 sm:p-3 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          type="number"
          id="bill"
          placeholder="0"
          value={bill}
          onChange={(e) => handleBill(e.target.value)}
        />
        <BsCurrencyDollar className="text-neutral-Grayish-cyan pointer-events-none absolute top-3/5 left-3 size-5 -translate-y-1/2 transform" />
      </div>
    </div>
    <div className="mt-6">
      <h3 className="text-neutral-Dark-grayish-cyan font-medium">
        Select Tip %
      </h3>

      <TipButton
        setTipPercentage={setTipPercentage}
        tipPercentage={tipPercentage}
      />
    </div>
    <div className="flex flex-col">
      <div className="flex justify-between">
        <label
          className="text-neutral-Dark-grayish-cyan mt-6 text-base font-medium"
          htmlFor="noOfPeople"
        >
          Number of People
        </label>
        <p
          className={
            !noOfPeople && bill && tipPercentage
              ? "text-primary-error mt-6 block text-sm font-medium"
              : "hidden"
          }
        >
          Can`t be zero
        </p>
      </div>
      <div className="relative">
        <input
          className={`${
            !noOfPeople && bill && tipPercentage
              ? "outline-primary-error outline-2"
              : "focus:outline-primary-strong-cyan foucsu:outline-2"
          } outline-nonehidden bg-neutral-Very-light-grayish-cyan text-neutral-very-dark-cyan mt-1 w-full cursor-pointer [appearance:textfield] rounded-lg px-3 py-2 pl-10 text-right text-2xl font-bold placeholder:text-right sm:mt-2 sm:p-3 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
          type="number"
          id="noOfPeople"
          placeholder="0"
          value={noOfPeople}
          onChange={(e) => handleNoOfPeople(e.target.value)}
        />
        <FaUser className="text-neutral-Grayish-cyan pointer-events-none absolute top-[55%] left-3 -translate-y-1/2 transform sm:top-[58%]" />
      </div>
    </div>
  </div>
  )
}

export default Values