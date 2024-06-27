import { Injectable, LoggerService } from '@nestjs/common';
import { createLogger, format, transports } from 'winston';
import 'winston-mongodb';

@Injectable()
export class CustomLogger implements LoggerService {
  private readonly logger = createLogger({
    transports: [
      new transports.Console({
        format: format.combine(
          format.timestamp(),
          format.printf(({ timestamp, level, message }) => {
            return `${timestamp} ${level}: ${message}`;
          }),
        ),
      }),
      new transports.MongoDB({
        db: process.env.MONGODB_URI,
        collection: 'logs',
        format: format.combine(format.timestamp(), format.json()),
      }),
    ],
  });

  log(message: string) {
    this.logger.info(message);
  }

  error(message: string, trace: string) {
    this.logger.error(message, { trace });
  }

  warn(message: string) {
    this.logger.warn(message);
  }

  debug(message: string) {
    this.logger.debug(message);
  }

  verbose(message: string) {
    this.logger.verbose(message);
  }
}
