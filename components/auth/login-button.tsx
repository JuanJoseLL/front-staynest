'use client'

import { useRouter } from 'next/navigation';
import { use } from 'react';



interface LoginButtonProps{
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}


export const LoginButton = ({
    children,
    mode,
    asChild
}: LoginButtonProps) => {
    const router = useRouter();

    const onClick = () => {
        router.push("/auth/login")
    }
    if (mode === "modal") {
        return (
            <span>
                TODO: IMPLEMENT MODAL
            </span>
        )
    }

    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    )
}