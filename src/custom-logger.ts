const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
  timeZone: 'PST',
});

const originalLog = console.log;

function customLogger(...args: any[]) {
  const now = new Date();
  const ms = now.getMilliseconds().toString().padStart(3, '0');

  const parts = dateFormatter.formatToParts(now);
  let formattedDate = '';

  for (const part of parts) {
    if (part.type === 'second') {
      formattedDate += part.value + '.' + ms;
    } else {
      formattedDate += part.value;
    }
  }

  originalLog(`[${formattedDate}]:`, ...args);
}

console.log = customLogger;

export function initCustomLogger() {}
