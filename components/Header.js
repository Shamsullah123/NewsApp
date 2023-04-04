import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'
import { HomeIcon, CheckBadgeIcon, UserIcon, BoltIcon, RectangleStackIcon, MagnifyingGlassIcon  } from '@heroicons/react/24/outline'
const Header = () => {
  return (
    <header className='flex flex-col  mt-5 justify-between sm:flex-row items-center h-auto '>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title='HOME' Icon={HomeIcon} />
        <HeaderItem title='TREADING' Icon={BoltIcon} />
        <HeaderItem title='VERIFIED' Icon={CheckBadgeIcon} />
        <HeaderItem title='COLLECTIONS' Icon={RectangleStackIcon} />
        <HeaderItem title='SEARCH' Icon={MagnifyingGlassIcon} />
        <HeaderItem title='ACCOUNTS' Icon={UserIcon} />
      </div>
      <Image className='bg-transparent h-6 w-20 mr-4' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAW8AAACJCAMAAADUiEkNAAAADFBMVEX39/f////6+vr5+flO+knMAAADeElEQVR4nO2dQXLjMBADbfn/f97EqdxIgByNYKW2+xpBxHRRdiqR7McDAAAAAAAAAAAAAACgkddzzuvT5UqIgT5d7YHvNPjOgu8s+M6C7yz4zoLvLPjOgu8s+M6C7yz4zoLvLPjOgu8s+M6C7yz4zoLvLPjOgu8s+M6C7yz4zoLvLPjOgu8s+M6C7yz4zoLvLPjOgu8sS75fQzYXmtMb3PUdK/YTkr5fxyF+/nwex6r1+nWklt88fnS4GvCCiVRqjWM4dU+7b9TSm8ePDv9zvr9Y2OX49qkdnHF8+9Qe2hq+fWoT+TqOb5/apr2d8fe/+xYF8e1TBZrbGX/4nlbEt09VmL1p4tunSkyE49unanS2M/7w/ZxtcHz7VJHGdsYfvr8ZWsC3T1Xpa2f84Xu6Gr59qspIA759qkxbO+MP39Oe+PapMoPl8O1TZfBdSpUZeMC3T5XBdyn1Hmn4y7S+CwjfZd+1GL5Lqer/I/Fd9K1EqJ74LqX0jYF7QXz7FL4V/b61B1EU380pUxTfzSlTFN/NKVMU380pUxTfzSlTFN/NKVMU380pUxTfzSlTFN/NKVMU380pUxTfzSlTFN/NKVMU380pUxTfzSlTFN/NKVMU380pU3TTd/nB5Kt9SwG14B18y32kclf7Lhf7vG9ZT8wldVzuW1x5cp67+57OpW/XGBYUx++vMC2m73i6u+/JYOY2roDvycMartjc2l18lxj22jw+dQM8vtPFsr7dJVjhrr7F2+xf9j0eSwR25+gtlvWderD2Dr6FuJjvC67bcT8RGA/SX0xYy/nu30fb+kK+1d8ncr7bX1AmY4nE9iA1lLec7/Z9NKknEvsKSihrQd/d+2jSaz/RXOyiz2Hc9t28wWftRKTgoIC0lvTdu49mvQqR1mL6KYWk79YNPi0nMtNZOotJaVnfjRfufBeJUMnCJlpa1nfjhTvvVQq1FXMfPp/13TaXqCZSYpqmXubVJO67SbhqJmJqnJZeVnfcd4twWUzkqvP0FHsT990wV/l+Fa3i6mJv8r5P/zJgphLJEy5WMKe3a1zk+9xOst8+I7LWxqXF3nzE94nB/CUrwud0nC1mF7jQd9H4ylAiviSkUmz5a7Y+53t/ssWhxBmW8tvF1r5g6/fc4kQX+/4Zzc92fLHx7XjiTMvnWCp2vIttnBMAAAAAAC7nH8ZQTuVEuZ+xAAAAAElFTkSuQmCC' width={200} height={100} />
    </header>
  )
}

export default Header
