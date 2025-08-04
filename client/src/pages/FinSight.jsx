import React, { useState } from 'react';
import { Sparkles, Bot, Send, Target, Calendar, TrendingUp, Loader2 } from 'lucide-react';

const FinSight = () => {
    // State for the AI-generated monthly report
    const [report, setReport] = useState('');
    const [isReportLoading, setIsReportLoading] = useState(false);

    // State for the conversational Q&A feature
    const [chatHistory, setChatHistory] = useState([]);
    const [userQuery, setUserQuery] = useState('');
    const [isChatLoading, setIsChatLoading] = useState(false);

    // State for the savings goal advisor
    const [goal, setGoal] = useState({ name: '', amount: '' });
    const [advice, setAdvice] = useState('');
    const [isAdviceLoading, setIsAdviceLoading] = useState(false);

    // --- SIMULATED GEMINI API CALLS ---
    // In a real application, these functions would make API calls to your backend,
    // which then securely communicates with the Gemini API.

    /**
     * Simulates fetching a narrative financial summary from the AI.
     */
    const handleGenerateReport = async () => {
        setIsReportLoading(true);
        setReport(''); // Clear previous report

        // TODO: Replace with actual API call to your backend
        // Your backend would fetch user's financial data and send it to Gemini.
        setTimeout(() => {
            const sampleReport = `
                <p class="mb-2">Overall, July was a strong month. Your total income was <strong>₹85,000</strong> and you spent <strong>₹66,500</strong>, resulting in a savings of <strong>₹18,500</strong>. Well done on managing to save over 21% of your income!</p>
                <p class="mb-2">Your top three spending areas were 'Rent' (₹20,000), a significant one-time 'Phone Repair' (₹9,000), and 'Groceries' (₹8,500). Your total spending was higher than your average, mainly due to the repair and a slight increase in 'Shopping'.</p>
                <p>It's great to see your consistent 'Investment (SIP)' of ₹5,000! For next month, consider setting a specific budget for 'Dining Out' to potentially increase your savings rate even further.</p>
            `;
            setReport(sampleReport);
            setIsReportLoading(false);
        }, 2000); // Simulate network delay
    };

    /**
     * Simulates sending a user query to the AI and getting a response.
     */
    const handleChatSubmit = async (e) => {
        e.preventDefault();
        if (!userQuery.trim() || isChatLoading) return;

        const newHistory = [...chatHistory, { type: 'user', text: userQuery }];
        setChatHistory(newHistory);
        setUserQuery('');
        setIsChatLoading(true);

        // TODO: Replace with actual API call to your backend
        setTimeout(() => {
            const sampleResponse = "Your expenses last month were higher mainly because of a ₹9,000 charge for 'Phone Repair'. Your spending on 'Shopping' also increased by about 30% compared to your recent average. Your regular costs like 'Rent' and 'Utilities' remained stable.";
            setChatHistory([...newHistory, { type: 'ai', text: sampleResponse }]);
            setIsChatLoading(false);
        }, 1500);
    };

    /**
     * Simulates generating a personalized savings plan from the AI.
     */
    const handleGenerateAdvice = async () => {
        if (!goal.name || !goal.amount || isAdviceLoading) return;
        setIsAdviceLoading(true);
        setAdvice('');

        // TODO: Replace with actual API call to your backend
        setTimeout(() => {
            const sampleAdvice = `
                <p class="mb-3">Saving <strong>₹${parseInt(goal.amount).toLocaleString('en-IN')}</strong> for your <strong>'${goal.name}'</strong> goal is very achievable! Here’s a personalized plan based on your habits:</p>
                <ul class="list-disc list-inside space-y-2 text-gray-600">
                    <li><strong>Dining Out:</strong> You average ₹6,000/month here. By meal-prepping for weekdays, you could save around <strong>₹3,000</strong>.</li>
                    <li><strong>Shopping:</strong> Consider a 'no-spend' challenge for 15 days. This could free up another <strong>₹2,500 - ₹3,000</strong>.</li>
                    <li><strong>Transport:</strong> Using the metro for your commute 2-3 times a week could save you up to <strong>₹1,500</strong>.</li>
                </ul>
                <p class="mt-3 font-semibold text-[#0081A7]">Focusing on these areas can help you reach your goal quickly!</p>
            `;
            setAdvice(sampleAdvice);
            setIsAdviceLoading(false);
        }, 2500);
    };

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50/90 to-[#0081A7]/5 p-6 ml-0 sm:ml-0 pt-20'>
      <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="w-10 h-10 text-[#0081A7]" />
                    <h1 className="text-4xl font-bold text-gray-800">
                        Gemini <span className="text-[#0081A7]">FinSight</span>
                    </h1>
                </div>
                <p className="text-gray-600 ml-1">Your personal AI-powered financial analyst</p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Column: Reports and Savings Advisor */}
                <div className="lg:col-span-2 space-y-6">
                    {/* 1. Intelligent Monthly Report */}
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-200/50">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-gradient-to-r from-[#0081A7]/10 to-[#00B4D8]/10 rounded-xl border border-[#0081A7]/20">
                                    <Calendar className="w-6 h-6 text-[#0081A7]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">Intelligent Report</h3>
                                    <p className="text-sm text-gray-500">Get a narrative summary of your finances.</p>
                                </div>
                            </div>
                            <button
                                onClick={handleGenerateReport}
                                disabled={isReportLoading}
                                className="px-4 py-2 bg-gradient-to-r from-[#0081A7] to-[#00B4D8] text-white rounded-xl hover:from-[#0081A7]/90 hover:to-[#00B4D8]/90 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                {isReportLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                                <span>{isReportLoading ? 'Analyzing...' : 'Generate'}</span>
                            </button>
                        </div>
                        <div className="mt-4 p-4 bg-gradient-to-br from-[#0081A7]/5 to-[#00B4D8]/5 rounded-lg border border-[#0081A7]/10 min-h-[150px] flex items-center justify-center">
                            {isReportLoading && <Loader2 className="w-8 h-8 text-[#0081A7] animate-spin" />}
                            {report && !isReportLoading && <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: report }} />}
                            {!report && !isReportLoading && <p className="text-gray-500 text-center">Click 'Generate' to get your AI-powered financial report.</p>}
                        </div>
                    </div>

                    {/* 2. Personalized Savings Advisor */}
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-200/50">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-gradient-to-r from-[#0081A7]/10 to-[#00B4D8]/10 rounded-xl border border-[#0081A7]/20">
                                <Target className="w-6 h-6 text-[#0081A7]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Personalized Savings Advisor</h3>
                                <p className="text-sm text-gray-500">Set a goal and get a custom plan.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="Goal Name (e.g., Goa Trip)"
                                value={goal.name}
                                onChange={(e) => setGoal({ ...goal, name: e.target.value })}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0081A7]/50 bg-gray-50 text-gray-800"
                            />
                             <input
                                type="number"
                                placeholder="Amount (₹)"
                                value={goal.amount}
                                onChange={(e) => setGoal({ ...goal, amount: e.target.value })}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0081A7]/50 bg-gray-50 text-gray-800"
                            />
                            <button
                                onClick={handleGenerateAdvice}
                                disabled={isAdviceLoading || !goal.name || !goal.amount}
                                className="w-full px-4 py-2 bg-gradient-to-r from-[#0081A7] to-[#00B4D8] text-white rounded-xl hover:from-[#0081A7]/90 hover:to-[#00B4D8]/90 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isAdviceLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <TrendingUp className="w-5 h-5" />}
                                <span>{isAdviceLoading ? 'Crafting Plan...' : 'Get Advice'}</span>
                            </button>
                        </div>
                         <div className="mt-4 p-4 bg-gradient-to-br from-[#0081A7]/5 to-[#00B4D8]/5 rounded-lg border border-[#0081A7]/10 min-h-[150px] flex items-center justify-center">
                            {isAdviceLoading && <Loader2 className="w-8 h-8 text-[#0081A7] animate-spin" />}
                            {advice && !isAdviceLoading && <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: advice }} />}
                            {!advice && !isAdviceLoading && <p className="text-gray-500 text-center">Define your goal and click 'Get Advice' for a personalized savings plan.</p>}
                        </div>
                    </div>
                </div>

                {/* Right Column: Conversational Q&A */}
                <div className="lg:col-span-1 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50 flex flex-col h-[calc(100vh-10rem)]">
                    <div className="p-4 border-b border-gray-200 flex items-center gap-3">
                         <div className="p-3 bg-gradient-to-r from-[#0081A7]/10 to-[#00B4D8]/10 rounded-xl border border-[#0081A7]/20">
                            <Bot className="w-6 h-6 text-[#0081A7]" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">Financial Chat</h3>
                            <p className="text-sm text-gray-500">Ask me anything about your finances.</p>
                        </div>
                    </div>
                    <div className="flex-grow p-4 space-y-4 overflow-y-auto">
                        {/* Initial Message */}
                        {chatHistory.length === 0 && (
                             <div className="flex gap-3">
                                <div className="p-2 bg-gradient-to-r from-[#0081A7]/10 to-[#00B4D8]/10 rounded-full h-fit">
                                    <Bot className="w-5 h-5 text-[#0081A7]" />
                                </div>
                                <div className="bg-gradient-to-br from-[#0081A7]/5 to-[#00B4D8]/5 p-3 rounded-lg rounded-tl-none border border-[#0081A7]/10 text-sm text-gray-700">
                                    Hello! How can I help you today? You can ask things like "Why were my expenses high last month?" or "Summarize my spending on food".
                                </div>
                            </div>
                        )}
                        
                        {/* Chat Messages */}
                        {chatHistory.map((msg, index) => (
                            <div key={index} className={`flex gap-3 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                {msg.type === 'ai' && (
                                    <div className="p-2 bg-gradient-to-r from-[#0081A7]/10 to-[#00B4D8]/10 rounded-full h-fit">
                                        <Bot className="w-5 h-5 text-[#0081A7]" />
                                    </div>
                                )}
                                <div className={`p-3 rounded-lg text-sm max-w-xs md:max-w-sm ${msg.type === 'user' ? 'bg-[#0081A7] text-white rounded-br-none' : 'bg-gradient-to-br from-[#0081A7]/5 to-[#00B4D8]/5 border border-[#0081A7]/10 text-gray-700 rounded-tl-none'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isChatLoading && (
                             <div className="flex gap-3">
                                <div className="p-2 bg-gradient-to-r from-[#0081A7]/10 to-[#00B4D8]/10 rounded-full h-fit">
                                    <Bot className="w-5 h-5 text-[#0081A7]" />
                                </div>
                                <div className="bg-gradient-to-br from-[#0081A7]/5 to-[#00B4D8]/5 p-3 rounded-lg rounded-tl-none border border-[#0081A7]/10 text-sm text-gray-700">
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                </div>
                            </div>
                        )}
                    </div>
                    <form onSubmit={handleChatSubmit} className="p-4 border-t border-gray-200 flex items-center gap-3">
                        <input
                            type="text"
                            value={userQuery}
                            onChange={(e) => setUserQuery(e.target.value)}
                            placeholder="Ask a question..."
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0081A7]/50 bg-gray-50 text-gray-800"
                        />
                        <button type="submit" disabled={isChatLoading || !userQuery.trim()} className="p-3 bg-gradient-to-r from-[#0081A7] to-[#00B4D8] text-white rounded-lg hover:from-[#0081A7]/90 hover:to-[#00B4D8]/90 transition-all duration-300 transform hover:scale-105 shadow-md disabled:opacity-50">
                            <Send className="w-5 h-5" />
                        </button>
                    </form>
                </div>

            </div>
    </div>
  )
}

export default FinSight
