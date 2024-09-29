interface DividerProps {
  description: string;
}

const Divider: React.FC<DividerProps> = ({ description }) => {
  return (
    <span className="relative flex justify-center py-9">
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

      <span className="relative z-10 bg-white px-6">{description}</span>
    </span>
  );
};

export default Divider;
