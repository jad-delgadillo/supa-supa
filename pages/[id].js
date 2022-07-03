import { supabase } from "../utils/supabase"

const LessonDetails = ({lesson}) => {
  console.log({ lesson })
  return(
    <div className="bg-stone-900 h-screen text-white flex flex-col items-center justify-center">
      <h1 className="p-4 border border-white rounded-xl mb-5">{lesson.title}</h1>
      <p className="underline underline-offset-4">{lesson.description}</p>
      </div>
  )
}

export const getStaticPaths = async () => {
  const { data: lessons } = await supabase.from('lesson').select('id')

  const paths = lessons.map(({id}) => ({
    params: {
      id: id.toString()
    }
  }))

  return {
    paths,
    fallback: false
  }

}

export const getStaticProps = async ({params: {id}}) => {
  const {data: lesson } = await supabase.from('lesson').select('*').eq('id', id).single()

  return {
    props: {
      lesson,
    }
  }
}

export default LessonDetails