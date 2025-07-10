import { useState, useEffect } from 'react'

interface Message {
  role: 'user' | 'bot'
  content: string
}

const ChatSection = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')

  // Initialize with sample conversation
  useEffect(() => {
    const sampleConversation: Message[] = [
      {
        role: 'user',
        content: 'Hi, I need help with my retirement planning.'
      },
      {
        role: 'bot',
        content: 'Hello! I would be happy to help you plan for retirement. Would you like to see your current retirement outlook?'
      },
      {
        role: 'user',
        content: 'Yes, show my retirement outlook'
      },
      {
        role: 'bot',
        content: `🏦 NET WORTH: ₹82L

📈 PROJECTION AT 60:
- Best Case (9% returns): ₹6.7Cr
- Likely Case (7%): ₹4.1Cr

⚠️ GAP: Need ₹15K/month more to hit target

[📊 View Detailed Breakdown]
[🔄 Re-run with new assumptions]`
      }
    ]
    setMessages(sampleConversation)
  }, [])

  const handleSend = () => {
    if (!input.trim()) return

    setMessages(prev => [...prev, { role: 'user', content: input }])

    // Simulate bot response
    setTimeout(() => {
      let botResponse = 'I understand you are asking about your finances. How can I help you today?'
      
      if (input.toLowerCase().includes('retirement')) {
        botResponse = `🏦 NET WORTH: ₹82L

📈 PROJECTION AT 60:
- Best Case (9% returns): ₹6.7Cr
- Likely Case (7%): ₹4.1Cr

⚠️ GAP: Need ₹15K/month more to hit target

[📊 View Detailed Breakdown]
[🔄 Re-run with new assumptions]`
      }
      
      setMessages(prev => [...prev, { role: 'bot', content: botResponse }])
    }, 1000)

    setInput('')
  }

  return (
    <div className="h-[600px] flex flex-col">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
          >
            <div
              className={`inline-block p-3 rounded-lg ${message.role === 'user' ? 'bg-blue-100 text-gray-800' : 'bg-gray-100 text-gray-800'} max-w-[80%]`}
            >
              <pre className="whitespace-pre-wrap font-sans">{message.content}</pre>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask about your finances..."
          className="flex-1 p-2 border rounded text-gray-800 placeholder-gray-500"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default ChatSection