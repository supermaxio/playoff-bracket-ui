export interface Game {
    id: number;
    bracket_name: string;
    week_number: number;
    away_team_score: number;
    home_team_score: number;
    away_team: string;
    home_team: string;
    winner: string;
    finished: boolean;
}