import { ChatTeardropDots } from 'phosphor-react';
import { useState } from 'react';
import { Popover } from '@headlessui/react';

export function Widget() {
    const [isWidgetOpen, setIsWidgetOpen] = useState(false);

    return (
        <div className="w-screen h-screen bg-gray-500">
            <div className="absolute bottom-5 right-5 ">
                {isWidgetOpen && <p className="center">Hello World</p>}
                <button
                    className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group "
                    onClick={() => setIsWidgetOpen(!isWidgetOpen)}
                >
                    <ChatTeardropDots className="w-6 h-6" />
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                        Feedback
                    </span>
                </button>
            </div>
        </div>
    );
}
