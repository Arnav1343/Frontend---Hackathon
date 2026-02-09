export interface TranscriptSegment {
  id: string;
  speaker: string;
  text: string;
  startTime: number;
  endTime: number;
}

export interface Session {
  id: string;
  title: string;
  date: string;
  duration: number;
  agent: string;
  customer: string;
  status: 'Reviewed' | 'Pending' | 'Flagged';
  tags: string[];
  transcript: TranscriptSegment[];
}

export const mockSessions: Session[] = [
  {
    id: 'session-1',
    title: 'Customer Inquiry: Mortgage Rates',
    date: '2024-05-15 10:30 AM',
    duration: 124,
    agent: 'Sarah Miller',
    customer: 'John Doe',
    status: 'Flagged',
    tags: ['Mortgage', 'Inquiry', 'Critical'],
    transcript: [
      { id: '1', speaker: 'Agent', text: 'Thank you for calling AuditX Mortgage Services. My name is Sarah, how can I help you today?', startTime: 0, endTime: 5 },
      { id: '2', speaker: 'Customer', text: 'Hi Sarah, I was calling to check on current mortgage rates. I saw an ad saying they were as low as 2%.', startTime: 6, endTime: 12 },
      { id: '3', speaker: 'Agent', text: 'Oh, absolutely! Our rates are actually the lowest in the market right now. We can definitely get you 1.9% regardless of your credit score.', startTime: 13, endTime: 22 },
      { id: '4', speaker: 'Customer', text: 'Really? Regardless of credit score? That sounds great. What about the closing costs?', startTime: 23, endTime: 28 },
      { id: '5', speaker: 'Agent', text: 'We have no closing costs at all. It is completely free to set up. I just need your social security number and bank account details to get started right now.', startTime: 29, endTime: 40 },
      { id: '6', speaker: 'Customer', text: 'Wait, don\'t you need to send me some documentation first?', startTime: 41, endTime: 45 },
      { id: '7', speaker: 'Agent', text: 'We can skip that for now to lock in this special rate. Just give me the info and we will process it.', startTime: 46, endTime: 52 },
      { id: '8', speaker: 'Customer', text: 'I think I\'d prefer to see the terms first.', startTime: 53, endTime: 56 },
      { id: '9', speaker: 'Agent', text: 'I understand, but if we don\'t do this now, the rate might go up in the next 10 minutes. It\'s a very limited offer.', startTime: 57, endTime: 65 },
    ]
  },
  {
    id: 'session-2',
    title: 'Support Call: Mobile Billing',
    date: '2024-05-15 11:45 AM',
    duration: 85,
    agent: 'Mark Wilson',
    customer: 'Alice Smith',
    status: 'Reviewed',
    tags: ['Billing', 'Mobile'],
    transcript: [
      { id: '1', speaker: 'Agent', text: 'Hello, this is AuditX Support. Mark speaking.', startTime: 0, endTime: 4 },
      { id: '2', speaker: 'Customer', text: 'Hi, I have a question about my last bill.', startTime: 5, endTime: 8 },
      { id: '3', speaker: 'Agent', text: 'I can certainly help with that. Can you verify your account number?', startTime: 9, endTime: 14 }
    ]
  }
];