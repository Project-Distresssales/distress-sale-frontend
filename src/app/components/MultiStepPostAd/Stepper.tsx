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
          completed: true,
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
      completed: false,
      highlighted: index === 0,
      selected: index === 0,
    }));

    stepsRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepsRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const stepsDisplay = newStep.map((step, index) => {
    return (
      <div key={index} className={index !== newStep.length - 1 ? 'w-full flex items-center' : 'flex items-center'}>
        <div className="relative flex flex-col items-center text-teal-600">
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3  ${
              step.selected ? 'bg-distressBlue text-white font-bold border border-distrebg-distressBlue ' : ''
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
          className={`flex-auto border-t-2 transition duration-500 ease-in-out  ${
            step.completed ? 'border-distrebg-distressBlue' : 'border-gray-300 '
          }  `}
        ></div>
      </div>
    );
  });

  return <div className="mx-4 p-4 flex justify-between items-center">{stepsDisplay}</div>;
};
export default Stepper;
