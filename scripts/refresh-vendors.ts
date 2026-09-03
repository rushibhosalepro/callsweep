import { discoverVendors } from "../src/discovery";

// Refresh the cached vendor list from OpenStreetMap. Run this occasionally to
// update fixtures/vendors.json; the app reads that cache so it doesn't hit
// Overpass on every run (which gets rate-limited).
//
// Usage:  bun run scripts/refresh-vendors.ts

const vendors = await discoverVendors("hairdresser", 37.7749, -122.4194, 3000, 8);
await Bun.write("fixtures/vendors.json", JSON.stringify(vendors, null, 2));
console.log(`Saved ${vendors.length} real shops to fixtures/vendors.json`);
