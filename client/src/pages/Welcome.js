import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Welcome() {
  return (
    <div>

<nav class="navbar navbar-dark bg-dark">
  <div className='mx-2'>
  <Link to='/' class="navbar-brand mb-0 h1 fw-bold px-2">Book Manager</Link>
  <Link to='/' class="navbar-brand mb-0 px-2">Approved books</Link>
  </div>
  <div className='mx-2'>
  <Link to='/userReg' type="button" class="btn btn-secondary mx-2">User</Link>
<Link to='/approval'  type="button" class="btn btn-secondary">Admin</Link>
</div>
</nav>

<div>
    <Outlet/>
</div>

  </div>
  )
}
