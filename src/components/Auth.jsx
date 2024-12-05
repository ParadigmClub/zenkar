import React, { useEffect, useState } from "react";
import "boxicons";
import AnimationOnScroll from "react-animate-on-scroll";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "/zenkarHQ-removebg-preview.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Auth = () => {
  const handleGoogleSignIn = async () => {
    return MySwal.fire({
      icon: "info",
      title: "Uh Oh...",
      text: "We currently do not support Google Sign In",
      customClass: {
        title: "my-swal-title",
        text: "my-swal-text",
        popup: "my-swal-popup",
        confirmButton: "my-swal-confirm-button",
        cancelButton: "my-swal-cancel-button",
      },
      showCancelButton: false,
    });
  };

  const handleManual = async () => {
    // get the email and username , if its none then alert them to fill it
    const age = document.querySelector("input[type='number']").value;
    const username = document.querySelector("input[type='text']").value;

    if (age && username) {
      localStorage.setItem("age", age);
      localStorage.setItem("username", username);
      if (age < 18 || age > 99) {
        return MySwal.fire({
          icon: "error",
          title: "Oops...",
          text: "You must be 18-99 years old",
          customClass: {
            title: "my-swal-title",
            text: "my-swal-text",
            popup: "my-swal-popup",
            confirmButton: "my-swal-confirm-button",
            cancelButton: "my-swal-cancel-button",
          },
        });
      }
      return window.location.reload();
    } else {
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all required fields",
        customClass: {
          title: "my-swal-title",
          text: "my-swal-text",
          popup: "my-swal-popup",
          confirmButton: "my-swal-confirm-button",
          cancelButton: "my-swal-cancel-button",
        },
      });
    }
  };

  if (localStorage.getItem("username")) {
    // navigate to home
    return <Navigate to="/home" />;
  }

  return (
    <div className="mt-32 overflow-x-hidden overflow-y-hidden">
      <AnimationOnScroll animateIn="slideInDown">
        <div className="flex items-center">
          <img src={logo} alt="random" className="w-24 h-24 underline" />
          <h1 className="ml-1 underline">Sign In</h1>
        </div>
      </AnimationOnScroll>
      <div className="p-1 mt-10 ml-10 mr-10">
        <label className="flex items-center gap-2 mb-4 input input-bordered">
          Name:
          <input type="text" className="grow" placeholder="Username" />
        </label>
        <label className="flex items-center gap-2 mb-3 input input-bordered">
          Email:
          <input type="email" className="grow" placeholder="optional" />
        </label>
        <label className="flex items-center gap-2 mb-3 input input-bordered">
          Age:
          <input type="number" className="grow" placeholder="18-99" />
        </label>
        <div className="mt-3 divider"></div>

        <button className="w-full btn btn-accent" onClick={handleManual}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Auth;
