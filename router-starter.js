import faqs from './faqs.json' with { type: 'json' };
import fs from 'node:fs';
export function routeQuestion(question) {
  const q = question.toLowerCase();

  let topic = 'fallback';

  if (q.includes('weekly') || q.includes('report')) {
    topic = 'weekly_report';
  } 
  else if (q.includes('deliverable') || q.includes('submission')) {
    topic = 'deliverables';
  } 
  else if (q.includes('office') || q.includes('mentor')) {
    topic = 'office_hours';
  } 
  else if (q.includes('housing') || q.includes('room')) {
    topic = 'housing';
  } 
  else if (q.includes('contact') || q.includes('help')) {
    topic = 'contact';
  }
if (topic === 'fallback') {
  fs.appendFileSync('unknown.log', question + '\n');
}
  return {
    topic,
    response: faqs[topic] || faqs.fallback,
    availableTopics: Object.keys(faqs).filter(function (key) {
      return key !== 'fallback';
    })
  };
}