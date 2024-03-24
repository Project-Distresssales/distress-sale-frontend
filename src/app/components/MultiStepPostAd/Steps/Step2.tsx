import React, { ReactNode, FC, useState, useEffect } from 'react';
import StepperControl from '../StepperControl';
import { BusinessBagIcon, CarIcon, HouseIcon, TreeListIcon } from '../../Icons/Icons';
import API from '@/constants/api.constant';
import { catchAsync } from '@/helpers/api.helper';
import useRequest from '@/services/request/request.service';
import { toast } from 'react-toastify';

interface Step2Props {
  handleClick: () => void;
  currentStep: number;
  steps: any[]; // Replace 'any[]' with the actual type for steps
}

const categories = [
  { text: 'Property', icon: <HouseIcon /> },
  { text: 'Car', icon: <CarIcon /> },
  { text: 'Commercial', icon: <BusinessBagIcon /> },
  { text: 'Others', icon: <TreeListIcon /> },
];

const Step2: React.FC<Step2Props> = ({ handleClick, currentStep, steps }) => {
  const { isLoading, makeRequest } = useRequest();
  const [sections, setSections] = useState<any[]>([]);
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);
  const [selectedSectionName, setSelectedSectionName] = useState<string>('');

  useEffect(() => {
    const storedSectionId = localStorage.getItem('selectedSectionId');
    const storedSectionName = localStorage.getItem('selectedSectionName');
    if (storedSectionId && storedSectionName) {
      setSelectedSectionId(storedSectionId);
      setSelectedSectionName(storedSectionName);
    }
  }, []);

  const handleSelect = (sectionId, sectionName) => {
    if (sectionId !== null) {
      // Update state and store in localStorage
      setSelectedSectionId(sectionId);
      setSelectedSectionName(sectionName);
      localStorage.setItem('selectedSectionId', sectionId);
      localStorage.setItem('selectedSectionName', sectionName);
    } else {
      toast.error('Please select a benefit before continuing.');
    }
  };


  const handleGetSections = async () => {
    catchAsync(
      async () => {
        const res = await makeRequest({
          method: "GET",
          url: API.sections,
        });

        const { message, data } = res.data;
        setSections(data);
      },
      (error: any) => {
        const res: any = error?.response;

        const status = res?.status;
        const data = res?.data;

        if (status === 406) {
          toast.error(data.message);
        } else {
          toast.error('Something went wrong! Pls try again!', {});
        }
      }
    );
  };

  useEffect(() => {
    handleGetSections();
  }, []);

  return (
    <div className=" flex flex-col gap-16 ">
      <div className="flex flex-col gap-6 w-full justify-center items-center">
        <h2 className="md:text-2xl text-[5vw] font-bold leading-tight text-center">Hello, what items do you have to list today?</h2>
        <p className="font-medium text-[#667085] md:text-[16px] text-[4vw]">Choose the category that best suits your ad</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-y-8 gap-x-4">
        {sections?.map((category, index) => (
          <CategoryButton
            key={index}
            text={category?.name}
            icon={category?.name === 'Property for sale' ? <HouseIcon /> :
              category?.name === 'Automobile' ? <CarIcon /> :
                category?.name === 'Listings' ? <BusinessBagIcon /> :
                  <TreeListIcon />
            }
            selected={selectedSectionId === category?._id}
            onClick={() => handleSelect(category?._id, category?.name)}
          />
        ))}
      </div>
      {currentStep !== steps.length && (
        <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
      )}
    </div>
  );
};

interface CategoryButtonProps {
  text: string;
  icon?: ReactNode;
  selected?: boolean;
  [key: string]: any;
}

export const CategoryButton: FC<CategoryButtonProps> = ({ text, icon, selected, ...others }) => {
  return (
    <button
      className={`px-4 w-fit py-3 rounded-[10px] ${selected ? 'border-[#415EFF]' : 'border-[#EAECF0]'
        } transition-all duration-500 border-2 flex items-center gap-2.5 justify-self-center `}
      type="button"
      style={{ boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)' }}
      {...others}
    >
      {icon && <span className="">{icon}</span>}
      <span className='md:text-[16px] text-[3.5vw] font-[500]'>{text}</span>
    </button>
  );
};

export default Step2;
