const ACCESS_KEY = "spifex_access";
const ORG_KEY = "spifex_org_external_id";
const USER_KEY = "spifex_user_id";

export function setAccessToken(token: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(ACCESS_KEY, token);
}

export function getAccessToken(): string {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(ACCESS_KEY) || "";
}

export function clearAccessToken() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(ACCESS_KEY);
}

export function setOrgExternalId(value: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(ORG_KEY, value);
}

export function getOrgExternalId(): string {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(ORG_KEY) || "";
}

export function clearOrgExternalId() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(ORG_KEY);
}

export function setUserId(value: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(USER_KEY, value);
}

export function getUserId(): string {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(USER_KEY) || "";
}

export function clearUserId() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(USER_KEY);
}

export function clearAuthStorage() {
  clearAccessToken();
  clearOrgExternalId();
  clearUserId();
}