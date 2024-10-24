import { classesToString, debug } from '~/helpers';

class TextService {
  public getClasses(vairant, disabled, className) {
    const base = classesToString([
      'f-text',
      [vairant, `f-text--${vairant}`],
      [disabled, 'is-disabled'],
      className || ''
    ]);

    debug(`TextService getClasses: base: ${base}`);
    return { base };
  }
}

export const textService = new TextService();