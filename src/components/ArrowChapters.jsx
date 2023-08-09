export default function ArrowChapter({ d }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className=" w-10  text-gray-600 hover:shadow-xl ml-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={d}
      />
    </svg>
  );
}
