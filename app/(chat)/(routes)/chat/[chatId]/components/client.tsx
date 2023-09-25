"use client";

import { Companion, Message } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { ChatHeader } from "@/components/chat-header";
import { ChatMessages } from "@/components/chat-messages";
import { ChatMessageProps } from "@/components/chat-message";

interface ChatClientProps {
  companion: Companion & {
    messages: Message[];
    _count: { messages: number; }
  };
};

export const ChatClient = ({
  companion,
}: ChatClientProps) => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatMessageProps[]>(companion.messages);

  const isLoading = false;

  return (
    <div className="flex flex-col h-full p-4 space-y-2">
      <ChatHeader companion={companion}/>
      <ChatMessages
        companion={companion}
        isLoading={isLoading}
        messages={messages}
      />
    </div>
  );
}