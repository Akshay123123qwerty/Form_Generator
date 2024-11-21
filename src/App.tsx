import React, { useState } from 'react';
import JSONEditor from './components/JSONEditor';
import GeneratedForm from './components/GeneratedForm';
import './index.css';

const sampleSchema = {
  formTitle: 'Project Requirements Survey',
  formDescription: 'Please fill out this survey about your project needs',
  fields: [
    {
      id: 'name',
      type: 'text',
      label: 'Full Name',
      required: true,
      placeholder: 'Enter your full name',
    },
    {
      id: 'email',
      type: 'email',
      label: 'Email Address',
      required: true,
      placeholder: 'you@example.com',
      validation: {
        pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
        message: 'Please enter a valid email address',
      },
    },
    {
      id: 'companySize',
      type: 'select',
      label: 'Company Size',
      required: true,
      options: [
        { value: '1-50', label: '1-50 employees' },
        { value: '51-200', label: '51-200 employees' },
        { value: '201-1000', label: '201-1000 employees' },
        { value: '1000+', label: '1000+ employees' },
      ],
    },
    {
      id: 'industry',
      type: 'radio',
      label: 'Industry',
      required: true,
      options: [
        { value: 'tech', label: 'Technology' },
        { value: 'healthcare', label: 'Healthcare' },
        { value: 'finance', label: 'Finance' },
        { value: 'retail', label: 'Retail' },
        { value: 'other', label: 'Other' },
      ],
    },
    {
      id: 'comments',
      type: 'textarea',
      label: 'Additional Comments',
      required: false,
    },
  ],
};

const App: React.FC = () => {
  const [json, setJson] = useState<string>(JSON.stringify(sampleSchema, null, 2));

  return (
    <div className="container mx-auto p-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
        <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg">
          <JSONEditor json={json} setJson={setJson} />
        </div>

        
        <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg">
          <GeneratedForm schema={JSON.parse(json)} />
        </div>
      </div>
    </div>
  );
};

export default App;
