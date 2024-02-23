// BUTTON COMPONENT : STYLE - MINIMILISTIC
export interface Button {
    children: React.ReactNode
    type: "submit" | "reset" | "button" 
    style: string
}
export function Button({children,type,style}:Button) {
  return <button className={`p-4 rounded-2xl w-auto h-auto bg-white text-black ${style}`} type={type}>{children}</button>
}
