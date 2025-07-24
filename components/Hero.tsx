export default function Hero() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-900 text-white text-center p-6">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">OP-100K</h1>
        <p className="text-xl md:text-2xl mb-6">Una idea. Un reto. Cien mil razones.</p>
        <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Seguir el reto
        </button>
      </div>
    </main>
  );
}
