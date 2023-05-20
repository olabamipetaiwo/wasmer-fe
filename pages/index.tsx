import GuestLayout from "@/layouts/guest";
import Header from "@/containers/Header";
import EdgeCloud from "@/containers/Edge";
import AppFeatures from "@/containers/Features";
import Runtime from "@/containers/Runtime";
import Registry from "@/containers/Registry";

const Homepage = () => {
  return (
    <GuestLayout>
      <Header />
      <AppFeatures />
      <Runtime />
      <Registry />
      <EdgeCloud />
    </GuestLayout>
  );
};

export default Homepage;
