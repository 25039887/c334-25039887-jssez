import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat@1.46.5/dist/chat.bundle.es.js';

createChat({
  webhookUrl: 'https://agenticflows.tokencraze.org/webhook/3971d0f5-ead1-46f8-a081-1727adf2175a/chat',
  mode: 'window',
  loadPreviousSession: false,
  initialMessages: [
    'I can help you explore the JS-SEZ using the SMF Playbook.',
    'Ask about zones, SETUP, incentives or staff passes.'
  ],
  i18n: {
    en: {
      title: 'JS-SEZ advisor',
      subtitle: 'Ask a question about the Johor-Singapore Special Economic Zone.',
      getStarted: 'New conversation',
      inputPlaceholder: 'Type your question...'
    }
  }
});
