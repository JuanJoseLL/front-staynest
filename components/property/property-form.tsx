'use client'
<<<<<<< HEAD
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
=======
import { useState, useTransition } from 'react';
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { FormError } from '@/components/form-error';
import { FormSucceess } from '@/components/form-success';
import { CardWrapper } from "../auth/card-wrapper";
import { createProperty } from '../../actions/property'; 

interface PropertyFormValues {
    type: string;
    country: string;
    city: string;
    address: string;
    latitude: number;
    altitude: number;
    rooms: number;
    bathrooms: number;
    area: number;
    cost_per_night: number;
    max_people?: number;
    description: string;
    slug?: string;
    image?: File;
}
>>>>>>> 11d78e3 (hp)

export const PropertyForm = () => {
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();
<<<<<<< HEAD
    
    const form = useForm<z.infer<typeof PropertySchema>>({
        resolver: zodResolver(PropertySchema),
        defaultValues: {
            
=======
    const form = useForm<PropertyFormValues>({
        defaultValues: {
>>>>>>> 11d78e3 (hp)
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
<<<<<<< HEAD
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
=======
            max_people: undefined,
            description: '',
            slug: undefined,
            image: undefined,
        }
    });

    const onSubmit = async (values: PropertyFormValues) => {
        setError('');
        setSuccess('');

        const formData = new FormData();
        formData.append('type', values.type);
        formData.append('country', values.country);
        formData.append('city', values.city);
        formData.append('address', values.address);
        formData.append('latitude', values.latitude.toString());
        formData.append('altitude', values.altitude.toString());
        formData.append('rooms', values.rooms.toString());
        formData.append('bathrooms', values.bathrooms.toString());
        formData.append('area', values.area.toString());
        formData.append('cost_per_night', values.cost_per_night.toString());
        if (values.max_people !== undefined) {
            formData.append('max_people', values.max_people.toString());
        }
        formData.append('description', values.description);
        if (values.slug) {
            formData.append('slug', values.slug);
        }
        if (values.image) {
            formData.append('image', values.image);
        }

        startTransition(() => {
            createProperty(formData)
             .then((data) => {
                 setError(data.error);
                 setSuccess(data.success);
             });
        });
    };

    return (
        <CardWrapper
        headerLabel="Create a Property"
        backButtonLabel="Go back"
        backButtonHref="/properties"
        showSocial={false}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                <div className='space-y-4'>
                    <Controller
                     name='type'
                     control={form.control}
                     render={({ field }) => (
                        <Input {...field} placeholder='Type' disabled={isPending} />
                     )}
                    />
                    <Controller
                     name='country'
                     control={form.control}
                     render={({ field }) => (
                        <Input {...field} placeholder='Country' disabled={isPending} />
                     )}
                    />
                    <Controller
                     name='city'
                     control={form.control}
                     render={({ field }) => (
                        <Input {...field} placeholder='City' disabled={isPending} />
                     )}
                    />
                    <Controller
                     name='address'
                     control={form.control}
                     render={({ field }) => (
                        <Input {...field} placeholder='Address' disabled={isPending} />
                     )}
                    />
                    <Controller
                     name='latitude'
                     control={form.control}
                     render={({ field }) => (
                        <Input {...field} type='number' placeholder='Latitude' disabled={isPending} />
                     )}
                    />
                    <Controller
                     name='altitude'
                     control={form.control}
                     render={({ field }) => (
                        <Input {...field} type='number' placeholder='Altitude' disabled={isPending} />
                     )}
                    />
                    <Controller
                     name='rooms'
                     control={form.control}
                     render={({ field }) => (
                        <Input {...field} type='number' placeholder='Rooms' disabled={isPending} />
                     )}
                    />
                    <Controller
                     name='bathrooms'
                     control={form.control}
                     render={({ field }) => (
                        <Input {...field} type='number' placeholder='Bathrooms' disabled={isPending} />
                     )}
                    />
                    <Controller
                     name='area'
                     control={form.control}
                     render={({ field }) => (
                        <Input {...field} type='number' placeholder='Area' disabled={isPending} />
                     )}
                    />
                    <Controller
                     name='cost_per_night'
                     control={form.control}
                     render={({ field }) => (
                        <Input {...field} type='number' placeholder='Cost per night' disabled={isPending} />
                     )}
                    />
                    <Controller
                     name='max_people'
                     control={form.control}
                     render={({ field }) => (
                        <Input {...field} type='number' placeholder='Max people' disabled={isPending} />
                     )}
                    />
                    <Controller
                     name='description'
                     control={form.control}
                     render={({ field }) => (
                        <Input {...field} placeholder='Description' disabled={isPending} />
                     )}
                    />
                    <Controller
                     name='slug'
                     control={form.control}
                     render={({ field }) => (
                        <Input {...field} placeholder='Slug' disabled={isPending} />
                     )}
                    />
                    <Controller
                     name='image'
                     control={form.control}
                     render={({ field }) => (
                        <input
                          type='file'
                          accept='image/*'
                          onChange={(e) => field.onChange(e.target.files?.[0])}
                          disabled={isPending}
                        />
                     )}
                    />
                </div>
                <FormError message={error}/>
                <FormSucceess message={success}/>
                
                <Button disabled={isPending} type='submit' className='w-full'>
                    Create a Property
                </Button>
            </form>
        </CardWrapper>
    );
}
>>>>>>> 11d78e3 (hp)
