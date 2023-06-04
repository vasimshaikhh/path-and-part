import { useState } from 'react'
import './App.css'
import Home from './component/home/Home'
import ResponsiveAppBar from './component/navbar/Navbar'
import { Outlet, Route, Routes } from 'react-router-dom'
import OffRide from './component/offride/OffRide'
import TripDetails from './component/tripfunctionality/TripDetails'
import TripsTaken from './component/tripfunctionality/TripsTaken'
import TripRequest from './component/tripfunctionality/TripRequest'
import TripsGiven from './component/tripfunctionality/TripsGiven'
import ParticlesBackground from './component/particles/ParticlesBackground'
import ChangePassword from './component/auth/changepassword/changePassword'
import Signin from './component/auth/signIn/Signin'
import SignUp from './component/auth/signUp/Signup'
import AvailableRiders from './component/availableriders/AvailableRiders'
import CarInfo from './component/carinfo/CarInfo'
import AvailableRides from './component/availablerides/AvailableRides'
import CompletedRides from './component/completedrides/CompletedRides'
import Footer from './component/footer/Footer'
import Admin from './component/admin/Admin'
import Hello from './component/admin/dashboardcomp/Hello'
import RidersDetail from './component/admin/dashboardcomp/RidersDetail'
import AdminChangePassword from './component/admin/auth/changepassword/AdminChangePassword'
import AdminSignin from './component/admin/auth/signIn/AdminSignin'
import AdminSignUp from './component/admin/auth/signUp/AdminSignup'
import AdminForgotPassword from './component/admin/auth/forgotpassword/AdminForgotPassword'
import RiderRoute from './component/admin/dashboardcomp/RiderRoute'
import RiderNav from './component/navbar/RiderNav'
import Signinrider from './component/auth/rider/Signinrider'
import Signuprider from './component/auth/rider/Signuprider'
import Request from './component/rider/Request'
import TotalRides from './component/rider/TotalRides'
import CreateRides from './component/rider/CreateRides'
import MyRides from './component/rider/MyRides'
import AllUsers from './component/admin/users/AllUsers'
import AllRiders from './component/admin/allriders/AllRiders'
import { useEffect } from 'react'

const Navbaroutlet = () => (
  <>
    <ResponsiveAppBar />
  <Outlet />
  <Footer/>
</>
)

const AdminOutlet = () => (
  <>
    <Admin />
    <Outlet/>
  </>

)

const RiderOutlet = () => (
  <>
    <RiderNav />
    <Outlet/>
  </>
)


function App() {
  const id = localStorage.getItem('userId')
  const name = localStorage.getItem("adminUserId");
  const adminid = localStorage.getItem("adminUserName");
  const riderid = localStorage.getItem('riderId');
  const ridername = localStorage.getItem('riderName');  
  const [boool, setBool] = useState()
  useEffect(() => {
    if (name && adminid !== null || undefined) {
      setBool(true)
    }
  },[])
  return (
    <>
       <ParticlesBackground/>
    {/* <ResponsiveAppBar/> */}
      <Routes>
        {id ? 
                <Route element={<Navbaroutlet />}>
          
                <Route path='/*' element={ id !== null || undefined ? <Home />: <Signin/> } />
                <Route path='/signin' element={<Signin/>}/>
               <Route path='/about' element={<OffRide/>}/>
               <Route path='/tripdetails' element={<TripDetails/>}/>
               <Route path='/tripsgiven' element={<TripsGiven/>}/>
               <Route path='/tripstaken' element={<TripsTaken/>}/>
               <Route path='/availablerides' element={<AvailableRides/>}/>
               <Route path='/triprequest' element={<TripRequest/>}/>        
               <Route path='/signup' element={<SignUp/>}/>
               <Route path='/changepassword' element={<ChangePassword/>}/>
               <Route path='/availableriders' element={<AvailableRiders/>}/>
               <Route path='/carinfo' element={<CarInfo/>}/>
               <Route path='/completedrides' element={<CompletedRides/>}/>
            </Route>
        : <>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<SignUp/>}/>
        </>}
    
    
        {boool ? 
           <Route path='/admin' element={<AdminOutlet />}>  
           <Route path='/admin' element={<AllUsers />}/>
           <Route path='/admin/dashboard' element={<Hello />} />
           <Route path='/admin/ridersdetail' element={<RidersDetail />} />
           <Route path='/admin/signin' element={<AdminSignin/>}/>
           <Route path='/admin/signup' element={<AdminSignUp/>}/>
           <Route path='/admin/changepassword' element={<AdminChangePassword/>}/>
           <Route path='/admin/forgotpassword' element={<AdminForgotPassword/>}/>
           <Route path='/admin/hello' element={<Hello/>}/>
           <Route path='/admin/rider-route' element={<RiderRoute />} />
           <Route path='/admin/users' element={<AllUsers />}/>
           <Route path='/admin/allriders' element={<AllRiders />}/>
       </Route>
          :
          <>
          <Route path='/admin' element={<AdminSignin />} />
          <Route path='/admin/signup' element={<AdminSignUp/>}/>
          </>
              }
     

        
        {riderid && ridername ?
          <Route path='/rider' element={<RiderOutlet />}>
            <Route path='/rider' element={<MyRides />} />
            <Route path='/rider/request' element={<Request />} />
            <Route path='/rider/signin' element={<Signinrider />} />
            <Route path='/rider/sigup' element={<Signuprider />} />
            <Route path='/rider/totalrides' element={<TotalRides />} />
            <Route path='/rider/createrides' element={<CreateRides />} />
            <Route path='/rider/myrides' element={<MyRides />} />
                         
          </Route>
          :
          <>
            <Route path='/rider' element={<Signinrider />} />
            <Route path='/rider/signin' element={<Signinrider />} />
            <Route path='/rider/sigup' element={<Signuprider />} />

            {/* <Route path='/rider/signin' element={<Signinrider />} /> */}
          </>
        }
    </Routes>
         
    </>
  )
}

export default App;
