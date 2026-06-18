import DashboardGrid from '@/component/DashboardGrid';
import Loading from '../loading';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    throw new Error("No session found");
  }
  const { id } = session?.user
  const { token } = await auth.api.getToken({
    headers: await headers()
  })
  console.log(id)
  console.log(token)
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointment/${id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  const appointments = await res.json();

  return (
    <div>
      <DashboardGrid appointments={appointments} />
    </div>
  );
};

export default DashboardPage;

