'use client'

import Link from "next/link";
import { Button } from "@/components//ui/button"
import { usePathname } from "next/navigation";
import { UserButton } from "@/components/auth/user-button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useCurrentRole } from "@/hooks/use-current-role";
import { NavRoleGate } from "./nav-role-gate";
import { useEffect, useState } from "react";

import {useRouter} from 'next/navigation'
export const Navbar = () => {
    const pathname = usePathname()
    const role = useCurrentRole()
    const router = useRouter()

    useEffect (()=>{
        if (role === undefined){
            //window.location.reload()
        }
        
        console.log(role)

    },[])
    
    

   
    
    return (
        /**
         * La navbar la puse así mientras tanto, pero se puede ajustar la altura y la anchura
         * con top-? o w-? en el className del nav
         */
        <nav className="bg-secondary flex justify-between
         items-center rounded-xl p-4 w-[1000px] shadow-sm mt-0 absolute top-10">
            <div className="flex gap-x-2">
                
                <Button
                 asChild
                 variant={pathname === "/admin" ? "default" : "outline"}
                >
                    <Link href="/admin">Admin</Link>

                </Button>
                <Button
                 asChild
                 variant={pathname === "/settings" ? "default" : "outline"}
                >
                    <Link href="/settings">Settings</Link>

                </Button>
               
                <Button
                 asChild
                 variant={pathname === "/properties" ? "default" : "outline"}
                >
                    <Link href="/properties">Properties</Link>

                </Button>
                        
                    
                
               
            </div>
            <NavRoleGate allowedRole="ADMIN">
                    <Button
                        asChild
                        variant={pathname === "/users" ? "default" : "outline"}
                        >
                        <Link href="/users">Users</Link>
        
                    </Button>
            </NavRoleGate>
            <UserButton/>
        </nav>
    )
}