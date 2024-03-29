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
import { User } from "lucide-react"
import { useRouter } from "next/navigation"
import { Checkbox } from "@/components/core/ui/input/checkbox"
import { CheckedState } from "@radix-ui/react-checkbox"
import { saveNewUserDetails } from "@/app/actions"

interface SignupFormProps {
  heading?: string
  subHeading?: string
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
  consent: z.boolean().refine((value) => value === true, {
    message: "Please accept the terms and conditions."
  })
})

export default function UserDetailsForm({
  heading = "Welcome to Affordibit!",
  subHeading = "Please provide your details to get started."
}: SignupFormProps) {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      consent: false
    }
  })

  async function saveUserDetails(values: z.infer<typeof formSchema>) {
    saveNewUserDetails(values)
  }

  return (
    <section
      id="user_details_form"
      className="w-full max-w-[450px] mx-auto rounded-lg bg-white p-10"
    >
      <Heading level={4} className="mb-[32px] text-gray-900">
        {heading}
      </Heading>
      <Paragraph className="text-[#0F172A] text-sm mb-5">
        {subHeading}
      </Paragraph>
      <div className="w-100">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(saveUserDetails)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      startIcon={User}
                      placeholder="Name"
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
                      placeholder="Surname"
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
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </section>
  )
}
