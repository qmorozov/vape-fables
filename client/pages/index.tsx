import { useIntl } from 'react-intl';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Index = () => {
  const { formatMessage } = useIntl();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {formatMessage({ id: 'title' })}
      <div>
        <Link href="/" locale="en">
          english
        </Link>
      </div>
      <div>
        <Link href="/" locale="uk">
          ukrainian
        </Link>
      </div>
      <div>
        <Link href="/" locale="pl">
          polish
        </Link>
      </div>
      <div>
        <Link href="/" locale="ru">
          russian
        </Link>
      </div>

      <div>Current theme {theme}</div>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </>
  );
};

export default Index;
