import IntroSection from "@/components/Course/IntroSection";
import SecondSection from "@/components/Course/SecondSection";
import ThirdSection from "@/components/Course/ThirdSection";
import FourthSection from "@/components/Course/FourthSection";
import Head from "next/head";

export default function Course() {
    return (
        <>
            <Head>
                <title>Course - Coursebee</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/favicon.png" />
            </Head>

            <main className="dark:bg-neutral-800 dark:text-white">
                <IntroSection />
                <SecondSection />
                <ThirdSection/>
                <FourthSection />
            </main>
        </>
    );
}
