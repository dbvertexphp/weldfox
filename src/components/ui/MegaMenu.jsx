
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const MegaMenu = ({ label, columns, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={cn("relative", className)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className="flex items-center gap-1 py-2 text-sm font-medium text-gray-700 hover:text-drreddys-blue transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute left-0 z-50 w-screen max-w-screen-lg bg-white shadow-lg rounded-b-lg animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {columns.map((column, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="font-semibold text-drreddys-blue">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a 
                        href={link.url} 
                        className="flex items-center gap-1 text-sm text-gray-700 hover:text-drreddys-blue transition-colors"
                      >
                        <ChevronRight size={14} className="text-drreddys-blue" />
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
