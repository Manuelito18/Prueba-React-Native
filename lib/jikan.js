export async function getTopAnimes(limit = 25) {
  const TOP_ANIMES = `https://api.jikan.moe/v4/top/anime`;

  const rawData = await fetch(TOP_ANIMES);
  if (!rawData.ok) throw new Error(`Jikan API error: ${rawData.status}`);
  const json = await rawData.json();

  const items = Array.isArray(json.data) ? json.data : [];

  return items.slice(0, limit).map((item) => {
    const { mal_id, title, synopsis, score, images } = item;
    const image = images?.jpg?.image_url || images?.image_url || null;

    return {
      mal_id,
      title,
      synopsis: synopsis || null,
      score: typeof score === "number" ? score : null,
      image,
    };
  });
}

export async function getDataAnime(mal_id) {
  const DATA_ANIME = `https://api.jikan.moe/v4/anime/${mal_id}`;
  const rawData = await fetch(DATA_ANIME);
  const json = await rawData.json();

  if (rawData.ok) {
    const { data } = json;
    const {
      title,
      synopsis,
      score,
      images,
      episodes,
      status,
      aired,
      genres,
      year,
    } = data;
    const image = images?.jpg?.image_url || images?.image_url || null;
    const imageFull = images?.jpg?.large_image_url || null;
    const genreNames = Array.isArray(genres)
      ? genres.map((genre) => genre.name)
      : [];

    return {
      mal_id,
      title,
      synopsis: synopsis || null,
      score: typeof score === "number" ? score : null,
      image,
      imageFull,
      episodes: typeof episodes === "number" ? episodes : null,
      status: status || null,
      aired: aired?.string || null,
      genres: genreNames,
      year: typeof year === "number" ? year : null,
    };
  }
}
