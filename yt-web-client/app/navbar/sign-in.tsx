"use client";

import {Fragment} from "react";
import React from 'react'
import { signInWithGoogle, signOut} from "@/app/firebase/firebase";
import { User } from "@firebase/auth";

import styles from "./sign-in.module.css"

interface SignInProps {
  user: User | null
}

export default function SignIn({ user } : SignInProps) {
  return (
    <Fragment>
      { user ? (
        <button className={styles.signin} onClick={signOut}>
          Sign Out
        </button>
      ) : (
        <button className={styles.signin} onClick={signInWithGoogle}>
          Sign In
        </button>
      )}
    </Fragment>
  )
}
