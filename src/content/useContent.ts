import { useLocale } from "../i18n/LocaleContext";
import { getContent } from "./catalog";

/** Localized content for the active language. */
export function useContent() {
  const { locale } = useLocale();
  return getContent(locale);
}
