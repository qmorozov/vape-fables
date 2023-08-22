import type { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import { getDirection, messages } from '../localeUtils';
import { ThemeProvider } from 'next-themes';

import '../styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  if (typeof locale !== 'string') {
    return null;
  }

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <ThemeProvider>
        <Component {...pageProps} dir={getDirection(locale)} />
      </ThemeProvider>
    </IntlProvider>
  );
}
