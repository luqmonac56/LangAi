import React, { useState } from "react";
import {
  Send,
  Upload,
  Settings,
  MessageSquare,
  History,
  Globe2,
  FileText,
} from "lucide-react";

const LanguageTranslator = () => {
  const [inputText, setInputText] = useState("");

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-4">
        <div className="flex items-center space-x-2 mb-6">
          <div className="bg-purple-600 text-white p-2 rounded">
            <Globe2 size={20} />
          </div>
          <span className="text-purple-600 font-semibold text-xl">
            LingualAI
          </span>
        </div>

        <div className="space-y-2">
          <button className="flex items-center space-x-2 w-full p-2 rounded-lg hover:bg-gray-100">
            <MessageSquare size={18} />
            <span>New Chat</span>
          </button>

          <button className="flex items-center space-x-2 w-full p-2 rounded-lg hover:bg-gray-100">
            <History size={18} />
            <span>Translation History</span>
          </button>

          <button className="flex items-center space-x-2 w-full p-2 rounded-lg hover:bg-gray-100">
            <Globe2 size={18} />
            <span>English to Spanish</span>
          </button>

          <button className="flex items-center space-x-2 w-full p-2 rounded-lg hover:bg-gray-100">
            <FileText size={18} />
            <span>Text Summary</span>
          </button>
        </div>
      </div>

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
                language detection. What would you like to do?
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
          <p className="text-sm text-gray-500 mt-2">
            You can paste text, upload files, or type your message
          </p>
        </div>
      </div>

      {/* Features Sidebar */}
      <div className="w-64 bg-white border-l border-gray-200 p-4">
        <h2 className="text-lg font-semibold mb-4">Features</h2>

        <div className="space-y-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Globe2 size={18} className="text-purple-600" />
              <h3 className="font-medium text-purple-600">Translation</h3>
            </div>
            <p className="text-sm text-gray-600">Supports 100+ languages</p>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-2">
              <FileText size={18} className="text-purple-600" />
              <h3 className="font-medium text-purple-600">Summarization</h3>
            </div>
            <p className="text-sm text-gray-600">Get concise summaries</p>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Globe2 size={18} className="text-purple-600" />
              <h3 className="font-medium text-purple-600">Detection</h3>
            </div>
            <p className="text-sm text-gray-600">
              Automatic language detection
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageTranslator;
