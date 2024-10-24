export default function StepperControl({ handleClick, currentStep, steps }) {
  return (
    <div className="container mt-4 mb-8 flex justify-around">
      <button
        onClick={() => handleClick()}
        className={`cursor-pointer rounded-[6px] border-2 border-slate-300 bg-white py-2 px-4 font-semibold text-slate-400 transition duration-300 ease-in-out hover:bg-slate-700 hover:text-white  ${
          currentStep === 1 ? ' cursor-not-allowed opacity-50 ' : ''
        }`}
      >
        Back
      </button>

      <button
        onClick={() => handleClick('next')}
        className="cursor-pointer rounded-[6px] bg-secondary py-2 px-4 font-semibold text-white transition duration-300 ease-in-out hover:bg-slate-700 hover:text-white"
      >
        {currentStep === steps.length ? 'Confirm' : 'Next'}
      </button>
    </div>
  );
}
