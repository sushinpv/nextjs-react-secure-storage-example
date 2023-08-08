"use client";

import Image from "next/image";
import { useEffect } from "react";
import secureLocalStorage from "react-secure-storage";

export default function Home() {
  useEffect(() => {
    // console.log("NEXT_PUBLIC_SECURE_LOCAL_STORAGE_DISABLED_KEYS", process.env.NEXT_PUBLIC_SECURE_LOCAL_STORAGE_DISABLED_KEYS);

    secureLocalStorage.setItem("object", {
      message: "This is testing of local storage",
    });
    console.log(secureLocalStorage.getItem("object"));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>React Secure Storage Example : Next.Js</p>
    </main>
  );
}
