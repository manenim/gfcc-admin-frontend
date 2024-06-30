import { useEffect, useRef, useState } from "react";

interface Props {
  steps: {
    id: string;
    name: string;
  }[];
  currentStep: number;
}

const Stepper = ({ steps, currentStep }: Props) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (
    steps: {
      id: string;
      name: string;
    }[],
    stepNumber: number
  ) => {
    //
  };
  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );
    // stepRef.current = stepsState;
    // const current = updateStep(currentStep - 1, stepRef.current)
    // setNewStep(current)
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => (
    <div
      key={index}
      className={
        index == newStep.length - 1
          ? "w-full flex items-center"
          : "flex items-center"
      }>
      <div className="relative flex flex-col items-center text-teal-600">
        <div className="rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3">
          1
        </div>
        <div className="absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase">
          description
        </div>
      </div>
      <div className="flex-auto border-t-2 transition duration-500 ease-in-out"></div>
    </div>
  ));
  return (
    <div className="mt-4 p-4 flex justify-between items-center">
      {displaySteps}
    </div>
  );
};

export default Stepper;
