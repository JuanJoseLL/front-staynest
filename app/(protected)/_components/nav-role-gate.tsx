'use client'

import { useCurrentRole } from "@/hooks/use-current-role";

interface RoleGateProps {
    allowedRole: "ADMIN" | "USER" | "OWNER";
    children: React.ReactNode;
}


export const NavRoleGate = ({ allowedRole, children }: RoleGateProps) => {
    const role = useCurrentRole()

    if (role !== allowedRole){
        return (
            <>
            </>
        )
    }

    return <>{children}</>
}
