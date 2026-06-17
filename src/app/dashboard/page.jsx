import DashboardGrid from '@/component/DashboardGrid';
import Loading from '../loading';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const { id } = session?.user
  const res = await fetch(`http://localhost:8000/appointment/${id}`);
  const appointments = await res.json()
  return (
    <div>
      <DashboardGrid appointments={appointments} />
    </div>
  );
};

export default DashboardPage;

