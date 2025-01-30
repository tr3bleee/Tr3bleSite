import { useState, useEffect } from 'react';
import Prism from 'prismjs';
import "./prism-material-dark.css"
import "prismjs/components/prism-typescript"

const Terminal = () => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const fullCode = `function aboutMe(): AboutMe {
  return {
    profile: {
      name: "Nikita Triblya",
      age: 17,
      nickname: "Tr3ble",
    },
    contactInfo: {
      email: "tr3ble@outlook.com",
      telegram: "@tr3ble",
    },
  };
}`;

  useEffect(() => {
    let currentIndex = 0;
    
    const typeCode = () => {
      if (currentIndex <= fullCode.length) {
        setDisplayedCode(fullCode.substring(0, currentIndex));
        currentIndex++;
        setTimeout(typeCode, Math.random() * 50 + 25);
      } else {
        setIsTypingComplete(true);
      }
    };

    typeCode();
  }, []);

  const highlightedCode = Prism.highlight(
    displayedCode,
    Prism.languages.typescript,
    'typescript'
  );

  return (
    <div className="max-w-2xl w-full rounded-lg overflow-hidden shadow-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800">
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-2 border-b border-gray-200 dark:border-gray-800 space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="text-sm text-gray-600 dark:text-gray-400 ml-2 font-mono">Terminal</span>
      </div>

      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm">
        <div className="text-gray-800 dark:text-white mb-2">$ cat about-me.ts</div>
        <pre className="overflow-x-auto">
          <code
            className="language-typescript invert dark:invert-0" // Инверсия для светлой темы
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>
        {!isTypingComplete && (
          <span className="animate-pulse bg-gray-300 dark:bg-gray-600">▌</span>
        )}
      </div>
    </div>
  );
};

export default Terminal;