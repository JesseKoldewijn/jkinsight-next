/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://jkinsight.nl",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
};
