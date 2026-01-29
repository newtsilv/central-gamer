export default async function handler(req, res) {
  try {
    const apiKey = process.env.RAWG_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'RAWG_API_KEY não configurada' });
    }

    const year = new Date().getFullYear();

    const url = new URL('https://api.rawg.io/api/games');
    url.searchParams.set('key', apiKey);
    url.searchParams.set('dates', `${year}-01-01,${year}-12-31`);
    url.searchParams.set('ordering', '-released');
    url.searchParams.set('page_size', '10');

    const response = await fetch(url.toString());
    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar jogos' });
  }
}
