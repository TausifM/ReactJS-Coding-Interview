/**
 *  Domain Name System (DNS)s
 *
 */
const dns = require("dns");
dns.looking("www.nodejs.org", (err, address, family) => {
  console.log(address);
  console.log(family);
});
/**
 * --------
 *  Output
 * --------
 * addresses: 104.20.22.46
 * family: 4
 *
 * */
// Example: lookupService()
dns.lookupService("127.0.0.1", 22, (err, hostname, service) => {
  console.log(hostname, service);
});
/**
 * --------
 *  Output
 * --------
 * BLR-G24FSF2-10L.mm-ads.com ssh
 *
 * */
