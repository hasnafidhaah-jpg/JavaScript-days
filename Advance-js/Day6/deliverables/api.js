export async function getData( search = "batman"){
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`);

    if (!res.ok) {
      throw new Error(`fetch failed ${res.status}`);
    }

  const json = await res.json();


  const movies = json.map(item => ({
    Title: item.show.name,
    Year: item.show.premiered ? item.show.premiered.slice(0, 4) : "2020",  
    Type: item.show.type,
  }));

  return movies;
}