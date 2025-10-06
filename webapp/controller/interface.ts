export interface IProcessFlowNode {
  id: string;
  lane: string;
  title: string;
  titleAbbreviation?: string;
  children?: number[];              // child node IDs
  isTitleClickable?: boolean;
  state?: "Positive" | "Negative" | "Neutral" | "Planned" | "Critical";
  stateText?: string;
  texts?: string[];
}

export interface IProcessFlowData {
  Nodes: IProcessFlowNode[];
}

export interface IUserReview {
  user: string;                 // Name of the reviewer
  userPic?: string;             // Optional picture path
  rating: number;               // Rating (e.g., 1–10 or 1–5)
  quote?: string;               // Review text
  date: string;                 // Could be "YYYY-MM-DD" or "now"
  template?: boolean;           // Flag for placeholder/template data
}

export interface IUserReviewsData {
  UserReviews: IUserReview[];
}