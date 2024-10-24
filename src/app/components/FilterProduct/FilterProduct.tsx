import React from 'react'
import { Checkbox, FormControlLabel, Radio, Slider, SliderThumb, styled } from '@mui/material';

export default function FilterProduct() {
    const propertyType = [
        {
          title: 'Apartments for Sale',
          active: true,
        },
        {
          title: 'Commercial Building for Sale',
          active: false,
        },
        {
          title: 'Multiple Units for Sale',
          active: false,
        },
        {
          title: 'Land for Sale',
          active: false,
        },
        {
          title: 'Residential Building for Sale',
          active: false,
        },
        {
          title: 'Townhouse for Sale',
          active: false,
        },
      ];
    
      const purpose = [
        {
          title: 'Buy',
          active: true,
        },
        {
          title: 'Sell',
          active: true,
        },
      ];
    
      const priceRange = [
        {
          title: 'All Price',
          active: true,
        },
        {
          title: 'Under AED20',
          active: false,
        },
        {
          title: 'AED100 to AED300',
          active: false,
        },
        {
          title: 'AED300 to AED500',
          active: false,
        },
        {
          title: 'AED500 to AED1,000',
          active: false,
        },
        {
          title: 'AED1,000 to AED10,000',
          active: false,
        },
      ];
    
      const popularLocations = [
        {
          title: 'Dubai',
          active: true,
        },
        {
          title: 'Abu Dhabi',
          active: false,
        },
        {
          title: 'Al Ain',
          active: false,
        },
        {
          title: 'Ajman',
          active: false,
        },
        {
          title: 'Sharjah',
          active: false,
        },
        {
          title: 'Fujairah',
          active: false,
        },
        {
          title: 'Umm Al Quwain',
          active: false,
        },
        {
          title: 'Ras Al Khaimah',
          active: false,
        },
      ];
    
      const popularTags = [
        {
          title: 'Game',
          active: true,
        },
        {
          title: 'iPhone',
          active: false,
        },
        {
          title: 'TV',
          active: false,
        },
        {
          title: 'Asus Laptops',
          active: false,
        },
        {
          title: 'Macbook',
          active: false,
        },
        {
          title: 'SSD',
          active: false,
        },
        {
          title: 'Graphics Card',
          active: false,
        },
        {
          title: 'Microwave',
          active: false,
        },
        {
          title: 'Smart TV',
          active: false,
        },
      ];
    
      function valuetext(value: number) {
        return `${value}°C`;
      }
    
      const [value, setValue] = React.useState<number[]>([20, 37]);
    
      const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
      };
    
      const AirbnbSlider = styled(Slider)(({ theme }) => ({
        color: '#3a8589',
        height: 3,
        padding: '13px 0',
        '& .MuiSlider-thumb': {
          height: 27,
          width: 27,
          backgroundColor: '#fff',
          border: '1px solid currentColor',
          '&:hover': {
            boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
          },
          '& .airbnb-bar': {
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
          },
        },
        '& .MuiSlider-track': {
          height: 3,
        },
        '& .MuiSlider-rail': {
          color: '#d8d8d8',
          opacity: 1,
          height: 3,
          ...theme.applyStyles('dark', {
            color: '#bfbfbf',
            opacity: undefined,
          }),
        },
      }));
    
      interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> {}
    
      function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
        const { children, ...other } = props;
        return (
          <SliderThumb {...other}>
            {children}
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
          </SliderThumb>
        );
      }

      
  return (
    <div className="flex flex-col divide-y w-[300px]">
    {/* Filter */}
    <div className="pb-3">
      <p className="text-[#0A0A0B] text-[16px] font-[600]">Property Type</p>
      <div className="mt-2">
        {propertyType.map((item, i) => (
          <div key={i} className="">
            <FormControlLabel
              value={item.title}
              control={<Radio size="small" />}
              label={item.title}
              sx={{
                '.MuiFormControlLabel-label': {
                  fontSize: '14px', // Custom font size for the label
                  fontWeight: '400', // Custom font weight
                  color: '#5A5555', // Custom text color
                },
              }}
            />
          </div>
        ))}
      </div>
    </div>

    <div className="py-3">
      <p className="text-[#0A0A0B] text-[16px] font-[600]">Purpose</p>
      <div className="mt-2">
        {purpose.map((item, i) => (
          <div key={i} className="">
            <FormControlLabel
              value={item.title}
              control={<Radio size="small" />}
              label={item.title}
              sx={{
                '.MuiFormControlLabel-label': {
                  fontSize: '14px', // Custom font size for the label
                  fontWeight: '400', // Custom font weight
                  color: '#5A5555', // Custom text color
                },
              }}
            />
          </div>
        ))}
      </div>
    </div>

    <div className="py-3">
      <p className="text-[#0A0A0B] text-[16px] font-[600]">Price Range</p>
      <div className='mt-3'>
      <AirbnbSlider
        slots={{ thumb: AirbnbThumbComponent }}
        getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
        defaultValue={[20, 40]}
      />
      </div>
      <div className="mt-2">
        {priceRange.map((item, i) => (
          <div key={i} className="">
            <FormControlLabel
              value={item.title}
              control={<Radio size="small" />}
              label={item.title}
              sx={{
                '.MuiFormControlLabel-label': {
                  fontSize: '14px', // Custom font size for the label
                  fontWeight: '400', // Custom font weight
                  color: '#5A5555', // Custom text color
                },
              }}
            />
          </div>
        ))}
      </div>
    </div>

    <div className="py-3">
      <p className="text-[#0A0A0B] text-[16px] font-[600]">Popular Locations</p>
      <div className="mt-2 grid grid-cols-2">
        {popularLocations.map((item, i) => (
          <div key={i} className="">
            <FormControlLabel
              value={item.title}
              control={<Checkbox size="small" />}
              label={item.title}
              sx={{
                '.MuiFormControlLabel-label': {
                  fontSize: '14px', // Custom font size for the label
                  fontWeight: '400', // Custom font weight
                  color: '#5A5555', // Custom text color
                },
              }}
            />
          </div>
        ))}
      </div>
    </div>

    <div className="py-3">
      <p className="text-[#0A0A0B] text-[16px] font-[600]">Popular Tag</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {popularTags.map((item, i) => (
          <div
            key={i}
            className="px-[8px] py-[4px] cursor-pointer rounded-full flex justify-center items-center border bg-slate-50"
          >
            <p className="leading-none text-[12px] font-[400]">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}
