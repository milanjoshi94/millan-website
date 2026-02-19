import React from 'react'

function Note() {
    return (
        <div className='relative text-white pt-24 pb-8 md:pb-16  px-4 lg:px-0'>
            <img className='absolute left-0 -top-28' src='/notes-vector1.png' />
            <img className='absolute right-0  -top-28' src='/notes-vector2.png' />
           <div className="max-w-3xl mx-auto p-6  border-[0.5px] rounded-[10px] border-[#ECD4AA] bg-black relative z-10 shadow-[9px_8px_9.3px_0px_#ECD4AA80]">
                <div className="flex items-center gap-4 mb-8">
                    <img src="/waving-hand.png"/>
                    <h3 className="text-[32px] font-serif font-bold ">Dear EDB Members,</h3>
                </div>

                <div className="text-lg sora font-light ">
                    <p>
                        You’re building an architecture practice in the real world, not chasing shortcuts.<br/>
                        You want <span className="sora font-extrabold">better clients, stronger workflows, and a clearer path to grow your studio.</span>
                    </p>

                    <p>This platform was created for architects like you.</p>

                    <p>
                        A focused environment where architects gain practical
                        <span className="sora font-extrabold"> guidance, accountability, and a professional network</span> to operate at a higher level.
                        A space to sharpen design thinking, streamline execution, and
                        <span className="sora font-extrabold"> build a sustainable practice with confidence.</span>
                    </p>

                    <p>You don’t need more noise.</p>

                    <p>
                        You need clarity, systems, and the <span className="sora font-extrabold">right community to grow.</span>
                    </p>

                    <p>That’s what this space is built for.</p>
                </div>

                <div className="mt-2 text-right">
                    <p className="italic font-medium">With Purpose,</p>
                    <div className="inline-block mt-2 w-12 h-12 bg-white/90 rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

export default Note
