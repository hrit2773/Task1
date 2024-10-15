import { Alert,Button, TextField } from '@mui/material'
import './App.css'
import { useForm, SubmitHandler } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';

type Inputs = {
  name: string
  email: string
  message:string
}


export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) =>{
    toast(
      <div>
        <Alert severity="success">Hi {data.name} your message is sent successfully!</Alert>
      </div>
    )
  }


  return (
    <div className=' flex flex-col gap-2'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=' flex flex-col gap-3'>
          <div className='flex flex-col gap-1'>
            <TextField {...register('name',{ required: true })} id="outlined-basic" label="Name" variant="outlined" />
            {errors.name && <span className='text-left text-red-500'>This field is required</span>}
          </div>
          <div className='flex flex-col gap-1'>
            <TextField {...register('email',{ required: true })} id="outlined-basic" label="Email" variant="outlined" />
            {errors.email && <span className='text-left text-red-500'>This field is required</span>}
          </div>
          <div className='flex flex-col gap-1'>
            <TextField {...register('message',{ required: true })} id="outlined-basic" label="Message" variant="outlined" />
            {errors.message && <span className=' text-left text-red-500'>This field is required</span>}
          </div>
          <Button type='submit' variant="contained">Submit</Button>
        </div>
      </form>
      <ToastContainer/>
    </div>
  )
}
