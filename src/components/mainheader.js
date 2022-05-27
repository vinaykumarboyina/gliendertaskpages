const Mainheader = () => {
    return (
    <nav className="navbar-header">
    <div className='nav-content'>
    <div className='menu-container'>
        <GiHamburgerMenu className='menu-icon' />
        <h1 className='glieder-scan'>Glieder scan</h1>
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

}