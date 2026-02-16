'use client';
import { Magnetic } from '@/components/ui/magnetic';


export function MagneticBasic({text,classname}) {
  return (
    <Magnetic>
      <button
        type='button'
        className={` ${classname}`}
      >
        <span>{text}</span>
      </button>
    </Magnetic>
  );
}
