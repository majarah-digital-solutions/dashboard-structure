"use client"
import React, { useId, useState } from 'react';
interface ImagePickerComponentProps {
  defaultImage: string;
  image?: string;
  onSelect: any;
}
export function ImagePickerComponent({ defaultImage,image,onSelect }: ImagePickerComponentProps) {
  const id = useId();
  return (
    <div style={{ marginBottom: 10 }} className='text-center'>
      <label htmlFor={id}>
        <img
          src={image && image !== '' ? image : defaultImage}
          alt="Product Image"
          width={200}
          height={200}
          className='w-50 w-50'
        />
      </label>
      <input
        id={id}
        type="file"
        accept="image/*"
        onChange={onSelect}
        hidden={true}
      />
    </div>
  );
}