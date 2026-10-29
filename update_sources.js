const fs = require('fs');

const files = [
  'src/components/AgenticAIHero.tsx',
  'src/components/Agenticcontact.tsx',
  'src/components/AgenticHero.tsx',
  'src/components/AgenticQuoteModal.tsx',
  'src/components/AICustomerHero.tsx',
  'src/components/Contact.tsx',
  'src/components/ContactForm.tsx',
  'src/components/CustomerServiceHero.tsx',
  'src/components/GetQuoteModal.tsx',
  'src/components/Hero.tsx',
  'src/components/MarketingContact.tsx',
  'src/components/MarketingHero.tsx',
  'src/components/MarketingQuoteModal.tsx',
  'src/components/ModalForm.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Pattern 1: { ...formData, captchaToken }
  content = content.replace(/\{\s*\.\.\.formData,\s*captchaToken\s*\}/g, '{ ...formData, source: "macworld", captchaToken }');
  
  // Pattern 2: { ...payload, captchaToken }
  content = content.replace(/\{\s*\.\.\.payload,\s*captchaToken\s*\}/g, '{ ...payload, source: "macworld", captchaToken }');

  // Pattern 3: GetQuoteModal
  content = content.replace(/token:\s*captchaToken,/g, 'source: "macworld", token: captchaToken,');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated:', file);
  } else {
    console.log('Pattern not matched:', file);
  }
}

