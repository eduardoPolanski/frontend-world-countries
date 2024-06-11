import TableCountries from "./components/TableCountries/TableCountries";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <TableCountries />
    </main>
  );
}
