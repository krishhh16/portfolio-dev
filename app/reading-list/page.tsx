import React from 'react';
import { Check, Circle } from 'lucide-react';

const ReadingList = () => {
  const books = {
    "Builder's skills": [
      {title: "Head First C", link:"https://karadev.net/uroci/filespdf/files/head-first-c-o-reilly-david-grifffiths-dawn-griffiths.pdf", completed: false},
      {title: "Computer Systems: A programer's perspective", link:"https://www.cs.sfu.ca/~ashriram/Courses/CS295/assets/books/CSAPP_2016.pdf", completed: false},
      { title: "The Rust Book",link: "https://doc.rust-lang.org/book/", completed: false },
      { title: "Pragmatic programmer", link: "https://github.com/lighthousand/books/blob/master/the-pragmatic-programmer.pdf", completed: false },
    ],
    "Cybersecurity": [
        {title: "CompTIA Linux+, Security+ & Network+ books(Just for the knowledge)", completed: false},
        {title:"Linux basics for hackers by hacker arise", completed: false}
    ],
    "Upcoming Projects": [
      {title: "A GPT-3 Smart contract Copoilot for Solana Development", completed: false},
      {title: "A Wallet analyzer and security audit tool", completed: false},
      {title: "Multi-sig wallet", completed: false},
      {title:"Project based on Token Extension(SOLANA)", completed: false},
      {title: "Rust backend w/ Axum", completed: false},
      {title:"Rust based chatbot", completed: false},
      {title:"Terminal based communication system and collaboration tool in Rust", completed: false},
      {title: "Vim Editor in Rust", completed: false},
      {title:"Git in Rust", completed: false},
      {title: "Small OS In Rust", completed: false},
      {title:"Game in rust", completed: false},
      {title: "TCP and HTTP in Rust", completed: false},
      {title:"Linux Kernel in Rust", completed: false}
    ]
  };

  return (
    <div className="bg-[#18191a] text-gray-300 min-h-screen px-56 pt-20 font-mono">
       <div className="mb-4 text-green-500">
        ┌──(zeref㉿kali)-[~]
        <br />
        └─$ cat reading_list.txt
      </div>
      <h1 className="text-2xl font-bold mb-4 text-teal-400"># Reading List</h1>
        <div className='px-10'>
            {Object.entries(books).map(([category, bookList]) => (
                <div key={category} className="mb-6">
                <h2 className="text-xl font-bold mb-2 text-teal-400"># {category}</h2>
                <ul>
                    {bookList.map((book, index) => (
                    <li key={index} className="flex items-center mb-1">
                        {book.completed ? (
                        <Check size={16} className="mr-2 text-teal-400" />
                        ) : (
                        <Circle size={16} className="mr-2 text-gray-500" />
                        )}
                        <span>{book.title}</span>
                    </li>
                    ))}
                </ul>
                </div>
            ))}

        </div>
    </div>
  );
};

export default ReadingList;