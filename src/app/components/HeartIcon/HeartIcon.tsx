import { ButtonBase, Checkbox } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react'
import Image from 'next/image';
import Assets from '@/constants/assets.constant';

export default function HeartIcon({ selected, setSelected }: { selected: boolean; setSelected: any }) {
    return (
        <ButtonBase
          sx={{
            width: '30px',
            height: '30px',
            bottom: '0',
            backgroundColor: '#fff',
            border: 'none',
            borderRadius: '50%',
          }}
        >
          <motion.div
            variants={{
              click: {
                scale: [1, 0.5, 2, 1],
                transition: {
                  duration: 0.3,
                  type: 'spring',
                  stiffness: 1000,
                  damping: 20,
                },
              },
              first: {
                scale: 1,
              },
            }}
            initial="first"
            animate={selected ? 'click' : 'first'}
          >
            <Checkbox
              sx={{
                p: 0,
                m: 0,
              }}
              icon={<Image src={Assets.heartChecked} alt="" width={25} height={25} />}
              checkedIcon={<Image src={Assets.heartUnchecked} alt="" width={25} height={25} />}
              checked={selected}
              onChange={(e) => setSelected?.(e.target.checked)}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        </ButtonBase>
      );
}
