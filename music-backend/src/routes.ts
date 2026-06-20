import { Router } from 'express';

import userRoutes from './modules/user/routes/user.routes';
import artistRoutes from './modules/artist/routes/artist.routes';
import songRoutes from './modules/song/routes/song.routes';
import favoriteRoutes from './modules/favorite/routes/favorite.routes';
import sheetMusicRoutes from './modules/sheet-music/routes/sheet-music.routes';
import chordSheetRoutes from './modules/chord-sheet/routes/chord-sheet.routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/artists', artistRoutes);
router.use('/songs', songRoutes);
router.use('/favorites', favoriteRoutes);
router.use('/sheet-music', sheetMusicRoutes);
router.use('/chord-sheets', chordSheetRoutes);

export default router;
