// import './App.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button } from '@mui/material';


const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
  .string()
  .required('Password is required')
  .min(8, 'Password must be at least 8 characters long'),
confirmPassword: yup
  .string()
  .oneOf([yup.ref('password'), null], 'Passwords must match')
  .required('Confirm Password is required'),
});

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const handleDataSubmission = (data) => {
    console.log(data); // Process form data here
  };
  const formStyles = {
    height:'100vh',
    width:'100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center',
    gap:'10px'
  }
  // return (
  //   <form onSubmit={handleSubmit(handleDataSubmission)} style={formStyles}>
  //     <input {...register('firstName')} placeholder='First Name' />
  //     {errors.firstName && <p>{errors.firstName.message}</p>}
  
  //     <input {...register('lastName')} placeholder='Last Name' />
  //     {errors.lastName && <p>{errors.lastName.message}</p>}
  
  //     <input {...register('email')} placeholder='Your Email'/>
  //     {errors.email && <p>{errors.email.message}</p>}
  
  //     <button type="submit">Submit</button>
  //   </form>
  // );


  return (
    <form onSubmit={handleSubmit(handleDataSubmission)} style={formStyles}>
      <TextField
        label="First Name"
        {...register('firstName')}
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
      />
  
      <TextField
        label="Last Name"
        {...register('lastName')}
        error={!!errors.lastName}
        helperText={errors.lastName?.message}
      />
  
      <TextField
        label="Email"
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
  
  <TextField
      label="Password"
      type="password"
      {...register('password')}
      error={!!errors.password}
      helperText={errors.password?.message}
    />

    <TextField
      label="Confirm Password"
      type="password"
      {...register('confirmPassword')}
      error={!!errors.confirmPassword}
      helperText={errors.confirmPassword?.message}
    />
    
      <Button type="submit">Submit</Button>
    </form>
  );


}

export default App
