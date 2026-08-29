/*
 * MODE MAINTENANCE MY GPX
 * false = site normal
 * true  = page de maintenance
 */
window.MYGPX_MAINTENANCE = true;

if (
  window.MYGPX_MAINTENANCE &&
  !window.location.pathname.endsWith("/maintenance.html")
) {
  window.location.replace("maintenance.html");
}
