export default function handler(req, res) {
    res.setHeader("Content-Type", "text/plain");
    const robotsTxt = `
      User-agent: *
      Allow: /
      Sitemap: http://localhost:3000/sitemap.xml
    `;
    res.status(200).send(robotsTxt);
  }
  