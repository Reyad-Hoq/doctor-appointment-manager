export async function getDoctor(id) {
  const res = await fetch(
    `http://localhost:8000/doctors/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return null;

  return res.json();
}