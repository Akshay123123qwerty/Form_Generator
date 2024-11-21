const FormField = ({ field, register, errors }) => {
    switch (field.type) {
      case "text":
      case "email":
        return (
          <div className="space-y-2">
            <label className="block text-gray-700">{field.label}</label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              {...register(field.id, { required: field.required })}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
            />
            {errors[field.id] && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
        );
      case "select":
        return (
          <div className="space-y-2">
            <label className="block text-gray-700">{field.label}</label>
            <select
              {...register(field.id, { required: field.required })}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
            >
              {field.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors[field.id] && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
        );
      case "radio":
        return (
          <div className="space-y-2">
            <label className="block text-gray-700">{field.label}</label>
            <div className="flex space-x-4">
              {field.options.map((option) => (
                <div key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    value={option.value}
                    {...register(field.id, { required: field.required })}
                    className="mr-2"
                  />
                  <label>{option.label}</label>
                </div>
              ))}
            </div>
            {errors[field.id] && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
        );
      case "textarea":
        return (
          <div className="space-y-2">
            <label className="block text-gray-700">{field.label}</label>
            <textarea
              placeholder={field.placeholder}
              {...register(field.id, { required: field.required })}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
            />
            {errors[field.id] && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
        );
      default:
        return null;
    }
  };
  
  export default FormField;
  