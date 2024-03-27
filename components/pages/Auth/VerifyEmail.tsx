import { Heading, Paragraph } from "@/components/core/ui/typography"

export default function VerifyEmail() {
  return (
    <section className="verif-email w-full max-w-[400px] pt-14">
      <Heading level={4} className="mb-[32px] text-gray-900">
        Verify your Email
      </Heading>
      <Paragraph className="text-gray-600 mt-8 text-sm">
        Thank you, check your email inbox for instructions to reset your
        password
      </Paragraph>

      <Paragraph className="text-gray-600 mt-6 text-sm">
        Did not receive an email?{" "}
        <span className="text-primary font-bold hover:underline">Resend</span>
      </Paragraph>
    </section>
  )
}
