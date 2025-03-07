import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-2xl font-bold text-center text-eminence-default">
        Welcome to the Excelerate Frontend Assignment
      </h1>

      <p>
        Please follow the instructions in the README.md file to get started.
      </p>

      <p>
        Visit{" "}
        <Link className="text-violet-default" href="/demo">
          /demo
        </Link>{" "}
        to see the demo page.
      </p>
      <p>
        Visit{" "}
        <Link className="text-violet-default" href="/experience-form">
          /experience-form
        </Link>{" "}
        to see the experience form.
      </p>
      <p>
        Visit{" "}
        <Link className="text-violet-default" href="/experience-overview">
          /experience-overview
        </Link>{" "}
        to see the experience overview.
      </p>
    </main>
  );
}
