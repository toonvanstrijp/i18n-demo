import { Controller, Get } from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';

@Controller()
export class AppController {
  constructor() {}

  @Get('/hello')
  getHello(@I18n() i18n: I18nContext): Promise<string> {
    return i18n.translate('user.HELLO_MESSAGE', {args: {username: "Toon"}});
  }

  @Get('/goodbye')
  getGoodbye(@I18n() i18n: I18nContext): Promise<string> {
    return i18n.translate('user.GOODBYE_MESSAGE', {args: {username: "Toon"}});
  }

  @Get('/:lang/path')
  getPath(@I18n() i18n: I18nContext): Promise<string> {
    return i18n.translate('user.HELLO_MESSAGE', {args: {username: "Toon"}});
  }
}
