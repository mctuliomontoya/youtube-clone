"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { User } from "@firebase/auth";
import {onAuthStateChangedHelper} from "@/app/firebase/firebase";

import styles from "./navbar.module.css"
import SignIn from "@/app/navbar/sign-in";
import Upload from "@/app/navbar/upload";

export default function Navbar() {
  const [user, setUser ] = React.useState<User | null>(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChangedHelper((user) => {
      setUser(user);
    })

    return () => unsubscribe();
  }, [])

  return (
    <nav className={styles.nav}>
      <Link href="/">
          <Image width={90} height={20} src="/youtube-logo.svg" alt="Youtube logo"></Image>
      </Link>
      {
        user && <Upload />
      }
      <SignIn user={user} />
    </nav>
  )
}