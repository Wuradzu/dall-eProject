import React from "react";

interface IProps{
    labelName: string,
    type: string,
    name: string,
    placeholder: string,
    value: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    isSurpriseMe?: boolean ,
    handleSurpriseMe?: () => void
}

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}: IProps) => {
  return (
    <div>
      <div className="flex items-center mt-4">
        <label htmlFor={name} className='block text-sm font-medium text-gray-900'>
          {labelName}
        </label>
        {isSurpriseMe && <button
        type='button'
        onClick={handleSurpriseMe}
        className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black ml-2'
        >
          Surprise Me
          </button>}
      </div>
      <input
      type='text'
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mt-2 focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3"
      />
    </div>
  );
};

export default FormField;
