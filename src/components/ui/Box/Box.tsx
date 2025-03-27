import { ReactNode } from "react"

interface IBox {
  children?: ReactNode
}

export default function Box({children}: IBox) {
  return (
    <div className='p-20 shadow-2xl bg-dark-800 border-b-primary rounded-xl'>
      {children}
    </div>
  )
}
