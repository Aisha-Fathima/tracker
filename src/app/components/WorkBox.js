export function WorkBox({ total }) {
  return (
    <div className="w-64 h-64 bg-pink-500 rounded-lg shadow-lg p-4 text-white">
      <p className="text-2xl">Workin'</p>
      <p className="text-6xl text-center leading-loose">
        {total}
      </p>
    </div>
  );
}
