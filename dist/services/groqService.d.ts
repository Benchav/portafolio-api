export interface ChatHistoryMessage {
    role: "user" | "assistant";
    content: string;
}
export declare const generateResponse: (userMessage: string, history?: ChatHistoryMessage[]) => Promise<string>;
//# sourceMappingURL=groqService.d.ts.map