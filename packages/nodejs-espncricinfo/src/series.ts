import { EspnCrincinfoAPI } from "./types";

export type Series = {
  id: string;
  seasons: string[];
  years: string[];
  name?: string;
  shortName: string;
  abbreviation: string;
  slug: string;
  isTournament: boolean;
  url: string;
  events: EspnCrincinfoAPI.GetEventsRefResponse[];
};

export async function getSeries(id: string): Promise<Series> {
  const [seriesResponse, seasonsResponse, eventsResponse] = await Promise.all([
    fetch(`http://core.espnuk.org/v2/sports/cricket/leagues/${id}`),
    fetch(`http://core.espnuk.org/v2/sports/cricket/leagues/${id}/seasons`),
    fetch(`http://core.espnuk.org/v2/sports/cricket/leagues/${id}/events`),
  ]);

  const series =
    (await seriesResponse.json()) as EspnCrincinfoAPI.GetSeriesResponse;
  const seasons =
    (await seasonsResponse.json()) as EspnCrincinfoAPI.GetSeasonsResponse;
  const events =
    (await eventsResponse.json()) as EspnCrincinfoAPI.GetEventsResponse;

  const seasonsRefs = seasons.items.map((item) => item.$ref);

  const eventsRefs = events.items.map((item) => item.$ref);

  const finalEvents = await Promise.all(
    eventsRefs.map(async (ref) => {
      const response = await fetch(ref);

      return (await response.json()) as EspnCrincinfoAPI.GetEventsRefResponse;
    })
  );

  return {
    id,
    name: series.name,
    abbreviation: series.abbreviation,
    isTournament: series.isTournament,
    seasons: seasonsRefs,
    shortName: series.shortName,
    slug: series.slug,
    url: series.links[0].href,
    years: seasonsRefs.map((seasonRef) => seasonRef.split("/")[9]),
    events: finalEvents,
  };
}
