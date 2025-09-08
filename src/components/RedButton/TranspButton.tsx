export const TransparentButton = ({ ...props }) => {
  return (
    <button
      onClick={props.onClick}
      className={`inline-flex shadow-md items-center justify-center w-[173px] h-[56px] border border-transparent  rounded-[200px] hover:border-hover-red transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red
disabled:opacity-50 disabled:pointer-events-none`}
    >
      <p className="font-medium text-dark-grey">{props.text}</p>
    </button>
  );
};
