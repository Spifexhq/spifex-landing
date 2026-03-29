import { cookies, headers } from "next/headers";
import { createT, type Messages } from "./translator";

const COOKIE_NAME = "spifex_locale";

export type Locale = "en" | "pt";

export async function getMessages(locale: Locale): Promise<Messages> {
  if (locale === "pt") return (await import("./dict/pt")).default;
  return (await import("./dict/en")).default;
}

export async function getServerI18n() {
  const cookieStore = await cookies();
  const headerStore = await headers();

  const cookieLocale = cookieStore.get(COOKIE_NAME)?.value;
  const acceptLanguage = headerStore.get("accept-language") || "";

  let locale: Locale = "en";
  if (cookieLocale === "pt" || cookieLocale === "en") locale = cookieLocale;
  else if (
    acceptLanguage.toLowerCase().startsWith("pt") ||
    acceptLanguage.toLowerCase().includes("pt-")
  ) {
    locale = "pt";
  }

  const messages = await getMessages(locale);
  const t = createT(messages);
  return { locale, messages, t };
}
