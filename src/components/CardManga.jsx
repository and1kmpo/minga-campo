export default function CardManga({ title, category, imageSrc, color }) {
    return (
        <div className="w-[300px] h-[150px] flex items-center m-10 rounded-xl border-l-8" style={{ backgroundColor: color }}>
            <div className="flex flex-col p-4" >
                <h1 className="text-black text-lg font-bold mb-2">{title}</h1>
                <p className="text-sm mb-4" style={{ color: color }}>{category}</p>
            </div>
            <div className="flex-grow"></div>
            <img
                src={imageSrc}
                alt={title}
                className="w-[150px] h-[150px] object-cover rounded-r-xl rounded-[50%_0px_0px_50%]"
            />
        </div>
    );
}
