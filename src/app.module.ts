import { Module } from '@nestjs/common';
import { AcceptLanguageResolver, I18nJsonParser, I18nModule, QueryResolver } from 'nestjs-i18n';
import * as path from 'path';
import { AppController } from './app.controller';
import { PathResolver } from './path.resolver';

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      parser: I18nJsonParser,
      parserOptions: {
        path: path.join(__dirname, '/i18n/'),
      },
      resolvers: [
        PathResolver,
        { use: QueryResolver, options: ['lang', 'locale', 'l'] },
        AcceptLanguageResolver
      ]
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
