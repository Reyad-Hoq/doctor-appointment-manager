export async function getAppointment(id) {
  const res = await fetch(
    `http://localhost:8000/appointments/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return null;

  return res.json();
};