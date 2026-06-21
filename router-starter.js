import faqs from './faqs.json' assert { type: 'json' };

export function routeQuestion(question) {
  const q = question.toLowerCase();

  let topic = 'fallback';

  if (q.includes('weekly') || q.includes('report')) {
    topic = 'weekly report';
  } 
  else if (q.includes('deliverable') || q.includes('submission')) {
    topic = 'deliverables';
  } 
  else if (q.includes('office') || q.includes('mentor')) {
    topic = 'office hours';
  } 
  else if (q.includes('housing') || q.includes('room')) {
    topic = 'housing';
  } 
  else if (q.includes('contact') || q.includes('help')) {
    topic = 'who to contact';
  }

  return {
    topic,
    response: faqs[topic] || faqs.fallback,
    availableTopics: Object.keys(faqs).filter(function (key) {
      return key !== 'fallback';
    })
  };
}