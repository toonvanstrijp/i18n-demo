import { ExecutionContext, Injectable } from "@nestjs/common";
import { I18nResolver } from "nestjs-i18n";

@Injectable()
export class PathResolver implements I18nResolver {
  constructor() {}

  resolve(context: ExecutionContext) {
    let req: any;

    switch (context.getType() as string) {
      case 'http':
        req = context.switchToHttp().getRequest();
        break;
    }

    let lang: string;

    if (req && req.params.lang) {
      lang = req.params.lang;
    }

    return lang;
  }
}