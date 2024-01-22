import { EspnCrincinfoAPI } from "./types";

interface MatchTeamPlayer {
  id: string;
  primaryRole: string;
  styleId: number;
  type: number;
  typeName: string;

  ageDays: number;
  ageYears: number;
  alphaName: string;
  battingHand: string;
  battingStyle: string;
  battingStyleLong: string;
  bowlingHand: string;
  bowlingPaceSpin: string;
  bowlingStyle?: string;
  bowlingStyleLong?: string;
  captain: number;
  cardLong: string;
  cardQualifier: string;
  cardShort: string;
  dob: string;
  imageId?: number;
  keeper: number;
  knownAs: string;
  mobileName: string;
  objectId: number;

  popularName: string;
  portraitAltId: string;
  portraitObjectId: number;
  statusId: number;
}

type Logo = {
  altId: string;
  espnCdn: string;
  height: number;
  imageHeight: number;
  imagePath: string;
  imageWidth: number;
  objectId: number;
  path: string;
  width: number;
};

type Continent = {
  id: string;
  name: string;
};

type Team = {
  id: string;
  name: string;
  shortName: string;
  generalName: string;

  batsmenInSide: number;
  contentId: number;
  countryId: number;
  fieldersInSide: number;
  imageId: number;

  logo: Logo;

  objectId: number;
  players: MatchTeamPlayer[];
  playersInSide: number;
  siteId: number;
  abbreviation: string;
  fileName: string;

  urlComponent: string;
};

type Official = {
  ageDays: number;
  ageYears: number;
  alphaName: string;
  battingHand: string;
  bowlingHand: string;
  bowlingPacespin: string;
  cardLong: string;
  cardQualifier: string;
  cardShort: string;
  dob: string;
  imageId?: number;
  knownAs: string;
  mobileName: string;
  objectId: number;
  playerId: string;
  playerType: number;
  playerTypeName: string;
  popularName: string;
  portraitAltId: string;
  portraitObjectId: number;
  statusId: number;
  teamAbbreviation: string;
  teamId: number;
  teamName: string;
  teamShortName: string;
};

type Match = {
  status: string;
  description: string;
  class: string;
  season: string;
  legacyScorecardUrl: string;
  series: {
    id: number;
    name: string;
  };
  eventUrl: string;
  detailsUrl: string;
  officials: Official[];
  // Live Matches only
  currentSummary?: unknown;
  presentDatetimeLocal: string;
  presentDatetimeGmt: string;
  startDatetimeLocal: string;
  startDatetimeGmt: string;
  isCancelled: boolean;
  rainRule?: unknown;
  date: string;

  continent: Continent;
  town: {
    aka: string;
    id: string;
    name: string;
    area: string;
  };

  title: string;
  result: string;
  weatherLocationCode: string;

  ground: {
    id: string;
    name: string;
    latitude: string;
    longitude: string;
    objectId: string;
    smallName: string;
  };

  lighting: string;
  followOn: string;
  scheduledOvers: string;
  inningsList: InningsList[];

  innings: Inning[];

  teams: Team[];

  homeTeam: string;
  battingFirst: string;
  matchWinner: string;

  toss: {
    decision: string;
    decisionName: string;
    choiceTeamId: string;
    winnerTeamId: string;
  };

  commentary: any;

  // rosters: string;
  // allInnings: string;
};

export interface InningsList {
  current: number;
  description: string;
  descriptoinShort: string;
  inningsNumber: number;
  selected: number;
  teamId: number;
}

export interface Inning {
  ballLimit: number;
  balls: number;
  batted: number;
  battingTeamId: number;
  bowlingTeamId: number;
  bpo: number;
  byes: number;
  event: number;
  eventName: string;
  extras: number | string;
  inningsNumber: string;
  inningsNumth: string;
  lead: number;
  legbyes: number | string;
  liveCurrent: number;
  liveCurrentName?: string;
  minutes?: any;
  noballs: number;
  oldPenaltyOrBonus: number;
  overLimit: string;
  overLimitRunRate: number;
  overSplitLimit: string;
  overs: string;
  oversDocked: number;
  penalties: number;
  penaltiesFieldEnd: number;
  penaltiesFieldStart: number;
  runRate: number;
  runs: number | string;
  target: number;
  wickets: number | string;
  wides: number | string;
}

