// "use client";

// import { useState, useRef, useEffect } from "react";
// import Head from "next/head";
// import { SendHorizontal } from "lucide-react";
// import TranslationButton from "../components/TranslationButton";
// import LanguagePicker from "./LanguagePicker";

// export default function MainChat() {

//   return (
//     <div className="flex flex-col min-h-screen w-[80%] max-w-[800px] my-0 mx-auto bg-gray-100">
//       <main className="flex-grow container mx-auto p-4">
//         <h1 className="text-3xl font-bold mb-4">Lingual Ai</h1>
//         <div className="bg-white rounded-lg shadow-md p-4 mb-4 h-[calc(100vh-300px)] overflow-y-auto">
//           {messages.map((message, index) => (
//             <div key={index} className="mb-4">
//               <p className="text-gray-800">{message.text}</p>
//               {message.language && (
//                 <p className="text-sm text-gray-500">
//                   Detected language: {message.language}
//                 </p>
//               )}

//               {/* {message.text.length > 150 && message.language === "en" && (
//                 <SummarizeButton
//                   text={message.text}
//                   onSummarize={(summary) => {
//                     const updatedMessages = [...messages];
//                     updatedMessages[index].summary = summary;
//                     setMessages(updatedMessages);
//                   }}
//                 />
//               )} */}

//               <TranslationButton
//                 text={message.text}
//                 language={message.language}
//                 targetLanguage={selectedLanguage}
//               />
//               {/* <TranslationButton
//                 text={message.text}
//                 targetLanguage={selectedLanguage}
//                 onTranslate={(translation) => {
//                   const updatedMessages = [...messages];
//                   updatedMessages[index].translation = translation;
//                   setMessages(updatedMessages);
//                 }}
//               /> */}

//               {message.summary && (
//                 <div className="mt-2 p-2 bg-gray-100 rounded">
//                   <p className="font-semibold">Summary:</p>
//                   <p>{message.summary}</p>
//                   {/* <p> bbbbbbbbbbbbbb</p> */}
//                 </div>
//               )}
//               {
//                 <div className="mt-2 p-2 bg-gray-100 rounded">
//                   <p className="font-semibold">Translation:</p>
//                   <p>{message.translation}</p>
//                 </div>
//               }
//             </div>
//           ))}
//         </div>
//         <div className="flex items-center">
//           <textarea
//             className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Type your message here..."
//             value={inputText}
//             onChange={(e) => setInputText(e.target.value)}
//             onKeyPress={(e) => {
//               if (e.key === "Enter" && !e.shiftKey) {
//                 e.preventDefault();
//                 handleSend();
//               }
//             }}
//             rows={3}
//           />
//           <button
//             className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onClick={handleSend}
//             aria-label="Send message"
//           >
//             <SendHorizontal />
//           </button>
//         </div>
//         <LanguagePicker
//           selectedLanguage={selectedLanguage}
//           onLanguageChange={setSelectedLanguage}
//         />
//       </main>
//     </div>
//   );
// }

"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SendHorizontal } from "lucide-react";
import TranslationButton from "../components/TranslationButton";
import LanguagePicker from "./LanguagePicker";

export default function MainChat() {
  const {
    messages,
    inputText,
    setInputText,
    handleSend,
    selectedLanguage,
    setSelectedLanguage,
    translatedText,
  } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen w-[80%] max-w-[800px] my-0 mx-auto bg-gray-100">
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Lingual Ai</h1>
        <div className="bg-white rounded-lg shadow-md p-4 mb-4 h-[calc(100vh-300px)] overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className="mb-4">
              <p className="text-gray-800">{message.text}</p>
              {message.language && (
                <p className="text-sm text-gray-500">
                  Detected language: {message.language}
                </p>
              )}

              <TranslationButton
                text={message.text}
                language={message.language}
                targetLanguage={selectedLanguage}
              />

              {message.summary && (
                <div className="mt-2 p-2 bg-gray-100 rounded">
                  <p className="font-semibold">Summary:</p>
                  <p>{message.summary}</p>
                </div>
              )}

              {message.translation && (
                <div className="mt-2 p-2 bg-gray-100 rounded">
                  <p className="font-semibold">Translation:</p>
                  <p>{message.translation}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center">
          <textarea
            className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            rows={3}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleSend}
            aria-label="Send message"
          >
            <SendHorizontal />
          </button>
        </div>

        <LanguagePicker
          selectedLanguage={selectedLanguage}
          onLanguageChange={setSelectedLanguage}
        />
      </main>
    </div>
  );
}
