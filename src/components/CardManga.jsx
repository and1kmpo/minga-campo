export default function CardManga({ title, category, imageSrc, color }) {
  return (
    <div
      className="min-w-[400px] h-[200px] bg-white flex items-center mt-6 rounded-xl border-l-8 font-poppins shadow-xl"
      style={{ borderColor: color }}
    >
      <div className="flex flex-col p-4">
        <h1 className="text-black text-xl font-medium">{title}</h1>
        <p
          className="text-lg mb-4 capitalize font-medium"
          style={{ color: color }}
        >
          {category}
        </p>
      </div>
      <div className="flex-grow"></div>
      <img
        src={imageSrc}
        alt={title}
        className="min-w-[150px] max-w-[125px] h-[200px] object-cover rounded-r-xl rounded-[50%_0px_0px_50%]"
      />
    </div>
  );
}
