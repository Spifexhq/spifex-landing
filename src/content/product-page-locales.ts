import type { Locale } from "@/lib/location/markets";
import type { ProductKey } from "./products";
import type { LocalizedProductPage } from "./product-pages";

import pt from "./product-pages/pt";
import ptBR from "./product-pages/pt-BR";
import es from "./product-pages/es";
import fr from "./product-pages/fr";
import de from "./product-pages/de";
import nl from "./product-pages/nl";
import it from "./product-pages/it";
import pl from "./product-pages/pl";
import sv from "./product-pages/sv";
import da from "./product-pages/da";
import no from "./product-pages/no";
import ca from "./product-pages/ca";
import ar from "./product-pages/ar";
import lb from "./product-pages/lb";

export const LOCALIZED_PRODUCT_PAGES: Partial<
  Record<Locale, Partial<Record<ProductKey, LocalizedProductPage>>>
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
