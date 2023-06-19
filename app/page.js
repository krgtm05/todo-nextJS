"use client"

import Link from "next/link";
import { auth } from './firebase'
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HomePage() {

  const router = useRouter();
  const [user,setUser] = useState(null);

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((user)=>{
      if(user){
        setUser(user);
      }else
      {
        router.push('/login');
F 
      }

    })
    return () => unsubscribe();

  },[user]);

  
  return (
    <div>
      <Link href="/login" >Go to login page</Link>

      {user && 
      <div>
        <p> {user.displayName} </p>
        <p> {user.email} </p>
        <Image
                src={user.photoURL}
                width={37}
                height={37}
                alt="profile"
                className="rounded-full"
              />
      </div>
      }

      
    </div>
  );
}
