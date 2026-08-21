import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">

      <div className="text-center">

        <h1 className="display-1 fw-bold text-danger">
          404
        </h1>

        <h2 className="mb-3">
          Page Not Found
        </h2>

        <p className="text-muted mb-4">
          Sorry, the page you are looking for doesn't exist.
        </p>

        <Link to="/" className="btn btn-primary">
          Go Back Home
        </Link>

      </div>

    </div>
  )
}

export default Pnf