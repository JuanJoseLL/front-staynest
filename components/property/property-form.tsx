'use client'
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

export const PropertyForm = () => {
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();
    const form = useForm<PropertyFormValues>({
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
