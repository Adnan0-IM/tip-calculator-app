
const Result = ({tipAmountPerPerson, amountPerPerson, dimmed, handleReset}) => {
  return (
    <div className="flex h-full px-6 pb-6 sm:p-8">
    <div className="bg-neutral-very-dark-cyan flex-1 rounded-xl p-5 sm:p-8">
      <div className="flex items-center justify-between pt-4">
        <div className="flex flex-col">
          <h3 className="text-neutral-White text-sm font-semibold sm:font-bold">
            Tip Amount
          </h3>
          <p className="text-neutral-Grayish-cyan text-xs">/ person</p>
        </div>
        <div className="text-primary-strong-cyan text-3xl font-bold sm:text-5xl">
          ${tipAmountPerPerson}
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between pt-4 sm:mt-6">
        <div className="flex flex-col">
          <h3 className="text-neutral-White text-sm font-semibold sm:font-bold">
            Total
          </h3>
          <p className="text-neutral-Grayish-cyan text-xs">/ person</p>
        </div>
        <div className="text-primary-strong-cyan text-3xl font-bold sm:text-5xl">
          ${amountPerPerson}
        </div>
      </div>

      <button
        disabled={dimmed}
        onClick={handleReset}
        className={`${
          dimmed && "opacity-20"
        } bg-primary-strong-cyan text-neutral-very-dark-cyan hover:text-neutral-very-dark-cyan hover:bg-primary-hover mt-10 w-full cursor-pointer rounded-md p-2 text-lg font-semibold uppercase disabled:cursor-not-allowed sm:mt-28 sm:p-3 sm:text-lg sm:font-bold`}
      >
        Reset
      </button>
    </div>
  </div>
  )
}

export default Result