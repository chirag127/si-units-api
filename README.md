# SI Units and Measurements

> All SI units with symbols, dimensions, and conversion factors

**Category:** dev-ref · **Data:** BIPM · **License:** public-domain · **Updates:** manual

## API Endpoints

All endpoints are served as static JSON from GitHub Pages.

| Endpoint | Format |
|----------|--------|
| `/data/units.json` | JSON |

## Usage

```bash
curl https://chirag127.github.io/si-units/data.json
```

```javascript
const res = await fetch('https://chirag127.github.io/si-units/data.json');
const data = await res.json();
```

## Data

- Source: BIPM
- License: public-domain
- Last updated: `2026-08-25T03:04:42.607Z`

See `data/` for raw JSON and `data/schema.json` for the schema.

## Documentation

Visit the [interactive docs](https://chirag127.github.io/si-units/) for the browsable API reference.

## Contributing

Issues and PRs welcome. Ensure `data/schema.json` validates all data files.

## License

public-domain
