import React from "react";

const FormField = ({ label, type, id, name, autoComplete, options }) => {
  return (
    <div className="ml-[650px] mt-[100px] col-span-full">
      <div className="w-96 h-12 p-3 bg-slate-50 rounded flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="self-stretch text-black-300 text-base font-medium font-serif leading-6 tracking-tight">
          {label}
        </div>
        {type === "radio" ? (
          <div className="mt-2 space-y-2">
            {options.map((option) => (
              <div key={option.value} className="flex items-center gap-x-3">
                <input
                  id={option.id}
                  name={name}
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor={option.id}
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        ) : (
          <input
            type={type}
            name={name}
            id={id}
            autoComplete={autoComplete}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        )}
      </div>
    </div>
  );
};
export default FormField;
