'use client'
import * as z from 'zod';
import { useState, useTransition } from 'react';
import { CardWrapper } from "../auth/card-wrapper"
import { Button } from '../ui/button';
import { FormError } from '../form-error';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookingSchema } from '../../schemas/index';
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { createBooking } from '@/actions/create-booking';

export const BookingForm = () => {

    const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')
    const [isPending, startTransition] = useTransition()
    const form = useForm<z.infer<typeof BookingSchema>>({
        resolver: zodResolver(BookingSchema),
        defaultValues: {
            check_in: '',
            check_out: '',
            property_type: 'HOUSE',
            property_id: '',
            user_id: '',
            num_people: 1,
            payment_method: 'CREDIT_CARD',
            is_paid: true,
            is_confirmed: true
        }
    })

    const onSubmit = (values: z.infer<typeof BookingSchema>) => {
        setError('')
        setSuccess('')
    
        // Create FormData from the form values
        const formData = new FormData();
        (Object.keys(values) as Array<keyof typeof values>).forEach(key => {
            formData.append(key, values[key] as string | Blob);
        });
    
        startTransition(() => {
            createBooking(formData)
                .then((data: any) => {
                    setError(data.error)
                    setSuccess(data.success)
                })
        });
    }
    
    return (
        <CardWrapper
        headerLabel="Create an booking"
        backButtonLabel=""
        backButtonHref=""
        showSocial>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                 className='space-y-6'>
                    <div className='space-y-4'>
                        <FormField
                         control={form.control}
                          name='check_in'
                          render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Check in
                                </FormLabel>
                                <FormControl>
                                    <Input
                                     {...field}
                                     disabled={isPending}
                                     placeholder='hij'
                                   />
                                    
                                </FormControl>
                                <FormMessage/>

                                
                            </FormItem>
                          )}
                        />
                        <FormField
                         control={form.control}
                          name='check_out'
                          render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    check_out
                                </FormLabel>
                                <FormControl>
                                    <Input
                                     {...field}
                                     disabled={isPending}
                                     placeholder='uej'
                               />
                                    
                                </FormControl>
                                <FormMessage/>

                                
                            </FormItem>
                          )}
                        />
                        <FormField
                         control={form.control}
                          name='property_type'
                          render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Property Type
                                </FormLabel>
                                <FormControl>
                                    <Input
                                     {...field}
                                     disabled={isPending}
                                     placeholder='Property type'
                                     />
                                    
                                </FormControl>
                                <FormMessage/>

                                
                            </FormItem>
                          )}
                        />
                        <FormField
                         control={form.control}
                          name='property_id'
                          render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Property Id
                                </FormLabel>
                                <FormControl>
                                    <Input
                                     {...field}
                                     disabled={isPending}
                                     placeholder='Property Id'
                                     />
                                    
                                </FormControl>
                                <FormMessage/>

                                
                            </FormItem>
                          )}
                        />
                         <FormField
                         control={form.control}
                          name='user_id'
                          render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    User Id
                                </FormLabel>
                                <FormControl>
                                    <Input
                                     {...field}
                                     disabled={isPending}
                                     placeholder='User Id'
                                     />
                                    
                                </FormControl>
                                <FormMessage/>

                                
                            </FormItem>
                          )}
                        />
                         <FormField
                         control={form.control}
                          name='num_people'
                          render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Number of people
                                </FormLabel>
                                <FormControl>
                                    <Input
                                     {...field}
                                     disabled={isPending}
                                     placeholder='num_people'
                                     />
                                    
                                </FormControl>
                                <FormMessage/>

                                
                            </FormItem>
                          )}
                        />

                        <FormField
                         control={form.control}
                          name='payment_method'
                          render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Payment method
                                </FormLabel>
                                <FormControl>
                                    <Input
                                     {...field}
                                     disabled={isPending}
                                     placeholder='Payment method'
                                     />
                                    
                                </FormControl>
                                <FormMessage/>

                                
                            </FormItem>
                          )}
                        />

                       
                        


                    </div>
                    
                    <Button disabled={isPending} type='submit' className='w-full'>
                        Create an account
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}
