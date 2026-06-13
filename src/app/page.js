import Banner from "@/component/Banner";
import DoctorsSection from "@/component/DoctorsSection";
import HealthcareStats from "@/component/HealthStat";
import WorkFlow from "@/component/WorkFlow";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <DoctorsSection />
      <HealthcareStats />
      <WorkFlow />
    </div>
  );
}
