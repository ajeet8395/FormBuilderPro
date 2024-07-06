import { useState } from 'react';
import Form from '@/app/form/page';
import Options from '@/app/options/page';
import StylePreview from '@/app/stylePreview/page';
import Automation from '@/app/automation/page';

export default function Tabs ()  {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = ['Form', 'Options', 'Style & Preview', 'Automation'];

    return (
        <div className="w-full min-h-[92vh]">
            <div className="bg-white h-full">
                <div className="flex justify-center space-x-4">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`py-2 px-4 text-lg transition-colors border-b-2  hover:text-gray-600 hover:border-gray-300 ${
                                activeTab === index
                                    ? 'inline-block p-4 text-blue-700 border-b-2 border-blue-700 font-semibold'
                                    : 'border-transparent text-gray-700'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="p-1 border rounded bg-gray-50 h-full">
                    {activeTab === 0 && <Form/>}
                    {activeTab === 1 && <Options/>}
                    {activeTab === 2 && <StylePreview/>}
                    {activeTab === 3 && <Automation/>}
                </div>
            </div>
        </div>
    );
};
