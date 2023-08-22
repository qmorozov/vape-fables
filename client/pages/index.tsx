import { useIntl } from 'react-intl';
import Link from 'next/link';

const Index = () => {
  const { formatMessage } = useIntl();

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
    </>
  );
};

export default Index;
