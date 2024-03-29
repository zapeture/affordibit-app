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
  FormMessage
} from "@/components/core/ui/form/form"
import { Input } from "@/components/core/ui/input/input"
import { Mail } from "lucide-react"
import TextHorizontalRule from "@/components/custom/rules/TextHorizontalRule"
import Link from "next/link"
import AuthAltProviders from "@/components/auth/AuthAltProviders"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

interface SignupFormProps {
  heading?: string
  welcomeMessage?: string
}

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email."
  })
})

export default function SigninForm({
  heading = "Sign In to your Account",
  welcomeMessage = "Welcome back! Please sign in to your account."
}: SignupFormProps) {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ""
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const signInResult = await signIn("email", {
      email: values.email,
      callbackUrl: `${window.location.origin}`,
      redirect: false
    })

    if (!signInResult?.ok) {
      console.error("Sign in failed:", signInResult?.error)
      return
    } else {
      router.push("/auth/verify")
    }
  }

  return (
    <section id="signup_form" className="w-full max-w-[372px] mx-auto">
      <Heading level={4} className=" text-gray-900">
        {heading}
      </Heading>
      <Paragraph className="text-[#0F172A] mb-[32px]">
        {welcomeMessage}
      </Paragraph>
      <div className="w-100">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
            <Button
              type="submit"
              className="flex items-center w-full rounded-lg font-bold text-base h-12"
            >
              Sign In
            </Button>
            {/*  */}
            <TextHorizontalRule text="Or sign in with" />
            {/*  */}
            <AuthAltProviders />
            {/*  */}
            <Paragraph className="text-[#0F172A] text-sm text-center">
              Don`t Already have an account?{" "}
              <Link
                href="/auth/signup"
                className="font-bold text-primary text-sm"
              >
                Sign Up
              </Link>
            </Paragraph>
          </form>
        </Form>
      </div>
    </section>
  )
}
