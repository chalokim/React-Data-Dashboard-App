import Head from "next/head";
import Dashboard from "@/pages/dashboard";
import SideMenu from "@/component/SideMenu";
import Login from "@/component/login";
import { useSession } from "next-auth/react";
import scss from './home.module.scss'

//- 25.03.26 해당 함수는 Implicitly typed fuction component
//export default function Home() {

//- 25.03.26 해당 함수는 Explicitly typed fuction component
  const Home: React.FC = () => {
  const { data : session } = useSession();

  return (
    <>
      <Head>
        <title>DataSoft Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={scss.main}>
            {
              session && (
                <>
                  <SideMenu />
                  <Dashboard />
                </>
              )
            }
            <Login />  
      </main>
    </>
  );
}

export default Home;
