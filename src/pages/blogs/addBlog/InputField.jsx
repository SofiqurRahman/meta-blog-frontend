const InputField = ({ label, id, type, register, placeholder }) => {
  return (
    <div>
      <label
        htmlFor="name"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        {...register}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputField;
