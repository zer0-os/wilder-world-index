export default function LinkButton({ href, size, className, children, style = "white", ...rest }) {
  return (
    <a
      href={href}
      className={`
        ${className}
        ${size === "small" ? "px-3 py-1 text-sm" : "px-4 py-2 text-lg"}
        ${style === "white" && "bg-white text-white border-white hover:bg-white hover:text-black"}
        ${style === "0" && "bg-cybercity text-cybercity-text border-cybercity hover:bg-cybercity hover:text-white"}
        ${style === "1" && "bg-cave text-cave-text border-cave hover:bg-cave hover:text-white"}
        ${style === "2" && "bg-forest text-forest-text border-forest hover:bg-forest hover:text-white"}
        hover:bg-opacity-70 bg-opacity-20 inline-flex items-center border mx-3 leading-6 font-medium rounded-md focus:outline-none focus:border-none focus:shadow-outline-none transition duration-150 ease-in-out
      `}
      target="_blank"
      {...rest}
    >
      {children}
    </a>
  );
}
