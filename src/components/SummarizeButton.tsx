"use client";

// import type React from "react";
import { useState } from "react";
import { summarizeText } from "../../utils/ChromeUtils";

type SummarizeButtonProps = {
  text: string;
  onSummarize: (summary: string) => void;
};

const SummarizeButton = ({ text, onSummarize }: SummarizeButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSummarize = async () => {
    setIsLoading(true);
    try {
      const summary = await summarizeText(text);
      onSummarize(summary);
    } catch (error) {
      console.error("Error summarizing text:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50"
      onClick={handleSummarize}
      disabled={isLoading}
    >
      {isLoading ? "Summarizing..." : "Summarize"}
    </button>
  );
};

export default SummarizeButton;
