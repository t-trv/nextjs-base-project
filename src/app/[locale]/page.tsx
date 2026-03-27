import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="space-y-4">
        <h1>This is a base project by using NextJS</h1>
        <p>You can clone this project from github and use it as a base for your project</p>
      </main>
    </div>
  );
}
