"use client";
import { reset_password, updatepassword } from "@/lib/data/customer"
import ErrorMessage from "@/components/modules/checkout/components/error-message";
import { SubmitButton } from "@/components/modules/checkout/components/submit-button";
import Input from "@/components/modules/common/components/input";
import { useActionState, useEffect } from "react"
import { Alert } from "@medusajs/ui"
import { useRouter, useSearchParams } from "next/navigation"

const ResetPassword = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [message, formAction] = useActionState(updatepassword, null);
  const email = searchParams.get("email")
  const token = searchParams.get("token")

  useEffect(() => {
    if (!email || !token) {
      router.push("http://localhost:8000/us/reset");
    }
  }, [email, token, router]);

  // Create a wrapped form action that includes the token
  //@ts-ignore
  const handleFormAction = async (formData) => {
    formData.append("token", token); // Add token to form data
    return formAction(formData);
  };

  return (
    <div className="flex justify-center w-full py-12">
      <div
        className="max-w-sm w-full flex flex-col items-center"
        data-testid="login-page"
      >
        <h1 className="text-large-semi uppercase mb-6">Welcome back</h1>
        <p className="text-center text-base-regular text-ui-fg-base mb-8">
          Enter Your Email To Reset the password
        </p>
        <form className="w-full" action={handleFormAction}>
          <div className="flex flex-col w-full gap-y-2">
            <Input
              label="Email"
              name="email"
              type="email"
              title="Enter a valid email address."
              autoComplete="email"
              required
              data-testid="email-input"
              defaultValue={email!}
              disabled={true}
            />
            <Input
              label="Enter Your Password"
              name="password"
              type="password"
              title="Enter your new password"
              autoComplete="new-password"
              required
              data-testid="password-input"
            />
            <Input
              label="Enter Your Password Again"
              name="confirmPassword"
              type="password"
              title="Enter your new password again"
              autoComplete="new-password"
              required
              data-testid="confirm-password-input"
            />
          </div>

          {message && (
            message.startsWith("Password has been") ? (

              <Alert variant="success" dismissible={true} className="w-full mt-6">
                {message}
              </Alert>
            ) : (
              <Alert variant="error" dismissible={true} className="w-full mt-6">
                {message}
              </Alert>
            ))}
          <SubmitButton data-testid="sign-in-button" className="w-full mt-6">
            Reset Password
          </SubmitButton>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;