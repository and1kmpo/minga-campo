export default function ButtonGral({ text, bg_color, color }) {
  return (
    <button
        className='font-bold rounded-full py-4 hover:shadow-none'
        style={{ background: `${bg_color}` }}
        type='button'>
        <span
          className="text-[24px] leading-[28.13px]"
          style={{ color: `${color}` }}>
            {text}
        </span>
    </button>
  )
}
