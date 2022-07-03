import { supabase } from "../utils/supabase";
import Link from "next/link";

export default function Home({ lessons }) {
  console.log({lessons});
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-stone-900 text-white">
      {lessons.map((lesson) => (
        <div>
        <Link
        key={lesson.id}
        href={`/${lesson.id}`}
        
       
        >
          <a className="flex flex-col p-10 border border-white w-screen max-w-xl items-center m-5 text-xl rounded-xl " >{lesson.title}</a>
        </Link>

        </div>
        ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const { data: lessons } = await supabase.from("lesson").select("*");

  return {
    props: {
      lessons,
    },
  };
};
