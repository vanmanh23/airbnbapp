import { CheckIcon, Globe, Languages } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { useState } from 'react'
import i18n from '@/i18n';

export default function LanguageModal() {
  const [clickToogle, setClickToogle] = useState(false);
  const handleClickToogle = () => {
    setClickToogle(!clickToogle);
  }
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    window.location.reload();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Globe />
      </DialogTrigger>
      <DialogContent className="px-6 pt-16 sm:max-w-[888px]">
        <Tabs defaultValue="language">
          <TabsList>
            <TabsTrigger value="language">Language and region</TabsTrigger>
            <TabsTrigger value="currency">Currency</TabsTrigger>
          </TabsList>
          <TabsContent value="language">
            <div className="my-8 flex flex-col w-fit items-center gap-4 rounded-sm  p-4">
            <div className="flex flex-row items-center gap-2 bg-gray-100 rounded-sm p-4">
              <div className='flex flex-col gap-3'>
                <div className='flex flex-row items-center gap-2'>
                <p>Translation</p>
                <Languages  />
                </div>
                <p className="text-muted-foreground">Automatically translate descriptions and reviews to English.</p>
              </div>
              <div className={`flex w-12 p-1 rounded-full  ${clickToogle ? 'justify-end bg-gray-700' : 'justify-start bg-gray-400 hover:bg-gray-700'}`} onClick={handleClickToogle}>
                <div className='flex w-6 h-6 bg-white rounded-full items-center justify-center'>
                  {clickToogle ? <CheckIcon size={16} /> : ""}
                </div>
                {/* <div></div> */}
              </div>
              </div>
              <div className='flex flex-col w-full gap-4'>
                <h2 className='text-xl font-medium'>Suggested languages and regions</h2>
                <div className='flex flex-row gap-12'>
                  <div className='p-3 rounded-2xl hover:bg-gray-100 w-1/3 cursor-pointer'  onClick={() => changeLanguage('en')}>
                    <h3 className='text-sm text-gray-900'>English</h3>
                    <p className='text-xs text-gray-600'>United States</p>
                  </div>
                  <div className='p-3 rounded-2xl hover:bg-gray-100 w-1/3 cursor-pointer' onClick={() => changeLanguage('vi')}>
                    <h3 className='text-sm text-gray-900' >Tiếng Việt</h3>
                    <p className='text-xs text-gray-600'>Việt Nam</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="currency"></TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}