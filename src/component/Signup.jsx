import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {

  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [phone, setphone] = useState("")

  const [loading, setloading] = useState("")
  const [error, seterror] = useState("")
  const [success, setsuccess] = useState("")

  const handlesubmit = async (e) => {
    e.preventDefault()

    setloading("Registering account...")
    seterror("")
    setsuccess("")

    try {
      const formData = new FormData()
      formData.append("username", username)
      formData.append("email", email)
      formData.append("password", password)
      formData.append("phone", phone)

      await axios.post("https://adhiambo.alwaysdata.net/api/signup", formData)

      setloading("")
      setsuccess("User registered successfully 🎉")

      setusername("")
      setemail("")
      setpassword("")
      setphone("")
    } catch (error) {
      setloading("")
      seterror("Something went wrong. Please try again.")
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">

      <div className="card shadow-lg p-4 border-0" style={{ width: "420px", borderRadius: "15px" }}>

        <h2 className="text-center mb-3 text-primary">Create Account</h2>
        <p className="text-center text-muted mb-4">Sign up to get started</p>

        <form onSubmit={handlesubmit}>

          {loading && <div className="alert alert-info py-2">{loading}</div>}
          {success && <div className="alert alert-success py-2">{success}</div>}
          {error && <div className="alert alert-danger py-2">{error}</div>}

          <div className="mb-3">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <input
              type="tel"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              className="form-control"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Sign Up
          </button>

        </form>
      </div>
    </div>
  )
}

export default Signup