interface Batting {
  ballsFaced: string;
  hand: string;
  imagePath: string;
  knownAs: string;
  notout: number;
  playerId: number;
  popularName: string;
  position: number;
  positionGroup: string;
  runs: number;
  liveCurrentName?: string;
}

export async function getMatch(matchId: string): Promise<Match> {
  const matchUrl = `https://www.espncricinfo.com/matches/engine/match/${matchId}.html`;
  const jsonUrl = `https://www.espncricinfo.com/matches/engine/match/${matchId}.json`;

  const response = await fetch(jsonUrl);

  const data = (await response.json()) as EspnCrincinfoAPI.GetMatchResponse;

  const series = data.series[data.series.length - 1];

  const eventUrl = `http://core.espnuk.org/v2/sports/cricket/leagues/${series.core_recreation_id}/events/${matchId}`;

  let tossDecision: string;

  if (data.match.toss_decision === "" && data.innings.length > 0) {
    tossDecision =
      data.innings[0].batting_team_id === +data.match.toss_winner_team_id
        ? "1"
        : "2";
  } else {
    tossDecision = data.match.toss_decision;
  }

  let tossDecisionName: string;

  if (data.match.toss_decision === "" && data.innings.length > 0) {
    tossDecisionName =
      data.innings[0].batting_team_id === +data.match.toss_winner_team_id
        ? "bat"
        : "bowl";
  } else {
    tossDecisionName = data.match.toss_decision_name;
  }

  const match: Match = {
    status: data.match.match_status,
    description: data.description,
    class: data.match.international_class_card || data.match.general_class_card,
    season: data.match.season,
    legacyScorecardUrl: `https://static.espncricinfo.com${data.match.legacy_url}`,
    eventUrl,
    detailsUrl: `${eventUrl}/competitions/${matchId}/details?page_size={1}&page={1000}`,

    date: data.match.start_date_raw,
    presentDatetimeGmt: data.match.present_datetime_gmt,
    presentDatetimeLocal: data.match.present_date_local,
    startDatetimeGmt: data.match.start_time_gmt,
    startDatetimeLocal: data.match.start_datetime_local,

    isCancelled: data.match.cancelled_match !== "N",
    rainRule: data.match.rain_rule === "1" && data.match.rain_rule_name,

    series: {
      id: series.core_recreation_id,
      name: series.series_name,
    },

    officials: data.official.map((official) => {
      return {
        ageDays: official.age_days,
        ageYears: official.age_years,
        alphaName: official.alpha_name,
        battingHand: official.batting_hand,
        bowlingHand: official.bowling_hand,
        bowlingPacespin: official.bowling_pacespin,
        cardLong: official.card_short,
        cardQualifier: official.card_qualifier,
        cardShort: official.card_short,
        dob: official.dob,
        knownAs: official.known_as,
        mobileName: official.mobile_name,
        objectId: official.object_id,
        playerId: official.player_id,
        playerType: official.player_type,
        playerTypeName: official.player_type_name,
        popularName: official.popular_name,
        portraitAltId: official.portrait_alt_id,
        portraitObjectId: official.portrait_object_id,
        statusId: official.status_id,
        teamAbbreviation: official.team_abbreviation,
        teamId: official.team_id,
        teamName: official.team_name,
        teamShortName: official.team_short_name,
        imageId: official.image_id,
      };
    }),
    teams: data.team.map<Team>((team) => {
      return {
        id: team.team_id,
        name: team.team_name,
        batsmenInSide: team.batsmen_in_side,
        contentId: team.content_id,
        countryId: team.country_id,
        fieldersInSide: team.content_id,
        imageId: team.image_id,

        logo: {
          altId: team.logo_alt_id,
          espnCdn: team.logo_espncdn,
          height: team.logo_height,
          imageHeight: team.logo_image_height,
          imagePath: team.logo_image_path,
          imageWidth: team.logo_image_width,
          objectId: team.logo_object_id,
          path: team.logo_path,
          width: team.logo_width,
        },

        objectId: team.object_id,

        players: team.player.map<MatchTeamPlayer>((player) => {
          return {
            ageDays: player.age_days,
            ageYears: player.age_years,
            alphaName: player.alpha_name,
            battingHand: player.batting_hand,
            battingStyle: player.batting_style,
            battingStyleLong: player.batting_style_long,
            bowlingHand: player.bowling_hand,
            bowlingPaceSpin: player.bowling_pacespin,
            captain: player.captain,
            cardLong: player.card_long,
            cardQualifier: player.card_qualifier,
            cardShort: player.card_short,
            dob: player.dob,
            id: player.player_id,
            keeper: player.keeper,
            knownAs: player.known_as,
            mobileName: player.mobile_name,
            objectId: player.object_id,
            popularName: player.popular_name,
            portraitAltId: player.portrait_alt_id,
            portraitObjectId: player.portrait_object_id,
            primaryRole: player.player_primary_role,
            statusId: player.status_id,
            styleId: player.player_style_id,
            type: player.player_type,
            typeName: player.player_type_name,
            bowlingStyle: player.bowling_style,
            bowlingStyleLong: player.bowling_style_long,
            imageId: player.image_id,
          };
        }),
        playersInSide: team.players_in_side,
        siteId: team.site_id,
        abbreviation: team.team_abbreviation,
        fileName: team.team_filename,
        generalName: team.team_general_name,
        teamName: team.team_name,
        shortName: team.team_short_name,
        urlComponent: team.url_component,
      };
    }),

    continent: {
      id: data.match.continent_id,
      name: data.match.continent_name,
    },

    town: {
      aka: data.match.town_area,
      area: data.match.town_area,
      id: data.match.town_id,
      name: data.match.town_name,
    },
    title: data.match.cms_match_title,
    result: data.live.status,
    weatherLocationCode: "",

    ground: {
      id: data.match.ground_id,
      name: data.match.ground_name,
      latitude: data.match.ground_latitude,
      longitude: data.match.ground_longitude,
      objectId: data.match.ground_object_id,
      smallName: data.match.ground_small_name,
    },

    lighting: data.match.floodlit_name,
    followOn: data.match.followon,
    scheduledOvers: data.match.scheduled_overs,

    inningsList: data.centre.common.innings_list.map((inning) => {
      return {
        current: inning.current,
        description: inning.description,
        descriptoinShort: inning.descriptoin_short,
        inningsNumber: inning.innings_number,
        selected: inning.selected,
        teamId: inning.team_id,
      };
    }),
    innings: data.innings.map((inning) => {
      return {
        ballLimit: inning.ball_limit,
        balls: inning.balls,
        batted: inning.batted,
        battingTeamId: inning.batting_team_id,
        bowlingTeamId: inning.bowling_team_id,
        bpo: inning.bpo,
        byes: inning.byes,
        event: inning.event,
        eventName: inning.event_name,
        extras: inning.extras,
        inningsNumber: inning.innings_number,
        inningsNumth: inning.innings_numth,
        lead: inning.lead,
        legbyes: inning.legbyes,
        liveCurrent: inning.live_current,
        noballs: inning.noballs,
        oldPenaltyOrBonus: inning.old_penalty_or_bonus,
        overLimit: inning.over_limit,
        overLimitRunRate: inning.over_limit_run_rate,
        overs: inning.overs,
        oversDocked: inning.overs_docked,
        overSplitLimit: inning.over_split_limit,
        penalties: inning.penalties,
        penaltiesFieldEnd: inning.penalties_field_end,
        penaltiesFieldStart: inning.penalties_field_start,
        runRate: inning.run_rate,
        runs: inning.runs,
        target: inning.target,
        wickets: inning.wickets,
        wides: inning.wides,
        liveCurrentName: inning.live_current_name,
        minutes: inning.minutes,
      };
    }),

    homeTeam: data.match.home_team_id,
    battingFirst: data.match.batting_first_team_id,
    matchWinner: data.match.winner_team_id,

    toss: {
      decision: tossDecision,
      decisionName: tossDecisionName,
      winnerTeamId: data.match.toss_winner_team_id,
      choiceTeamId: data.match.toss_choice_team_id,
    },

    commentary: data.comms[0],
  };

  return match;
}
