import { Question } from '../types';

export const questions: Question[] = [
  // --- PRE-QUIZ TOPICS (20%) ---
  {
    id: 'q1',
    category: 'pre-quiz',
    topic: 'Number Systems',
    text: 'Which of the following base numbering systems uses digits 0 through 9 and letters A through F?',
    options: ['Binary', 'Octal', 'Decimal', 'Hexadecimal'],
    correctAnswerIndex: 3,
    explanation: 'Hexadecimal (Base 16) uses 0-9 and A-F to represent values from 0 to 15.',
  },
  {
    id: 'q2',
    category: 'pre-quiz',
    topic: 'Data Representation',
    text: 'What is the absolute smallest unit of information in a computer representing a single logical state?',
    options: ['Byte', 'Nibble', 'Bit', 'Word'],
    correctAnswerIndex: 2,
    explanation: 'A Bit (Binary Digit) is the smallest unit of information, representing an OFF (0) or ON (1) state.',
  },
  {
    id: 'q3',
    category: 'pre-quiz',
    topic: 'Data Representation',
    text: 'Which encoding standard maps text from virtually all written languages globally, including emojis?',
    options: ['ASCII', 'EBCDIC', 'Unicode', 'ANSI'],
    correctAnswerIndex: 2,
    explanation: 'Unicode uses larger bit patterns to map global written languages and symbols, universally replacing the limited ASCII standard.',
  },
  {
    id: 'q4',
    category: 'pre-quiz',
    topic: 'Data Compression',
    text: 'Which data compression technique permanently removes less important data, such as audio frequencies outside human hearing ranges?',
    options: ['Lossless Compression', 'Lossy Compression', 'Huffman Coding', 'Run-Length Encoding'],
    correctAnswerIndex: 1,
    explanation: 'Lossy Compression permanently discards data that human senses cannot easily perceive, achieving much smaller file sizes.',
  },
  {
    id: 'q5',
    category: 'pre-quiz',
    topic: 'Error Detection',
    text: 'What is the critical limitation of a simple Even/Odd Parity Bit system?',
    options: ['It cannot calculate the compression ratio.', 'It can only detect single-bit errors.', 'It consumes too much power.', 'It automatically deletes corrupted files.'],
    correctAnswerIndex: 1,
    explanation: 'A single parity bit can only detect a single-bit error. If two separate bits flip simultaneously, the overall count matches the parity rule, hiding the corruption.',
  },
  {
    id: 'q6',
    category: 'pre-quiz',
    topic: 'Error Detection',
    text: 'Which error-correction system inserts multiple parity bits to calculate the exact position of an error and instantly fix it?',
    options: ['ASCII Correct', 'Checksum protocol', "Two's Complement", 'Hamming Code'],
    correctAnswerIndex: 3,
    explanation: 'Hamming Code architecture inserts parity bits at power-of-two positions (1, 2, 4, 8) to precisely map and correct flipped bits.',
  },

  // --- POST-QUIZ TOPICS (80%) ---
  {
    id: 'q7',
    category: 'post-quiz',
    topic: 'Data Manipulation',
    text: 'Which of the following is NOT one of the four fundamental data operations performed by a CPU?',
    options: ['Changing Data', 'Moving Data', 'Creating Data', 'Calculating Data'],
    correctAnswerIndex: 2,
    explanation: 'The four fundamental operations are Changing, Moving, Comparing, and Calculating data.',
  },
  {
    id: 'q8',
    category: 'post-quiz',
    topic: 'Data Manipulation',
    text: 'What are the three stages of the CPU Machine Execution Cycle?',
    options: ['Start, Stop, Save', 'Fetch, Decode, Execute', 'Input, Compare, Output', 'Read, Write, Execute'],
    correctAnswerIndex: 1,
    explanation: 'The CPU cycles continuously through FETCH, DECODE, and EXECUTE millions of times per second.',
  },
  {
    id: 'q9',
    category: 'post-quiz',
    topic: 'Operating Systems',
    text: 'Which OS Execution Ring possesses absolute, unrestricted privilege rights to manage hardware and system memory?',
    options: ['Ring 0 (Kernel Space)', 'Ring 1', 'Ring 2', 'Ring 3 (User Space)'],
    correctAnswerIndex: 0,
    explanation: 'Ring 0 is the Kernel Space with full access. Standard user applications run in Ring 3 to prevent them from crashing the system.',
  },
  {
    id: 'q10',
    category: 'post-quiz',
    topic: 'Operating Systems',
    text: 'How does a single-core CPU create the illusion of running multiple applications (Multitasking) seamlessly to the human eye?',
    options: ['File Zipping', 'Batch Processing Jobs', 'Time-Slicing Concurrency', 'Hardware Cloning'],
    correctAnswerIndex: 2,
    explanation: 'Time-slicing concurrency rapidly switches execution between programs so fast that it appears simultaneous.',
  },
  {
    id: 'q11',
    category: 'post-quiz',
    topic: 'Operating Systems',
    text: 'Which malware vector disguises itself as safe, benign software to trick users into installing a hidden payload?',
    options: ['Ransomware', 'Trojan Horse', 'Rootkit', 'Keylogger'],
    correctAnswerIndex: 1,
    explanation: 'A Trojan Horse operates by pretending to be a legitimate file or program, relying on user deception to execute.',
  },
  {
    id: 'q12',
    category: 'post-quiz',
    topic: 'Algorithms',
    text: 'To be considered a definitive algorithm, it must satisfy four criteria: Ordered Sequence, Unambiguous, Executable, and...',
    options: ['Infinite', 'Finite / Terminating', 'Dynamic', 'Object-Oriented'],
    correctAnswerIndex: 1,
    explanation: 'An algorithm must complete its task and stop after a finite number of steps; it cannot run infinitely.',
  },
  {
    id: 'q13',
    category: 'post-quiz',
    topic: 'Algorithms',
    text: 'In standard flowchart symbols, what does a Diamond represent?',
    options: ['Terminators (Start/End)', 'Data I/O', 'Conditional Decision / Branch', 'Computational Process'],
    correctAnswerIndex: 2,
    explanation: 'The Diamond symbol evaluates a conditional point, branching the execution path into TRUE/YES or FALSE/NO.',
  },
  {
    id: 'q14',
    category: 'post-quiz',
    topic: 'Operating Systems',
    text: 'What happens during POST (Power-On Self-Test) in the Boot sequence?',
    options: ['The OS loads MS Word.', 'Firmware runs diagnostics confirming RAM, CPU, and storage respond correctly.', 'The Bootloader connects to Wi-Fi.', 'The GPU draws the desktop interface.'],
    correctAnswerIndex: 1,
    explanation: 'POST is a diagnostic scan executed by the motherboard firmware specifically checking critical operational components.',
  },
  {
    id: 'q15',
    category: 'post-quiz',
    topic: 'Networking',
    text: 'Which physical network topology links every endpoint back to a single central transmission backbone cable?',
    options: ['Star Topology', 'Ring Topology', 'Mesh Topology', 'Bus Topology'],
    correctAnswerIndex: 3,
    explanation: 'Bus Topology uses a single connected backbone. Its main drawback is a centralized point of failure if the cable breaks.',
  },
  {
    id: 'q16',
    category: 'post-quiz',
    topic: 'Networking',
    text: 'Which hardware device directs data traffic between ENTIRELY SEPARATE networks (e.g., from LAN to the Global Internet)?',
    options: ['Switch', 'Router', 'Modem', 'Access Point'],
    correctAnswerIndex: 1,
    explanation: 'A Router determines the intersection paths across disparate networks, whereas a switch only manages paths within a single local network.',
  },
  {
    id: 'q17',
    category: 'post-quiz',
    topic: 'Networking',
    text: 'In the TCP/IP model, which protocol guarantees reliable, accurate, connection-oriented data delivery?',
    options: ['UDP', 'ICMP', 'TCP', 'IP'],
    correctAnswerIndex: 2,
    explanation: 'TCP prioritizes complete accuracy and delivery via verification, whereas UDP prioritizes raw speed without connection guarantees.',
  },
  {
    id: 'q18',
    category: 'post-quiz',
    topic: 'Networking',
    text: 'What terminal command traces the step-by-step router hops a packet takes to reach a destination?',
    options: ['ping', 'ipconfig', 'tracert / traceroute', 'netstat'],
    correctAnswerIndex: 2,
    explanation: 'tracert (Windows) or traceroute (Mac/Linux) maps the intermediate routers required to reach a web host.',
  }
];

// Re-export for quiz generator
export const getRandomQuizBatch = (totalQuestions: number = 10): Question[] => {
  // Required distribution: 20% Pre-quiz, 80% Post-quiz
  const preQuizCount = Math.ceil(totalQuestions * 0.2);
  const postQuizCount = totalQuestions - preQuizCount;

  const preQuestions = questions.filter(q => q.category === 'pre-quiz').sort(() => 0.5 - Math.random()).slice(0, preQuizCount);
  const postQuestions = questions.filter(q => q.category === 'post-quiz').sort(() => 0.5 - Math.random()).slice(0, postQuizCount);

  // Return shuffled full batch
  return [...preQuestions, ...postQuestions].sort(() => 0.5 - Math.random());
};
