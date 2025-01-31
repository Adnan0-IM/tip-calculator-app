import { BsCurrencyDollar } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
const App = () => {
  return (
    <main className="w-full min-h-screen bg-neutral-Light-grayish-cyan  grid place-content-center font-Space-Mono">
      <h1 className="text-2xl uppercase text-neutral-very-dark-cyan tracking-accent p-4 text-center">
        Splitter
      </h1>
      <section className="bg-neutral-White rounded-2xl max-w-[375px] sm:max-w-4xl grid sm:grid-cols-2 ">
        <div className="p-6 sm:p-12 sm:pr-4 ">
          <div className="flex flex-col">
            <label
              className="text-base text-neutral-Dark-grayish-cyan"
              htmlFor="bill"
            >
              Bill
            </label>

            <div className="relative">
              <input
                className="w-full pl-10 bg-neutral-Very-light-grayish-cyan text-neutral-very-dark-cyan px-3 py-2 sm:p-3 rounded-lg mt-1 sm:mt-2 focus:outline-hidden focus:border-2 focus:border-solid focus:border-primary-strong-cyan text-right text-2xl font-bold placeholder:text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                type="number"
                id="bill"
                placeholder="0"
              />
              <BsCurrencyDollar className="absolute size-5 left-3 top-3/5  transform -translate-y-1/2 text-neutral-Grayish-cyan pointer-events-none" />
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-neutral-Dark-grayish-cyan font-medium">
              Select Tip %
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-3">
              <button className="text-2xl font-semibold sm:font-bold rounded-md cursor-pointer p-2 sm:px-4 sm:py-2 hover:bg-primary-hover focus:bg-primary-strong-cyan hover:text-neutral-very-dark-cyan focus:text-neutral-very-dark-cyan text-neutral-White bg-neutral-very-dark-cyan">
                5%
              </button>
              <button className="text-2xl font-semibold sm:font-bold rounded-md cursor-pointer p-2 sm:px-4 sm:py-2 hover:bg-primary-hover focus:bg-primary-strong-cyan hover:text-neutral-very-dark-cyan focus:text-neutral-very-dark-cyan text-neutral-White bg-neutral-very-dark-cyan">
                10%
              </button>
              <button className="text-2xl font-semibold sm:font-bold rounded-md cursor-pointer p-2 sm:px-4 sm:py-2 hover:bg-primary-hover focus:bg-primary-strong-cyan hover:text-neutral-very-dark-cyan focus:text-neutral-very-dark-cyan text-neutral-White bg-neutral-very-dark-cyan">
                15%
              </button>
              <button className="text-2xl font-semibold sm:font-bold rounded-md cursor-pointer p-2 sm:px-4 sm:py-2 hover:bg-primary-hover focus:bg-primary-strong-cyan hover:text-neutral-very-dark-cyan focus:text-neutral-very-dark-cyan text-neutral-White bg-neutral-very-dark-cyan">
                25%
              </button>
              <button className="text-2xl font-semibold sm:font-bold rounded-md cursor-pointer p-2 sm:px-4 sm:py-2 hover:bg-primary-hover focus:bg-primary-strong-cyan hover:text-neutral-very-dark-cyan focus:text-neutral-very-dark-cyan text-neutral-White bg-neutral-very-dark-cyan">
                50%
              </button>
              <input
                type="number"
                placeholder="Custom"
                className="bg-neutral-Very-light-grayish-cyan text-neutral-very-dark-cyan rounded-lg focus:outline-hidden focus:border-2 focus:border-solid focus:border-primary-strong-cyan  text-2xl font-bold placeholder:text-center text-right px-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <label
                className="text-base text-neutral-Dark-grayish-cyan mt-6 font-medium"
                htmlFor="noOfPeople"
              >
                Number of People
              </label>
              <p className=" mt-6 font-medium text-primary-error">
                Can`t be zero
              </p>
            </div>
            <div className="relative">
              <input
                className="w-full pl-10 bg-neutral-Very-light-grayish-cyan text-neutral-very-dark-cyan px-3 py-2 sm:p-3 rounded-lg mt-1 sm:mt-2 focus:outline-hidden focus:border-2 focus:border-solid focus:border-primary-strong-cyan text-right text-2xl font-bold placeholder:text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                type="number"
                id="noOfPeople"
                placeholder="0"
              />
              <FaUser className="absolute left-3 top-[55%] sm:top-[58%] transform -translate-y-1/2 text-neutral-Grayish-cyan pointer-events-none" />
            </div>
          </div>
        </div>
        <div className="px-6 pb-6 sm:p-8 h-full flex ">
          <div className="bg-neutral-very-dark-cyan rounded-xl p-5 sm:p-8 flex-1">
            <div className=" flex  justify-between pt-4 items-center">
              <div className="flex flex-col ">
                <h3 className="text-neutral-White font-semibold sm:font-bold text-sm">
                  Tip Amount
                </h3>
                <p className="text-neutral-Grayish-cyan text-xs">/ person</p>
              </div>
              <div className="text-2xl text-primary-strong-cyan font-bold sm:text-5xl">
                $0.00
              </div>
            </div>
            <div className=" flex  justify-between  pt-4 mt-2 sm:mt-6 items-center">
              <div className="flex flex-col">
                <h3 className="text-neutral-White font-semibold sm:font-bold text-sm">
                  Total
                </h3>
                <p className="text-neutral-Grayish-cyan text-xs">/ person</p>
              </div>
              <div className="text-2xl text-primary-strong-cyan font-bold sm:text-5xl">
                $0.00
              </div>
            </div>

            <button className="w-full text-lg cursor-pointer bg-primary-strong-cyan text-neutral-very-dark-cyan hover:text-neutral-very-dark-cyan hover:bg-primary-hover uppercase p-2 sm:p-3 rounded-md sm:text-lg font-semibold sm:font-bold mt-10 sm:mt-28">
              Reset
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
