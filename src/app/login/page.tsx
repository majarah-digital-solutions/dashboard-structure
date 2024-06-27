"use client"
import React, { useState } from 'react'
import './login.css'
import { Toast } from '~/utils/libraries'
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

type Props = {}

const Login = (props: Props) => {

  const [loading, setLoading] = useState(false)
  const router = useRouter();
  const [loginData, setLoginData] = useState({ phoneNumber: '', password: '' })


  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    setLoading(true);
    event.preventDefault();
    signIn('credentials', { ...loginData, redirect: false }).then((result) => {
      if (result?.status === 401) {
        Toast.fire({
          icon: 'error',
          title: result.error ?? 'Invalid credentials',
        })
      } else if (result?.status === 200) {
        router.push('/dashboard')
        Toast.fire({
          icon: 'success',
          title: "جاري تحويلك ...",
        })
      }
    }).finally(() => {
      setLoading(false);
    })
  };

  const phoneNumberHandelr = (event: { target: { value: any; }; }) => {
    setLoginData(prev => ({ ...prev, phoneNumber: event.target.value }))
  };

  const passwordHandelr = (event: { target: { value: any; }; }) => {
    setLoginData(prev => ({ ...prev, password: event.target.value }))
  };

  return <>
    <div className="loginPage">
      <div className="signForm fadeInDown">
        <div id="formContent">
          <div className="fadeIn first mb-3 p-5">
            <img src="/logo.png" id="icon" alt="User Icon" />
          </div>
          <div>
            <form onSubmit={handleSubmit} >
              <input
                type="text"
                id="login"
                className="fadeIn second"
                name="login"
                placeholder="الايميل او رقم الهاتف"
                value={loginData.phoneNumber}
                onChange={phoneNumberHandelr}
              />
              <input
                type="password"
                id="password"
                className="fadeIn third"
                name="login"
                placeholder="الرقم السري"
                value={loginData.password}
                onChange={passwordHandelr}
              />
              <input
                disabled={loading}
                type="submit"
                className="fadeIn fourth mt-2"
                value={loading ? "برجى الانتظار" : "تسجيل الدخول"}
              />
            </form>
          </div>
        </div>
      </div>
      <div className="loginOverlay"></div>
    </div>
  </>
}

export default Login