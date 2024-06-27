"use client"
import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import Select from 'react-select'

interface Data {
  title: string;
  _id: any;
}
interface SelectorProps {
  data: Data[] | [],
  selected?: any,
  onSelect: (event: SelectChangeEvent) => void,
  placeholder?: string
  isMulti?: boolean;
}

export function Selector({ data, selected = null, onSelect, placeholder = "" , isMulti }: SelectorProps) {


  const customGetOptionLabel = (option: Data) => option.title;
  const customGetOptionValue = (option: Data) => option._id;

  return (
    <FormControl fullWidth sx={{ m: 0 }}>
      <Select
        className="basic-single"
        placeholder={placeholder}
        value={selected}
        isLoading={false}
        isClearable={true}
        isRtl={true}
        isSearchable
        name="category"
        options={data}
        isMulti={isMulti}
        styles={{
          control: (styles) => ({
            ...styles,
            minHeight: "56px",
          }),
          multiValue: (styles) => ({
            ...styles,
            borderRadius: 5,
            padding: 5
          })
        }}
        onChange={(val: any) => onSelect(val)}
        getOptionLabel={customGetOptionLabel}
        getOptionValue={customGetOptionValue}
        menuPosition={'fixed'}

      />
    </FormControl>
  );
}