import { discoverVendors } from "../src/discovery";

// Quick check of OSM discovery. No API key, no phone calls (just an HTTP query).
// Default: hairdressers near downtown San Francisco.

const vendors = await discoverVendors("hairdresser", 37.7749, -122.4194, 3000, 12);

console.log(`Found ${vendors.length} vendors with phone numbers:\n`);
for (const v of vendors) {
  console.log(`  ${v.name.padEnd(30)} ${v.phoneE164}`);
}
