// Next.js API route to fetch latest games from RAWG
export async function GET(req) {

  const url = 'https://api.rawg.io/api/games?ordering=-added&page_size=10&key=' + process.env.RAWG_API_KEY;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data && data.results) {
      const games = data.results.map(game => ({
        id: game.id,
        name: game.name,
        released: game.released,
        background_image: game.background_image,
        rating: game.rating
      }));
      return new Response(JSON.stringify({ games }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    return new Response(JSON.stringify({ games: [] }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to fetch RAWG games' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
