export type ApiSuccess<T> = {
  data: T;
  message?: string;
  meta?: Record<string, unknown>;
};

export type ApiErrorBody = {
  code: string;
  message?: string;
  detail?: unknown;
  fields?: Record<string, unknown>;
  status?: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  is_active: boolean;
  is_staff?: boolean;
  is_superuser?: boolean;
  is_email_verified: boolean;
  date_joined: string;
  verified_at: string;
  last_password_change: string | null;
};

export type UserOrganizationDetail = {
  is_owner: boolean;
  role: string | null;
  organization: {
    id: string;
    name?: string;
  } | null;
};

export type SignInResponse = {
  user: User;
  organization: UserOrganizationDetail;
  is_subscribed: boolean;
  permissions: string[];
  access: string;
};

export type MfaRequiredPayload = {
  mfa_required: true;
  challenge_id: string;
  expires_at?: string;
  channel?: string;
};

export type SignUpStartRequest = {
  name: string;
  email: string;
  password: string;
  timezone: string;
  country: string;
  language?: "en" | "pt" | "fr" | "de";
  currency: string;
  browser_language?: string;
  browser_languages?: string[];
  locale?: string;
  consents?: {
    privacy_policy: boolean;
    terms_of_service: boolean;
    marketing?: boolean;
  };
};

export type SignUpStartResponse = {
  challenge_id: string;
  expires_at?: string;
  channel?: string;
};

export type SignUpVerifyCodeRequest = {
  challenge_id: string;
  code: string;
};

export type SignUpResendCodeRequest = {
  challenge_id: string;
};

export type SignUpVerifyCodeResponse = SignInResponse;

export type CreateCheckoutSessionResponse = {
  url?: string;
};