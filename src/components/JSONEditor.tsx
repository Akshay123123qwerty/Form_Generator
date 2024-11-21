import * as React from 'react';
import { useState } from 'react';

interface JSONEditorProps {
  json: string;
  setJson: (newJson: string) => void;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ json, setJson }) => {
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newJson = e.target.value;
    setJson(newJson);

    try {
      JSON.parse(newJson); 
      setError(null); 
    } catch (err) {
      setError('Invalid JSON');
    }
  };

  return (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-700 mb-6 text-center">JSON Editor</h2>
      <div className="flex flex-col md:flex-row gap-6">
       
        <div className="flex-1 bg-gray-50 p-4 border border-gray-300 rounded-md shadow-sm">
          <textarea
            className="w-full h-96 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            value={json}
            onChange={handleChange}
            placeholder="Paste or edit your JSON schema here"
          />
          {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default JSONEditor;
