

export const Button = ({label, iconURL=null,backgroundColor,borderColor,textColor,fullwidth}) => {
    console.log('iconURL:', iconURL);
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4  rounded-full border font-montserrat 
    leading-none
    ${backgroundColor
      ? `${backgroundColor} ${textColor} ${borderColor} rounded-full ${fullwidth &&'w-full'}`
      :`text-lg bg-coral-red  text-white`
    }`}>
        {label}
        
      {iconURL && <img src={iconURL} className="rounded-full ml-2 w-5 h-5" alt="icon" />}
    </button>
  )
}

export default Button