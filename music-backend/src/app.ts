import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import mongoSanitize from 'express-mongo-sanitize';

import { connectDB } from './configs/db.config';
import { errorHandler, notFoundHandler } from './common/middleware/error.middleware';
import { logger } from './common/utils/logger';
import { env } from './configs/env.config';
import routes from './routes';

const app = express();

// ── Security ──────────────────────────────────────────────────────────────────
app.use(helmet());
app.use(mongoSanitize());
app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  }),
);

// ── Parsing & Logging ─────────────────────────────────────────────────────────
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(morgan('combined'));

// ── Health ────────────────────────────────────────────────────────────────────
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// ── API Routes ────────────────────────────────────────────────────────────────
app.use('/api/v1', routes);

// ── Error Handling ────────────────────────────────────────────────────────────
app.use(notFoundHandler);
app.use(errorHandler);

// ── Boot ──────────────────────────────────────────────────────────────────────
const bootstrap = async (): Promise<void> => {
  await connectDB();
  app.listen(env.PORT, () => logger.info(`🚀 Server running on port ${env.PORT}`));
};

bootstrap().catch((err) => {
  logger.error('Bootstrap failed', err);
  process.exit(1);
});

export default app;
