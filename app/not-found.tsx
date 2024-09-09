import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="flex items-center justify-center w-screen h-screen bg-gray-900">
        <div className="max-w-4xl w-full p-8 bg-gray-800 rounded-lg shadow-lg text-center">
          <div className="flex justify-center items-center mb-8">
            <Image
              src="/logo.svg"
              alt="CollaboraHub Logo"
              width={75}
              height={75}
              className="mr-4"
            />
            <h1 className="text-3xl font-bold text-white">CollaboraHub</h1>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            404 - Page Not Found
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Sorry, the page you are looking for could not be found.
          </p>
          <div className="flex flex-col gap-y-2">
            <Link href="/" className="text-lg text-blue-500">
              Go to Homepage
            </Link>
            <Link href="/dashboard" className="text-lg text-blue-500">
              Go to Boards
            </Link>
            {/*// TODO Kanban //*/}
            {/* <Link href="/" className="text-lg text-blue-500">
              Go to Kanban
            </Link> */}
          </div>
        </div>
      </section>
    </>
  );
}
