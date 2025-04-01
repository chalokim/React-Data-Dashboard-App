import Dashboard from "@/pages/dashboard";
import Login from "@/component/login";
import { useSession } from "next-auth/react";
import scss from "../component/Layout/Layout.module.scss";
import React from "react";

//- 25.03.26 해당 함수는 Implicitly typed fuction component
//export default function Home() {

//- 25.03.26 해당 함수는 Explicitly typed fuction component
const Home: React.FC = () => {
  const { data: session } = useSession();

  return (
    <main className={scss.main}>
      {session && <Dashboard />}
      {!session && <Login />}
    </main>
  );
};

export default Home;
