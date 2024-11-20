"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema } from '@/schemas/form-schema';
import Link from 'next/link';

export function SignIp() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {

    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8 lg:h-screen justify-center py-10 lg:py-0">
        <div className='flex flex-col gap-4 items-center'>
          <div className='lg:w-[45%] md:w-[95%]   flex flex-col gap-8 px-2 lg:px-0'>
            <div className=' flex flex-col items-center gap-2'>
              <h2 className='font-bold lg:text-4xl text-2xl'>SIGN IN</h2>
              <p className=' text-gray-700 lg:text-2xl font-sans text-lg'>Please fill in the information below:</p>
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className='flex flex-col items-center gap-1  justify-center'>
          <button type="submit"  className='lg:w-[45%] w-[93%] lg:py-6 py-3 bg-black text-white text-sm lg:text-2xl px-2 lg:px-0'>Login</button>
          <Link href={"/sign-up"} className='text-gray-700  pt-2 lg:pt-6 lg:text-2xl font-sans text-lg'>Don't have an account? Register</Link>
        </div>
      </form>
    </Form>
  )
}