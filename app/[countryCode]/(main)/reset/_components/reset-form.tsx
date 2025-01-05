"use client";
import { reset_password } from "@/lib/data/customer";
import ErrorMessage from "@/components/modules/checkout/components/error-message";
import { SubmitButton } from "@/components/modules/checkout/components/submit-button";
import Input from "@/components/modules/common/components/input";
import { useActionState } from "react";
import { Alert } from "@medusajs/ui"

const Login = () => {
  const [message, formAction] = useActionState(reset_password, null);

  return (
    <div
      className="max-w-sm w-full flex flex-col items-center"
      data-testid="login-page"
    >
      <h1 className="text-large-semi uppercase mb-6">Welcome back</h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-8">
        Enter Your Email To Reset the password
      </p>
      <form className="w-full" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Email"
            name="email"
            type="email"
            title="Enter a valid email address."
            autoComplete="email"
            required
            data-testid="email-input"
          />
        </div>
        {message && (
          message.startsWith("A reset password link") || message.startsWith("Email is required") ? (
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
  );
};

export default Login;
