export default function Category({ name, color, hover, value, action }) {
    return (
        <input style={{ backgroundColor: `${hover}`, color: `${color}` }} onClick={action} value={name} id={value} type="button"
            className='w-[75px] h-[35px] rounded-[50px] font-poppins font-medium text-[12px] leading-[11.42px] text-center' />
    )
}