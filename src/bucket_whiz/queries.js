const getPlayersSQL = "SELECT * FROM all_players ORDER BY player_points DESC";

const getPlayersbyTeamSQL = `SELECT * FROM all_players WHERE player_team = $1 ORDER BY player_points DESC`

const getPlayersbyPositionSQL = `SELECT * FROM all_players WHERE player_position = $1 ORDER BY player_points DESC`
                        
const getPlayersbySearchSQL = `SELECT * FROM all_players WHERE player_name ILIKE $1 ORDER BY player_points DESC`

export default {getPlayersSQL,getPlayersbyTeamSQL,getPlayersbyPositionSQL,getPlayersbySearchSQL};