// // Next.js API route to fetch Reddit posts using OAuth (no password needed)
// export async function GET(req) {
//   const clientId = process.env.REDDIT_CLIENT_ID;
//   const clientSecret = process.env.REDDIT_CLIENT_SECRET;

//   try {
//     // Step 1: Get OAuth token using client credentials flow
//     const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

//     const tokenRes = await fetch("https://www.reddit.com/api/v1/access_token", {
//       method: "POST",
//       headers: {
//         "Authorization": `Basic ${auth}`,
//         "Content-Type": "application/x-www-form-urlencoded"
//       },
//       body: new URLSearchParams({
//         grant_type: "client_credentials"
//       })
//     });

//     const tokenData = await tokenRes.json();

//     if (!tokenData.access_token) {
//       return new Response(
//         JSON.stringify({ error: "Failed to get token", details: tokenData }),
//         { status: 500, headers: { "Content-Type": "application/json" } }
//       );
//     }

//     const accessToken = tokenData.access_token;

//     // Step 2: Fetch subreddit posts with OAuth token
//     const postsRes = await fetch("https://oauth.reddit.com/r/gamernews/new?limit=15", {
//       headers: {
//         "Authorization": `bearer ${accessToken}`,
//         "User-Agent": "gamenews-app/1.0 (by anonymous)"
//       }
//     });

//     const postsData = await postsRes.json();

//     const posts = postsData?.data?.children?.map(child => ({
//       id: child.data.id,
//       title: child.data.title,
//       selftext: child.data.selftext,
//       thumbnail: child.data.thumbnail,
//       permalink: child.data.permalink,
//       created_utc: child.data.created_utc,
//       preview: child.data.preview || null
//     })) || [];

//     return new Response(JSON.stringify({ posts }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" }
//     });
//   } catch (err) {
//     return new Response(
//       JSON.stringify({ error: "Server error", details: err.message }),
//       { status: 500, headers: { "Content-Type": "application/json" } }
//     );
//   }
// }
export async function GET(req) {
  const IGN_RSS_URL = "https://feeds.ign.com/ign/news";

  try {
    const res = await fetch(IGN_RSS_URL, {
      headers: {
        "User-Agent": "uetgs-website/1.0 (by uetgamestudio.com)"
      },
      cache: "no-store" // avoids stale cache in Next.js
    });

    const xml = await res.text();

    // Parse <item> blocks
    let items = Array.from(xml.matchAll(/<item>([\s\S]*?)<\/item>/g)).map(match => {
      const itemXml = match[1];
      const getTag = (tag) => {
        const regex = new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`);
        const tagMatch = itemXml.match(regex);
        return tagMatch ? tagMatch[1].replace(/<!\[CDATA\[|\]\]>/g, '').trim() : '';
      };
      const getMedia = () => {
  const contentMatch = itemXml.match(/<media:content[^>]+url="([^"]+)"/);
  if (contentMatch) return contentMatch[1];
  const thumbMatch = itemXml.match(/<media:thumbnail[^>]+url="([^"]+)"/);
  if (thumbMatch) return thumbMatch[1];
  return '';
};

      return {
        title: getTag('title'),
        link: getTag('link'),
        pubDate: new Date(getTag('pubDate')).toISOString(),
        description: getTag('description'),
        image: getMedia(),
        guid: getTag('guid')
      };
    });

    // 🎯 Filter only game-related posts by keywords
    const keywords = [
      "game", "gaming", "pc", "video", "esports", "xbox", "playstation", "nintendo"
    ];

    items = items.filter(item => {
      const text = `${item.title} ${item.description}`.toLowerCase();
      return keywords.some(word => text.includes(word));
    });

    // Sort latest first & limit to 20
    items = items
      .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
      .slice(0, 20);

    return new Response(JSON.stringify({ news: items }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    console.error("IGN feed error:", err.message);
    return new Response(
      JSON.stringify({ error: "Failed to fetch IGN news", details: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
