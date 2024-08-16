import React  from 'react'
import CommentList from './CommentList'

const CommentsContainer = () => {

    const commentsData = 
    [
    {Name:"Balu Palani",comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    replies:
    [{Name:"Sham",comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        replies:
        [{Name:"Vinod",comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            replies:
            [{Name:"Shakeel",comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                replies:
                [{Name:"Antony",comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                    replies:[]}]}]}]}
    ]},
    {Name:"Magesh",comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    replies:
    [{Name:"Elon Musk",comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        replies:
        [{Name:"Kamal",comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            replies:
            [{Name:"Preethi",comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                replies:[]}]}]}
    ]},
    {Name:"Lakshmi",comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    replies:
    [{Name:"Raghu",comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        replies:
        [{Name:"Nandhini",comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            replies:[]}]}
    ]},
    {Name:"Hari",comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    replies:
    [{Name:"Saranya",comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        replies:
        [{Name:"Deepthi",comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            replies:
            [{Name:"Vijay",comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                replies:[]}]}]}
    ]},
    {Name:"Ajith",comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    replies:
    [{Name:"Mathu",comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        replies:
        [{Name:"Kajesh",comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            replies:
            [{Name:"Mathi",comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                replies:
                [{Name:"Keerthana",comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                    replies:[]}]}]}]}
    ]}
    ]
    
  return (
    <div>
        <h1 className='font-bold text-2xl'>Comments({commentsData.length})</h1>
        <div className='mt-3 bg-slate-100 dark:bg-slate-500 rounded-lg p-2'>
        <CommentList comments={commentsData}/>
        </div>
    </div>
  )
}

export default CommentsContainer