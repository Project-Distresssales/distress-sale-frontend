import React, { useState, FC, InputHTMLAttributes, useEffect } from 'react';
import StepperControl from '../StepperControl';
import { Breadcrumbs } from '@mui/material';
import Link from 'next/link';
import Pfs from '../../AdForm/Pfs';

const features = [
  { id: 1, label: 'Security' },
  { id: 2, label: 'Study' },
  { id: 3, label: 'Gym' },
  { id: 4, label: 'Spa' },
  { id: 5, label: 'Balcony' },
  { id: 6, label: 'Built in Wardrobes' },
  { id: 7, label: 'Walk-in Closet' },
  { id: 8, label: 'Barbecue Area' },
  { id: 9, label: 'Garden' },
  { id: 10, label: 'Laundry Room' },
  { id: 11, label: 'CCTV Security' },
  { id: 12, label: 'Kids Play Area' },
  { id: 13, label: 'View of Landmark' },
  { id: 14, label: 'Lobby' },
  { id: 15, label: 'Double Glazed Windows' },
  { id: 16, label: 'Service Elevators' },
  { id: 17, label: 'Electricity Backup' },
  { id: 18, label: 'Jacuzzi' },
  { id: 19, label: 'Reception/Waiting Room' },
  { id: 20, label: 'Covered Parking' },
  { id: 21, label: 'Study' },
];

interface Step5Props {
  handleClick: () => void;
  currentStep: number;
  steps: any[]; // Replace 'any[]' with the actual type for steps
}

const Step5: FC<Step5Props> = ({ handleClick, currentStep, steps }) => {
  const [storedSectionName, setStoredSectionName] = useState<any>('');
  const [title, setTitle] = useState<string>('');
  const [tourUrl, setTourUrl] = useState<string>('');
  const [price, setPrice] = useState<number | null>();
  const [closingFee, setClosingFee] = useState<number | null>();
  const [communityFee, setCommunityFee] = useState<number | null>();
  const [bedroom, setBedroom] = useState<number | null>();
  const [bathroom, setBathroom] = useState<number | null>();
  const [size, setSize] = useState<string>('');
  const [readyDate, setReadyDate] = useState<string>('');
  const [referenceId, setReferenceId] = useState<string>('');
  const [occupancyStatus, setOccupancyStatus] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [shortDesc, setShortDesc] = useState<string>('');
  const [fullDesc, setFullDesc] = useState<string>('');

  const handleInputChange = (key: string, value: string | number) => {
    switch (key) {
      case 'title':
        setTitle(value as string);
        break;
      case 'tourUrl':
        setTourUrl(value as string);
        break;
      case 'price':
        setPrice(value as number | null);
        break;
      case 'closingFee':
        setClosingFee(value as number | null);
        break;
      case 'communityFee':
        setCommunityFee(value as number | null);
        break;
      case 'bedroom':
        setBedroom(value as number | null);
        break;
      case 'bathroom':
        setBathroom(value as number | null);
        break;
      case 'size':
        setSize(value as string);
        break;
      case 'readyDate':
        setReadyDate(value as string);
        break;
      case 'referenceId':
        setReferenceId(value as string);
        break;
      case 'occupancyStatus':
        setOccupancyStatus(value as string);
        break;
      case 'location':
        setLocation(value as string);
        break;
      case 'shortDesc':
        setShortDesc(value as string);
        break;
      case 'fullDesc':
        setFullDesc(value as string);
        break;
      default:
        // Handle unexpected key
        break;
    }
  };



  useEffect(() => {
    const dataToSave = {
      title,
      tourUrl,
      price,
      closingFee,
      communityFee,
      bedroom,
      bathroom,
      size,
      readyDate,
      referenceId,
      occupancyStatus,
      location,
      shortDesc,
      fullDesc,
    };

    localStorage.setItem('pfsFormDataKey', JSON.stringify(dataToSave));
  }, [title, tourUrl, price, closingFee, communityFee, bedroom, bathroom, size, readyDate, referenceId, occupancyStatus, location, shortDesc, fullDesc]);

  useEffect(() => {
    setShortDesc(localStorage.getItem('shortDesc') || '');

    const fetchDataFromLocalStorage = () => {
        const storedData = localStorage.getItem('pfsFormDataKey');
    
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setBathroom(parsedData.bathroom || 0);
            setBedroom(parsedData.bedroom || 0);
            setClosingFee(parseFloat(parsedData.closingFee || 0));
            setCommunityFee(parsedData.communityFee || 0);
            setFullDesc(parsedData.fullDesc || '');
            setLocation(parsedData.location || '');
            setOccupancyStatus(parsedData.occupancyStatus || '');
            setPrice(parseFloat(parsedData.price || 0));
            setReadyDate(parsedData.readyDate || '');
            setReferenceId(parsedData.referenceId || '');
            setSize(parsedData.size || '');
            setTitle(parsedData.title || '');
            setTourUrl(parsedData.tourUrl || '');
        }
    };
    
    
    fetchDataFromLocalStorage();
}, []);


  useEffect(() => {
    const storedSectionName = localStorage.getItem('selectedSectionName');
    if (storedSectionName) {
      setStoredSectionName(storedSectionName);
    }
  }, []);

  const breadcrumbs = [
    <Link className="hover:underline text-[#415EFF] " key="1" color="inherit" href="#">
      Property for Sale
    </Link>,
    <Link className="hover:underline text-[#415EFF] " key="2" color="inherit" href="#">
      Residential for Sale
    </Link>,
    <p className=" font-medium text-black " key="3">
      Apartment for Sale
    </p>,
  ];
  return (
    <div>
      <div>
        {storedSectionName === 'Property for Sale' ? (
          <Pfs
            title={title}
            tourUrl={tourUrl}
            price={price}
            closingFee={closingFee}
            communityFee={communityFee}
            bedroom={bedroom}
            bathroom={bathroom}
            size={size}
            readyDate={readyDate}
            referenceId={referenceId}
            occupancyStatus={occupancyStatus}
            location={location}
            shortDesc={shortDesc}
            fullDesc={fullDesc}
            handleChange={handleInputChange}
          />
        ) :
          (
            null
          )}
      </div>
      {currentStep !== steps.length && (
        <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
      )}
    </div>
  );
};

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputType?: 'text' | 'password' | 'email' | 'url'; // Added inputType prop
}

