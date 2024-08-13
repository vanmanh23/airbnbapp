import havequestion from '@/assets/images/stillHaveQuestion.webp';
import { Button } from '@/components/ui/button';

export default function StillHaveQuestion() {
  return (
    <div className='flex w-10/12 m-auto h-72 flex-row items-center overflow-hidden justify-between bg-white rounded-2xl'>
        <div className='w-1/2'>
            <img src={havequestion} alt="still have questions" />
        </div>
        <div className='flex flex-col justify-start w-1/2 gap-4 pl-5'>
            <h2 className='text-3xl font-semibold'>Still have questions?</h2>
            <p className='opacity-80 text-lg'>Get answers from  an experienced Superhost near you.</p>
            <Button className='w-2/5 bg-white text-black hover:bg-white border border-black'>Match with a Superhost</Button>
        </div>
    </div>
  )
}
