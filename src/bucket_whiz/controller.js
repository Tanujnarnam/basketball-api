import pool from '../../database.js'

import SQL from './queries.js'

export const getPlayers = (req,res,next) => {
  pool.query(SQL.getPlayersSQL, (error, results)=>{
    if(error) throw error
    res.status(200).json(results.rows);
  });
};

export const getPlayersByTeam = (req,res,next) => {
  const team = req.params.team;
  pool.query(SQL.getPlayersbyTeamSQL, [team], (error, results)=>{
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const getPlayersByPosition = (req,res,next) => {
  const position = req.params.position;
  pool.query(SQL.getPlayersbyPositionSQL, [position], (error, results)=>{
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};


export const getPlayersBySearch = (req,res,next) => {
  const srch = req.params.srch + '%';
  pool.query(SQL.getPlayersbySearchSQL, [srch], (error, results)=>{
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

