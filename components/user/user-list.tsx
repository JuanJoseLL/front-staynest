'use server'
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Card, CardContent, CardHeader } from '../ui/card';

interface UserProps {
    id: string;
    name: string;
    email: string;
    role: string;

}
interface UserListProps {
    users: UserProps[];
  }
export const UserList: React.FC<UserListProps> = ({users}) => {

    return (
        <Card className="w-[800px] shadow-md">
            <CardHeader>
                <p className="text-2xl font-semibold text-center">
                    Users
                </p>
            </CardHeader>
            <CardContent className="space-y-4">
                <Table>
                    <TableCaption>Registered Users</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">ID</TableHead>
                            <TableHead className='truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md'>Name</TableHead>
                            <TableHead className='truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md'>Email</TableHead>
                            <TableHead className="text-right truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">Role</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user)=>(
                            <TableRow key={user.id}>
                                <TableCell className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">{user.id}</TableCell>
                                <TableCell className='truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md'>{user.name}</TableCell>
                                <TableCell className='truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md'>{user.email}</TableCell>
                                <TableCell className="text-right truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">{user.role}</TableCell>
                            </TableRow>
                        ))}
                        
                    </TableBody>
                </Table>       
                
            </CardContent>
        </Card>
        
    )
}
  