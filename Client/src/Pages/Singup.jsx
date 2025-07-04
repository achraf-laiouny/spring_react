import React, { useState } from "react";
import { Header } from "../Component/Header";
import { toast } from 'react-toastify';

export const Singup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onToast = (s) => {
    if ('Login Successfull!!' === s) {
      toast.success(s, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }else{
      toast.error(s, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }

  const handleSinup = async (e) => {
    window.location.href = "/login";
    e.preventDefault();
    if (user.password === user.confirmPassword) {
      const res = await fetch("http://localhost:8080/auth/singup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...user,
        }),
      });
      const data = await res.json();
      if (res.status === 200) {
        onToast("Sign up avec success!!")
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
       
          onToast("Il y a un problem!!!")
      
          
      }
      console.log(data);
    }else{
      onToast("Mot de passe incorrect")
    }
        
  };

  return (
    <>

      <Header />
      <div className="d-flex flex-column justify-content-center" id="login-box">
        <div className="login-box-header">
          <h4
            style={{
              color: "rgb(139,139,139)",
              marginBottom: 0,
              fontWeight: 400,
              fontSize: 27,
            }}
          >
            Creer un compte
          </h4>
        </div>
        
        <div className="d-flex flex-row align-items-center login-box-seperator-container">
          <div className="login-box-seperator" />
          <div className="login-box-seperator-text">
           
          </div>
          <div className="login-box-seperator" />
        </div>
        <div className="email-login" style={{ backgroundColor: "#ffffff" }}>
          <input
            type="text"
            className="email-imput form-control"
            style={{ marginTop: 10 }}
            required=""
            placeholder="Nom"
            name="name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            value={user.name}
            minLength={6}
          />
          <input
            type="email"
            className="email-imput form-control"
            style={{ marginTop: 10 }}
            required=""
            placeholder="Email"
            name="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user.email}
            minLength={6}
          />
          <input
            type="Mot de passe"
            className="password-input form-control"
            style={{ marginTop: 10 }}
            required=""
            placeholder="Password"
            name="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            value={user.password}
            minLength={6}
          />
          <input
            type="password"
            className="password-input form-control"
            style={{ marginTop: 10 }}
            required=""
            placeholder="Confirmer mot de passe"
            onChange={(e) =>setUser({ ...user, confirmPassword: e.target.value })}
            value={user.confirmPassword}
            name="confirmPassword"
            minLength={6}
          />
        </div>
        <div className="submit-row" style={{ marginBottom: 0, paddingTop: 0 }}>
          <button
            className="btn btn-primary d-block box-shadow w-100"
            id="submit-id-submit"
            type="submit"
            onClick={(e) => handleSinup(e)}
          >
            Sign Up
          </button>
          <div className="d-flex justify-content-between">
            <div
              className="form-check form-check-inline"
              id="form-check-rememberMe"
            >
             
            </div>
            <a id="forgot-password-link" href="#">
              Mot de passe oublie?
            </a>
          </div>
        </div>
        <div
          id="login-box-footer"
          style={{ padding: "10px 20px", paddingBottom: 23, paddingTop: 5 }}
        >
          <p style={{ marginBottom: 0 }}>
            Déja un compte?
            <a id="register-link" href="/login">
              Sign In!
            </a>
          </p>
        </div>
      </div>

    </>
  );
};
