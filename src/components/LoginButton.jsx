"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export default function LoginButton() {
   const { data: session } = useSession()
  if (session) {
    return (
      <button
        onClick={() => signOut({ callbackUrl: "/" })} // redirect after logout
        className="btn btn-sm btn-error"
      >
        Logout
      </button>
    );
  }
  return (
    <div>
      <button className="btn btn-primary" onClick={() => signIn()}>
        LogIn
      </button>
    </div>
  );
}