export const TextField: FC<TextFieldProps> = ({ label, inputType = 'text', ...inputProps }) => {
  return (
    <input
      type={inputType}
      className="max-w-[403px] w-full appearance-none rounded-md border border-[#EAECF0] px-5 py-3 text-sm focus:border-distressBlue focus:outline-none focus:ring-0"
      placeholder={`${label}`}
      {...inputProps}
    />
  );
};

interface Checkbox {
  id: number;
  label: string;
}

interface CheckboxListProps {
  features: Checkbox[];
}

const CheckboxList: FC<CheckboxListProps> = ({ features }) => {
  const [selectedFeatures, setSelectedFeatures] = useState<number[]>([]);

  const handleCheckboxChange = (id: number) => {
    if (selectedFeatures.includes(id)) {
      // If the checkbox is already selected, remove it from the array
      setSelectedFeatures((prevSelected) => prevSelected.filter((feature) => feature !== id));
    } else {
      // If the checkbox is not selected, add it to the array
      setSelectedFeatures((prevSelected) => [...prevSelected, id]);
    }
  };

  return (
    <div className="w-full flex flex-row ">
      <label className="font-medium whitespace-nowrap md:w-[169px] mr-6 opacity-0">Description</label>
      <div className='grid grid-cols-5 gap-5  ' >
        {features.map((feature) => (
          <div key={feature.id} className="flex items-center gap-4">
            <input
              type="checkbox"
              id={`feature-${feature.id}`}
              checked={selectedFeatures.includes(feature.id)}
              onChange={() => handleCheckboxChange(feature.id)}
            />
            <label htmlFor={`feature-${feature.id}`}>{feature.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step5;
