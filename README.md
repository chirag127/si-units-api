# SI Units

The 29 SI units that have their own name — the 7 base units and the 22 derived units with special names — each with its symbol, quantity, dimension, expression in base units, and the 2019 BIPM definition verbatim.

No authentication. No server. No rate limit. The committed JSON is the database.

    curl https://chirag127.github.io/si-units-api/api/v1/data.json

## What you get

| Field | Example | Notes |
| --- | --- | --- |
| `id` | `"m"`, `"degC"`, `"ohm"` | URL-safe. Equal to the symbol except for `°C` and `Ω`, which would need percent-encoding, and `S` (siemens), which would collide with `s` (second) on case-insensitive filesystems. |
| `name` / `symbol` | `"metre"` / `"m"` | Brochure spelling, and the symbol with `°C` and `Ω` intact. |
| `kind` | `"base"` | `base` for the 7, `derived` for the 22 with special names. |
| `quantity` | `"length"`, `"pressure, stress"` | What the unit measures, in the brochure's words. |
| `dimension` | `"L"`, `"M L T⁻²"` | In the seven base dimensions L, M, T, I, Θ, N, J. Derived units with no dimension show `1`. |
| `derivation` | `"N/m²"`, `"J/kg"` | How the unit is derived from other SI units. `null` for base units. |
| `baseUnits` | `"kg m⁻¹ s⁻²"` | The same unit in base units only. |
| `definition` | `"The metre … c to be 299 792 458 …"` | The brochure's defining sentence, quoted. |

## Endpoints

| Endpoint | Description | Size |
| --- | --- | --- |
| `/api/v1/data.json` | All 29 records, base units first | 12,177 bytes |
| `/api/v1/individual/{id}.json` | One record, e.g. `/api/v1/individual/m.json` | 268–601 bytes each |
| `/api/v1/search-index.json` | The same records keyed by `id`, for a single-fetch lookup | 13,004 bytes |
| `/api/v1/meta.json` | Record count, source, retrieval time | 517 bytes |

## Data source and accuracy

BIPM, *Le Système international d'unités / The International System of Units (SI)*, 9th edition, 2019 — the edition published after the 26th CGPM's 2018 revision of the SI, in force since 20 May 2019. Names, symbols, quantities, derivations and the defining texts follow its Tables 2–4 and chapter 2.

There is no machine-readable BIPM feed to scrape. This is the one dataset in the collection that is curated rather than fetched: 29 records, checked by hand against the brochure. It changes only when the CGPM adds or redefines a unit — the last such change was the 2019 redefinition, which is why every base-unit definition here is a constants-based one.

Licence: © BIPM. The SI brochure is published under a [Creative Commons Attribution 4.0 International licence](https://creativecommons.org/licenses/by/4.0/).

## Limits, stated plainly

- 29 units, not every unit the brochure mentions. Non-SI units accepted for use (minute, hour, litre, tonne, electronvolt), prefixed forms (km, µF) and the many coherent units without special names are excluded.
- No conversion factors. Nothing here converts metres to feet or Celsius to Fahrenheit — that is a different dataset.
- `dimension` uses the usual L, M, T, I, Θ, N, J letters. The brochure's vector notation is flattened, so `1` means dimensionless.
- `definition` is the 2019 constants-based text. Pre-2019 descriptions, including the kilogram prototype, would read differently.
- Static by design: no update workflow, because a unit only changes when the CGPM says so.

## Contract

[openapi.yaml](./openapi.yaml) describes all four endpoints. The record type:

```ts
type SiUnit = {
  id: string;              // "m" | "degC" | "ohm" | "siemens"
  name: string;            // "metre"
  symbol: string;          // "m" | "°C" | "Ω"
  kind: 'base' | 'derived';
  quantity: string;        // "length"
  dimension: string;       // "L" | "M L T⁻²" | "1"
  derivation: string | null;  // "N/m²"; null for base units
  baseUnits: string;       // "kg m⁻¹ s⁻²"
  definition: string;
};
```

## Licence

Code: CC0 1.0 — see [LICENSE](./LICENSE). Data: the SI brochure, © BIPM, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

---

## About the author

**Chirag Singhal** — building free, open APIs and tools. Everything here is free, no
authentication, no rate limits, no telemetry. If it saves you time and you want to work
together, that is exactly what this is for.

- **Email — the fastest way to reach me:** [chirag@oriz.in](mailto:chirag@oriz.in)
- **GitHub:** [github.com/chirag127](https://github.com/chirag127)
- **LinkedIn:** [linkedin.com/in/chirag127](https://www.linkedin.com/in/chirag127/)
- **X:** [x.com/singhal127](https://x.com/singhal127)
- **YouTube:** [@ChiragSinghal127](https://www.youtube.com/@ChiragSinghal127)
- **Instagram:** [chiragsinghal127](https://www.instagram.com/chiragsinghal127/)
- **Reddit:** [Far_Macaron_9910](https://www.reddit.com/user/Far_Macaron_9910/)
- **Buy me a coffee:** [buymeacoffee.com/chirag127](https://buymeacoffee.com/chirag127)

**Hiring?** I build developer tooling, data APIs and web platforms. Email me — I reply to
everything.
