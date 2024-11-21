import React from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import FormField from './FormField';

interface Option {
  value: string;
  label: string;
}

interface Field {
  id: string;
  label: string;
  type: string;
  required: boolean;
  placeholder?: string;
  validation?: {
    pattern: string;
    message: string;
  };
  options?: Option[];
}

interface Schema {
  formTitle: string;
  formDescription: string;
  fields: Field[];
}

interface GeneratedFormProps {
  schema: Schema;
  onSubmit?: (formData: FieldValues) => void; 
}

const GeneratedForm: React.FC<GeneratedFormProps> = ({ schema, onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>();

  const defaultSubmitHandler = (data: FieldValues) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit || defaultSubmitHandler)} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">{schema.formTitle}</h2>
        <p className="text-gray-600 mb-4">{schema.formDescription}</p>
      </div>
      {schema.fields.map((field) => (
        <FormField key={field.id} field={field} register={register} errors={errors} />
      ))}
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md shadow-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default GeneratedForm;
