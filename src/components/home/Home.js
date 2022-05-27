import Cookies from "js-cookie"
import { Redirect, Link, useHistory, Route} from "react-router-dom"
import './Home.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import Sidebar from "../sidebar/sidebar"
import Popup from "reactjs-popup"
import Dashboard from "../dashboard/dashboard"
import Attendance from '../attendance/attendance'
import AllZones from "../allzones/allzones"
import Employees from "../employees/employees"




const Home= () => {
    const history = useHistory()
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    
    const logout = () => {
        
        Cookies.remove('jwt_token')
        history.replace('/login')
    }
    return (
        <div className="home-container">
        
        <nav className="navbar-header">
            <div className='nav-content'>
            <div className='menu-container'>
                <GiHamburgerMenu className='menu-icon' />
                <h1 className='glieder-scan'>Glider scan</h1>
            </div>
            <div className='profile-container'>
                    <p className='admin-name'>Hi Admin</p>
                    <div className='pop-up-container'>
                        <Popup

                            trigger={<button className='profile-button'>
                                <img src="https://res.cloudinary.com/dpro7vkjb/image/upload/v1653557524/vinay_gbbdmp.png" alt="vinay boyina logo" className="profile-image" />
                            </button>}
                            position='bottom left'>

                            <div>
                                <Link style={{ textDecoration: 'none' }} to='/profile'>
                                    <p className='profile-text'>profile</p>
                                </Link>
                                <Link style={{ textDecoration: 'none' }} to='/login'>
                                    <button type='button' onClick={logout} className='logout-button'>logout</button>
                                </Link>
                            </div>
                        </Popup>
                    </div>
                </div>
                </div>
        </nav>
        <hr className='hr-line'/>
        <div className='content'>
            <Sidebar />
            <div>
            <Route path='/dashboard'>
                <Dashboard />
            </Route>
            <Route path='/attendance'>
                <Attendance />
            </Route>
            <Route path='/allzones'>
                <AllZones />
            </Route>

            <Route path='/employees'>
                <Employees />
            </Route>


            
            </div>
            
            
        </div>
        </div>
    )
}
export default Home