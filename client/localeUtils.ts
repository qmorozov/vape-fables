import uk from './lang/uk.json';
import en from './lang/en.json';
import pl from './lang/pl.json';
import ru from './lang/ru.json';

const messages: { [locale: string]: { title: string } } = {
  uk,
  en,
  pl,
  ru,
};

function getDirection(locale: string): 'ltr' | 'rtl' {
  if (locale === 'ar') {
    return 'rtl';
  }

  return 'ltr';
}

export { messages, getDirection };
