import { useToastContext } from "../../../contexts/ToastContext"

interface IToastProps {
  title?: string
  description?: string
  status?: 'success' | 'fail' | 'info'
}

const Toast = ({status = 'success', description = 'successfully load toast ...', title = 'Success'}: IToastProps) => {
  const toast = useToastContext()
  toast({description, status, title})
  return (
    <></>
  )
}

export default Toast