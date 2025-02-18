"use client";
import { useState } from "react";
import {
  Send,
  Upload,
  Settings,
  MessageSquare,
  History,
  Globe2,
  FileText,
} from "lucide-react";

const MainChat = () => {
  const [inputText, setInputText] = useState("");

  return (
    <div className="flex h-screen bg-gray-50">
      

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center space-x-2">
            <span className="font-medium">AI Assistant</span>
            <span className="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded">
              Online
            </span>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings size={20} />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-4 overflow-y-auto">
          {/* AI Message */}
          <div className="flex space-x-3 mb-4">
            <div className="bg-purple-600 text-white p-2 rounded h-8 w-8 flex items-center justify-center">
              <Globe2 size={16} />
            </div>
            <div className="flex-1">
              <p className="bg-white p-4 rounded-lg shadow-sm">
                Hello! I can help you with text translation, summarization, and
                language detection. 
              </p>
            </div>
          </div>

          {/* User Message */}
          <div className="flex space-x-3 mb-4">
            <div className="flex-1">
              <p className="bg-purple-600 text-white p-4 rounded-lg ml-auto inline-block">
                Can you translate this text to Spanish and provide a summary?
              </p>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t p-4">
          <div className="bg-white rounded-lg border flex items-center p-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Upload size={20} className="text-gray-500" />
            </button>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 px-3 py-2 outline-none"
            />
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-1">
              <span>Send</span>
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainChat;
