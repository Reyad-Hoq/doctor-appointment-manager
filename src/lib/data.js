export async function getAppointment(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return null;

  return res.json();
};