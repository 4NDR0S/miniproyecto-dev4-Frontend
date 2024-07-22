import React from 'react'

const googleIcon = '../Google.svg'
const fbIcon = '../Facebook.svg'
const twitterIcon = '../Twitter.svg'
const gitIcon = '../Gihub.svg'

export default function Social() {
    return (
        <div className='flex justify-between px-[15%] py-4'>
            <div className='h-[42px] w-[42px]'>
                <a href="https://www.google.com.pe/" target='blank'>
                    <img src={googleIcon} alt="google" />
                </a>
            </div>
            <div className='h-[42px] w-[42px]'>
                <a href="https://www.facebook.com/" target='blank'>
                    <img src={fbIcon} alt="facebook" />
                </a>
            </div>
            <div className='h-[42px] w-[42px]'>
                <a href="https://x.com/" target='blank'>
                    <img src={twitterIcon} alt="twitter" />
                </a>
            </div>
            <div className='h-[42px] w-[42px]'>
                <a href="https://github.com/" target='blank'>
                    <img src={gitIcon} alt="github" />
                </a>
            </div>
        </div>
    )
}
