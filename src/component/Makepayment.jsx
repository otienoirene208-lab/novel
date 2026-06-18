import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";

const Makepayment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const img_url = "https://adhiambo.alwaysdata.net/static/images/";

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const payment = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (!phone.startsWith("254") || phone.length !== 12) {
      setError("Enter a valid Safaricom number e.g. 254712345678");
      return;
    }

    try {
      setLoading(true);

      const formdata = new FormData();
      formdata.append("phone", phone);
      formdata.append("amount", product.product_cost);

      const response = await axios.post(
        "https://kbenkamotho.alwaysdata.net/api/mpesa_payment",
        formdata
      );

      setSuccess(
        response.data.message ||
          "Check your phone and complete the M-Pesa payment."
      );

      setPhone("");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "Payment request failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-8">
        <div className="card shadow border-0">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={img_url + product.product_photo}
                alt={product.product_name}
                className="img-fluid rounded-start h-100"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="col-md-6 p-4">
              <button
                onClick={() => navigate("/")}
                className="btn btn-outline-danger mb-3"
              >
                ← Back
              </button>

              <h2 className="text-danger text-uppercase">
                {product.product_name}
              </h2>

              <p className="text-primary">
                {product.product_description}
              </p>

              <h3 className="text-success fw-bold">
                KSh {product.product_cost}
              </h3>

              <form onSubmit={payment} className="mt-4">
                {loading && (
                  <div className="alert alert-info">
                    Processing payment request...
                  </div>
                )}

                {success && (
                  <div className="alert alert-success">
                    {success}
                  </div>
                )}

                {error && (
                  <div className="alert alert-danger">
                    {error}
                  </div>
                )}

                <label className="form-label">
                  M-Pesa Phone Number
                </label>

                <input
                  type="tel"
                  className="form-control"
                  placeholder="254712345678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />

                <button
                  type="submit"
                  className="btn btn-success w-100 mt-3"
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Make Payment"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Makepayment;