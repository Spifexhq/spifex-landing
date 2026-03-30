import { request } from "./http";
import type {
  SignUpStartRequest,
  SignUpStartResponse,
  SignUpVerifyCodeRequest,
  SignUpVerifyCodeResponse,
  SignUpResendCodeRequest,
  CreateCheckoutSessionResponse,
} from "./types";

export type PlanCode = "starter" | "pro";

export const api = {
  checkEmailAvailability: (email: string) =>
    request<{ available: boolean }>("identity/emails/check/", "POST", { email }),

  signUpStart: (payload: SignUpStartRequest) =>
    request<SignUpStartResponse>("auth/signup/start/", "POST", payload),

  signUpVerifyCode: (payload: SignUpVerifyCodeRequest) =>
    request<SignUpVerifyCodeResponse>("auth/signup/verify-code/", "POST", payload),

  signUpResendCode: (payload: SignUpResendCodeRequest) =>
    request<SignUpStartResponse>("auth/signup/resend-code/", "POST", payload),

  createCheckoutSession: (plan_code: PlanCode, country_code?: string) =>
    request<CreateCheckoutSessionResponse>("billing/checkout-session/", "POST", {
      plan_code,
      country_code,
    }),
};