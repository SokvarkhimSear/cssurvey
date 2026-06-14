export type TopicCategory = 'pre-quiz' | 'post-quiz';

export interface Question {
  id: string;
  category: TopicCategory;
  topic: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export type AppMode = 'dashboard' | 'guide' | 'practice' | 'exam' | 'results';

export interface QuizResult {
  score: number;
  total: number;
  preQuizScore: number;
  preQuizTotal: number;
  postQuizScore: number;
  postQuizTotal: number;
  weakTopics: string[];
}
