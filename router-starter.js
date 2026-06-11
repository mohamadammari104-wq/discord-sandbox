import faqs from './faqs.json' assert { type: 'json' };

export function routeQuestion(question) {
  return {
    topic: 'todo',
    response: 'Implement routing logic for this question: ' + question,
    availableTopics: Object.keys(faqs).filter(function (key) {
      return key !== 'fallback';
    })
  };
}
