import { useEffect, useState } from "react";
import Values from "./Values";
import Result from "./Result";
const Containner = () => {
  const [bill, setBill] = useState("");
  const [noOfPeople, setNoOfPeople] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
  const [amountPerPerson, setAmountPerPerson] = useState(0);
  const [dimmed, setDimmed] = useState(true);

  useEffect(() => {
    const calculate = () => {
      let tipAmount = ((tipPercentage / 100) * Number(bill));
      let tipAmountPerPerson = tipAmount /noOfPeople
      let totalAmount = tipAmount + Number(bill);
      let amountPerPerson = totalAmount / noOfPeople;
      if (bill && tipPercentage && noOfPeople) {
        setTipAmountPerPerson(tipAmountPerPerson.toFixed(2));
        setAmountPerPerson(amountPerPerson.toFixed(2));
        setDimmed(false);
      }
    };

    calculate();
  }, [bill, tipPercentage, noOfPeople]);

  const handleBill = (value) => {
    if (value === "") {
      setBill("");
      return;
    }

    setBill(Number(value));
  };
  const handleNoOfPeople = (value) => {
    if (value === "") {
      setNoOfPeople("");
      return;
    }

    setNoOfPeople(Number(value));
  };

  const handleReset = () => {
    setBill("");
    setNoOfPeople("");
    setTipPercentage("");
    setTipAmountPerPerson(0);
    setAmountPerPerson(0);
    setDimmed(true);
  };

  return (
    <main className="bg-neutral-Light-grayish-cyan font-Space-Mono grid min-h-screen w-full place-content-center">
      <h1 className="text-neutral-very-dark-cyan tracking-accent p-4 text-center text-2xl uppercase">
        Splitter
      </h1>
      <section className="bg-neutral-White grid max-w-[375px] rounded-2xl sm:max-w-4xl sm:grid-cols-2">
        <Values
          bill={bill}
          handleBill={handleBill}
          tipPercentage={tipPercentage}
          setTipPercentage={setTipPercentage}
          noOfPeople={noOfPeople}
          handleNoOfPeople={handleNoOfPeople}
        />
        <Result
          tipAmountPerPerson={tipAmountPerPerson}
          amountPerPerson={amountPerPerson}
          dimmed={dimmed}
          handleReset={handleReset}
        />
      </section>
    </main>
  );
};

export default Containner;
