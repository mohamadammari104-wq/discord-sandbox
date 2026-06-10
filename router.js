import faqs from './faqs.json' assert { type: 'json' };

const topicMatchers = {
  weekly_report: ['weekly report', '/weekly-report', 'report due'],
  deliverables: ['deliverable', 'deliverables', 'what is due'],
  office_hours: ['office hours', 'mentor hours', 'help time'],
  housing: ['housing', 'room', 'resident', 'move in'],
  contact: ['who do i contact', 'who do i ask', 'help', 'support']
};

export function routeQuestion(question) {
  const normalized = question.toLowerCase();

  for (const [topic, matches] of Object.entries(topicMatchers)) {
    if (matches.some((match) => normalized.includes(match))) {
      return {
        topic,
        response: faqs[topic]
      };
    }
  }

  return {
    topic: 'fallback',
    response: faqs.fallback
  };
}
