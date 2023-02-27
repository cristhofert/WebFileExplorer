import { Head } from "$fresh/runtime.ts";
import { PathsBar } from "../components/PathsBar.tsx";
import Container from "../islands/Container.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-lg">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <PathsBar paths={['bif', 'buf']}></PathsBar>
        <Container start={3} />
      </div>
    </>
  );
}
