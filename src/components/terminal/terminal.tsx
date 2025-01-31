import Prism from 'prismjs';
import "./prism-material-dark.css"
import "prismjs/components/prism-typescript"

const Terminal = () => {
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

  const highlightedCode = Prism.highlight(
    fullCode,
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
            className="language-typescript invert dark:invert-0"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>
      </div>
    </div>
  );
};

export default Terminal;