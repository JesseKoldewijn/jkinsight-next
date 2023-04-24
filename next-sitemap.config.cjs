/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://jkinsight-next.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
};
