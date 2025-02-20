"use client";
import React, { createContext, useContext, useState } from "react";

type Message = {
  text: string;
  language?: string;
  summary?: string;
  translation?: string;
};

type LangcontextProps = {
  messages: Message[];
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  selectedLanguage: string;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
  translatedText: string;
  setTranslatedText: React.Dispatch<React.SetStateAction<string>>;
  translatingMessage: string | null;
  setTranslatingMessage: React.Dispatch<React.SetStateAction<string | null>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  handleSend: () => Promise<void>;
  handleTranslate: (
    text: string,
    language?: string,
    targetLanguage?: string
  ) => Promise<void>;
};

const LangContext = createContext<LangcontextProps | undefined>(undefined);

const LanguageContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isLoading, setIsLoading] = useState(false);
  const [translatedText, setTranslatedText] = useState("");
  const [translatingMessage, setTranslatingMessage] = useState<string | null>(
    null
  );

  const handleSend = async () => {
    if (inputText.trim() === "") return;

    const newMessage: Message = { text: inputText };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputText("");

    try {
      // @ts-ignore
      const detector = await window.ai.languageDetector.create();
      const result = await detector.detect(inputText);
      newMessage.language = result[0].detectedLanguage;
      console.log(result[0].detectedLanguage);

      setMessages([...messages, newMessage]);
    } catch (err) {
      console.error("Error detecting language:", err);
    }
  };

  const handleTranslate = async (
    text: string,
    language?: string,
    targetLanguage?: string
  ) => {
    if (!text || !language || !targetLanguage) return;

    setTranslatingMessage(text);
    try {
      // @ts-ignore
      const translator = await window.ai.translator.create({
        sourceLanguage: language,
        targetLanguage: targetLanguage,
      });
      const result = await translator.translate(text);
      console.log(result);
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.text === text ? { ...msg, translation: result } : msg
        )
      );
    } catch (error) {
      console.error("Error translating text:", error);
    } finally {
      setTranslatingMessage(null);
    }
  };

  return (
    <LangContext.Provider
      value={{
        messages,
        inputText,
        setInputText,
        selectedLanguage,
        setSelectedLanguage,
        translatedText,
        setTranslatedText,
        handleSend,
        handleTranslate,
        translatingMessage,
        setTranslatingMessage,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </LangContext.Provider>
  );
};

function useLanguage() {
  const context = useContext(LangContext);
  if (context === undefined) {
    throw new Error(
      "useLanguage must be used within a LanguageContextProvider"
    );
  }
  return context;
}

export { LanguageContextProvider, useLanguage };
