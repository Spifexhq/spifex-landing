import type { Locale } from "@/lib/location/markets";
import type { AudiencePageKind, AudiencePageContent } from "./audience-pages";

import pt from "./audience-pages/pt";
import ptBR from "./audience-pages/pt-BR";
import es from "./audience-pages/es";
import fr from "./audience-pages/fr";
import de from "./audience-pages/de";
import nl from "./audience-pages/nl";
import it from "./audience-pages/it";
import pl from "./audience-pages/pl";
import sv from "./audience-pages/sv";
import da from "./audience-pages/da";
import no from "./audience-pages/no";
import ca from "./audience-pages/ca";
import ar from "./audience-pages/ar";
import lb from "./audience-pages/lb";

export const LOCALIZED_AUDIENCE_PAGES: Partial<
  Record<Locale, Partial<Record<AudiencePageKind, AudiencePageContent>>>
> = {
  pt,
  "pt-BR": ptBR,
  es,
  fr,
  de,
  nl,
  it,
  pl,
  sv,
  da,
  no,
  ca,
  ar,
  lb,
};
