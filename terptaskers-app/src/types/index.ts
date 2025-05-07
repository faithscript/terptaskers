export interface Task {
  id: string;
  title: string;
  description: string;
  category: string;
  dateTime: string;
  price: number;
  claimed?: boolean;
  claimedBy?: string;
}

export interface ClaimedTask extends Task {
  claimed: true;
  claimedBy: string;
} 