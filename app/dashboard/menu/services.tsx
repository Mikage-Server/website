import Link from 'next/link';

const services = [
  { label: '御景銀行', href: '/' },
  { label: '御景市場', href: '/' },
  { label: 'MikageDrive', href: '/' },
  { label: '申請', href: '/' },
  { label: '寄付', href: '/' },
  { label: 'お問い合わせ', href: '/' }
];

const Services = () => {
  return (
    <ul className="px-4 my-10 w-full">
      {/* {services.map((service) => (
        <li
          key={service.label}
          className="w-full mb-5"
        >
          <Link href={service.href}>
            <button className="px-2 py-1 w-full text-blue-900 font-medium bg-white rounded-lg">
              {service.label}
            </button>
          </Link>
        </li>
      ))} */}
    </ul>
  );
};

export default Services;
