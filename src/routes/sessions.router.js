import { Router } from 'express';
import { getSessionsPlaceholder } from '../controllers/sessions.controller.js';

const router = Router();

// Estructura inicial sin lógica de auth todavía
router.get('/', getSessionsPlaceholder);

export default router;