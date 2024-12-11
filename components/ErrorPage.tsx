import img from '../assets/page_not_found.png';
import Link from 'next/link';
import Image from 'next/image';

const ErrorPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 bg-slate-900 font-roboto text-white">
      <Image src={img} alt="404" width={400} height={400} />
      <Link
        href={'/'}
        className="rounded-md bg-sky-500 px-6 py-2 hover:bg-sky-600"
      >
        Back
      </Link>
    </div>
  );
};

export default ErrorPage;
