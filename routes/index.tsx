import { Head } from "$fresh/runtime.ts";
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
        <Container start={3} />
      </div>
    </>
  );
}
