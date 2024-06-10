"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Error from 'next/error'

function HiddenButton({ handleClick }) {
  return (
    <div className="fixed min-w-4 min-h-4 bottom-0 left-0" onClick={handleClick}>
    </div>
  )
}

function LoginModal() {
  let id = useRef(null)
  let pw = useRef(null)

  return (
    <div className="relative w-auto my-6 mx-auto max-w-3xl ">
      {/*content*/}
      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        {/*header*/}
        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
          <h3 className="text-3xl font-semibold">
            Sign in
          </h3>
        </div>
        {/*body*/}
        <div className="relative p-6 flex-auto">
          {/* <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
            I always felt like I could do anything. dsadsadsadsadas
          </p> */}
          <input
            value={id.current}
            placeholder="Enter your ID"
            className="inputBox"
          />
          <input
            value={pw.current}
            type="password"
            placeholder="Enter your password"
            className="inputBox"
          />
        </div>
        {/*footer*/}
        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
          <button
            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
          <button
            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(false)}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [visible, setVisible] = useState(false)
  let count = useRef(0)

  return (
    <main className="flex min-h-screen max-h-screen flex-col items-center">
      <Error statusCode={404} />
      <div className="flex flex-row">
        {visible && (
          <>
            <div className="fixed inset-0 z-10 bg-white"></div>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-20 outline-none focus:outline-none"
            >
              <LoginModal />
            </div>
          </>
        )}
      </div>
      {/* <LoginModal /> */}
      <HiddenButton handleClick={() => setVisible(true)} />
    </main >
  );
}
