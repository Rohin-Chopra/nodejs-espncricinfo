export namespace EspnCrincinfoAPI {
  export interface GetMatchResponse {
    centre: Centre;
    comms: Comm[];
    description: string;
    innings: Inning[];
    live: Live;
    live_clipper: LiveClipper;
    live_video: LiveClipper;
    match: Match;
    match_card: string;
    middle_column: string;
    official: Official[];
    other_scores: OtherScores;
    score_source: string;
    series: Series[];
    substitute: any[];
    team: MatchTeam[];
    tiebreaker: any[];
    weather: LiveClipper;
  }

  export interface GetSeriesResponse {
    $ref: string;
    id: string;
    uid: string;
    groupId: string;
    name: string;
    alternateName: string;
    shortName: string;
    shortAlternateName: string;
    abbreviation: string;
    slug: string;
    classId: string[];
    isTournament: boolean;
    mappings: Mappings;
    season: Season;
    seasons: Season;
    teams: Season;
    events: Season;
    notes: Season;
    groups: Season;
    rankings: Season;
    links: Link[];
  }

  export interface GetSeasonsResponse {
    count: number;
    pageIndex: number;
    pageSize: number;
    pageCount: number;
    items: Item[];
  }

  export interface GetEventsResponse {
    count: number;
    pageIndex: number;
    pageSize: number;
    pageCount: number;
    items: Item[];
  }

  export interface GetEventsRefResponse {
    $ref: string;
    id: string;
    uid: string;
    date: string;
    endDate: string;
    name: string;
    shortName: string;
    shortDescription: string;
    description: string;
    season: Season;
    seasonType: Season;
    timeValid: boolean;
    competitions: Competition[];
    venues: Season[];
    links: Link[];
    leagues: League[];
  }

  interface League {
    $ref: string;
    season: Season;
    leagueType: string;
    isTournament: boolean;
  }

  interface Competition {
    $ref: string;
    id: string;
    uid: string;
    note: string;
    description: string;
    shortDescription: string;
    date: string;
    endDate: string;
    timeValid: boolean;
    neutralSite: boolean;
    attendance: number;
    divisionCompetition: boolean;
    conferenceCompetition: boolean;
    previewAvailable: boolean;
    recapAvailable: boolean;
    boxscoreAvailable: boolean;
    gamecastAvailable: boolean;
    playByPlayAvailable: boolean;
    ticketsAvailable: boolean;
    conversationAvailable: boolean;
    pickcenterAvailable: boolean;
    dayNight: boolean;
    liveAvailable: boolean;
    fastcastAvailable: boolean;
    preCommentaryAvailable: boolean;
    updatesOnly: boolean;
    limitedOvers: boolean;
    recent: boolean;
    reducedOvers: boolean;
    class: Class;
    onWatchESPN: boolean;
    necessary: boolean;
    venue: Venue;
    competitors: Competitor[];
    status: Season;
    details: Season;
    tiebreaker: Season;
    officials: Season;
    odds: Season;
    matchcards: Season;
    broadcasts: Season;
    tickets: Season;
    notes: Note[];
    situation: Season;
  }

  interface Note {
    text?: string;
    type: string;
    href?: string;
    dayNumber?: string;
    id?: number | string;
    date?: string;
  }

  interface Competitor {
    $ref: string;
    id: string;
    uid: string;
    type: string;
    order: number;
    homeAway: string;
    winner: boolean;
    score: Season;
    team: Season;
    linescores: Season;
    roster: Season;
    leaders: Season;
    previousCompetition: Season;
    nextCompetition: Season;
    statistics: Season;
    record: Season;
  }

  interface Venue {
    $ref: string;
    id: string;
    fullName: string;
    shortName: string;
    address: Address;
    capacity: number;
    grass: boolean;
    indoor: boolean;
    images: Season[];
    links: Link[];
  }

  interface Link {
    language: string;
    rel: string[];
    href: string;
    text: string;
    shortText: string;
    isExternal: boolean;
    isPremium: boolean;
  }

  interface Address {
    city: string;
    state: string;
    zipCode: string;
    country: string;
    summary: string;
  }

  interface Class {
    internationalClassId: string;
    generalClassId: string;
    generalClassCard: string;
    name: string;
    eventType: string;
  }

  interface Season {
    $ref: string;
  }

  interface Note {
    text?: string;
    type: string;
    href?: string;
    dayNumber?: string;
    id?: number | string;
    date?: string;
  }

  interface Competitor {
    $ref: string;
    id: string;
    uid: string;
    type: string;
    order: number;
    homeAway: string;
    winner: boolean;
    score: Season;
    team: Season;
    linescores: Season;
    roster: Season;
    leaders: Season;
    previousCompetition: Season;
    nextCompetition: Season;
    statistics: Season;
    record: Season;
  }

  interface Venue {
    $ref: string;
    id: string;
    fullName: string;
    shortName: string;
    address: Address;
    capacity: number;
    grass: boolean;
    indoor: boolean;
    images: Season[];
    links: Link[];
  }

  interface Link {
    language: string;
    rel: string[];
    href: string;
    text: string;
    shortText: string;
    isExternal: boolean;
    isPremium: boolean;
  }

  interface Address {
    city: string;
    state: string;
    zipCode: string;
    country: string;
    summary: string;
  }

  interface Class {
    internationalClassId: string;
    generalClassId: string;
    generalClassCard: string;
    name: string;
    eventType: string;
  }

  interface Season {
    $ref: string;
  }

  interface Item {
    $ref: string;
  }

  interface Link {
    language: string;
    rel: string[];
    href: string;
    text: string;
    shortText: string;
    isExternal: boolean;
    isPremium: boolean;
  }

  interface Season {
    $ref: string;
  }

  interface Mappings {
    contentlink: string;
    cricinfo: number;
  }

  export interface MatchTeam {
    batsmen_in_side: number;
    content_id: number;
    country_id: number;
    fielders_in_side: number;
    image_id: number;
    logo_alt_id: string;
    logo_espncdn: string;
    logo_height: number;
    logo_image_height: number;
    logo_image_path: string;
    logo_image_width: number;
    logo_object_id: number;
    logo_path: string;
    logo_width: number;
    object_id: number;
    player: MatchTeamPlayer[];
    players_in_side: number;
    site_id: number;
    team_abbreviation: string;
    team_filename: string;
    team_general_name: string;
    team_id: string;
    team_name: string;
    team_short_name: string;
    url_component: string;
  }

  export interface MatchTeamPlayer {
    age_days: number;
    age_years: number;
    alpha_name: string;
    batting_hand: string;
    batting_style: string;
    batting_style_long: string;
    bowling_hand: string;
    bowling_pacespin: string;
    bowling_style?: string;
    bowling_style_long?: string;
    captain: number;
    card_long: string;
    card_qualifier: string;
    card_short: string;
    dob: string;
    image_id?: number;
    keeper: number;
    known_as: string;
    mobile_name: string;
    object_id: number;
    player_id: string;
    player_primary_role: string;
    player_style_id: number;
    player_type: number;
    player_type_name: string;
    popular_name: string;
    portrait_alt_id: string;
    portrait_object_id: number;
    status_id: number;
  }

  export interface Series {
    class_id: number;
    class_name?: string;
    content_id: string;
    core_recreation_id: number;
    date: string;
    end_date: string;
    end_date_raw: string;
    final_type_name?: string;
    group_title: string;
    major_trophy?: any;
    match_number?: number;
    match_title: string;
    match_type_name?: any;
    multiformat_pointstable: string;
    number_of_hosts?: number;
    number_of_matches: number;
    number_of_teams: number;
    object_id: number;
    points: number;
    primary_series: string;
    replayed_date?: any;
    schedule_note: string;
    score_module_position: number;
    season: string;
    series_abbreviation?: any;
    series_category_id: number;
    series_category_name: string;
    series_filename?: string;
    series_lead_abandoned: number;
    series_lead_cancelled: number;
    series_lead_how_won_name?: string;
    series_lead_lost: number;
    series_lead_result_name?: string;
    series_lead_team_name?: string;
    series_lead_total: number;
    series_lead_type_name?: string;
    series_lead_won: number;
    series_long_description: string;
    series_name: string;
    series_short_name: string;
    series_status: string;
    series_type_id: number;
    series_type_name: string;
    short_alternate_name: string;
    site_id: number;
    slug: string;
    start_date: string;
    start_date_raw: string;
    team1_points: string;
    team2_points: string;
    teams: Team[];
    tiebreaker_id: number;
    tiebreaker_name?: any;
    trophy_abbreviation?: any;
    trophy_class_id?: any;
    trophy_country_id?: any;
    trophy_id: number;
    trophy_name?: any;
    trophy_short_name?: any;
    url_component: string;
  }

  export interface Team {
    host_team: number;
    object_id: number;
    primary_team: number;
    series_id: string;
    series_result_name?: string;
    site_id: number;
    team_abbreviation: string;
    team_filename: string;
    team_id: number;
    team_name: string;
    team_short_name: string;
    url_component: string;
  }

  export interface OtherScores {
    domestic: Domestic[];
    international: International[];
    others: Domestic[];
  }

  export interface International {
    object_id: number;
    result: string;
    start_time: string;
    team1_desc: string;
    team1_name: string;
    team2_desc: string;
    team2_name: string;
    url: string;
  }

  export interface Domestic {
    object_id: number;
    result?: string;
    start_time: string;
    team1_desc: string;
    team1_name: string;
    team2_desc: string;
    team2_name: string;
    url: string;
  }

  export interface Official {
    age_days: number;
    age_years: number;
    alpha_name: string;
    batting_hand: string;
    bowling_hand: string;
    bowling_pacespin: string;
    card_long: string;
    card_qualifier: string;
    card_short: string;
    dob: string;
    image_id?: number;
    known_as: string;
    mobile_name: string;
    object_id: number;
    player_id: string;
    player_type: number;
    player_type_name: string;
    popular_name: string;
    portrait_alt_id: string;
    portrait_object_id: number;
    status_id: number;
    team_abbreviation: string;
    team_id: number;
    team_name: string;
    team_short_name: string;
  }

  export interface Match {
    actual_days: string;
    adjusted: string;
    amount: string;
    amount_balls: string;
    amount_name: string;
    amount_type: string;
    away_team_id: string;
    ballbyball_source: string;
    batting_first_team_id: string;
    bitly_hash: string;
    bpo: string;
    cancelled_match: string;
    cms_match_title: string;
    commentary_source: string;
    continent_id: string;
    continent_name: string;
    country_abbreviation: string;
    country_filename: string;
    country_id: string;
    country_name: string;
    date: string;
    date_string: string;
    days_extended: string;
    end_date: string;
    end_date_raw: string;
    floodlit: string;
    floodlit_name: string;
    followon: string;
    general_class_card: string;
    general_class_id: string;
    general_class_name: string;
    general_number: string;
    general_valid: string;
    gmt_difference: string;
    ground_id: string;
    ground_latitude: string;
    ground_longitude: string;
    ground_name: string;
    ground_object_id: string;
    ground_small_name: string;
    hawkeye_source: string;
    head2head_source: string;
    home_team_id: string;
    hours_string: string;
    international_class_card: string;
    international_class_id: string;
    international_class_name: string;
    international_number: string;
    international_valid: string;
    legacy_url: string;
    live_commentator: string;
    live_companion: string;
    live_day_number: string;
    live_innings_number: string;
    live_match: string;
    live_note: string;
    live_overs_remaining: string;
    live_overs_unique: string;
    live_scorer: string;
    live_session_number: string;
    live_state: string;
    match_clock: string;
    match_day_countdown: string;
    match_minute_countdown: string;
    match_path: string;
    match_status: string;
    neutral_match: string;
    next_datetime_gmt: string;
    next_datetime_local: string;
    player_rating: string;
    present_date_gmt: string;
    present_date_local: string;
    present_datetime_gmt: string;
    present_datetime_local: string;
    present_time_gmt: string;
    present_time_local: string;
    rain_rule: string;
    rain_rule_name: string;
    rating_promo: string;
    reduced: string;
    reserve_days_used: string;
    result: string;
    result_name: string;
    result_short_name: string;
    schedule_note: string;
    scheduled_days: string;
    scheduled_innings: string;
    scheduled_overs: string;
    scorecard_source: string;
    scribble_id: string;
    season: string;
    site_id: string;
    site_name: string;
    start_date: string;
    start_date_gmt_offset: string;
    start_date_raw: string;
    start_datetime_gmt: string;
    start_datetime_gmt_raw: string;
    start_datetime_local: string;
    start_time_gmt: string;
    start_time_local: string;
    sub_class_id: string;
    team1_abbreviation: string;
    team1_class_id: string;
    team1_country_id: string;
    team1_filename: string;
    team1_id: string;
    team1_logo_alt_id: string;
    team1_logo_espncdn: string;
    team1_logo_object_id: string;
    team1_name: string;
    team1_object_id: string;
    team1_short_name: string;
    team2_abbreviation: string;
    team2_class_id: string;
    team2_country_id: string;
    team2_filename: string;
    team2_id: string;
    team2_logo_alt_id: string;
    team2_logo_espncdn: string;
    team2_logo_object_id: string;
    team2_name: string;
    team2_object_id: string;
    team2_short_name: string;
    tiebreaker_name: string;
    tiebreaker_team_id: string;
    tiebreaker_type: string;
    time_zone: string;
    toss_choice_team_id: string;
    toss_decision: string;
    toss_decision_name: string;
    toss_winner_team_id: string;
    town_aka: string;
    town_area: string;
    town_id: string;
    town_name: string;
    tz_short_name: string;
    url_component: string;
    watch_espn_id: string;
    weather_location_code: string;
    winner_team_id: string;
  }

  export interface LiveClipper {}

  export interface Live {
    batting: LiveBatting[];
    bowling: LiveBowling[];
    break: string;
    field_restrict: any[];
    fow: LiveFow[];
    innings: LiveInnings;
    innings_recent: InningsRecent[];
    recent_overs: RecentOver[][];
    review: any[];
    status: string;
  }

  export interface RecentOver {
    ball: number | string;
    ball_number: number;
    extras: string;
    over_number: number | string | string;
  }

  export interface InningsRecent {
    balls: string;
    innings_number: number;
    over_span: number;
    run_rate: number;
    runs: string;
    wickets: string;
  }

  export interface LiveInnings {
    ball_limit: string;
    balls: number;
    batted: number;
    batting_team_id: number;
    bowling_team_id: number;
    bpo: number;
    event: number;
    event_name: string;
    innings_number: string;
    lead: number;
    live_current: number;
    live_current_name: string;
    over_limit: string;
    over_limit_run_rate: number;
    over_split_limit: string;
    overs: string;
    remaining_balls: number;
    remaining_overs: string;
    remaining_wickets: number;
    required_run_rate?: any;
    run_rate: number;
    runs: number;
    target: number;
    team_id: number;
    wickets: number;
  }

  export interface LiveFow {
    fow_order: number;
    fow_overs: string;
    fow_runs: number;
    fow_wickets: number;
    innings_number: number;
    live_current: number;
    live_current_name: string;
    opposition_id: number;
    out_player: OutPlayer;
    partnership_overs: string;
    partnership_rate: number;
    partnership_runs: number;
    partnership_wicket: number;
    partnership_wicket_name: string;
    player: LiveFowPlayer[];
    player_id: number;
    team_id: number;
  }

  export interface LiveFowPlayer {
    fow_runs: number;
    partnership_runs: number;
    player_id: number;
  }

  export interface OutPlayer {
    balls_faced?: number;
    dismissal_string?: string;
    fours?: number;
    minutes?: number;
    player_id?: number;
    runs?: number;
    sixes?: number;
    strike_rate?: string;
  }

  export interface LiveBowling {
    bowling_averages: BowlingAverages;
    bowling_averages_series: BowlingAveragesSeries;
    bowling_scoring: BowlingScoring;
    bowling_spell: BowlingSpell;
    conceded: number;
    economy_rate: string;
    innings_number: string;
    live_current: number;
    live_current_name: string;
    maidens: number;
    noballs: number;
    overs: string;
    player_id: string;
    team_id: number;
    wickets: number;
    wides: number;
  }

  export interface BowlingSpell {
    balls: string;
    conceded: string;
    maidens: string;
    overs: string;
    spell: number;
    wickets: string;
  }

  export interface BowlingScoring {
    dots: string;
    fours: string;
    player_id: string;
    sixes: string;
  }

  export interface BowlingAveragesSeries {
    bbi: string;
    bowling_average: string;
    economy_rate: string;
    five_wickets: string;
    matches: string;
    player_id: string;
    series_type_name: string;
    wickets: string;
  }

  export interface BowlingAverages {
    bbi: string;
    bowling_average: string;
    class_card: string;
    economy_rate: string;
    five_wickets: string;
    matches: string;
    overs: string;
    player_id: string;
    wickets: string;
  }

  export interface LiveBatting {
    balls_faced: string;
    batting_averages: BattingAverages;
    batting_averages_series: BattingAveragesSeries;
    batting_position: number;
    batting_pvp: BattingPvp;
    batting_recent: BattingRecent;
    fours: string;
    innings_number: string;
    live_current: number;
    live_current_name: string;
    minutes: string;
    player_id: string;
    runs: number | string;
    sixes: string;
    strike_rate: string;
    team_id: number;
  }

  export interface BattingRecent {
    balls: string;
    over_span: number;
    player_id: string;
    runs: string;
  }

  export interface BattingPvp {
    balls: string;
    bowler_player_id: number;
    runs: string;
  }

  export interface BattingAveragesSeries {
    batting_average: string;
    batting_strike_rate: string;
    high_score: string;
    hundreds: string;
    innings: string;
    matches: string;
    player_id: string;
    runs: string;
    series_type_name: string;
  }

  export interface BattingAverages {
    batting_average: string;
    batting_strike_rate: string;
    class_card: string;
    high_score: string;
    hundreds: string;
    innings: string;
    matches: string;
    player_id: string;
    runs: string;
  }

  export interface Inning {
    ball_limit: number;
    balls: number;
    batted: number;
    batting_team_id: number;
    bowling_team_id: number;
    bpo: number;
    byes: number;
    event: number;
    event_name: string;
    extras: number | string;
    innings_number: string;
    innings_numth: string;
    lead: number;
    legbyes: number | string;
    live_current: number;
    live_current_name?: string;
    minutes?: any;
    noballs: number;
    old_penalty_or_bonus: number;
    over_limit: string;
    over_limit_run_rate: number;
    over_split_limit: string;
    overs: string;
    overs_docked: number;
    penalties: number;
    penalties_field_end: number;
    penalties_field_start: number;
    run_rate: number;
    runs: number | string;
    target: number;
    wickets: number | string;
    wides: number | string;
  }

  export interface Comm {
    ball: Ball[];
    innings_number: number;
    over_number: string;
    batsman?: Batsman[];
    bowler?: Bowler[];
    event_string?: string;
    over_complete?: number;
    required_string?: string;
    runs?: number;
    team_id?: number;
    wickets?: number;
  }

  export interface Bowler {
    conceded: number;
    live_current_name: string;
    maidens: number;
    overs: string;
    player_id: number;
    wickets: number;
  }

  export interface Batsman {
    balls_faced: number;
    fours: number;
    live_current_name: string;
    player_id: string;
    runs: number;
    sixes: number;
  }

  export interface Ball {
    comms_id: number;
    dismissal: string;
    event: string;
    innings_number: string;
    is_tweet: number;
    over_number: string;
    overs_actual: string;
    overs_unique: string;
    players: string;
    speed_kph: string;
    speed_mph: string;
    text: string;
    post_text?: string;
    pre_text?: string;
  }

  export interface Centre {
    batting: Batting[];
    bowling: Bowling[];
    common: Common;
    fow: Fow[];
  }

  export interface Fow {
    notout: number;
    overs: string;
    player: Player[];
    runs: number;
  }

  export interface Player {
    known_as: string;
    player_id: string;
    popular_name: string;
    runs: number;
  }

  export interface Common {
    batting: CommonBatting[];
    bowling: CommonBowling[];
    innings: Innings;
    innings_list: InningsList[];
    innings_number: string;
    match: CommonMatch;
  }

  export interface CommonMatch {
    control_percentage: number;
    dot_ball_percentage: number;
    result_string: string;
    runs_summary: string[];
  }

  export interface InningsList {
    current: number;
    description: string;
    descriptoin_short: string;
    innings_number: number;
    selected: number;
    team_id: number;
  }

  export interface Innings {
    control_percentage: number;
    dot_ball_percentage: number;
    event: number;
    event_name: string;
    over_limit: string;
    overs: string;
    run_rate: number;
    runs: number;
    runs_summary: string[];
    target: number;
    wickets: number;
  }

  export interface CommonBowling {
    conceded: number;
    hand: string;
    image_path: string;
    known_as: string;
    live_current_name?: string;
    maidens: number;
    overs: string;
    pacespin: string;
    player_id: string;
    popular_name: string;
    position: number;
    wickets: number;
  }

  export interface CommonBatting {
    balls_faced: string;
    hand: string;
    image_path: string;
    known_as: string;
    notout: number;
    player_id: number;
    popular_name: string;
    position: number;
    position_group: string;
    runs: number;
    live_current_name?: string;
  }

  export interface Bowling {
    bowling_style: string;
    conceded: number;
    economy_rate: string;
    known_as: string;
    live_current_name: string;
    maidens: number;
    match_award: number;
    overall_lhb: OverallLHB;
    overall_rhb: OverallRHB;
    overs: string;
    pitch_map_lhb: number[][][];
    pitch_map_rhb: number[][][];
    player_id: string;
    popular_name: string;
    wickets: number;
  }

  export interface OverallHB {
    balls: number;
    conceded: string;
    economy_rate: string;
    wickets: string;
  }

  export interface OverallLHB extends OverallHB {}

  export interface OverallRHB extends OverallHB {}

  export interface Batting {
    balls_faced: string;
    batting_style: string;
    control_percentage: number;
    dismissal_name: string;
    dot_ball_percentage: number;
    known_as: string;
    live_current_name: string;
    match_award: number;
    notout: number;
    player_id: number;
    popular_name: string;
    preferred_shot: PreferredShot;
    runs: number;
    runs_summary: string[];
    scoring_shots: string;
    strike_rate: string;
    wagon_zone: WagonZone[];
  }

  export interface WagonZone {
    runs: number;
    runs_summary: number[];
    scoring_shots: number;
  }

  export interface PreferredShot {
    balls_faced: string;
    runs: string;
    runs_summary: string[];
    shot_name: string;
  }
}
