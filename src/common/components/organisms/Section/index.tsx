"use client"
import React from 'react';
import { BarLoader } from 'react-spinners';
import './style.css'

const Section = ({ title ,children, footer, header, loading, maxHeight = "unset", button }: any) => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-solid border-black-125 shadow-soft-xl rounded-2xl bg-clip-border mb-2">
      {(title || header || button) ?
        <>
          <div className="p-4 mb-0  flex justify-between">
            <div className='lode' >
              {title ? <h6>{title}</h6> : null}
              {loading ? <div className='flex justify-center text-center'><BarLoader className='m-auto' color="#36d7b7" /></div> : header ? header : null}
            </div>
            {button && (
              <div className=''  >
                {button}
              </div>
            )}
          </div>
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-100" />
        </>
        : null}
      <div className="p-4">
        {children}
      </div>
      {footer ?
        <>
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-100" />
          <div className="p-4 mb-0 rounded-t-4">
            <div className="flex justify-between">
              {footer}
            </div>
          </div>
        </>
        : null}
    </div>
  );
}

export { Section };
