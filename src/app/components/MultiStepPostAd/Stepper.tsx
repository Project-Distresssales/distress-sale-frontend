'use client';
import React, { useState, useEffect, useRef } from 'react';

interface Step {
  description: string;
  completed: boolean;
  highlighted: boolean;
  selected: boolean;
}

const Stepper: React.FC<{ steps: string[]; currentStep: number }> = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState<Step[]>([]);
  const stepsRef = useRef<Step[] | null>(null);

  const updateStep = (stepNumber: number, steps: Step[]): Step[] => {
    const newSteps = [...steps];

    let count = 0;
    while (count < newSteps.length) {
      // current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: count < currentStep - 1,
        };
        count++;
      }

      // step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      // step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }

    return newSteps;
  };

  useEffect(() => {
    const stepsState: Step[] = steps.map((step, index) => ({
      description: step,
      completed: index < currentStep - 1,
      highlighted: index === currentStep - 1,
      selected: index === currentStep - 1,
    }));

    stepsRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepsRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const stepsDisplay = newStep.map((step, index) => {
    return (
      <div key={index} className={index !== newStep.length - 1 ? 'w-full flex items-center' : 'flex items-center'}>
        <div className="relative flex flex-col items-center text-[#98A2B3]">
          {step.highlighted && (
            <div className="absolute top-0 -mt-5 w-full flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className='' width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.83351 6.66684C5.66872 6.66688 5.50764 6.71577 5.37063 6.80734C5.23362 6.89891 5.12684 7.02905 5.06378 7.1813C5.00072 7.33355 4.98422 7.50108 5.01636 7.6627C5.0485 7.82433 5.12784 7.9728 5.24434 8.08934L9.41101 12.256C9.56728 12.4122 9.77921 12.5 10.0002 12.5C10.2211 12.5 10.4331 12.4122 10.5893 12.256L14.756 8.08934C14.8725 7.9728 14.9519 7.82433 14.984 7.6627C15.0161 7.50108 14.9996 7.33355 14.9366 7.1813C14.8735 7.02905 14.7667 6.89891 14.6297 6.80734C14.4927 6.71577 14.3316 6.66688 14.1668 6.66684L5.83351 6.66684Z"
                  fill="#101828"
                />
              </svg>
            </div>
          )}
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3  ${
              step.selected
                ? 'bg-distressBlue text-white font-bold border border-distressBlue'
                : 'bg-[#EAECF0] font-bold '
            }`}
          >
            {step.completed ? <span className="text-white font-bold text-xl">&#10003;</span> : index + 1}
          </div>
          <div
            className={`absolute top-0  text-center mt-16 w-fit whitespace-nowrap text-xs font-medium uppercase ${
              step.highlighted ? 'text-gray-900' : 'text-gray-400'
            }`}
          >
            {step.description}
          </div>
        </div>
        <div
          className={`flex-auto  h-2 transition duration-500 ease-in-out  ${
            step.completed ? ' bg-distressBlue' : 'bg-gray-300 '
          }  `}
        ></div>
      </div>
    );
  });

  return <div className="mx-4 p-4 flex justify-between items-center">{stepsDisplay}</div>;
};
export default Stepper;
