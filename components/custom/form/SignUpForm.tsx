"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/core/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/core/ui/form/form"
import { Input } from "@/components/core/ui/input/input"
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter
} from "@/components/core/ui/card/card"
import { Heading, Paragraph } from "@/components/core/ui/typography"
import { Mail, User } from "lucide-react"
import Github from "@/components/custom/icon/Github"
import Google from "@/components/custom/icon/Google"
import Link from "next/link"

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters."
  }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters."
  }),
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters."
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters."
  })
})

export default function SignUpForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: ""
    }
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <Card className="max-w-[400px] mx-auto bg-transparent border-none">
      <CardHeader>
        <Heading level={3}>Sign Up for an Account</Heading>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Username"
                      startIcon={User}
                      {...field}
                      className="min-h-[58px] rounded-[12px] border border-[var(--gray-400)] text-gray-700 font-normal text-lg"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      startIcon={Mail}
                      {...field}
                      className="min-h-[58px] rounded-[12px] border border-[var(--gray-400)] text-gray-700 font-normal text-lg"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size={"lg"} className="block w-full">
              Sign Up
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="block">
        <section className="flex items-center w-full mb-6">
          <span className="flex-grow bg-gray-400 rounded h-[0.5px]"></span>
          <Paragraph className="mx-3 text-md font-normal text-gray-400">
            Or sign up with
          </Paragraph>
          <span className="flex-grow bg-gray-400 rounded h-[0.5px]"></span>
        </section>
        <section className="w-full flex justify-around items-center gap-5">
          <Button
            variant={"outline"}
            className="w-full hover:bg-transparent border border-[var(--gray-400)] hover:text-primary"
            size={"lg"}
            isLink={true}
            href="/"
          >
            <Github /> <span className="ml-2">Github</span>
          </Button>
          <Button
            variant={"outline"}
            className="w-full hover:bg-transparent border border-[var(--gray-400)] hover:text-primary"
            size={"lg"}
            isLink={true}
            href="/"
          >
            <Google /> <span className="ml-2">Google</span>
          </Button>
        </section>

        <section className="w-full mt-5">
          <Paragraph className="text-center text-md font-normal text-gray-600">
            Already have an account?{" "}
            <Link
              href="/auth/signin"
              className="text-primary font-medium hover:underline"
            >
              Login
            </Link>
          </Paragraph>
        </section>
      </CardFooter>
    </Card>
  )
}
