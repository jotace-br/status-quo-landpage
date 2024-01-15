export const truncateString = (text: string, maxLength = 40) => {
  if (text.length <= maxLength) {
    return text;
  }

  const words = text.split(' ');
  let truncatedText = '';

  for (const word of words) {
    if (truncatedText.length + word.length + 1 <= maxLength) {
      truncatedText += word + ' ';
    } else {
      break;
    }
  }

  truncatedText =
    truncatedText.trim() + (truncatedText.length < text.length ? '...' : '');
  return truncatedText;
};
