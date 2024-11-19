export default function StepperControl({ handleClick, currentStep, steps }) {
  return (
    <div className="container mt-4 mb-8 flex justify-around">
      <button
        onClick={() => handleClick()}
        className={`cursor-pointer rounded-full border-2 border-slate-300 bg-white py-2 px-8 font-semibold text-slate-400 transition duration-300 ease-in-out hover:bg-slate-700 hover:text-white  ${
          currentStep === 1 ? ' cursor-not-allowed opacity-50 ' : ''
        }`}
      >
        Back
      </button>

      <button
        onClick={() => handleClick('next')}
        className="cursor-pointer rounded-full bg-secondary py-2 px-8 font-semibold text-white transition duration-300 ease-in-out hover:bg-slate-700 hover:text-white"
      >
        {currentStep === steps.length ? 'Confirm' : 'Next'}
      </button>
    </div>
  );
}
