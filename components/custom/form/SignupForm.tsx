"use client"
import { Heading, Paragraph } from "@/components/core/ui/typography"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/core/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/core/ui/form/form"
import { Input } from "@/components/core/ui/input/input"
import { Checkbox } from "@/components/core/ui/input/checkbox"
import { Mail, User } from "lucide-react"
import { CheckedState } from "@radix-ui/react-checkbox"
import TextHorizontalRule from "@/components/custom/rules/TextHorizontalRule"
import Google from "@/components/icons/Google"
import Github from "@/components/icons/Github"
import Link from "next/link"

interface SignupFormProps {
  heading?: string
}

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters."
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters."
  }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters."
  }),
  email: z.string().email({
    message: "Please enter a valid email."
  }),
  consent: z.boolean().refine((value) => value === true, {
    message: "Please accept the terms and conditions."
  })
})

export default function SignupForm({
  heading = "Sign Up for an Account"
}: SignupFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      consent: false
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <section id="signup_form" className="w-full max-w-[372px] mx-auto">
      <Heading level={4} className="mb-[32px] text-gray-900">
        {heading}
      </Heading>
      <div className="w-100">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      startIcon={User}
                      placeholder="Firstname"
                      {...field}
                      type="text"
                      className="min-h-[48px] large-mobile-up:min-h-[56px] font-normal text-sm placeholder:text-[#94A3B8] border border-gray-400 rounded-[12px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/*  */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      startIcon={User}
                      placeholder="Lastname"
                      {...field}
                      type="text"
                      className="min-h-[48px] large-mobile-up:min-h-[56px] font-normal text-sm placeholder:text-[#94A3B8] border border-gray-400 rounded-[12px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/*  */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      startIcon={User}
                      placeholder="Username"
                      {...field}
                      type="text"
                      className="min-h-[48px] large-mobile-up:min-h-[56px] font-normal text-sm placeholder:text-[#94A3B8] border border-gray-400 rounded-[12px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/*  */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      startIcon={Mail}
                      placeholder="Email"
                      {...field}
                      type="email"
                      className="min-h-[48px] large-mobile-up:min-h-[56px] font-normal text-sm placeholder:text-[#94A3B8] border border-gray-400 rounded-[12px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/*  */}
            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <span className="flex justify-between align-top">
                      {/*@ts-ignore*/}
                      <Checkbox
                        {...field}
                        checked={field.value as CheckedState}
                        onCheckedChange={field.onChange as () => void}
                      />
                      <FormLabel
                        htmlFor="consent"
                        className="ml-2 text-sm mt-[-5px] text-[12px] text-[#64748B]"
                      >
                        By creating an account means you agree to the{" "}
                        <span className="font-bold">Terms & Conditions</span>{" "}
                        and our{" "}
                        <span className="font-bold">Privacy Policy</span>
                      </FormLabel>
                    </span>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="flex items-center w-full rounded-lg font-bold text-base h-12"
            >
              Signup
            </Button>
            {/*  */}
            <TextHorizontalRule text="Or sign up with" />
            {/*  */}
            <section className="alt-auth-providers flex justify-between items-center gap-4">
              <Button variant={"outline"} size={"lg"} className="w-full">
                <span className="scale-50">
                  <Google />
                </span>
                Google
              </Button>
              <Button variant={"outline"} size={"lg"} className="w-full">
                <span className="scale-50">
                  <Github />
                </span>
                Github
              </Button>
            </section>
            <Paragraph className="text-[#0F172A] text-sm text-center">
              Already have an account?{" "}
              <Link
                href="/auth/signin"
                className="font-bold text-primary text-sm"
              >
                Log In
              </Link>
            </Paragraph>
          </form>
        </Form>
      </div>
    </section>
  )
}
