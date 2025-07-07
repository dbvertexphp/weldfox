
import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-20">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl">
        <div className="flex items-center p-4 border-b">
          <Search size={20} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search for products, therapeutic areas..."
            className="flex-1 text-lg border-none outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          <button onClick={onClose}>
            <X size={20} className="text-gray-400 hover:text-drreddys-blue" />
          </button>
        </div>
        
        <div className="p-4">
          {searchQuery.length > 0 ? (
            <p className="text-sm text-gray-500">No results found for "{searchQuery}"</p>
          ) : (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-500">POPULAR SEARCHES</h3>
              <div className="flex flex-wrap gap-2">
                {['Generics', 'Biosimilars', 'API', 'Annual Report', 'Careers', 'Investors'].map((term) => (
                  <button 
                    key={term}
                    className="px-3 py-1 text-sm bg-gray-100 hover:bg-drreddys-blue hover:text-white rounded-full transition-colors"
                    onClick={() => setSearchQuery(term)}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
