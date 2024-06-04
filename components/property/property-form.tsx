'use client'
import * as z from 'zod';
import { useState, useTransition } from 'react';
import { CardWrapper } from "../auth/card-wrapper";
import { Button } from '../ui/button';
import { FormError } from '../form-error';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PropertySchema } from '../../schemas/index';
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { FormSucceess } from '../form-success';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { createBooking } from '@/actions/create-booking';
import { createProperty } from '../../actions/property';
import { Card, CardContent } from '../ui/card';

export const PropertyForm = () => {
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();
    
    const form = useForm<z.infer<typeof PropertySchema>>({
        resolver: zodResolver(PropertySchema),
        defaultValues: {
            
            type: '',
            country: '',
            city: '',
            address: '',
            latitude: 0,
            altitude: 0,
            rooms: 0,
            bathrooms: 0,
            area: 0,
            cost_per_night: 0,
            max_people: 0,
            slug: ''
        }
    });

    const onSubmit = (values: z.infer<typeof PropertySchema>) => {
        setError('');
        setSuccess('');

        startTransition(() => {
            const formData = new FormData();
            Object.entries(values).forEach(([key, value]) => {
                formData.append(key, String(value)); // Convert the value to a string before appending
            });

            createProperty(formData)
                .then((data: any) => { // Specify the type of 'data' as 'any'
                    setError(data.error);
                    setSuccess(data.success);
                });
        });
    }

    return (
        <Card className='w-[600px] shadow-md'>
            <CardContent className='space-y-10'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <FormField
                                control={form.control}
                                name='id' // Change the value of the name attribute to a valid option
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input {...field} disabled={isPending} placeholder='Property Name' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='type'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Type</FormLabel>
                                        <FormControl>
                                            <Input {...field} disabled={isPending} placeholder='Property Type' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='country'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Country</FormLabel>
                                        <FormControl>
                                            <Input {...field} disabled={isPending} placeholder='Country' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='city'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>City</FormLabel>
                                        <FormControl>
                                            <Input {...field} disabled={isPending} placeholder='City' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='address'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Address</FormLabel>
                                        <FormControl>
                                            <Input {...field} disabled={isPending} placeholder='Address' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='latitude'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Latitude</FormLabel>
                                        <FormControl>
                                            <Input {...field} disabled={isPending} placeholder='Latitude' type='number' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='altitude'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Altitude</FormLabel>
                                        <FormControl>
                                            <Input {...field} disabled={isPending} placeholder='Altitude' type='number' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='rooms'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Rooms</FormLabel>
                                        <FormControl>
                                            <Input {...field} disabled={isPending} placeholder='Rooms' type='number' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='bathrooms'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Bathrooms</FormLabel>
                                        <FormControl>
                                            <Input {...field} disabled={isPending} placeholder='Bathrooms' type='number' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='area'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Area (sq ft)</FormLabel>
                                        <FormControl>
                                            <Input {...field} disabled={isPending} placeholder='Area' type='number' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='cost_per_night'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Cost per Night ($)</FormLabel>
                                        <FormControl>
                                            <Input {...field} disabled={isPending} placeholder='Cost per Night' type='number' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='max_people'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Max People</FormLabel>
                                        <FormControl>
                                            <Input {...field} disabled={isPending} placeholder='Max People' type='number' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='slug'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Slug</FormLabel>
                                        <FormControl>
                                            <Input {...field} disabled={isPending} placeholder='Slug' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormError message={error} />
                        <FormSucceess message={success} />
                        <Button disabled={isPending} type='submit' className='w-full'>
                            Create Property
                        </Button>
                    </form>
                </Form>
            </CardContent>
           
        </Card>
    );
}