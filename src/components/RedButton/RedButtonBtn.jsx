export const RedButton = ({ ...props }) => {
  return (
    <button
      onClick={props.onClick}
      className={`inline-flex shadow-md items-center justify-center w-[173px] h-[56px] border border-transparent  rounded-[200px] bg-red text-white hover:bg-hover-red transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red
disabled:opacity-50 disabled:pointer-events-none`}
    >
      <p className="font-medium">{props.text}</p>
    </button>
  );
};
