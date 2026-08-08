// the h and w of the svg is change from the css

const UserSvg = ({ h = 0, w = 0, c }) => {
    return <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="6" r="4" stroke={c} strokeWidth="1.5" />
        <path d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
}


const EmailSvg = ({ h = 0, w = 0, c }) => {
    return <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} viewBox="0 0 24 24" fill="none">
        <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke={c} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3" y="5" width="18" height="14" rx="2" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
}

const PassWordSvg = ({ h = 0, w = 0, c }) => {
    return <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} viewBox="0 0 24 24" fill="none">
        <path d="M6 10V8C6 7.65929 6.0284 7.32521 6.08296 7M18 10V8C18 4.68629 15.3137 2 12 2C10.208 2 8.59942 2.78563 7.5 4.03126" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
        <path d="M11 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
}
export {
    UserSvg,
    EmailSvg,
    PassWordSvg
}