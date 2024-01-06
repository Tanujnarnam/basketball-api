import { Router } from 'express';
import { getPlayers, getPlayersByPosition, getPlayersBySearch, getPlayersByTeam } from './controller.js';

const router = Router();

router.get('/', getPlayers);

router.get("/team/:team", getPlayersByTeam)

router.get("/pos/:position", getPlayersByPosition)

router.get("/search/:srch", getPlayersBySearch)

export default router;