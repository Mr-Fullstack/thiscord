
const MakeSVG = ({ children, ...props }: React.SVGProps<SVGSVGElement>) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      {children}
    </svg>
  )
}

export const IconInstallDesktop = ({ fill = 'currentColor' }: React.SVGProps<SVGSVGElement>) => {

  return (
    <MakeSVG width="24" height="26" viewBox="0 0 24 26" fill="none">
      <path d="M20 18.2344H4V5.363H12V3.21777H4C2.9 3.21777 2 4.18313 2 5.363V18.2344C2 19.4142 2.89 20.3796 4 20.3796H8V21.4522C8 22.0421 8.45 22.5248 9 22.5248H15C15.55 22.5248 16 22.0421 16 21.4522V20.3796H20C21.1 20.3796 22 19.4142 22 18.2344V15.0165H20V18.2344Z" fill={fill} />
      <path d="M17.71 14.255L21.3 10.4043C21.69 9.98596 21.69 9.31022 21.3 8.8919C20.91 8.47358 20.28 8.47358 19.89 8.8919L18 10.9084V4.29039C18 3.70045 17.55 3.21777 17 3.21777C16.45 3.21777 16 3.70045 16 4.29039V10.9084L14.11 8.8919C13.72 8.47358 13.09 8.47358 12.7 8.8919C12.31 9.31022 12.31 9.98596 12.7 10.4043L16.29 14.255C16.69 14.6733 17.32 14.6733 17.71 14.255Z" fill={fill} />
    </MakeSVG>
  )
}

export const IconInstallMobile = ({ fill = 'currentColor' }: React.SVGProps<SVGSVGElement>) => {

  return (
    <MakeSVG width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M16.9137 13.29L20.5037 9.7C20.8937 9.31 20.8937 8.68 20.5037 8.29C20.1137 7.9 19.4837 7.9 19.0937 8.29L17.2037 10.17V4C17.2037 3.45 16.7537 3 16.2037 3C15.6537 3 15.2037 3.45 15.2037 4V10.17L13.3137 8.29C12.9237 7.9 12.2937 7.9 11.9037 8.29C11.5137 8.68 11.5137 9.31 11.9037 9.7L15.4937 13.29C15.8937 13.68 16.5237 13.68 16.9137 13.29Z" fill={fill} />
      <path d="M15.2037 18H5.20374V6H12.2037V1H5.20374C4.10374 1 3.20374 1.9 3.20374 3V21C3.20374 22.1 4.10374 23 5.20374 23H15.2037C16.3037 23 17.2037 22.1 17.2037 21V16H15.2037V18Z" fill={fill} />
    </MakeSVG>
  )
}

export const IconInstallBrowser = ({ fill = 'currentColor' }: React.SVGProps<SVGSVGElement>) => {
  return (
    <MakeSVG width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4 12C4 11.39 4.08 10.79 4.21 10.22L8.99 15V16C8.99 17.1 9.89 18 10.99 18V19.93C7.06 19.43 4 16.07 4 12ZM17.89 17.4C17.63 16.59 16.89 16 15.99 16H14.99V13C14.99 12.45 14.54 12 13.99 12H7.99V10H9.99C10.54 10 10.99 9.55 10.99 9V7H12.99C14.09 7 14.99 6.1 14.99 5V4.59C17.92 5.77 20 8.65 20 12C20 14.08 19.19 15.98 17.89 17.4Z" fill={fill} />
    </MakeSVG>
  )
}